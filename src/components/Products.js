import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ cat }) => {
  console.log(cat);
  return (
    <Container>
      {popularProducts.map((item) => (
        (cat==null || cat==="All" || item.category===cat )?
        <Product item={item} key={item.id} />:<div></div>
      ))}
    </Container>
  );
};

export default Products;
