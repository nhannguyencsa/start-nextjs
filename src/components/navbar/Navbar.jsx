import Links from "./links/Links";
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div>
            <div className={styles.container}>Logo</div>
            <Links/>
        </div>
    )
  };
  
  export default Navbar;