import React from "react";
import { Link } from "react-scroll";

function randomColor(e) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    let color = `rgba(${R}, ${G}, ${B}, ${e})`;
    return color;
}
function MenuItem(props) {
  const { to, name, Icon } = props;
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="subMenu"
    >
      <Icon className="icon" style={{color: randomColor(1)}} />
      <span> {name} </span>
    </Link>
  );
}

export default MenuItem;