import styles from "./rating.module.scss";

export default function Rating({ rating }) {
	
	const range = [1, 2, 3, 4, 5];

	return (
		<div className={styles.rating}>
			{range.map((number) => (
				<i
					key={number}
					className={`${styles.star} fa-solid fa-star`}
					style={rating < number ? { color: "grey" } : null}
				></i>
			))}
		</div>
	);
}
