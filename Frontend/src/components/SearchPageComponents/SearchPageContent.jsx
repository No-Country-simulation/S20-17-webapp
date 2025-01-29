

// export function SearchPageContent() {
//     return (
//         <>
//             <div className="relative mx-auto flex w-2/4 flex-col items-center justify-center">
//                 <h1 className="mb-8 py-5 text-center text-4xl font-semibold text-[#1F497D]">Buscar Proyectos</h1>
//                 <input
//                     type="text"
//                     id="hero-field"
//                     name="hero-field"
//                     className="mx-auto w-1/2 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
//                 />
//             </div>
//         </>
//     )
// }

import React, { useState } from 'react';

const cards = [
    {
        id: 1,
        category: "Technology",
        title: "The Innovator",
        description: "Explore the cutting-edge advancements in AI, robotics, and space exploration.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1676679689999-bee60ae55f1f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        category: "Design",
        title: "Urban Future",
        description: "A look at sustainable architecture and innovative urban planning for the future.",
        imageUrl: "https://img.freepik.com/vector-gratis/pequenos-patrocinadores-que-dan-donaciones-al-proyecto-inicio-persona-recaudando-dinero-linea-ilustracion-vector-plano-crecimiento-financiero-crowdfunding-internet-concepto-cooperacion-diseno-banners-o-sitios-web_74855-25364.jpg?t=st=1737995614~exp=1737999214~hmac=df25c0ae142675b228e61420e0807ee804825ffa52119612c7eb89545c1fc784&w=1380",
    },
    {
        id: 3,
        category: "Science",
        title: "Journey to Mars",
        description: "Discover the latest research and plans for humanity's next giant leap to Mars.",
        imageUrl: "https://img.freepik.com/foto-gratis/concepto-grafico-bombilla-negocio-dinero-crowdfunding_53876-133920.jpg?t=st=1737995670~exp=1737999270~hmac=fa2a68afe646f9830962f84031c1d5993229baa61a3012822ec5500d040f3477&w=1380",
    },
    {
        id: 4,
        category: "Business",
        title: "Startup Evolution",
        description: "How new startups are disrupting traditional business models and creating innovative solutions.",
        imageUrl: "https://img.freepik.com/vector-gratis/pequenas-personas-recolectan-monedas-gran-donacion-cajas_107791-13879.jpg?t=st=1737995731~exp=1737999331~hmac=14539092ea8be41867528a963ab85cb894218ad1c26973f1700c81cd90df6eef&w=1380",
    },
    {
        id: 5,
        category: "Health",
        title: "Mindful Living",
        description: "How mindfulness and mental well-being are crucial to achieving a balanced life.",
        imageUrl: "https://img.freepik.com/vector-gratis/aterrizaje-isometrico-crowdfunding-lanzamiento-cohetes_107791-8162.jpg?t=st=1737995759~exp=1737999359~hmac=82f05064779662e65089c2d20ddf9e0fae49951dda22a41ad21ebdf9c8fbe6e5&w=1380",
    },
    {
        id: 6,
        category: "Technology",
        title: "Quantum Computing",
        description: "A new era of computing is dawning, and quantum computing is leading the way.",
        imageUrl: "https://img.freepik.com/foto-gratis/companeros-trabajo-juntos-trabajo-equipo-oficina-trabajo_53876-16024.jpg?t=st=1737995823~exp=1737999423~hmac=d9a853c3ad828b14ff14b3fcf6545a449882800e164b019bfe0d1092e9fe7682&w=1060",
    },
    {
        id: 7,
        category: "Nature",
        title: "Into the Wild",
        description: "An adventure into the heart of nature, exploring wildlife conservation efforts.",
        imageUrl: "https://img.freepik.com/free-photo/wildlife-safari-landscape-sunrise-africa_1150-7249.jpg",
    },
    {
        id: 8,
        category: "Space",
        title: "Galaxies Beyond",
        description: "A visual journey through the wonders of deep space and the galaxies that lie beyond.",
        imageUrl: "https://img.freepik.com/free-photo/starry-sky-silhouette-trees-night_1150-15860.jpg",
    },
    {
        id: 9,
        category: "Art",
        title: "Modern Expressions",
        description: "Dive into the world of modern art and its powerful expression through various media.",
        imageUrl: "https://img.freepik.com/free-photo/colorful-paint-splashes-canvas_1150-19285.jpg",
    },
    {
        id: 10,
        category: "Sports",
        title: "The Athletic Pursuit",
        description: "From fitness to professional sports, we explore the journey of athletes striving for greatness.",
        imageUrl: "https://img.freepik.com/free-photo/action-shot-sprinter-running-race_1150-12041.jpg",
    },
    {
        id: 11,
        category: "Culture",
        title: "Cultural Heritage",
        description: "Discover the rich history and diverse cultures that have shaped the world we live in today.",
        imageUrl: "https://img.freepik.com/free-photo/ancient-temple-with-statue-cultural-history_1150-17455.jpg",
    },
    {
        id: 12,
        category: "Entertainment",
        title: "The Evolution of Cinema",
        description: "Explore how cinema has evolved from silent films to today's blockbuster experiences.",
        imageUrl: "https://img.freepik.com/free-photo/film-reel-spotlight-dark-room_1150-12207.jpg",
    }
];

export function SearchPageContent() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="relative mx-auto flex w-2/4 flex-col items-center justify-center">
                <h2 className="mb-2 py-7 text-center text-3xl font-semibold text-[#1F497D]">Buscar Proyectos</h2>
                <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="mx-auto w-1/2 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por título, descripción o categoría"
                />
            </div>

            <main className="body-font text-gray-600">
                <section className="container mx-auto px-5 py-9">
                    <h1 className="container mb-8 flex justify-center py-3 text-4xl font-semibold text-[#1F497D]">
                        Proyectos
                    </h1>
                    <div className="-m-4 flex flex-wrap">
                        {filteredCards.map((card) => (
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
                                            <a className="inline-flex cursor-pointer items-center text-[#1F497D] hover:text-[#121212] md:mb-2 lg:mb-0">
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
    );
}

