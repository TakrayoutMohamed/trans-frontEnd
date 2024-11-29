import { BiSearch } from "react-icons/bi"
import { searchFriendsInGame } from "../../styles"


const SearchFriendsInGame = () => {
  return (
    <div className={searchFriendsInGame}>
      <div className="input-field">
          <label htmlFor="searchSettings">
            <BiSearch size={22} color="white" className="search-add-on" />
          </label>
          <input
            type="text"
            name="search"
            id="searchSettings"
            placeholder="Search....."
          />
        </div>
    </div>
  )
}

export default SearchFriendsInGame