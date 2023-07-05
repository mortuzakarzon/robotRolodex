import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField: searchString };
    });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  render() {
    const { searchField, monsters } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Robot Rolodex</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
