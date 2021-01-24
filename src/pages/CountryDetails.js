import "./CountryDetails.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

// Components
import Button from "../components/ui/Button";
import Loading from "../components/Loading";

// Icons
import IosArrowRoundBack from "react-ionicons/lib/IosArrowRoundBack";
import Container from "../layout/Container";

const nullItem = { borders: [], borderCountries: [] };

function CountryDetails() {
  const { country } = useParams();
  const [data, setData] = useState(nullItem);

  useEffect(() => {
    async function fetchData() {
      const data = await api.countryByCode(country);
      setData(data);
    }
    fetchData();
  }, [country]);

  const borderComp = (
    <div className="CountryDetails__Border">
      <strong>Border countries:</strong>
      <div className="CountryDetails__BorderList">
        {data.borderCountries.map((o) => (
          <Button to={o.alpha3Code} key={o.alpha3Code} label={o.name} onClick={() => setData(nullItem)} />
        ))}
      </div>
    </div>
  );

  const mainComp = (
    <div className="CountryDetails">
      <Container className="CountryDetails__Container">
        <Button className="CountryDetails__Back" label="Back" to="/" iconClass={IosArrowRoundBack} />
        <div className="CountryDetails__Content">
          <img className="CountryDetails__Flag" src={data.flag} alt={data.name} />
          <div className="CountryDetails__Text">
            <h1>{data.name}</h1>
            <div className="CountryDetails__Stats">
              <p>
                <strong>Native name:</strong> {data.nativeName}
              </p>
              <p>
                <strong>Top Level Domain:</strong> {data.topLevelDomain}
              </p>
              <p>
                <strong>Population:</strong> {data.population}
              </p>
              <p>
                <strong>Currencies:</strong> {data.currencies}
              </p>
              <p>
                <strong>Region:</strong> {data.region}
              </p>
              <p>
                <strong>Sub region:</strong> {data.subregion}
              </p>
              <p>
                <strong>Languages:</strong> {data.languages}
              </p>
              <p>
                <strong>Capital:</strong> {data.capital}
              </p>
            </div>
            {data.borderCountries.length ? borderComp : null}
          </div>
        </div>
      </Container>
    </div>
  );

  return data.name ? mainComp : <Loading />;
}

export default CountryDetails;
