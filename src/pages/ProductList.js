import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";

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
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const [filter, setFilter] = useState();

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{filter === "All" || filter === undefined ? "Products" : filter}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={filterHandler}>
            <Option disabled selected>
              Category
            </Option>
            <Option>Books</Option>
            <Option>Apparatus</Option>
            <Option>Electronic Gadgets</Option>
            <Option>Apparel</Option>
            <Option>All</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              NULL
            </Option>
            <Option>Price Asc</Option>
            <Option>Price Desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={filter} />
      <Footer />
    </Container>
  );
};

export default ProductList;
