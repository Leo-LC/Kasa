import styles from "./slideshow.module.scss";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { useState } from "react";

export default function Slideshow({ logement }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const currentImage = logement.pictures[currentSlide];

	const handleClick = (e) => {
		if (e.target.classList.contains(styles.arrowLeft)) {
			currentSlide === 0
				? setCurrentSlide(logement.pictures.length - 1)
				: setCurrentSlide(currentSlide - 1) && console.log(currentImage);
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

			{/* map des images */}

			<div className={styles.slideshow}>
				<div className={styles.slideshowImageWrapper}>
					<img
						className={styles.slideshowImage + " " + styles.active}
						src={logement.pictures[currentSlide]}
						alt="logement"
					/>
				</div>
			</div>
		</div>
	);
}
