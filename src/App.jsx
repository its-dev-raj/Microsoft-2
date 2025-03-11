import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Page1 />
    },
    {
      path: "/microsoft-teams/group-chat-software",
      element: <Page2 />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
