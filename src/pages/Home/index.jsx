import Hero from "../../components/Hero";
import heroImage from "../../assets/images/hero-image-1.png";
import Cards from "../../components/Cards";
import "../../styles.css";

function Home() {
	return (
		<>
			<Hero image={heroImage} text="Chez vous, partout et ailleurs" />
			<Cards />
		</>
	);
}

export default Home;
