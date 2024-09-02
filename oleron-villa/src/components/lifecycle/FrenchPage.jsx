import { useContext, useEffect } from 'react';
import { UserContext } from '../../App';

export default function FrenchPage() {
  const { setLanguage } = useContext(UserContext);

  useEffect(() => {
    setLanguage('fr');
  }, [setLanguage]);
  return (
    <></>
  );
}