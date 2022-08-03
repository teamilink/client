import styles from "./Navbar.module.css";
import NavbarTabs from "./NavbarTabs";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <NavbarTabs />
    </header>
  );
};

export default Navbar;
