import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchFiled] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchFiled(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Robot Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
