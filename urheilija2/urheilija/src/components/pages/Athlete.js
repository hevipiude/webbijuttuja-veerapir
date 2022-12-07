import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useState, useContext } from "react";
import AthletesContext from "../../context/AthletesContext";
import { useNavigate } from "react-router-dom";
const Puhelintieto = (props) => {
  const athletesContext = useContext(AthletesContext); //hooks
  let history = useNavigate();
  const [naytaPuhelintieto, setnaytaPuhelintieto] = useState(false);
  const onDeleteClick = (id) => {
    athletesContext.poistaYhteystieto(id);
    window.location.reload();
    history("/");
  };
  const onShowClick = (e) => {
    let lippu = !naytaPuhelintieto;
    setnaytaPuhelintieto(lippu);
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
    <div className="card card-body mb-3 display:flex, justifyContent: flex-end">
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h4>
          {firstname} {surname}
        </h4>
        <Button variant="dark" onClick={onShowClick.bind(this)}>
          ...
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="flex gx-2" role="group" aria-label="Second group">
          <Button variant="danger" onClick={onDeleteClick.bind(this, { id })}>
            Poista
          </Button>
          <Link to={`athletes/edit/${id}`}>
            <button className="btn btn-dark">Muokkaa</button>
          </Link>
        </div>
      </div>
      {naytaPuhelintieto ? (
        <ul className="list-group">
          <img src={photoLink} width={250}></img>
          <li className="list-group-item">Etunimi: {firstname}</li>
          <li className="list-group-item">Sukunimi: {surname}</li>
          <li className="list-group-item">Lempinimi: {nickname}</li>
          <li className="list-group-item">Syntymäaika: {date}</li>
          <li className="list-group-item">Paino: {weight}</li>
          <li className="list-group-item">Laji: {sport}</li>
          <li className="list-group-item">Saavutukset: {acc}</li>
        </ul>
      ) : null}
    </div>
  );
};
/*Puhelintieto.propTypes = {
yhteystieto: PropTypes.object.isRequired,
//deleteClickHandler: PropTypes.func.isRequired,//ei tarvita enää
};*/
export default Puhelintieto;
