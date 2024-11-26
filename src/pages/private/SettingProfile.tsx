import { settingProfile } from "./styles";

const SettingProfile = () => {
  return (
    <div className={settingProfile}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="first-last-name">
          <div className="first-name">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" placeholder="alvares..."/>
          </div>
          <div className="last-name">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" placeholder="negredo..."/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingProfile;
