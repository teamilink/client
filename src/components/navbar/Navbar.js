import styles from "./Navbar.module.css";
import NavbarTabs from "./NavbarTabs";

const Navbar = () => {
  // navigation for the pages except dashboard
  return (
    <header className={styles.header}>
      <NavbarTabs />
    </header>
  );
};

export default Navbar;
