
export const metadata = {
  title: 'Über Uns | Ecomthek'
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Über Uns
            </h2>
            <p className="mb-2 md:text-lg">
              Wir sind Tina & Alex und sind seit über 5 Jahren in der E-Commerce Branche tätig. Wir besitzen selbst mehrere D2C Brands mit 7-stelligen Umsätzen.
            </p>
            <p className="mb-2 md:text-lg">
              E-Commerce ist unsere Leidenschaft und deshalb wollen wir unser Wissen mit der Welt teilen. Unsere Mission mit der Plattform ECOMTHEK ist es, dir
              zu helfen deinen Traum vom eigenen, erfolgreichen E-Commerce Business zu erfüllen.
            </p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* Profile Card */}
            <div className="flex flex-col items-center pb-8 sm:flex-row">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6"
                src="/images/alex-prennsberger.png"
                alt="Bonnie Avatar"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Alex Prennsberger</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  CEO/Co-founder
                </span>
                <p className="mt-3 mb-4 max-w-sm font-light text-gray-500 dark:text-gray-400">
                  Experte für Finance, Software, Business Operations und Performance Marketing
                </p>
                <ul className="flex justify-center space-x-4 sm:justify-start">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>

                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Profile Card */}
            <div className="flex flex-col items-center pt-8 pb-8 sm:flex-row">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6"
                src="/images/tina-prennsberger.jpg"
                alt="Roberta Avatar"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Tina Prennsberger</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  CEO/Co-founder
                </span>
                <p className="mt-3 mb-4 max-w-sm font-light text-gray-500 dark:text-gray-400">
                  Expertin für Design, Produktentwicklung und People Management
                </p>
                <ul className="flex justify-center space-x-4 sm:justify-start">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}