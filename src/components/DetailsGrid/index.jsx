import Collapse from "../Collapse";
import Rating from "../Rating";
import styles from "./detailsgrid.module.scss";

export default function DetailsGrid({
	id,
	title,
	description,
	pictures,
	host,
	rating,
	location,
	equipments,
	tags,
}) {
	const hostFirstName = host.name.split(" ")[0];
	const hostLastName = host.name.split(" ")[1];

	return (
		<div className={styles.detailsGridWrapper}>
			<div className={styles.logementTitle}>
				<h2>{title}</h2>
				<p>{location}</p>
			</div>

			<ul className={styles.tags}>
				{tags.map((tag) => (
					<li key={`${id} -  ${tag}`}>{tag}</li>
				))}
			</ul>
			<div className={styles.hostRating}>
				<Rating rating={rating} />
				<div className={styles.host}>
					<p>
						{hostFirstName} <br /> {hostLastName}{" "}
					</p>
					<img src={host.picture} alt="host"></img>
				</div>
			</div>

			<Collapse title="Description" description=<p>{description}</p> />

			<Collapse
				title="Equipements"
				description={
					<ul>
						{equipments.map((equipment) => (
							<li key={`${id} -  ${equipment}`}>{equipment}</li>
						))}
					</ul>
				}
			/>
		</div>
	);
}
