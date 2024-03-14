// src/components/CountryList/CountryList.jsx
import React, { useState, useEffect } from 'react';
import styles from './CountryList.module.css';
import { fetchData } from '../../api/api';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetchData();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map(country => (
        <div key={country.cca2} className={styles.countryItem}>
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            width="50"
            height="30"
          />
          <span>{country.name.common}</span>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
