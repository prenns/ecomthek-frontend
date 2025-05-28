

export const metadata = {
    title: 'Neue Bewertung schreiben | Ecomthek',
    description: '',
};

export default function NewSoftwareReviewPage() {
    return (
        <section className="bg-white dark:bg-gray-900">

            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 min-h-screen">
                <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Shopify bewerten
                </h1>
                
                <button

                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                    Weiter
                </button>

            </div>
        </section>

    );
}