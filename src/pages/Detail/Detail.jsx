import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Images from "../../Image.json";
import styles from "./Detail.module.css";
import { Header } from "../../components/Header";
// Listing the details about the ships when the detail button is clicked.
export default function Detail() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);
  // To prevent errors when the page is refreshed on the detail page, we are assigning the data from the API to the setShip state within the page.
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((res) => setShip(res.data));
  }, []);
  console.log(ship);
  if (!ship) {
    return;
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        {/*The place where we obtain the images from the Image.json file. */}
        {Images.map((img, index) =>
          img.name === ship.name ? (
            <img key={index} className={styles.img} src={img.img} alt="" />
          ) : null
        )}

        <h1>{ship.name}</h1>
        <p> Yıldız Gemisi Sınıfı: {ship.starship_class}</p>
        <p>Model: {ship.model}</p>
        <p>Hiper Sürücü Derecelendirmesi: {ship.hyperdrive_rating}</p>
        <p>Üretici: {ship.manufacturer}</p>
        <p>uzunluk: {ship.length}</p>
        <p>Mürettebat: {ship.crew}</p>
        <p>Max Yolcu: {ship.passengers}</p>
        <p>kredi maliyeti: {ship.cost_in_credits}</p>
        <p>Kargo Kapasitesi: {ship.cargo_capacity}</p>
        <p>Maksimum Atmosfer Hızı: {ship.max_atmosphering_speed}</p>
        <NavLink className={styles.NavLink} to="/">
          <h3 className={styles.desc}>Hangara Dön</h3>
        </NavLink>
      </div>
    </>
  );
}
