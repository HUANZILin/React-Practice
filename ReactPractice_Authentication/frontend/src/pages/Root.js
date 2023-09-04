import { Outlet, useRouteLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  useEffect(() => {
    let timeoutId;

    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      clearTimeout(timeoutId);
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    timeoutId = setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
