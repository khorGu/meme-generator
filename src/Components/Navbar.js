import trollFace from "../Images/trollFace.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <img src={trollFace} alt="" className="header-img" />
      <h2 className="header-title">Meme Generator</h2>
    </header>
  );
};

export default Navbar;
