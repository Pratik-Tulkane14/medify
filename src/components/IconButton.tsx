import searchIcon from "/search-white.png"
const IconButton:React.FC = () => {
  return (
    <div className="button-wrapper">
        <img src={searchIcon} className="btn-img"  alt="searchIcon" />
        <button type="submit" className="search-icon-btn">search</button>
    </div>
  )
}

export default IconButton