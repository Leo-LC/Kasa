import { useState } from "react";
import chevronUp from "../../assets/images/chevron-up.svg";
import chevronDown from "../../assets/images/chevron-down.svg";
import styles from "./collapse.module.scss";

export default function Collapse({ title, description }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={styles.collapseWrapper}>
				<div className={styles.collapseTitle}>
					<h3>{title}</h3>
					<button
						className={styles.collapseButton}
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? (
							<img src={chevronUp} alt="chevron-up" />
						) : (
							<img src={chevronDown} alt="chevron-down" />
						)}
					</button>
				</div>

				<div className={`${styles.wrapper}  ${isOpen ? styles.open : ""}`}>
					<div className={styles.collapseDescription}>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</>
	);
}
