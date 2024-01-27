import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const CountryDetailPage = () => {
  const restCountriesApi = 'https://restcountries.com/v3.1/alpha';
  const { id } = useParams(); // Asegúrate de que 'id' es un código de país válido para Rest Countries API (p. ej., 'US', 'FR')

  const fetchCountryDataById = async (id) => {
    const response = await fetch(`${restCountriesApi}/${id}`);
    const jsonData = await response.json();
    return jsonData[0]; // La API devuelve un array, así que tomamos el primer elemento
  };

  const { data: countryData, isLoading } = useQuery({
    queryKey: ['countryDetail', id],
    queryFn: () => fetchCountryDataById(id),
  });

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <h1>Country Details</h1>
      {countryData ? (
        <ul>
          <li>Name: {countryData.name.common}</li>
          <li>Population: {countryData.population}</li>
          <li>Region: {countryData.region}</li>
          <li>Subregion: {countryData.subregion}</li>
          <li>Capital: {countryData.capital ? countryData.capital[0] : 'N/A'}</li>
          <li>Languages: {Object.values(countryData.languages).join(', ')}</li>
        </ul>
      ) : (
        <p>Country data not found.</p>
      )}
    </div>
  );
};
