import React from "react";
import { useAuth } from "./Context/auth";
import "./NavbarComp";
import "./css/landingpages.css";
import Carousel from "react-bootstrap/Carousel";

const BackgroundImagePage = () => {
  return (
    <div className="bg">
      <h1>Binar Kelompok Satu</h1>
      {/* const {user} = useAuth(); return (
      <div className="bg ">
        {user && (
          <h1 className="text-center text-white">
            Hallo {user?.email} <br /> Let's Play !!
          </h1>
        )}
      </div>
      ); */}
      {/* slider  */}
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block w-5" src="" alt="Firstslide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <img src="https://mdbootstrap.com/img/new/standard/city/041.webp"></img> */}
    </div>
  );
};

export default BackgroundImagePage;
