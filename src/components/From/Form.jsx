import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import SwContext from "../../context/SwContext";
import styles from "./Form.module.css";
export default function Form() {
  const { sw, setSw, info, setInfo } = useContext(SwContext);
  const [more, setMore] = useState(10);

  //modele ve ada göre getirme
  // useEffect(() => {
  //   if (!info) {
  //     return;
  //   }
  //   axios.get(`https://swapi.dev/api/starships/?search=${info}`).then((res) => {
  //     setSw(res.data.results);
  //     setInfo("");
  //   });
  // }, [info]);

  useEffect(() => {
    if (!info) {
      return;
    }
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      const firstTenShips = res.data.results.slice(0, more);
      setSw(firstTenShips);
      setInfo("");
    });
  }, []);

  console.log(sw);
  console.log(more);
  const formSubmit = (e) => {
    e.preventDefault();
    if (!info) {
      return;
    }
    //modele ve ada göre getirme
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
            className={styles.Input}
            value={info}
            placeholder="bir gemi adı yada modeli giriniz"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>

        <button onClick={() => setMore((prev) => prev + 3)}>More</button>
      </form>
    </div>
  );
}
