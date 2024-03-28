import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, createContext } from "react";
import Home from "../src/pages/Home";
import TourDetails from "../src/pages/TourDetails";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import SearchResult from "../src/pages/SearchResult";
import Confirmation from "./pages/Confirmation";
export const AppContext = createContext();
function App() {
  const [tourDetails, setTourDetails] = useState({});
  const [userData, setUserData] = useState({});
  const [location, setLocation] = useState({});
  console.log(location);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tourdetails",
      element: <TourDetails />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/tours/search",
      element: <SearchResult />,
    },
    {
      path: "/confirmation",
      element: <Confirmation />,
    },
  ]);
  return (
    <AppContext.Provider
      value={{
        tourDetails,
        setTourDetails,
        userData,
        setUserData,
        location,
        setLocation,
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </AppContext.Provider>
  );
}

export default App;
