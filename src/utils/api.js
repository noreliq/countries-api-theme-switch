const baseUrl = "https://restcountries.eu/rest/v2";
const fullFields = "name;flag;region;population;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders";
const summFields = "name;flag;region;population;capital;alpha3Code";

async function callApi(url) {
  let result, data;
  try {
    result = await fetch(url);
    data = await result.json();
  } catch (e) {
    console.log("Error fetching data for url", url);
  }

  return data;
}

function transformCountries(data) {
  return data.filter((o) => o != null);
}

function transformCountry(data) {
  if (data.topLevelDomain) data.topLevelDomain = data.topLevelDomain.join(", ");
  if (data.currencies) data.currencies = data.currencies.map((c) => c.name).join(", ");
  if (data.languages) data.languages = data.languages.map((o) => o.name).join(", ");

  if (data.alpha3Code) data.alpha3Code = data.alpha3Code.toLowerCase();

  return data;
}

const api = {
  async allCountries() {
    const endpoint = `${baseUrl}/all?fields=${summFields}`;
    let data = await callApi(endpoint);
    data = transformCountries(data);
    return data;
  },
  async regionCountries(region) {
    const endpoint = `${baseUrl}/region/${region}?fields=${summFields}`;
    let data = await callApi(endpoint);
    data = transformCountries(data);
    return data;
  },
  async searchCountries(searchString) {
    const endpoint = `${baseUrl}/name/${searchString}?fields=${summFields}`;
    let data = await callApi(endpoint);
    data = transformCountries(data);
    return data;
  },
  async countryCodesToNames(codes) {
    const endpoint = `${baseUrl}/alpha/?codes=${codes};fields=name;alpha3Code`;
    let data = await callApi(endpoint);
    data = transformCountries(data);

    return data;
  },
  async countryByCode(code) {
    const endpoint = `${baseUrl}/alpha/${code}?fields=${fullFields}`;
    let data = await callApi(endpoint);

    const borderCodes = data.borders.map((b) => b.toLowerCase()).join(";");
    data.borderCountries = await this.countryCodesToNames(borderCodes);
    data = transformCountry(data);

    return data;
  },
};

export default api;
