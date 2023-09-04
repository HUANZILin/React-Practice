import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Fragment>
      <MainNavigation />
      <PageContent title="An Error occurred!">
        <p>
          {error.status === 500 ? error.data.message : "Something went wrong!"}
        </p>
      </PageContent>
    </Fragment>
  );
};

export default ErrorPage;
