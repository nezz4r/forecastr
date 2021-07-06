import useLocalStorage from '@hooks/useLocalStorage';
import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect
} from 'react';

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
  const [coords, setCoords] = useState({});
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setCoords({ lat: latitude, lon: longitude });
          });
        }

        if (result.state === 'denied') {
          return null;
        }
        return null;
      });
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setCoords({ lat: latitude, lon: longitude });
        },
        (err) => {
          // eslint-disable-next-line
          console.error(err);
        }
      );
    }
  }, []);

  return (
    <CityContext.Provider
      value={{
        city,
        setCity,
        citiesList,
        setCitiesList,
        coords,
        setCoords
      }}
      {...props}
    >
      {children}
    </CityContext.Provider>
  );
}
