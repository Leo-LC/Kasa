import styles from "./hero.module.scss";

function Hero({ image, text }) {
	return (
		<div className={styles.hero}>
			<img src={image} alt="hero" className={styles.image} />
			<div className={styles.overlay}>
				<h1 className={styles.text}>{text}</h1>
			</div>
		</div>
	);
}

export default Hero;
