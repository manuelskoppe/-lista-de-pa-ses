import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CountriesPage = () => {
  const [showCountries, setShowCountries] = useState(false);
  const restCountriesApi = 'https://restcountries.com/v3.1/all';

  const fetchCountries = async () => {
    const response = await fetch(restCountriesApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: countriesData, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    enabled: showCountries,
  });

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <h1>Countries</h1>
      <button onClick={() => setShowCountries(true)}>Show Countries</button>
      <ul>
        {countriesData?.map((country) => (
          <li key={country.cca3}>
            {/* Aquí usamos `Link` para navegar basándonos en el código del país (CCA3). Asegúrate de configurar la ruta correctamente en tu Router. */}
            <Link to={`/countries/${country.cca3}`}>
              <p>{country.name.common}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
