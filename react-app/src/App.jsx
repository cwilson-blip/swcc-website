import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { routes } from "./routes";

export default function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}
