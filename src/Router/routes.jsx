import Login from "../Page/Auth/Login";
import Register from "../Page/Auth/Register";
import Buildpage from "../Page/admin/BuildPage/BuildPage";
import Dashboard from "../Page/admin/Dashboard/Dashboard.jsx";
import Home from "../Page/admin/Home/Home.jsx";
import Lang from "../Page/admin/Lang/components/Lang.jsx";
import Menu from "../Page/admin/Menu.jsx";
import Chat from "../Page/admin/chat/Chat.jsx";

const routes = [
  // {
  //     path:'/dnd2',
  //     element:<Dnd2/>
  // },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'chat',
        element:<Chat/>
      },
      {
        path:'build',
        element:<Buildpage/>
      },
      {
        path:'menu',
        element:<Menu/>
      },
      {
        path:'lang',
        element:<Lang/>
      }
    ]
    // element: <Buildpage2 />,
  },
  // {
  //     path:'/dnd',
  //     element:<IndexDND/>
  // },
  {
    path: "/",
    // element: <App />,
    // loader() {
    //     return json({ message: "Welcome to React Router!" });
    // },
    //  Component() {
    //     let data = useLoaderData();
    //     return <h1>{data.message}</h1>;
    // },
  },
  {
    path: "/admin",
    // element: <Admin />,
  },
  {
    path: "/register",
    // element: <Register/>,
  },
  {
    path: "/products",
    // element: <Products />,
    // loader: async () => {
    //   return DataProducts();
    // },
  },
  // {
  //     path:'/build',
  //     element:<BuildPage/>
  // },
  // {
  //     path: "/d",
  //     loader() {
  //         return json({ message: "Welcome to React Router!" });
  //     },
  //     Component() {
  //         let data = useLoaderData();
  //         return <h1>{data.message}</h1>;
  //     },
  // },
];
export default routes;
