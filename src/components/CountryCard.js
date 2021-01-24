import { Link } from "react-router-dom";
import "./CountryCard.scss";

function CountryCard({ alphaCode, flagImageUrl, name, population, region, capital }) {
  return (
    <Link to={`/${alphaCode}`} className="CountryCard">
      <img className="CountryCard__Flag" src={flagImageUrl} alt={name} />
      <div className="CountryCard__Text">
        <h3>{name}</h3>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
