import React from 'react';
import styled from 'styled-components';
import fundoCadastro from '../../images/fundoCadastro.png';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../../scripts/AutenticacaoUsuarios';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;


const MainContent = styled.main`
  display: flex;
  padding: 20px;
  align-items: center;

    @media (max-width: 970px) {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

`;

const Formulario = styled.section`
  flex: 1;
  max-width: 50%;
  padding-right: 20px;

  @media (max-width: 970px) {
        max-width: 100%;
        padding-right: 0;
        padding-bottom: 20px;
    }
  
`;

const Titulo = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const FormularioContent = styled.form`
  display: flex;
  flex-direction: column;

  .path-login {
    color: #4CAF50;
    cursor: pointer;

    &:hover {
      color: #45a049;
    }
  }

`;

const LabelForm = styled.label`
  margin-top: 10px;

`;

const InputForm = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1em;

`;

const LinhaForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

    @media (max-width: 970px) {
        flex-direction: column;
        align-items: stretch;
    }

`;

const FotoForm = styled.div`
    display: flex;
  flex-direction: column;
  margin-right: 20px;

  label {
    margin-bottom: 5px;
  }

  input[type="file"] {
    padding: 10px;
    font-size: 1em;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #848484;
  }

  @media (max-width: 970px) {
    margin-right: 0;
    margin-bottom: 10px;
  }

`;

const BotaoCadastro = styled.button`
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }

`;


const Imagem = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 970px) {
      max-width: 100%;

     img {
        width: 80%;
    }

  }
`;

const FormCadastroUsuarios = () => {

  const handleRegister = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const foto = document.getElementById('foto').value;
    const nome = document.getElementById('nome').value;

    // Chama a função de registro
    register(email, senha);
  };

  return (

  <Container>
    <MainContent>
      <ToastContainer />
      <Formulario className="formulario">
        <Titulo>Cadastro de Usuários</Titulo>
        <FormularioContent onSubmit={handleRegister}>
          <LabelForm htmlFor="nome">Nome *</LabelForm>
          <InputForm type="text" id="nome" required />

          <LabelForm htmlFor="email">Endereço de email *</LabelForm>
          <InputForm type="email" id="email" required />

          <LabelForm htmlFor="endereco">Endereço residencial</LabelForm>
          <InputForm type="text" id="endereco" />

          <LabelForm htmlFor="senha">Senha *</LabelForm>
          <InputForm type="password" id="senha" required />

          <LinhaForm>
            <FotoForm>
              <label htmlFor="foto">Foto</label>
              <input type="file" id="foto" />
            </FotoForm>
            <BotaoCadastro type="submit">Cadastrar</BotaoCadastro>
          </LinhaForm>
          <p>Já possui conta? Faça o <Link to='/login' className="path-login">Login</Link></p>
        </FormularioContent>

      </Formulario>
      <Imagem>
        <img src={fundoCadastro} alt="Imagem de fundo para cadastro" />
      </Imagem>
    </MainContent>
  </Container>
  );
};

export default FormCadastroUsuarios;

