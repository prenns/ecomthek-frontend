'use client'
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'

const SearchBar = ({searchSoftware}) => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const dropdownRef = useRef(null);
    const router = useRouter();

    const fetchResults = (searchTerm) => {
        if (!searchTerm) {
            setResults([]);
            return;
        }

        setLoading(true);

        searchSoftware(searchTerm)
            .then((data) => {
                setResults(data);
                setHighlightedIndex(0);
            })
            .catch((error) => {
                console.error('Error fetching results:', error);
                setResults([]);
            })
            .finally(() => {
                setLoading(false);
            });
    };


    // Search based on query
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchResults(query);
        }, 300); // Debounce for 300ms

        return () => clearTimeout(delayDebounce);
    }, [query]);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setResults([]);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    //Route to software tool after selecting entry
    const handleSelect = (software) => {
        router.push(`/software/tool/${software.slug}`)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (results.length > 0 && highlightedIndex >= 0) {
            handleSelect(results[highlightedIndex]);
        }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setHighlightedIndex((prev) =>
                prev < results.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === "ArrowUp") {
            setHighlightedIndex((prev) =>
                prev > 0 ? prev - 1 : prev
            );
        } else if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    // Highlight matching text
    const getHighlightedText = (text, query) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, "gi");
        return text.replace(
            regex,
            (match) => `<strong class="font-bold text-blue-700">${match}</strong>`
        );
    };

    return (

        <form onSubmit={handleSubmit} ref={dropdownRef} className="relative mx-auto lg:ml-0" action="#">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
                Suchen
            </label>
            <div className="relative">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Suche nach Software, Kategorien, Lösungen..."
                    required=""
                />


                <button
                    disabled={loading}
                    type="submit"
                    className="text-white inline-flex items-center absolute right-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >

                    {loading && (
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>
                    )}

                    {!loading && (
                        <svg
                            className="w-4 h-4 mr-2 -ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}

                    Lösung finden
                </button>
            </div>
            {/* Dropdown for Results */}
            {results.length > 0 && (
                <div className="absolute text-left z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    {results.map((item,index) => (
                        <div
                            key={item.id}
                            onClick={() => handleSelect(item)}
                            className={`px-4 py-2 cursor-pointer ${
                                index === highlightedIndex
                                    ? "bg-gray-100"
                                    : ""
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: getHighlightedText(item.name, query),
                            }}
                        />
                    ))}
                </div>
            )}
        </form>
    );
};

export default SearchBar;