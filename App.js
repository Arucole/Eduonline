import "./App.css";
import { Helmet } from "react-helmet";
import Nav from "./Nav";
import Hero from "./Hero";
import React from "react";
import Middle from "./Middle";
import Explore from "./Explore";
import Benefits from "./Benefits";
import Courses from "./Courses";
import Categories from "./Categories";
import Instructor from "./Instructor";
import Testimony from "./Testimony";
import Footer from "./Footer";

function App() {
  <Helmet>
    <meta charSet="utf-8" />
    <title>EduOnline</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <meta name="description" content="EduOnline" />
  </Helmet>;

  return (
    <div>
      <Nav />
      <Hero />
      <Middle />
      <Explore />
      <Benefits />
      <Courses />
      <Categories />
      <Instructor />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
