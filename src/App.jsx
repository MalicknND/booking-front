import Homepage from "./pages/homepage/homepage";
import { Layout, RequiredAuth } from "./pages/layout/layout";
import Listpage from "./pages/listpage/listpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singlepage from "./pages/singlepage/singlepage";
import Login from "./pages/auth/Login/login";
import Register from "./pages/auth/register/register";
import Contact from "./pages/contact/contact";
import Profilepage from "./pages/account/profile/profile";
import Aboutpage from "./pages/apropos/about";
import Updatepage from "./pages/account/updateProfile/update";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/list", element: <Listpage /> },
        { path: "/list/:id", element: <Singlepage /> },
        { path: "/about", element: <Aboutpage /> },
        { path: "/auth/login", element: <Login /> },
        { path: "/auth/register", element: <Register /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    {
      path: "/",
      element: <RequiredAuth />,
      children: [
        { path: "/account/profile", element: <Profilepage /> },
        { path: "/account/profile/update", element: <Updatepage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
