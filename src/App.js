import Navbar from "./components/Navbar";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
export default function App() {
  const [progress, setProgress] = useState(0);
  const routes = [
    { path: "/", name: "General" },
    { path: "/business", name: "Business" },
    { path: "/entertainment", name: "Entertainment" },
    { path: "/general", name: "General" },
    { path: "/health", name: "Health" },
    { path: "/science", name: "Science" },
    { path: "/sports", name: "Sports" },
    { path: "/technology", name: "Technology" },
  ];
  function checkprogress(progress) {
    setProgress(progress);
  }
  const router = createBrowserRouter(
    routes.map(({ path, name }) => ({
      path,
      element: (
        <div>
          <LoadingBar
            color="#f11946"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
            height={3}
          />
          <Navbar />
          <News
            key={name}
            category={name.toLowerCase()}
            checkprogress={checkprogress}
          />
        </div>
      ),
    }))
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
