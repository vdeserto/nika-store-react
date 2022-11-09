import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function MainRoutes() {
  return (
    <div className="w-100 h-100 bg-sg">
      <Navbar />
      <div className="d-flex">
        <Routes>
          {/* <Route path="/" exact component={Landing}/> */}
          <Route index path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* <Route path="/orphanages/create" element={CreateOrphanage}/>
            <Route path="/orphanages/:id" element={Orphanage}/> */}
        </Routes>
      </div>
    </div>
  );
}
