import Hero from "../../components/Hero";
import heroImage from "../../assets/images/hero-image-2.png";
import Collapse from "../../components/Collapse/Collapse";
import about from "../../data/about.json";
import styles from "./about.module.scss";

function About() {
	return (
		<>
			<Hero image={heroImage} text="" />
			<div className={styles.aboutWrapper}>
				{about.map((item) => {
					return (
						<Collapse
							key={item.id}
							title={item.title}
							description=<p>{item.description}</p>
						/>
					);
				})}
			</div>
		</>
	);
}
export default About;
