export function LandingPageFooter() {
    return (
        <>
            <footer className="body-font text-gray-600">
                <div className="container mx-auto px-5 py-24">
                    
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
                        <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
                        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
                        <img src="logo.png" alt="Logo de Avanti" />
                    </a>
                        </a>
                        <p className="mt-4 text-m font-semibold text-[#1F497D] sm:ml-6 sm:mt-0">
                            © 2025 Avanti
                        </p>
                        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                            <a className="text-[#1F497D]" href="https://www.facebook.com" target="blank" rel="noopener noreferrer">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-7 w-7"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-[#1F497D]" href="https://x.com/" target="blank" rel="noopener noreferrer">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-7 w-7"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-[#1F497D]" href="https://instagram.com/" target="blank" rel="noopener noreferrer">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-7 w-7"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
