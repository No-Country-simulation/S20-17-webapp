export function LandingPageContent() {
    const cards = [
        {
            id: 1,
            category: "CATEGORY",
            title: "The Catalyzer",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://dummyimage.com/720x400",
        },
        {
            id: 2,
            category: "CATEGORY",
            title: "The 400 Blows",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://dummyimage.com/721x401",
        },
        {
            id: 3,
            category: "CATEGORY",
            title: "Shooting Stars",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://dummyimage.com/722x402",
        },
    ]

    return (
        <>
            <main className="body-font text-gray-600">
                <section className="container mx-auto px-5 py-14">
                    <h1 className="container flex justify-center text-[#1F497D] py-5 mb-8 text-4xl font-semibold">Proyectos</h1>
                    <div className="-m-4 flex flex-wrap">
                        {cards.map((card) => (
                            <div key={card.id} className="p-4 md:w-1/3">
                                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                                    <img
                                        className="w-full object-cover object-center md:h-36 lg:h-48"
                                        src={card.imageUrl}
                                        alt={card.title}
                                    />
                                    <div className="p-6">
                                        <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                                            {card.category}
                                        </h2>
                                        <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                                            {card.title}
                                        </h1>
                                        <p className="mb-3 leading-relaxed">{card.description}</p>
                                        <div className="flex flex-wrap items-center">
                                            <a className="inline-flex items-center text-[#1F497D] md:mb-2 lg:mb-0 cursor-pointer">
                                                Learn More
                                                <svg
                                                    className="ml-2 h-4 w-4"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
