import React from 'react';
import styled from 'styled-components';
import imgCadastroProdutos from '../../images/fundoCadastro.png';

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

const SectionCadastroProdutos = styled.section`
  flex: 1;
  max-width: 50%;
  padding-right: 20px;

  @media (max-width: 970px) {
    max-width: 100%;
    padding-right: 0;
    padding-bottom: 20px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-top: 10px;
  }

  input, select {
    padding: 10px;
    font-size: 1em;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #848484;
  }
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
    margin-bottom: 10px;
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

const DivImagemCadastroProdutos = styled.section`
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

const FormCadastroProdutos = () => {
  return (
    <MainContent>
      <SectionCadastroProdutos>
        <h1>Cadastrar produtos</h1>
        <form id="formCadastroProdutos">
          <label htmlFor="productName">Nome do produto:</label>
          <input type="text" id="productName" name="productName" required />

          <label htmlFor="productDescription">Descrição do produto:</label>
          <input type="text" id="productDescription" name="productDescription" required />

          <label htmlFor="productQuantity">Quantidade do produto:</label>
          <input type="number" id="productQuantity" name="productQuantity" value="1" min="1" />

          <label htmlFor="productCategory">Categoria do produto:</label>
          <select name="productCategory" id="productCategory">
            <option value="legume">Legume</option>
            <option value="verdura">Verdura</option>
            <option value="fruta">Fruta</option>
          </select>

          <LinhaForm>
            <FotoForm>
              <label htmlFor="productPhoto">Foto do produto:</label>
              <input type="file" name="productPhoto" id="productPhoto" accept="image/*" />
            </FotoForm>
            <BotaoCadastro type="submit" form="formCadastroProdutos">Cadastrar</BotaoCadastro>
          </LinhaForm>
        </form>
      </SectionCadastroProdutos>
      <DivImagemCadastroProdutos>
        <img src={imgCadastroProdutos} alt="Imagem de fundo para cadastro de produtos" />
      </DivImagemCadastroProdutos>
    </MainContent>
  );
}

export default FormCadastroProdutos;
