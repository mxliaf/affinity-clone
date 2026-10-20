const logos = [
    { nome: 'Pentagram', classe: 'logo-serif' },
    { nome: 'Twist', classe: 'logo-bold' },
    { nome: 'Expedia', classe: 'logo-sans' },
    { nome: 'WPP', classe: 'logo-mono' },
    { nome: 'Pratt', classe: 'logo-bold' },
];

export default function SlideLogoMarquee() {
    return (
        <section className="marquee">
            <div className="marquee-track">
                {[...logos, ...logos].map((logo, i) => (
                    <span
                        key={i}
                        className={`marquee-logo ${logo.classe}`}
                        aria-hidden={i >= logos.length}
                    >
                        {logo.nome}
                    </span>
                ))}
            </div>
        </section>
    )
}