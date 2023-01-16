import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="logo"
          className="logo"
        />
        <img
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="avatar"
          className="avatar"
        />
      </nav>
    </header>
  );
};

export default Navbar;
