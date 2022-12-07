import React, { useContext, useEffect } from "react";
import Athlete from "./Athlete";
import AthletesContext from "../../context/AthletesContext";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Athletes = () => {
  const athletesContext = useContext(AthletesContext); //hooks
  console.log(athletesContext);
  useEffect(() => {
    //kun komponentti ladataan muistiin -> tapaht. useEffect
    athletesContext.getYhteystiedot(); //haetaan yhteystiedot
    console.log(athletesContext);
  }, []); //Kun komponentti piirretään, suoritetaan kerran
  return (
    <>
      <h1 className="display-4 mb-4">
        <span className="text-danger">Urheilijat</span>
      </h1>
      <React.Fragment>
        {athletesContext.yhteystiedot.length
          ? athletesContext.yhteystiedot.map((yhteystieto) => (
              <Athlete key={yhteystieto.id} yhteystieto={yhteystieto} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default Athletes;
