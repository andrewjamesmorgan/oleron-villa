import React from "react";
import FrenchPage from '../components/lifecycle/FrenchPage';
import Home from './Home';
import HomeFRHead from "../components/home/HomeFRHead";

export default function HomeFR() {
  return (
    <>
      <HomeFRHead />
      <FrenchPage />
      <Home />
    </>
  );
}