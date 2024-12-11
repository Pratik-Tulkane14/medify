import IconButton from "./IconButton"
import search from "/search.png"
const Search: React.FC = () => {
  return (
    <>
      <div className="dropdown-wrapper">
        <div className="state-wrapper">
          <img src={search} className="search-icon" alt="search icon" />
          <select name="state" id="state" defaultValue="state" >
            <option value="state" disabled>state</option>
            <option value="cpur">Cpur</option>
          </select>
        </div>
        <div className=""></div>
        <div className="">
          <IconButton/>
        </div>
      </div>
     

    </>
  )
}

export default Search