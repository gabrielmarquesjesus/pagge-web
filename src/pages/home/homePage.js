import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar';

function HomePage() {
    const navigate = useNavigate();
    function navigateLivros(){
        navigate("/livros")
    };

    return(
        <div>
            <NavBar tela='0 '></NavBar>
            <h1>Tela Inicial</h1>
        </div>
    )
}

export default HomePage;