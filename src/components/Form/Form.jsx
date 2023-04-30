import React, { useContext } from "react";
import axios from "axios";
import SwContext from "../../context/SwContext";
import styles from "./Form.module.css";
export default function Form() {
  const { sw, setSw, info, setInfo } = useContext(SwContext);

  console.log(sw);

  // Retrieve the relevant information when searching by the input model/name.
  const formSubmit = (e) => {
    e.preventDefault();

    if (!info) {
      return;
    }
    //Retrieving data based on the model and name.
    axios.get(`https://swapi.dev/api/starships/?search=${info}`).then((res) => {
      setSw(res.data.results);
      setInfo("");
    });
  };
  return (
    <div className={styles.searchForm}>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name/Model:{" "}
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
      </form>
    </div>
  );
}
