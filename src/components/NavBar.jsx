import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function NavBar() {
    return (
        <>
            <div className="navBar">
                <a href="#about">Sobre Mim</a>
                <a href="#projects">Projetos</a>
                <div className="socialMedia">
                    <span>Contato:</span>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}>
                        <MDBIcon fab icon='facebook-f' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}>
                        <MDBIcon fab icon='twitter' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}>
                        <MDBIcon fab icon='google' size='lg' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f0c505' }}>
                        <MDBIcon fab icon='instagram' size='lg' />
                    </MDBBtn>
                </div>
            </div>
        </>
    )
}
export default NavBar