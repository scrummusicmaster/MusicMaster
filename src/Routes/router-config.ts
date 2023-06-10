import Form from "../Components/Form/Form";
import ListProducts from "../Components/ListProducts/ListProducts";
import Home from "../Screens/Home/Home";

const routes = [
  { path: "/", component: Home },
  { path: "/Inicio", component: Home, exact: true },
  { path: "*", component: Home },
  {path: "/Servicios", component: ListProducts, exact: true },
  {path: "/Empleados", component: ListProducts, exact: true },
  {path: "/Agenda", component: Form, exact: true },
];

export {routes}