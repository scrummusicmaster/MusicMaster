import Home from "../Screens/Home/Home";

const routes = [
  { path: "/", component: Home },
  { path: "/Inicio", component: Home, exact: true },
  { path: "*", component: Home },
];

export {routes}