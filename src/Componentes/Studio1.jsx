import Container from 'react-bootstrap/Container';
import studioLayout from '../assets/vetores/studio-layout.svg';
import NavPill from './NavPill';
import aspas from '../assets/vetores/aspas.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Studio1 () {
    return (
        <>
        <section className="d-flex align-items-center text-center p-5 justify-content-center">
            <Container>
                <h1 className="display-4 fw-bold">Chega de ficar trocando de aplicativo</h1>
                <p className="lead mt-3">
                    Crie, edite, faça o layout e depois edite de novo... sem nunca sair do seu arquivo .af. O Affinity tem todas as ferramentas profissionais de design e edição de fotos que você precisa em um único app extremamente rápido e poderoso.
                </p>
                <NavPill></NavPill>
            </Container>
        </section>
            <section className="p-2">
    <Container>
        <Row>
            <Col lg={10} xl={9}>
                <img src={aspas} alt="" width="100" />
                <h2 className="fs-1 p-4">
                    O Affinity deixa a gente se concentrar no trabalho. Ter edição de fotos, vetores e layout em um único app significa menos trocas, menos interrupções e mais tempo dedicado a projetar e criar os detalhes que fazem a diferença.
                </h2>
            </Col>
        </Row>
    </Container>
</section>
        </>
    )
}