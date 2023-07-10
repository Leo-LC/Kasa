import Collapse from "../Collapse/Collapse";
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
	return (
		<div className={styles.detailsGridWrapper}>
			<div className={styles.logementTitle}>
				<h2>
					Logement {id} {title}
				</h2>
				<p>{location}</p>
			</div>
			<ul>
				{tags.map((tag) => (
					<li key={`${id} -  ${tag}`}>{tag}</li>
				))}
			</ul>
			<Collapse title="Description" description={description} />
			<div className={styles.host}>
				<p>{host.name}</p>
				<img src={host.picture} alt="host"></img>
			</div>
			<div className={styles.rating}>
				<p>{rating}</p>
			</div>
			<div>
				{/* <h3>Equipements</h3>
				<ul>
					{equipments.map((equipment) => (
						<li key={`${id} -  ${equipment}`}>{equipment}</li>
					))}
				</ul> */}
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
		</div>
	);
}
