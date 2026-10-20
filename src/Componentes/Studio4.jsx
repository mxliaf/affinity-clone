import Container from 'react-bootstrap/Container';
import coverC from '../assets/vetores/cover-c.svg';
import coverA from '../assets/vetores/cover-a.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const cards = [
    {
        titulo: 'Ferramenta Mesclagem',
        texto: 'Crie efeitos detalhados em poucos passos e ajuste-os conforme sua ideia evolui.',
        fundo: '#111',
        cor: '#fff',
        borda: '1px solid #333',
        botao: 'light',
        colunas: 8,
        imagem: coverC,
    },
    {
        titulo: 'Scripts dentro do app',
        texto: 'Escreva scripts que funcionam com vetores, pixels e layout no mesmo documento.',
        fundo: '#ece8da',
        cor: '#111',
        borda: 'none',
        botao: 'dark',
        colunas: 4,
        imagem: coverA,
    },
];

export default function Studio4() {
    return (
        <>
            <section className="bg-black d-flex align-items-center text-center p-5 justify-content-center">
                <Container>
                    <h1 className="display-4 fw-bold">Acabou de sair</h1>
                    <p className="lead mt-3">
                        Crie, edite, faça o layout e depois edite de novo... sem nunca sair do seu arquivo .af. O Affinity tem todas as ferramentas profissionais de design e edição de fotos que você precisa em um único app extremamente rápido e poderoso.
                    </p>
                </Container>
            </section>
            <section className="bg-black p-2 py-5">
                <Container>
                    <Row className="g-4">
                        {cards.map((card, index) => (
                            <Col key={index} lg={card.colunas}>
                                <article
                                className="rounded-5 overflow-hidden d-flex flex-column h-100"
                                style={{
                                    backgroundColor: card.fundo,
                                    color: card.cor,
                                    '--bs-heading-color': card.cor,
                                    border: card.borda,
                                    minHeight: 400,
                                }}

                                >
                            <div className="p-4 p-lg-5">
                                <h3 className="fs-2 fw-semibold">{card.titulo}</h3>
                                <p className="fs-5">{card.texto}</p>
                                <Button variant={card.botao} size="lg" className="mt-3">
                                    Saiba mais
                                </Button>
                            </div>

                            {card.imagem && (
                                <img src={card.imagem} alt="" className="mt-auto w-100" style={{ height:360, objectFit:'cover', objectPosition: 'top' }}/>
                            )}
                            </article>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}