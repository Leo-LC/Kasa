import Card from "../Card";

import styles from "./cards.module.scss";
import logements from "../../data/logements.json";

function Cards() {
	return (
		<div>
			<div className={styles.container}>
				{logements.map((logement) => (
					<Card
						key={logement.id}
						image={logement.cover}
						title={logement.title}
						logementId={logement.id}
					/>
				))}
			</div>
		</div>
	);
}

export default Cards;
