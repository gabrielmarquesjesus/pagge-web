import React from 'react';
import NavBar from '../../components/navBar/navBar';
import { TELA_INICIAL } from '../../utils/constants/Telas';

function HomePage() {
    return(
        <div>
            <NavBar tela = {TELA_INICIAL}></NavBar>
            <h1>Tela Inicial</h1>
        </div>
    )
}

export default HomePage;