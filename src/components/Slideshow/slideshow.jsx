import styles from "./slideshow.module.scss";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import { useState } from "react";

export default function Slideshow({ logement }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleClick = (e) => {
		if (e.target.classList.contains(styles.arrowLeft)) {
			currentSlide === 0
				? setCurrentSlide(logement.pictures.length - 1)
				: setCurrentSlide(currentSlide - 1);
		} else if (e.target.classList.contains(styles.arrowRight)) {
			currentSlide === logement.pictures.length - 1
				? setCurrentSlide(0)
				: setCurrentSlide(currentSlide + 1);
		}
	};

	return (
		<div className={styles.slideshowWrapper}>
			{logement.pictures.length > 1 && (
				<>
					<img
						src={arrowLeft}
						alt="arrow-left"
						className={`${styles.arrowLeft} ${styles.arrow}`}
						onClick={(e) => handleClick(e)}
					/>
					<img
						src={arrowRight}
						alt="arrow-right"
						className={`${styles.arrowRight} ${styles.arrow}`}
						onClick={(e) => handleClick(e)}
					/>

					<p className={styles.slideshowIndex}>
						{currentSlide + 1} / {logement.pictures.length}
					</p>
				</>
			)}

			<div className={styles.slideshow}>
				<div className={styles.slideshowImageWrapper}>
					<img
						className={styles.slideshowImage}
						src={logement.pictures[currentSlide]}
						alt="logement"
					/>
				</div>
			</div>

			{/* 		<div className={styles.slideshow}>
				{logement.pictures.map((picture) => (
					<div key={picture} className={styles.slideshowImageWrapper}>
						<img
							className={styles.slideshowImage}
							src={picture}
							alt="logement"
						/>
					</div>
				))}
			</div> */}
		</div>
	);
}
