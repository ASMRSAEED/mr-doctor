import React from "react";
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init"
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <header className="nav-bar bg-secondary  border py-1">
        <nav className="navbar navbar-expand-lg navbar-light  mx-4">
          <div className="container-fluid">
            <CustomLink className="navbar-brand " to='/home'>
              <img src="https://i.ibb.co/Lk6P0gD/logo.png" className="header-image" alt="" />
            </CustomLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/'}>
                  HOME
                </CustomLink>
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/checkout'}>
                  CHECKOUT
                </CustomLink>
                <CustomLink className="nav-link active mx-3 p-1 " aria-current="page" to={'/about'}>
                  ABOUT
                </CustomLink>
                <CustomLink className="nav-link mx-3 p-1" to='/blog'>BLOG</CustomLink>
                {user ? <button id="btn" className="border-0 bg-secondary fs-5 p-1 text-white" onClick={handleSignOut}>SIGN OUT</button> : <CustomLink className="nav-link mx-3 p-1" to='/login'>
                  SIGN IN
                </CustomLink>
                }
              </div>
            </div>
          </div>
        </nav>
      </header>


    </div>
  );
};

export default Header;
