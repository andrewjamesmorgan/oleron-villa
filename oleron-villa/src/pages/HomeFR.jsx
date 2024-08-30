import React from "react";
import FrenchPage from '../components/lifecycle/FrenchPage';
import HomeContent from '../components/home/HomeContent';
import HomeFRHead from "../components/home/HomeFRHead";

export default function HomeFR() {
  return (
    <>
      <HomeFRHead />
      <FrenchPage />
      <HomeContent />
    </>
  );
}