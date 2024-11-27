import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { settingPassword } from "./styles";

function toggleCurrentPasswordEye() {
  let currentPasswordOn = document.getElementById("toggleCurrentPasswordEyeOn");
  let currentPasswordInput = document.getElementById("current-password");
  const type =
    currentPasswordInput?.getAttribute("type") === "password"
      ? "text"
      : "password";
  currentPasswordOn?.classList.contains("d-none")
    ? currentPasswordOn.classList.remove("d-none")
    : currentPasswordOn?.classList?.add("d-none");

  let currentPasswordOff = document.getElementById(
    "toggleCurrentPasswordEyeOff"
  );
  currentPasswordOff?.classList.contains("d-none")
    ? currentPasswordOff.classList.remove("d-none")
    : currentPasswordOff?.classList?.add("d-none");
  currentPasswordInput?.setAttribute("type", type);
}
function toggleNewPasswordEye() {
  let newPasswordOn = document.getElementById("toggleNewPasswordEyeOn");
  let newPasswordInput = document.getElementById("new-password");
  let newPasswordOff = document.getElementById("toggleNewPasswordEyeOff");
  const type =
    newPasswordInput?.getAttribute("type") === "password" ? "text" : "password";
  newPasswordOn?.classList.contains("d-none")
    ? newPasswordOn.classList.remove("d-none")
    : newPasswordOn?.classList?.add("d-none");
  newPasswordOff?.classList.contains("d-none")
    ? newPasswordOff.classList.remove("d-none")
    : newPasswordOff?.classList?.add("d-none");
  newPasswordInput?.setAttribute("type", type);
}
function toggleRepeatPasswordEye() {
  let repeatPasswordOn = document.getElementById("toggleRepeatPasswordEyeOn");
  let repeatPasswordInput = document.getElementById("repeat-password");
  let repeatPasswordOff = document.getElementById("toggleRepeatPasswordEyeOff");
  const type =
    repeatPasswordInput?.getAttribute("type") === "password"
      ? "text"
      : "password";
  repeatPasswordOn?.classList.contains("d-none")
    ? repeatPasswordOn.classList.remove("d-none")
    : repeatPasswordOn?.classList?.add("d-none");
  repeatPasswordOff?.classList.contains("d-none")
    ? repeatPasswordOff.classList.remove("d-none")
    : repeatPasswordOff?.classList?.add("d-none");
  repeatPasswordInput?.setAttribute("type", type);
}

const SettingPassword = () => {
  console.log("component of settings password is re-rendered");
  return (
    <div className={settingPassword}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submited");
        }}
      >
        <div className="current-password-container">
          <div className="current-password">
            <label htmlFor="current-password">Current password</label>
            <span className="current-password-span">
              <input
                autoComplete="on"
                type="password"
                id="current-password"
                placeholder="************"
              />
              <IoMdEyeOff
                color="white"
                size={20}
                id="toggleCurrentPasswordEyeOff"
                className="current-password-eye"
                onClick={toggleCurrentPasswordEye}
              />
              <IoMdEye
                color="white"
                size={20}
                id="toggleCurrentPasswordEyeOn"
                className="new-password-eye d-none"
                onClick={toggleCurrentPasswordEye}
              />
            </span>
          </div>
        </div>
        <div className="new-password-container">
          <div className="new-password">
            <label htmlFor="new-password">New password</label>
            <span className="new-password-span">
              <input
                autoComplete="on"
                type="password"
                id="new-password"
                placeholder="***********"
              />
              <IoMdEyeOff
                color="white"
                size={20}
                id="toggleNewPasswordEyeOff"
                className="new-password-eye"
                onClick={toggleNewPasswordEye}
              />
              <IoMdEye
                color="white"
                size={20}
                id="toggleNewPasswordEyeOn"
                className="new-password-eye d-none"
                onClick={toggleNewPasswordEye}
              />
            </span>
          </div>
          <div className="passwordHelper">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <div className="repeat-password-container">
          <div className="repeat-password">
            <label htmlFor="repeat-password">Repeat password</label>
            <span className="repeat-password-span">
              <input
                autoComplete="on"
                type="password"
                id="repeat-password"
                placeholder="***********"
              />
              <IoMdEyeOff
                color="white"
                size={20}
                id="toggleRepeatPasswordEyeOff"
                className="repeat-password-eye"
                onClick={toggleRepeatPasswordEye}
              />
              <IoMdEye
                color="white"
                size={20}
                id="toggleRepeatPasswordEyeOn"
                className="repeat-password-eye d-none"
                onClick={toggleRepeatPasswordEye}
              />
            </span>
          </div>
        </div>
        <div className="submit-button-container">
          <div className="submit-button">
            <input
              autoComplete="on"
              type="submit"
              value="Update"
              placeholder="username..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingPassword;
