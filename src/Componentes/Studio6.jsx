import Container from 'react-bootstrap/Container';
import coverC from '../assets/vetores/cover-c.svg';
import coverA from '../assets/vetores/cover-a.svg';
import coverB from '../assets/vetores/cover-b.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const cards = [
    {
        titulo: 'Mac',
        texto: 'Totalmente otimizado para o macOS. Funciona nativamente em Apple silicon e Intel.',
        fundo: '#111',
        cor: '#fff',
        borda: '1px solid #333',
        botao: 'light',
        colunas: 8,
        imagem: coverC,
    },
    {
        titulo: 'Windows',
        texto: 'O Affinity funciona rápido até em máquinas de nível intermediário, mas adora uma GPU dedicada.',
        fundo: '#111',
        cor: '#fff',
        borda: 'none',
        botao: 'dark',
        colunas: 4,
        imagem: coverA,
    },
    {
        titulo: 'iPad',
        texto: 'Estamos trabalhando na nossa versão para o iPad. Fique de olho!',
        fundo: '#111',
        cor: '#fff',
        borda: 'none',
        botao: 'dark',
        colunas: 4,
        imagem: coverB,
    },
];

export default function Studio6() {
    return(
        <>
        <section className="d-flex align-items-center text-center p-5 justify-content-center">
            <Container>
                <h1 className="display-4 fw-bold">Completamente gratuito</h1>
                <p className="lead mt-3">
                    O Affinity é de graça para pessoas físicas (sério mesmo). É só escolher abaixo a plataforma que você prefere para começar. Precisa do Affinity com SSO para a sua organização? Entre em contato com as equipes do Canva Enterprise ou Canva Education para saber mais.
                </p>

                <Row className="g-4 p-3">
                    {cards.map((card, index) => (
                            <Col key={index} lg={4}>
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
                                    Baixe de graça
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