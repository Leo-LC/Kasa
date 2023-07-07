import Hero from "../../components/Hero";
import heroImage from "../../assets/images/hero-image-2.png";
import { useParams } from "react-router-dom";

function About() {
	const { id } = useParams();
	return (
		<>
			<Hero image={heroImage} text="Chez vous, partout" />
			<h1>Page du logement {id} </h1>
		</>
	);
}

export default About;
