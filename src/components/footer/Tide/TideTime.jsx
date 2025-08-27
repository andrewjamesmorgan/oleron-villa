import React from "react";
import { useContext } from 'react';
import { UserContext } from '../../../App';

export default function TideTime({ tide }) {
  const { language } = useContext(UserContext);

  return (
    <div className="tide-time">
      <a href="https://www.tideschart.com/France/Nouvelle--Aquitaine/Charente--Maritime/Ile-d_Oleron----Vert-Bois_Les-Allassins/Weekly/" className="no-colour">
        <span className={tide.next === true ? 'tide-label-next' : 'tide-label'}>
            <i className={tide.status === 'high' ? 'fa fa-angle-double-up' : 
              'fa fa-angle-double-down'
            }></i> 
            {language === 'fr' ? ` ${tide.dayOfWeekFrench} ` : 
              ` ${tide.dayOfWeekEnglish} `
            }
            {`${tide.time}: `}
            {`${tide.status === 'low' ? (
                language === 'fr' ? 'Marée basse' : 'Low tide') : (
                language === 'fr' ? 'Marée haute' : 'High tide') 
              }`
            }
        </span>
      </a>
    </div>
  );
}