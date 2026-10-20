import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

function HeroBanner(props) {
    return (
        <section className="bg-black hero d-flex align-items-center text-center p-5 justify-content-center">
            <Container>
                <h1 className="display-1 fw-bold">Crie livremente</h1>
                <p className="lead mt-3">
                    Design profissional, edição de fotos e layout de páginas no mesmo app.
                </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Button className="btn-affinity">Obtenha grátis</Button>
                <Button variant="light">Adquira para empresas</Button>
            </div>
            </Container>
        </section>
    );
}

export default HeroBanner;