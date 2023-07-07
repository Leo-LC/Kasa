import "./footer.scss";
import logoFooter from "../../assets/images/logo-footer.svg";

function Footer() {
	return (
		<footer>
			<img src={logoFooter} alt="logo" />
			<div>
				<p>© 202 - Kasa. All rights reserved </p>
			</div>
		</footer>
	);
}

export default Footer;
