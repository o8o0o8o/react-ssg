import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "Home",
  },
  {
    path: "/about",
    exact: true,
    component: About,
    name: "About",
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
    name: "Contact",
  },
  {
    path: "/projects",
    exact: true,
    component: Projects,
    name: "Projects",
  },
];

export default routes;
