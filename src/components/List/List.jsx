import React, { useContext } from "react";
import SwContext from "../../context/SwContext";
import styles from "./List.module.css";
export default function List() {
  const { sw } = useContext(SwContext);
  return (
    <div>
      <ul className={styles.list}>
        {sw.map((item, index) => {
          return (
            <li key={index}>
              <h3>Gemi Adı: {item.name}</h3>
              <p>Yıldız Gemisi Sınıfı: {item.starship_class}</p>
              <p>Model: {item.model}</p>
              <p>Hiper Sürücü Derecelendirmesi: {item.hyperdrive_rating}</p>
              <p>Üretici: {item.manufacturer}</p>
              <p>uzunluk: {item.length}</p>
              <p>Mürettebat: {item.crew}</p>
              <p>Kargo Kapasitesi: {item.cargo_capacity}</p>
              <p>Maksimum Atmosfer Hızı: {item.max_atmosphering_speed}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
