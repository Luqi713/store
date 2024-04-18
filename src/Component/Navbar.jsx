import React from "react";
import logo from "../Assets/logo.png";
export default function Navbar() {
  return (
    <div className="con">
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" className="logoimg" />
          </a>
        </div>
        <div className="nav">
          <ul>
            <a className="ab" href="/">
              <li className="nav-li">Home</li>
            </a>
            <a className="ab" href="/mens">
              <li className="nav-li">Mens</li>
            </a>
            <a className="ab" href="/womens">
              <li className="nav-li">Womens</li>
            </a>
            <a className="ab" href="/kids">
              <li className="nav-li">Kids</li>
            </a>
          </ul>
        </div>
      </div>
      <section id="Nav-Home">
        <div className="hero">
          <h1>Dress Collections For All!</h1>
          <p>
            Welcome to our online store – your go-to destination for affordable,
            high-quality fashion for the whole family! From stylish men's and
            women's outfits to adorable kids' ensembles, we've curated a diverse
            collection to suit every taste and occasion. Shop with confidence
            knowing that you'll find the latest trends and timeless classics,
            all at prices that won't break the bank. Explore our selection today
            and elevate your wardrobe effortlessly!
          </p>
        </div>
      </section>
    </div>
  );
}
