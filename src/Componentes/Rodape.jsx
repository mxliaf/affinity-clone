import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const colunas = [
    {
        titulo: 'Produto',
        links: ['Obtenha o Affinity', 'Design gráfico', 'Edição de fotos', 'Layout de página', 'Ilustração digital', 'Design tipográfico', 'Integrações do Canva', 'Integrações de produtos'],
    },
    {
        titulo: 'Descubra',
        links: ['Inspiracao.af', 'Em destaque', 'Recursos de aprendizado', 'Comparativo: Affinity x Adobe', 'Imprensa'],
    },
    {
        titulo: 'Ajuda',
        links: ['Central de Ajuda', 'Affinity V2', 'Conta Affinity V2', 'Atualização de setembro de 2026', 'Notas de versão'],
    },
    {
        titulo: 'Conectar',
        links: ['Sobre', 'Carreiras', 'Fale com a equipe de vendas'],
    },
];

export default function Rodape() {
    return (
        <>
        <section className="bg-black text-white pt-5">
            <Container>
                <Row className="g-4">
                    <img src="https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/78303f82-4688-4614-99c7-ad7970d208a9/affinity_logotype_white_min.svg" className="img-fluid" alt="" />
                    {colunas.map((coluna, index) => (
                        <Col key={index} xs={6} lg={3}>
                            <h6 className="text-uppercase fw-semibold mb-3">{coluna.titulo}</h6>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                {coluna.links.map((link, j) => (
                                    <li key={j}>
                                        <a href="#" className="text-white-50 text-decoration-none">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
        </>
    )
}