import React, { useContext } from "react";
import SwContext from "../../context/SwContext";
import styles from "./List.module.css";
import { NavLink } from "react-router-dom";
import Images from "../../Image.json";

export default function List() {
  const { sw, setMore } = useContext(SwContext);
  return (
    <div>
      <ul className={styles.list}>
        {sw.map((item, index) => {
          return (
            <li key={index}>
              {Images.map((img, index) => (
                <div key={index}>
                  {img.name === item.name ? (
                    <img className={styles.img} src={img.img} alt="" />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <h3>Gemi Adı: {item.name}</h3>
              <p>Yıldız Gemisi Sınıfı: {item.starship_class}</p>
              <p>Model: {item.model}</p>
              <p>Hiper Sürücü Derecelendirmesi: {item.hyperdrive_rating}</p>

              <NavLink
                className={styles.NavLink}
                to={`/description/${item.name}`}
              >
                <h4 className={styles.desc}>Description</h4>
              </NavLink>
            </li>
          );
        })}
        <button
          className={styles.btnMore}
          onClick={() => setMore((prev) => Math.min(prev + 2, 10))}
        >
          Daha Fazla Yükle
        </button>
      </ul>
    </div>
  );
}
