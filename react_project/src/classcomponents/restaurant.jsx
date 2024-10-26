import { Component } from "react";


import Navbarr  from "./restaurant/nav.jsx";

import Caros from "./restaurant/carosal.jsx";

import Footer from "./restaurant/footer.jsx";

class Hello extends  Component{
   render(){


    return(
        <>
        {/* <h1>hello this is chai</h1> */}
        <Navbarr/>
        <Caros/>
        <Footer/>
        </>
    );


   }

}

export default Hello;