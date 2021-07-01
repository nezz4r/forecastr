import { useContext, createContext, ReactNode } from 'react';

import useLocalStorage from '@hooks/useLocalStorage';

const CityContext = createContext(null);

export function useCalendar() {
  return useContext(CityContext);
}

interface Props {
  children?: ReactNode;
  props?: any;
}

export default function CityProvider({ children, ...props }: Props) {
  const [city, setCity] = useLocalStorage('city', '');
  const [citiesList, setCitiesList] = useLocalStorage('cities-list', '');
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
