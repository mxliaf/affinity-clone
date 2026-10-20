import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function NavBar(props) {
    return (
        <>
            <Navbar className="bg-black d-flex justify-content-between" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/78303f82-4688-4614-99c7-ad7970d208a9/affinity_logotype_white_min.svg" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" me-auto">
                            <NavDropdown title="Produto" id="basic-nav-dropdown">

                                <NavDropdown.Item href="#action/3.1">Design Gráfico</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Edição de Fotos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Layout de Páginas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Descubra" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Design Gráfico</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Edição de Fotos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Layout de Páginas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Ajuda" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Design Gráfico</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Edição de Fotos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Layout de Páginas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            
                            <Button className="btn-affinity">Obtenha o Affinity</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}