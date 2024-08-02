import { createBrowserRouter } from "react-router-dom";

import { OfflinePC } from "../containers/OfflinePC";
import { OnlinePC } from "../containers/OnlinePC";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OfflinePC />,
  },
  {
    path: "/pc",
    element: <OnlinePC />,
  },
]);
