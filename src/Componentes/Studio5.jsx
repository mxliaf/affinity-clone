import Container from 'react-bootstrap/Container';
import coverC from '../assets/vetores/cover-c.svg';
import coverA from '../assets/vetores/cover-a.svg';
import coverB from '../assets/vetores/cover-b.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const posts = [
    {
        autor: 'Benjamin Viney',
        tempo: '3 min de leitura',
        titulo: 'Novidades no Affinity: Ferramenta Mesclagem, scripts e mais de 60 atualizações',
        tag: 'Produto',
        imagem: coverC,
    },
    {
        autor: 'James Bates',
        tempo: '7 min de leitura',
        titulo: 'Design de grade para layouts editoriais e de sites',
        tag: 'Inspiração',
        imagem: coverA,
    },
    {
        autor: 'James Bates',
        tempo: '7 min de leitura',
        titulo: 'Design de grade para layouts editoriais e de sites',
        tag: 'Inspiração',
        imagem: coverB,
    },
];

export default function Studio5() {
    return (
        <>
        <section className="bg-white d-flex align-items-center p-5 justify-content-center">
            <Container>
                <h1 className="text-black fw-bold display-4 mt-3">
                    Inspiracao.af
                </h1>            
            
                <Row className="g-4 p-3">
                    {posts.map((post, index)=> (
                        <Col key={index} lg={4}>
                            <article>
                                <div className="rounded-4 overflow-hidden mb-3" style={{ aspectRadio: '1 / 1', backgroundColor:'#111' }}>
                                    {post.imagem && (
                                        <img src={post.imagem} alt="" className="w-100 h-100" style={{ objectFit: 'cover',  }}/>
                                    )}
                                </div>

                                <p className="text-dark mb-2">
                                    De {post.autor} · {post.tempo}
                                </p>

                                <h3 className="fs-3 text-dark fw-semibold">{post.titulo}</h3>

                                <Badge pill bg="light" text="dark" className="border px-3 py-2 mt-2">
                                    {post.tag}
                                </Badge>
                            </article>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
        </>
    )
}