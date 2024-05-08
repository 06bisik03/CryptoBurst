import styles from '../../Styles/Components/Navbar/Navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLogoContainer}>
                <div>
                    CryptoBurst
                </div>
            </div>
            <div className={styles.navbarRedirectContainer}>
                <div>Market</div>
                <div>News</div>
                <div>Exchange</div>
                <div>Log In</div>
                <div>Search</div>

            </div>
        </div>
    )
}
export default Navbar;