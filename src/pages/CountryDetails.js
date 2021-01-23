import { useParams } from "react-router-dom";

function CountryDetails() {
  let { country } = useParams();

  return <h1>Country Details {country}</h1>;
}

export default CountryDetails;
