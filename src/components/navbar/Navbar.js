import NavbarTabs from "./NavbarTabs";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // navigation for the pages except dashboard
  return (
    <header className={styles.header}>
      <NavbarTabs />
    </header>
  );
};

export default Navbar;
