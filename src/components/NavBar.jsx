import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function NavBar() {
    return (
        <>
            <div className="navBar">
                <span className="aboutMe selected">Sobre Mim</span>
                <span className="skills">Habilidades</span>
                <span className="projects">Projetos</span>
                <div className="socialMedia">
                    <span>Contato:</span>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}
                    href="https://facebook.com/rmaxn" target="_blank">
                        <MDBIcon fab icon='facebook-f' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}
                    href="mailto:robertson.nunes@gmail.com" target="_blank">
                        <MDBIcon fab icon='google' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}
                    href="https://instagram.com/rmaxn" target="_blank">
                        <MDBIcon fab icon='instagram' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}
                    href="https://linkedin.com/in/rmaxn" target="_blank">
                        <MDBIcon fab icon="linkedin-in" size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}
                    href="https://github.com/rmaxn" target="_blank">
                        <MDBIcon fab icon="github" size='lg' />
                    </MDBBtn>
                </div>
            </div>
        </>
    )
}

export default NavBar