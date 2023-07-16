import { useState } from "react";
import chevronUp from "../../assets/icons/chevron-up.svg";
import chevronDown from "../../assets/icons/chevron-down.svg";
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
							<img
								src={chevronUp}
								alt="chevron-up"
								className={styles.chevron}
							/>
						) : (
							<img
								src={chevronDown}
								alt="chevron-down"
								className={styles.chevron}
							/>
						)}
					</button>
				</div>

				<div className={`${styles.wrapper}  ${isOpen ? styles.open : ""}`}>
					<div className={styles.collapseDescription}>{description}</div>
				</div>
			</div>
		</>
	);
}
