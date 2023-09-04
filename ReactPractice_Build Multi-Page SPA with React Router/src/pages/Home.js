import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <h1>My Home Page</h1>
      <p>
        Go to the <Link to="/products">Products page.</Link>
      </p>
    </Fragment>
  );
};

export default HomePage;
