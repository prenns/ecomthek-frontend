
import { categories } from '../lib/posts';

export default function categorySection() {
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Themen
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Alle Bereiche die du brauchst um dein E-Commerce Business zu skalieren.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {Object.keys(categories).map(categorySlug => {
                        return (<div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <Image
                                    src={`/images/email-marketing.jpg`} // Route of the image file
                                    width={800}
                                    height={500}
                                    className="mb-5 rounded-lg"
                                    alt="Your Name"
                                />
                            </a>
                            <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <Link href={`/kategorien/${categorySlug}`}>{categories[categorySlug].name}</Link>
                            </h2>
                            <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                                Over the past year, Volosoft has undergone many changes! After months
                                of preparation and some hard work, we moved to our new office.
                            </p>
                        </div>)
                    })}

                </div>
            </div>
        </section>
    );
}