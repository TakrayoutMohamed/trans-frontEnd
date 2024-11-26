import { IoMdEyeOff } from "react-icons/io";
import { settingPassword } from "./styles";

const SettingPassword = () => {
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
                id="toggleCurrentPassword"
                className="current-password-eye"
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
                id="toggleNewPassword"
                className="new-password-eye"
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
                id="toggleRepeatPassword"
                className="repeat-password-eye"
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
