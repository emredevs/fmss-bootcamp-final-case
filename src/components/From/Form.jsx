import axios from "axios";
import React, { useEffect, useContext } from "react";
import SwContext from "../../context/SwContext";

export default function Form() {
  const { sw, setSw, info, setInfo } = useContext(SwContext);

  useEffect(() => {
    if (!info) {
      return;
    }
    axios.get(`https://swapi.dev/api/starships/?search=${info}`).then((res) => {
      setSw(res.data.results);
      setInfo("");
    });
  }, [info]);

  console.log(sw);

  const formSubmit = (e) => {
    e.preventDefault();
    if (!info) {
      return;
    }
    axios.get(`https://swapi.dev/api/starships/?search=${info}`).then((res) => {
      setSw(res.data.results);
      setInfo("");
    });
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name/Model:
          <input
            value={info}
            type="text"
            name="name"
            id="name"
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
