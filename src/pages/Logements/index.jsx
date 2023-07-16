import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Slideshow from "../../components/Slideshow";
import DetailsGrid from "../../components/DetailsGrid";

function Logements() {
	// On récupère l'id du logement dans l'URL
	const { id } = useParams();

	// On cherche le logement qui a l'id correspondant
	const logement = logements.find((logement) => logement.id === id);

	// Si le logement n'existe pas, on redirige vers la page 404
	if (!logement) {
		return <Navigate to="/404" />;
	}

	// On affiche les données du logement lié à l'id dans l'URL
	return (
		<>
			<Slideshow logement={logement} />
			<DetailsGrid {...logement} />
		</>
	);
}

export default Logements;
