import { BiBlock, BiSearch } from "react-icons/bi";
import { searchFriendsInGame } from "../../styles";
import { ChangeEvent, memo, useState } from "react";
import { Link } from "react-router-dom";
import { profileIcon } from "@/media-exporting";
import { RiUserAddFill } from "react-icons/ri";

interface SearchUsers {
  userName: string;
  firstName: string;
  lastName: string;
  status: boolean;
}

const AllUsers: SearchUsers[] = [
  {
    userName: "alvares1",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares2",
    firstName: "alvares",
    lastName: "negredo",
    status: false,
  },
  {
    userName: "alvares3",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares4",
    firstName: "alvares",
    lastName: "negredo",
    status: false,
  },
  {
    userName: "alvares5",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares6",
    firstName: "alvares",
    lastName: "negredo",
    status: false,
  },
  {
    userName: "alvares7",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares8",
    firstName: "alvares",
    lastName: "negredo",
    status: false,
  },
  {
    userName: "alvares9",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares10",
    firstName: "alvares",
    lastName: "negredo",
    status: false,
  },
  {
    userName: "alvares11",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares12",
    firstName: "alvares",
    lastName: "negredo",
    status: false,
  },
  {
    userName: "alvares13",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares14",
    firstName: "alvares",
    lastName: "negredo",
    status: false,
  },
  {
    userName: "alvares15",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares16",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares17",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
  {
    userName: "alvares18",
    firstName: "alvares",
    lastName: "negredo",
    status: true,
  },
];
let isInputFocused: boolean = false;
let isDevFocused: boolean = false;
const hideSearchList = () => {
  let selectSearchList = document.querySelector(".searched-friends-list");
  if (isInputFocused === false && isDevFocused === false) {
    if (!selectSearchList?.classList.contains("d-none"))
      selectSearchList?.classList.add("d-none");
  }
};
const showSearchList = () => {
  let selectSearchList = document.querySelector(".searched-friends-list");
  if (selectSearchList?.classList.contains("d-none"))
    selectSearchList?.classList.remove("d-none");
};

const SearchFriendsInGame = () => {
  const [users, setUsers] = useState<SearchUsers[]>([]);
  function searchForUser(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    let user = event.currentTarget.value;
    if (!user.length) {
      users.length && setUsers([]);
    } else {
      setUsers(
        AllUsers.filter((filteredUser) => {
          return filteredUser.userName
            .toLowerCase()
            .includes(user.toLowerCase());
        })
      );
    }
  }
  return (
    <div className={searchFriendsInGame}>
      <div className="input-field">
        <label htmlFor="searchUsers">
          <BiSearch size={22} color="white" className="search-add-on" />
        </label>
        <input
          type="text"
          name="searchUsers"
          id="searchUsers"
          className="searchUsers"
          placeholder="Search....."
          onChange={(event) => {
            searchForUser(event);
          }}
          onFocus={() => {
            isInputFocused = true;
            showSearchList();
          }}
          onBlur={() => {
            isInputFocused = false;
            hideSearchList();
          }}
        />
      </div>
      <div
        className="searched-friends-list"
        tabIndex={0}
        onMouseEnter={() => (isDevFocused = true)}
        onMouseLeave={() => (isDevFocused = false)}
        onFocus={() => showSearchList()}
        onBlur={() => {
          isDevFocused = false;
          hideSearchList();
        }}
      >
        {users && users.length ? (
          users.map((user, index) => (
            <div className="searched-friends-cards" key={index}>
              <Link
                to={`/profile/` + user.userName}
                className="user-image-first-last-name"
              >
                <div className="user-image">
                  <div className="">
                    <img
                      src={profileIcon}
                      alt=""
                      className="rounded-5 bg-info"
                    />
                  </div>
                </div>
                <div className="user-first-last-name">
                  <div className="first-last-name">
                    {user.firstName + " " + user.lastName}
                  </div>
                  <div className="user-name">{user.userName}</div>
                </div>
              </Link>
              <div className="block-add-button">
                <div className="add-button">
                  <RiUserAddFill />
                </div>
                <div className="block-button">
                  <BiBlock />
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default memo(SearchFriendsInGame);
