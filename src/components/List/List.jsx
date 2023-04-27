import React, { useContext } from "react";
import SwContext from "../../context/SwContext";
import styles from "./List.module.css";
import { NavLink } from "react-router-dom";
export default function List() {
  const { sw, setMore } = useContext(SwContext);
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
              <p>
                <NavLink to={`/description/${item.name}`}>des</NavLink>
              </p>
            </li>
          );
        })}
      </ul>
      <button
        className={styles.btnMore}
        onClick={() => setMore((prev) => Math.min(prev + 2, 10))}
      >
        Daha Fazla Yükle
      </button>
    </div>
  );
}
