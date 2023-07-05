import { Component } from "react";
import "./search-box.styles.css"


class SearchBox extends Component {

  render() {
    const { onSearchChange } = this.props.onSearchChange;
    return (<div>
      <input className="search-box" type="search" onChange={onSearchChange} />
    </div>)
  }
}

export default SearchBox;