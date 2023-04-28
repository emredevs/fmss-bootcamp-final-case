import React, { useContext } from "react";
import SwContext from "../../context/SwContext";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Description.module.css";
import Images from "../../Image.json";
export default function Description() {
  const { id } = useParams();
  const { sw } = useContext(SwContext);
  const starWars = sw.find((star) => star.name === id);
  if (!starWars) {
    return <div>Bir hata oluştu. Lütfen tekrar deneyin.</div>;
  }
  return (
    <div className={styles.container}>
      {Images.map((img, index) => (
        <div key={index}>
          {img.name === starWars.name ? (
            <img className={styles.img} src={img.img} alt="" />
          ) : (
            ""
          )}
        </div>
      ))}
      <h1>{starWars.name}</h1>
      <p>Yıldız Gemisi Sınıfı: {starWars.starship_class}</p>
      <p>Model: {starWars.model}</p>
      <p>Hiper Sürücü Derecelendirmesi: {starWars.hyperdrive_rating}</p>
      <p>Üretici: {starWars.manufacturer}</p>
      <p>uzunluk: {starWars.length}</p>
      <p>Mürettebat: {starWars.crew}</p>
      <p>Max Yolcu: {starWars.passengers}</p>
      <p>kredi maliyeti: {starWars.cost_in_credits}</p>
      <p>Kargo Kapasitesi: {starWars.cargo_capacity}</p>
      <p>Maksimum Atmosfer Hızı: {starWars.max_atmosphering_speed}</p>
      <NavLink className={styles.NavLink} to="/">
        <h3 className={styles.desc}>Home</h3>
      </NavLink>
    </div>
  );
}
