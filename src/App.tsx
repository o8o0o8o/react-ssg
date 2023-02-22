import React from "react";
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
        <ul
          style={{
            display: "flex",
            gap: "30px",
            listStyle: "none",
            backgroundColor: "orange",
          }}
        >
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Component />
              </div>
            }
          />
        ))}
      </Routes>
    </>
  );
}
