import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`; 

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

export default function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Vestidos</Title>
      <FilterContainer>
        <Filter><FilterText>Filtrar Productos:</FilterText>
        <Select>
              <Option disabled selected>
                  Color
              </Option>
              <Option>Blanco</Option>
              <Option>Negro</Option>
              <Option>Rojo</Option>
              <Option>Azul</Option>
              <Option>Amarillo</Option>
              <Option>Verde</Option>
          </Select>
          <Select>
              <Option disabled selected>
                  Talla
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
          </Select>
        </Filter>         
        <Filter><FilterText>Clasificar Productos:</FilterText>
        <Select>
              <Option disabled selected>
               Lo más nuevo   
              </Option>
              <Option>Precio(asc)</Option>
              <Option>Precios(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
}
