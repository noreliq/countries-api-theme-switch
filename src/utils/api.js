const baseUrl = "https://restcountries.eu/rest/v2";
const fields = `name;
                flag;
                region;
                population;
                capital;
                nativeName;
                subregion;
                topLevelDomain;
                currencies;
                languages`;

async function callApi(url) {
  url += `?fields=${fields}`;

  let result, data;
  try {
    result = await fetch(url);
    data = await result.json();
  } catch (e) {
    console.log("Error fetching data for url", url);
  }

  return data;
}

export default {
  async allCountries() {
    const endpoint = `${baseUrl}/all`;
    const data = callApi(endpoint);
    return data;
  },
  async regionCountries(region) {
    const endpoint = `${baseUrl}/region/${region}`;
    const data = callApi(endpoint);
    return data;
  },
  async searchCountries(searchString) {
    const endpoint = `${baseUrl}/name/${searchString}`;
    const data = callApi(endpoint);
    return data;
  },
};
