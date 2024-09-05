import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { useState, useEffect } from "react";
import { Input } from "../ui/Input/Input";

function App() {
  const [dataCards, setDataCards] = useState([]); // по умолчанию  задали состояние пустого массива
  // setDataCards(dataCards.push("123")) // - функция setDataCards, можем изменить состояние переменной
  const [newData, setFindCards] = useState([]);

  async function getData() {
    try {
      const API = await fetch(
        "https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters"
      );
      const data = await API.json();
      setDataCards(data);
      // console.log(dataCards);
      setFindCards(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []); // - второй параметр массив зависимости

  // - функция поиска по героям
  function cardFind(evt) {
    const result = evt.target.value.toLowerCase().trim();
    setFindCards(
      (newData = data.filter((el) => el.name.toLowerCase().includes(result)))
    );
  }

  return (
    <>
      <Header cardFind={cardFind} />
      <Main data={dataCards} />
    </>
  );
}

export default App;
