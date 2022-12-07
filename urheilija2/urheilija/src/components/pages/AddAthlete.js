import React from "react";

import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AthletesContext from "../../context/AthletesContext";
require("react-datepicker/dist/react-datepicker.css");

export default function LisaaPuhelintieto() {
  let history = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [weight, setWeight] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [sport, setSport] = useState("");
  const [acc, setAcc] = useState("");
  const athletesContext = useContext(AthletesContext); //hooks

  const handleSubmit = async (e) => {
    const uusiUrheilija = {
      firstname: firstname,
      surname: surname,
      nickname: nickname,
      birthYear: birthYear,
      weight: weight,
      photoLink: photoLink,
      sport: sport,
      acc: acc,
    };
    console.log("Tarkistetaan uusiUrheilija -objekti:");
    console.log(uusiUrheilija);

    athletesContext.setYhteystiedot(uusiUrheilija);
    history("/");
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilija</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group mb-3">
            <div className="row">
              <div className="col">
                <label htmlFor="etunimi">Etunimi</label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control form-control-lg"
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="sukunimi">Sukunimi</label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control form-control-lg"
                  value={surname}
                  onChange={(event) => setSurname(event.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="lempinimi">Lempinimi</label>
                <input
                  type="text"
                  name="nickname"
                  className="form-control form-control-lg"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="row">
              <div className="col">
                <label htmlFor="syntymaAika">Syntymäaika (vvvv-kk-pp)</label>
                <input
                  type="text"
                  name="birthYear"
                  className="form-control form-control-lg"
                  value={birthYear}
                  onChange={(event) => setBirthYear(event.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="paino">Paino</label>
                <input
                  type="text"
                  name="weight"
                  className="form-control form-control-lg"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="linkki">Linkki kuvaan</label>
            <input
              type="text"
              name="photoLink"
              className="form-control form-control-lg"
              value={photoLink}
              onChange={(event) => setPhotoLink(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <div className="row">
              <div className="col">
                <label htmlFor="laji">Laji</label>
                <input
                  type="text"
                  name="sport"
                  className="form-control form-control-lg"
                  value={sport}
                  onChange={(event) => setSport(event.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="saavutukset">Saavutukset</label>
                <input
                  type="text"
                  name="acc"
                  className="form-control form-control-lg"
                  value={acc}
                  onChange={(event) => setAcc(event.target.value)}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Lisää urheilija"
            className="btn btn-dark mt-2"
          />
        </form>
      </div>
    </div>
  );
}
