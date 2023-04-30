import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { List } from "../components/List";
import SwContext from "../context/SwContext";
export default function Home() {
  const { more, setSw } = useContext(SwContext);
  //Fetch the first 4 ships when the page is initially loaded, and list the other ships when the "load more" button is clicked.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      const firstTenShips = res.data.results.slice(0, more);
      setSw(firstTenShips);
    });
  }, [more]);
  return (
    <>
      {/* Our input should only be displayed on the homepage and should not be called on the detail page. */}
      <Header>
        <Form />
      </Header>
      <List />
    </>
  );
}
