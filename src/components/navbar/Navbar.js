import styles from "./Navbar.module.css";
import NavbarLink from "./NavbarLink";
import NavbarTabs from "./NavbarTabs";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <NavbarTabs />
      <NavbarLink />
    </header>
  );
};

export default Navbar;
