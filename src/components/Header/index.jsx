import "./header.css";
import { Link } from "react-router-dom";
import logoDesktop from "../../assets/images/logo-desktop.svg";
import logoMobile from "../../assets/images/logo-mobile.svg";

function Header() {
	return (
		<header>
			<picture>
				<source media="(max-width: 768px)" srcSet={logoMobile} />
				<img src={logoDesktop} alt="logo" />
			</picture>
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
