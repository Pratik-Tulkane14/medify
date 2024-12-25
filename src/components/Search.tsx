import IconButton from "./IconButton";
import search from "/search.png";
import ambulance from "/ambulance.png";
import capsule from "/capsule.png";
import Doctor from "/Doctor.png";
import Drugstore from "/Drugstore.png";
import Hospital from "/Hospital.png";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../env";
import { useNavigate } from "react-router";
const Search: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [hospitalsList, setHospitalsList] = useState([]);
  const searchData = [
    { image: Doctor, name: "Doctor" },
    { image: Drugstore, name: "Labs" },
    { image: Hospital, name: "Hospitals" },
    { image: capsule, name: "Medical Store" },
    { image: ambulance, name: "ambulance" },
  ];
  const getStates = async () => {
    const result = await axios.get(`${BASE_URL}/states`);
    setStateList(result.data);
  };
  const getCities = async () => {
    const result = await axios.get(`${BASE_URL}/cities/${state}`);
    setCityList(result.data);
  };
  const getHospitals = async () => {
    const result = await axios.get(
      `${BASE_URL}/data?state=${state}&city=${city}`
    );
    navigate("/find-doctors",{
      state:{
        hospitalData:result.data
      }
    })
    setHospitalsList(result.data);
  };
  useEffect(() => {
    getStates();
  }, []);
  useEffect(() => {
    if (state != "State") {
      getCities();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <>
      <div className="search-wrapper">
        <div className="dropdown-wrapper">
          <div className="state-wrapper">
            <img src={search} className="search-icon" alt="search icon" />
            <select
              name="state"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {stateList.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="state-wrapper">
            <img src={search} className="search-icon" alt="search icon" />
            <select
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {cityList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className=""></div>
          <div className="">
            <IconButton handleClick={getHospitals} />
          </div>
        </div>
        {hospitalsList?.length < 1 ?
          <div className="dept-wrapper">
            <div className="search-heading">
              <p>You may be looking for</p>
            </div>
            <div className="dept">
              {searchData.map((item, index) => {
                return (
                  <div key={index} className="dept-box">
                    <img src={item.image} alt={item.name} />
                    <p className="dept-name">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div> : null}
      </div>
    </>
  );
};

export default Search;
