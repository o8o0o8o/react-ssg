import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {
  eager: true,
});

const routes = Object.keys(PagePathsWithComponents).map((path: string) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: PagePathsWithComponents[path].default,
  };
});

export function App() {
  return (
    <>
      <nav>
        <ul className="styled-list">
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="styled-nav">
                <Component />
              </div>
            }
          />
        ))}
      </Routes>
    </>
  );
}
