import { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <Fragment>
      <h1>The Products Page.</h1>
      <ul>
        {PRODUCTS.map((pro) => (
          <li key={pro.id}>
            <Link to={`/products/${pro.id}`}>{pro.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProductsPage;
