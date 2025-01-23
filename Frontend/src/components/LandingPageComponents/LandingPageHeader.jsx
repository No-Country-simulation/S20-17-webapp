export function LandingPageHeader() {
    return (
        <>
            <header className="body-font text-gray-600 bg-[#f2f2f2]">
                <div className=" mx-auto flex flex-col flex-wrap items-center justify-around p-5 md:flex-row">
                    <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
                        <img src="logo.png" alt="Logo de Avanti" />
                    </a>
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="absolute bottom-2 left-2 ml-1 h-4 w-4"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="16" y1="16" x2="22" y2="22"></line>
                        </svg>
                        <input
                            className="mt-4 inline-flex items-center rounded-xl border-0 bg-white px-16 py-2 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
                            type="text"
                            placeholder="Search Crowdfunding"
                        />
                    </div>
                    <nav className="flex flex-wrap items-center justify-center text-base">
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    {/* <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
                        Start a Campaign
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="ml-1 h-4 w-4"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                    <div class="flex items-center justify-center">
                        <div class="group relative">
                            <button class="relative inline-block cursor-pointer rounded-xl bg-[#121212] p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                                <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                                <span class="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
                                    <div class="relative z-10 flex items-center space-x-2">
                                        <span class="transition-all duration-500 group-hover:translate-x-1">
                                        Start a Campaign
                                        </span>
                                        <svg
                                            class="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
                                            data-slot="icon"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                clip-rule="evenodd"
                                                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
