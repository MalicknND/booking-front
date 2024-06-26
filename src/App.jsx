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
import NewPostPage from "./pages/newPostPage/newPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/list", element: <Listpage />, loader: listPageLoader },
        {
          path: "/list/:id",
          element: <Singlepage />,
          loader: singlePageLoader,
        },
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
        {
          path: "/account/profile",
          element: <Profilepage />,
          loader: profilePageLoader,
        },
        { path: "/account/profile/update", element: <Updatepage /> },
        { path: "/account/profile/create-post", element: <NewPostPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
