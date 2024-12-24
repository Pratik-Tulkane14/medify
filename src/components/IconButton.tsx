import searchIcon from "/search-white.png"
interface IconButtonProps{
  handleClick:()=>Promise<void>
}
const IconButton = ({ handleClick }: IconButtonProps) => {
  return (
    <div className="button-wrapper">
        <img src={searchIcon} className="btn-img"  alt="searchIcon" />
      <button onClick={handleClick} className="search-icon-btn">Search</button>
    </div>
  )
}

export default IconButton