import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import lupaBusca from '../../images/lupaBusca.png';
import carrinho from '../../images/carrinho.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
`;

const TopBar = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;

    .logo {
    height: 50px;
  }

  @media (max-width: 970px) {
      padding: 10px;
      flex-direction: column;
      align-items: stretch;

      .logo {
            align-self: center; 
            margin-bottom: 10px; 
        }
}

`

const BuscaContainer = styled.div`
    flex: 1;
    margin: 20px;
    min-width: 200px; 

    .search-bar {
        width: 100%;
        padding: 10px 20px 10px 40px; 
        background: url(${lupaBusca}) no-repeat 10px;
        border: 1px solid;
        border-radius: 5px;
    }

    @media (max-width: 970px) { 
        margin: 10px 0;
    }


`

const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 10px;
    text-decoration: none;
    color: #333;

    a:hover {
        color: green;
    }
    
    .carrinho-link {
        padding-left: 30px; 
        background: url(${carrinho}) no-repeat 5px center;
    }


    @media (max-width: 970px) { 
        justify-content: center; 
        width: 100%;
    }


`

const NavBar = styled.div`
    background-color: #3A9955;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px; 
    flex-wrap: wrap;

    .link {
        color: white;
    }

    .link:hover {
        color: rgb(70, 53, 53);
    }


    @media (max-width: 970px) { 
        flex-direction: column;
        align-items: stretch;


        .link {
            text-align: center;
            padding: 10px 0;
            width: 100%; 
        }
    }
`

const Divisor = styled.hr`
    border-left: 1px solid white;
    height: 20px;
    margin: 0 10px;


 
    @media (max-width: 970px) {
        display: none; 
    }
`

const Header = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <img src={logo} alt="Logo" className="logo" />
        <BuscaContainer>
          <input type="search" placeholder="Buscar por produtos..." className="search-bar" />
        </BuscaContainer>
        <LinksContainer>
          <Link to='cadastro-produtos'>Cadastrar um produto</Link>
          <Link to='/cadastro-usuarios'>Entre ou cadastre-se</Link>
          <Link to='/login' className="carrinho-link">
            <span>Meu carrinho</span>
          </Link>
        </LinksContainer>
      </TopBar>

      <NavBar>
        <Divisor/>
        <Link to='/' className="link">Legumes</Link>
        <Divisor/>
        <Link to='/' className="link">Verduras</Link>
        <Divisor/>
        <Link to='/' className="link">Frutas</Link>
        <Divisor/>
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;