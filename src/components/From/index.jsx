import axios from "axios";
import React, { useEffect, useContext } from "react";
import SwContext from "../../context/SwContext";
import styles from "./Form.module.css";
export default function Form() {
  const { sw, setSw, info, setInfo, more } = useContext(SwContext);

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

  //sayfa ilk yüklendiğinde bize ilk 4 gimiyi getir ve daha fazla yükle butonuna tıklandığında diğer gemileride listeler
  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      const firstTenShips = res.data.results.slice(0, more);
      setSw(firstTenShips);
    });
  }, [more]);

  console.log(sw);
  console.log(more);

  // inputtan girilen model/name göre arama yaptığımızda ilgili veririn getirilmesi
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
