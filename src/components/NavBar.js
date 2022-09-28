import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const barLinks = links.map(link => {
  //   return <a key={link} href={link}>{link}</a>
  // })
  // return barLinks;
  return(
    <>
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#projects">projects</a>
    </>
  )
}

export default NavBar;
