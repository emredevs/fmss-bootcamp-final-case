import React, { useContext } from "react";
import SwContext from "../../context/SwContext";
import { NavLink, useParams } from "react-router-dom";
export default function Description() {
  const { id } = useParams();
  const { sw } = useContext(SwContext);
  const starWars = sw.find((star) => star.name === id);

  return (
    <div>
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
      <NavLink to="/">
        <h3>Home</h3>
      </NavLink>
    </div>
  );
}
