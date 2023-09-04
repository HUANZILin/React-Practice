import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Product detail.</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </Fragment>
  );
};

export default ProductDetailPage;
