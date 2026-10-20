import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import studioLayout from '../assets/vetores/studio-layout.svg';
import coverA from '../assets/vetores/studio-pixel.svg';
import coverB from '../assets/vetores/studio-vetor.svg';
import coverC from '../assets/vetores/studio-ia.svg';


export default function NavPill(props) {
    return (
        <section className="NavPillHall d-flex flex-column align-items-center">
            <Tabs defaultActiveKey="vetor" variant="pills" justify>
                <Tab eventKey="vetor" title="Vetor">
                    <p>Design gráfico, ilustração digital, criação de logotipos e muito mais</p>
                    <img src={studioLayout} alt="" className="img-fluid" />
                </Tab>
                <Tab eventKey="pixel" title="Pixel">
                    <p>Edição de fotos, retoques, edição de arquivos RAW e composição</p>
                    <img src={coverA} alt="" className="img-fluid" />
                </Tab>
                <Tab eventKey="layout" title="Layout">
                    <p>Diagramação de páginas, design editorial e publicação impressa</p>
                    <img src={coverB} alt="" className="img-fluid" />
                </Tab>
                <Tab eventKey="ia" title="Canva IA">
                    <p>Isole objetos, amplie fundos, gere imagens e acesse outras ferramentas de IA com um plano premium do Canva</p>
                    <img src={coverC} alt="" className="img-fluid" />
                </Tab>
            </Tabs>
        </section>
    );
}

