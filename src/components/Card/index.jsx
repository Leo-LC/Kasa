import { Link } from "react-router-dom";
import styles from "./card.module.scss";

function Card({ image, title, logementId }) {
	return (
		<Link to={`/logements/${logementId}`}>
			<div className={styles.card}>
				<img className={styles.image} src={image} alt="card" />
				<div className={styles.overlay}>
					<h3 className={styles.title}>{title}</h3>
				</div>
			</div>
		</Link>
	);
}

export default Card;
