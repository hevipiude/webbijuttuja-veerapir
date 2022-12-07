import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AthletesContext from "../context/AthletesContext";
import Button from "react-bootstrap/Button";

const EditAthlete = () => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [weight, setWeight] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [sport, setSport] = useState("");
  const [acc, setAcc] = useState("");
  const athletesContext = useContext(AthletesContext); //hooks
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const athlete = athletesContext.getYhteystieto(id).then((res) => {
        setFirstname(res.firstname);
        setSurname(res.surname);
        setNickname(res.nickname);
        setBirthYear(res.birthYear);
        setWeight(res.weight);
        setPhotoLink(res.photoLink);
        setSport(res.sport);
        setAcc(res.acc);
      });
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    const editedAthlete = {
      firstname: firstname,
      surname: surname,
      nickname: nickname,
      birthYear: birthYear,
      weight: weight,
      photoLink: photoLink,
      sport: sport,
      acc: acc,
    };

    athletesContext.setYhteystieto(id, editedAthlete);
    history("/");
  };
  const onChangeFirstN = (e) => {
    setFirstname(e.target.value);
  };
  const onChangeLastN = (e) => {
    setSurname(e.target.value);
  };
  const onChangeNickN = (e) => {
    setNickname(e.target.value);
  };
  const onChangeBirthYear = (e) => {
    setBirthYear(e.target.value);
  };
  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const onChangePhotoLink = (e) => {
    setPhotoLink(e.target.value);
  };
  const onChangeSport = (e) => {
    setSport(e.target.value);
  };
  const onChangeAcc = (e) => {
    setAcc(e.target.value);
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijaa</div>
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
                  onChange={onChangeFirstN}
                />
              </div>
              <div className="col">
                <label htmlFor="sukunimi">Sukunimi</label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control form-control-lg"
                  value={surname}
                  onChange={onChangeLastN}
                />
              </div>
              <div className="col">
                <label htmlFor="lempinimi">Lempinimi</label>
                <input
                  type="text"
                  name="nickname"
                  className="form-control form-control-lg"
                  value={nickname}
                  onChange={onChangeNickN}
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
                  onChange={onChangeBirthYear}
                />
              </div>
              <div className="col">
                <label htmlFor="paino">Paino</label>
                <input
                  type="text"
                  name="weight"
                  className="form-control form-control-lg"
                  value={weight}
                  onChange={onChangeWeight}
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
              onChange={onChangePhotoLink}
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
                  onChange={onChangeSport}
                />
              </div>
              <div className="col">
                <label htmlFor="saavutukset">Saavutukset</label>
                <input
                  type="text"
                  name="acc"
                  className="form-control form-control-lg"
                  value={acc}
                  onChange={onChangeAcc}
                />
              </div>
            </div>
          </div>
          <div className="d-grid pt-2 gap-2 d-md-block">
            <input
              type="submit"
              value="Vahvista muokkaus"
              className="btn btn-dark mt-2"
            />
            <Button variant="danger" href={"/"}>
              Peruuta
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditAthlete;
