import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

const EventsRootLayout = () => {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
};

export default EventsRootLayout;
