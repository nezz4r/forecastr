import { useContext, useState, createContext, ReactNode } from 'react';

const CityContext = createContext(null);

export function useCity() {
  return useContext(CityContext);
}

interface Props {
  children?: ReactNode;
  props?: any;
}

export default function CityProvider({ children, ...props }: Props) {
  const [city, setCity] = useState('');
  const [citiesList, setCitiesList] = useState([]);
  return (
    <CityContext.Provider
      value={{
        city,
        setCity,
        citiesList,
        setCitiesList,
      }}
      {...props}
    >
      {children}
    </CityContext.Provider>
  );
}
