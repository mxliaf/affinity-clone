import Container from 'react-bootstrap/Container';
import standardRose from '../assets/vetores/standard-rose.svg';
import aspas from '../assets/vetores/aspas.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export default function Studio3(props) {
    return (
        <>
            <section className="py-5">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <Badge pill bg="secondary" className="p-2">
                                Feito no Cavalry
                            </Badge>
                            <h1 className="display-4 fw-bold mt-3">Crie no Affinity, anime no Cavalry</h1>
                            <p className="lead mt-3">
                                Mantenha o processo criativo em andamento. Transforme seus projetos finalizados em obras de arte animadas importando-os diretamente do Affinity para o Cavalry.
                            </p>
                            <Button variant="light" className="mt-3">Mexa-se</Button>
                        </Col>

                        <Col lg={6}>
                            <img src={standardRose} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="p-2">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <img src={aspas} alt="" width="100" />
                            <h2 className="fs-1 p-4">
                                Na reformulação da marca da BBH, o Cavalry virou nosso superpoder secreto, transformando a experimentação tipográfica em um processo criativo que definiu toda a linguagem de movimento da marca. Isso nos deu a liberdade de explorar layouts e comportamentos tipográficos que levariam dias para prototipar, tudo em uma única tarde.
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}