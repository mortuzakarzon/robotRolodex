import "./search-box.styles.css"


const SearchBox = ({ onSearchChange }) => {
  return (<div>
    <input className="search-box" type="search" onChange={onSearchChange} />
  </div>)
}



export default SearchBox;