import Hero from "../../components/Hero";
import heroImage from "../../assets/images/hero-image-2.png";
import Collapse from "../../components/Collapse/Collapse";
import about from "../../data/about.json";

function About() {
	return (
		<>
			<Hero image={heroImage} text="" />
			{about.map((item) => {
				return (
					<Collapse
						key={item.id}
						title={item.title}
						description={item.description}
					/>
				);
			})}
		</>
	);
}
export default About;
