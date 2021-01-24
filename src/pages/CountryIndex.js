import "./CountryIndex.scss";
import React, { useState, useEffect } from "react";
import api from "../utils/api";

// Components
import FieldInput from "../components/form/FieldInput";
import FieldDropdown from "../components/form/FieldDropdown";
import CountryCard from "../components/CountryCard";
import Loading from "../components/Loading";
import Container from "../layout/Container";

// Icons
import IosSearchOutline from "react-ionicons/lib/IosSearchOutline";
import MdGlobe from "react-ionicons/lib/MdGlobe";

const regionOptions = [
  { label: "All", value: null },
  { label: "Africa", value: "africa" },
  { label: "Americas", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

let searchTimeoutId;

function CountryIndex() {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(regionOptions[0]);

  useEffect(() => {
    setCountries([]);

    async function fetchData() {
      let countries = [];

      if (searchString !== "") {
        countries = await api.searchCountries(searchString);
      } else if (selectedRegion.value) {
        countries = await api.regionCountries(selectedRegion.value);
      } else {
        countries = await api.allCountries();
      }

      setCountries(countries);
    }
    fetchData();
  }, [searchString, selectedRegion]);

  function handleSearchChange(value) {
    setSelectedRegion(regionOptions[0]);
    setSearchString(value);
  }

  function handleRegionChange(option) {
    setSearchString("");
    setSelectedRegion(option);
  }

  const mainComp = (
    <div className="CountryIndex__Grid">
      {countries.map((c) => (
        <CountryCard alphaCode={c.alpha3Code.toLowerCase()} flagImageUrl={c.flag} key={c.name} name={c.name} population={c.population} region={c.region} capital={c.capital} />
      ))}
    </div>
  );

  return (
    <div className="CountryIndex">
      <Container className="CountryIndex__Container">
        <div className="CountryIndex__Controls">
          <FieldInput className={"CountryIndex__SearchField"} placeholder="Search for a country" iconClass={IosSearchOutline} value={searchString} onChange={handleSearchChange} />
          <FieldDropdown className={"CountryIndex__RegionDropdown"} selectedOption={selectedRegion} placeholder="Filter by Region" options={regionOptions} value={selectedRegion} onChange={handleRegionChange} iconClass={MdGlobe} />
        </div>
        {countries.length ? mainComp : <Loading />}
      </Container>
    </div>
  );
}

export default CountryIndex;
