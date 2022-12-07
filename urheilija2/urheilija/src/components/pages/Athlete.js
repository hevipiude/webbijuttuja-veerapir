import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useState, useContext } from "react";
import AthletesContext from "../../context/AthletesContext";
import { useNavigate } from "react-router-dom";
const Athlete = (props) => {
  const athletesContext = useContext(AthletesContext); //hooks
  let history = useNavigate();
  const [showAthlete, setshowAthlete] = useState(false);
  const onDeleteClick = (id) => {
    athletesContext.poistaYhteystieto(id);
    window.location.reload();
    history("/");
  };
  const onShowClick = (e) => {
    let lippu = !showAthlete;
    setshowAthlete(lippu);
  };
  const {
    id,
    firstname,
    surname,
    nickname,
    birthYear,
    weight,
    photoLink,
    sport,
    acc,
  } = props.yhteystieto;

  const date = birthYear.split("T22:00:00.000Z");

  return (
    <div className="card card-body mb-3 justifyContent: flex-end">
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h4>
          {firstname} {surname}{" "}
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={photoLink} width={250}></img>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">Etunimi: {firstname}</li>
              <li className="list-group-item">Sukunimi: {surname}</li>
              <li className="list-group-item">Lempinimi: {nickname}</li>
              <li className="list-group-item">Syntymäaika: {date}</li>
              <li className="list-group-item">Paino: {weight}</li>
              <li className="list-group-item">Laji: {sport}</li>
              <li className="list-group-item">Saavutukset: {acc}</li>
            </ul>
            <div className="d-grid pt-2 gap-2 d-md-block">
              <Button variant="dark" href={`athletes/edit/${id}`}>
                Muokkaa
              </Button>
              <Button
                variant="danger"
                onClick={onDeleteClick.bind(this, { id })}
              >
                Poista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/*Puhelintieto.propTypes = {
yhteystieto: PropTypes.object.isRequired,
//deleteClickHandler: PropTypes.func.isRequired,//ei tarvita enää
};*/
export default Athlete;
