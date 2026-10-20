import { useRef } from 'react';
import Container from 'react-bootstrap/Container';

const cards = [
    {
        titulo: 'Compatibilidade de arquivos',
        texto: 'Importe arquivos PSD, AI, IDML, DWG e outros formatos para o Affinity com as camadas e a estrutura preservadas.',
        fundo: '#221e1f',
        cor: '#fff',
    },
    {
        titulo: 'Colaboração entre equipes',
        texto: 'Exporte seus ativos em poucos passos e colabore em tempo real com a sua equipe, mantendo a identidade da marca.',
        fundo: '#ece8da',
        cor: '#111',
    },
    {
        titulo: 'Não perca nenhum detalhe',
        texto: 'Mantenha as camadas intactas, reordene elementos e exporte em vários formatos sem perder qualidade.',
        fundo: '#f72a62',
        cor: '#111',
    },
    {
        titulo: 'Rápido e poderoso',
        texto: 'Um único app extremamente veloz, mesmo com arquivos enormes e zoom infinito.',
        fundo: '#a7f175',
        cor: '#111',
    },
    {
        titulo: 'Feito para criar',
        texto: 'Todas as ferramentas profissionais de design e edição de fotos, sem trocar de aplicativo.',
        fundo: '#221e1f',
        cor: '#fff',
    },
];

export default function Studio2() {
    const trilho = useRef(null);

    function rolar(direcao) {
        trilho.current.scrollBy({ left: direcao * 500, behavior: 'smooth' });
    }

    return (
        <section className="bg-black text-white py-5">
            <Container className="d-flex justify-content-between align-items-center mb-4">
                <h2
                    className="display-3 fw-bold mb-0"
                >
                    O novo padrão
                </h2>
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-outline-light rounded-circle"
                        style={{ width: 56, height: 56 }}
                        onClick={() => rolar(-1)}
                    >
                        ←
                    </button>
                    <button
                        className="btn btn-outline-light rounded-circle"
                        style={{ width: 56, height: 56 }}
                        onClick={() => rolar(1)}
                    >
                        →
                    </button>
                </div>
            </Container>

            <div
                ref={trilho}
                className="d-flex gap-4 overflow-auto px-4 pb-3"
                style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
            >
                {cards.map((card, i) => (
                    <article
                        key={i}
                        className="rounded-4 p-5"
                        style={{
                            flex: '0 0 min(85vw, 700px)',
                            minHeight: 480,
                            scrollSnapAlign: 'start',
                            backgroundColor: card.fundo,
                            color: card.cor,
                        }}
                    >
                        <span>{i + 1}/{cards.length}</span>
                        <h3
                            className="display-5 fw-bold mt-3"
                        >
                            {card.titulo}
                        </h3>
                        <p className="fs-5">{card.texto}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}