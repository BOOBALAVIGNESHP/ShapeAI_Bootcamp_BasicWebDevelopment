import React from "react";

function Footer(){

  var presentYear = new Date().getFullYear();

  return (
        <footer>
          <p>copyright @ {presentYear}</p>
        </footer>
        );

}

export default Footer;