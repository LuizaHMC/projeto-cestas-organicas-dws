import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../scripts/env';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  
`;

const ProductsSection = styled.section`
  
  margin: 48px 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProductCard = styled.div`
  width: 140px;
  height: auto;
  font-size: 12px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 30px auto;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: auto;
    background-color: #3A9955;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const colRef = collection(db, 'products');
        const snapshot = await getDocs(colRef);
        const productsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Content>
        <ProductsSection>
          {products.map(product => (
            <ProductCard key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ProductImage src={product.img} alt={product.name} />
              <Button>Adicionar</Button>
            </ProductCard>
          ))}
        </ProductsSection>
      </Content>
    </Container>
  );
}

export default Home;


