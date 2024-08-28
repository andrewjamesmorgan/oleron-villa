import { useContext } from 'react';
import { UserContext } from '../App';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

export default function Layout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};
