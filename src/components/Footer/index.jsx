import styles from "./footer.module.scss";
import logoFooter from "../../assets/logos/logo-footer.svg";

function Footer() {
	return (
		<footer>
			<img src={logoFooter} alt="logo" />
			<div>
				<p className={styles.text}>© 202 - Kasa. All rights reserved </p>
			</div>
		</footer>
	);
}

export default Footer;
