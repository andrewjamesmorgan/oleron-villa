import { useContext, useEffect } from 'react';
import { UserContext } from '../../App';

export default function FrenchPage() {
  const { setLanguage } = useContext(UserContext);

  useEffect(() => {
    setLanguage('fr');
  }, [setLanguage]); // This ensures the effect runs only when the component is
                     // mounted
  return (
    <></>
  );
}