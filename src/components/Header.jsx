import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import ajoy from "../assets/Images/Ajoy.jpg";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
const Header = () => {
  const navRefs = useRef([]);
  useEffect(() => {
    gsap.from(navRefs.current, {
      y: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <header>
      <span className="logo">
        <img src={ajoy} alt="" width={50} />
        <strong>Code with Ajoy Das</strong>
      </span>
      <nav>
        {["/", "/about", "/contact", "/blog"].map((path, i) => (
          <NavLink key={i} to={path} ref={(el) => (navRefs.current[i] = el)}>
            {path === "/"
              ? "Home"
              : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
        <motion.button className="btn1"
          whileHover={
            {
            scale:1.1
          }
        }
        >
          Create Project +
        </motion.button>
      </nav>
    
    </header>
  );
};

export default Header;
