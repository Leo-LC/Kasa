import { Link } from "react-router-dom";
import logoDesktop from "../../assets/logos/logo-desktop.svg";
import logoMobile from "../../assets/logos/logo-mobile.svg";
import styles from "./header.module.scss";

function Header() {
	return (
		<header className={styles.header}>
			<Link to={"/"}>
				<picture>
					<source media="(max-width: 768px)" srcSet={logoMobile} />
					<img src={logoDesktop} alt="logo" />
				</picture>
			</Link>
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/about">A Propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
