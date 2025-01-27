import { Link } from "react-router-dom"

export function LandingPageHeader() {
    return (
        <>
            <div className="body-font h-16 text-gray-600">
                <div className="container mx-auto flex flex-col flex-wrap items-center md:flex-row">
                    <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
                        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
                            <img src="logo-2.png" alt="Logo de Avanti" />
                        </a>
                    </a>
                    <nav className="flex cursor-pointer flex-wrap items-center justify-center text-lg font-semibold text-[#121212] md:ml-auto">
                        <Link to="./register" className="mr-5 hover:text-[#1F497D]">
                            Registro
                        </Link>
                        <Link to="./login" className="mr-5 hover:text-[#1F497D]">
                            Login
                        </Link>
                    </nav>
                </div>
            </div>
            <header className="body-font bg-[#f2f2f2] text-gray-600">
                <div className="mx-auto flex flex-col flex-wrap items-center justify-around gap-8 p-5">
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
                    <nav className="flex cursor-pointer flex-wrap items-center justify-center text-lg font-semibold text-[#121212]">
                        <a className="mr-5 hover:text-[#1F497D]">First Link</a>
                        <a className="mr-5 hover:text-[#1F497D]">Second Link</a>
                        <a className="mr-5 hover:text-[#1F497D]">Third Link</a>
                        <a className="mr-5 hover:text-[#1F497D]">Fourth Link</a>
                    </nav>
                    <div className="flex items-center justify-center">
                        <div className="group relative">
                            <button className="relative inline-block cursor-pointer rounded-xl bg-[#121212] p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                                <span className="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <span className="transition-all duration-500 group-hover:translate-x-1">
                                            Start a Campaign
                                        </span>
                                        <svg
                                            className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
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
