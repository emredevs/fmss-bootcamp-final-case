import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SwContext from "../../context/SwContext";
import Images from "../../Image.json";
import styles from "./List.module.css";
// Listing the data received from the API.
export default function List() {
  const { sw, setMore } = useContext(SwContext);

  return (
    <div className={styles.listConteiner}>
      <ul className={styles.list}>
        {sw.map((item, index) => {
          return (
            <li key={index}>
              {/* The place where we obtain the images from the Image.json file. */}
              {Images.map((img, index) =>
                img.name === item.name ? (
                  <img
                    key={index}
                    className={styles.img}
                    src={img.img}
                    alt=""
                  />
                ) : null
              )}

              <div>
                <h3>Gemi Adı: {item.name}</h3>
              </div>
              <p>Yıldız Gemisi Sınıfı: {item.starship_class}</p>
              <p>Model: {item.model}</p>
              <p>Hiper Sürücü Derecelendirmesi: {item.hyperdrive_rating}</p>

              <NavLink
                className={styles.NavLink}
                to={`/starship/${item.url.match(/\/(\d+)\/?$/)?.[1]}`}
              >
                <h4 className={styles.desc}>Gemi Detayı. . .</h4>
              </NavLink>
            </li>
          );
        })}
        <button
          className={styles.btnMore}
          onClick={() => setMore((prev) => Math.min(prev + 2, 10))}
        >
          Daha Fazla Gemi Yükle
        </button>
      </ul>
    </div>
  );
}
