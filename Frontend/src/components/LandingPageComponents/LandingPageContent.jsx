
export function LandingPageContent() {

    const cards = [
        {
            id: 1,
            category: "CATEGORY",
            title: "The Catalyzer",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1676679689999-bee60ae55f1f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            category: "CATEGORY",
            title: "The 400 Blows",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://img.freepik.com/vector-gratis/pequenos-patrocinadores-que-dan-donaciones-al-proyecto-inicio-persona-recaudando-dinero-linea-ilustracion-vector-plano-crecimiento-financiero-crowdfunding-internet-concepto-cooperacion-diseno-banners-o-sitios-web_74855-25364.jpg?t=st=1737995614~exp=1737999214~hmac=df25c0ae142675b228e61420e0807ee804825ffa52119612c7eb89545c1fc784&w=1380",
        },
        {
            id: 3,
            category: "CATEGORY",
            title: "Shooting Stars",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://img.freepik.com/foto-gratis/concepto-grafico-bombilla-negocio-dinero-crowdfunding_53876-133920.jpg?t=st=1737995670~exp=1737999270~hmac=fa2a68afe646f9830962f84031c1d5993229baa61a3012822ec5500d040f3477&w=1380",
        },
        {
            id: 4,
            category: "CATEGORY",
            title: "The Catalyzer",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://img.freepik.com/vector-gratis/pequenas-personas-recolectan-monedas-gran-donacion-cajas_107791-13879.jpg?t=st=1737995731~exp=1737999331~hmac=14539092ea8be41867528a963ab85cb894218ad1c26973f1700c81cd90df6eef&w=1380",
        },
        {
            id: 5,
            category: "CATEGORY",
            title: "The 400 Blows",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://img.freepik.com/vector-gratis/aterrizaje-isometrico-crowdfunding-lanzamiento-cohetes_107791-8162.jpg?t=st=1737995759~exp=1737999359~hmac=82f05064779662e65089c2d20ddf9e0fae49951dda22a41ad21ebdf9c8fbe6e5&w=1380",
        },
        {
            id: 6,
            category: "CATEGORY",
            title: "Shooting Stars",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imageUrl: "https://img.freepik.com/foto-gratis/companeros-trabajo-juntos-trabajo-equipo-oficina-trabajo_53876-16024.jpg?t=st=1737995823~exp=1737999423~hmac=d9a853c3ad828b14ff14b3fcf6545a449882800e164b019bfe0d1092e9fe7682&w=1060",
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
                                            <a className="inline-flex items-center text-[#1F497D] hover:text-[#121212] md:mb-2 lg:mb-0 cursor-pointer">
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

