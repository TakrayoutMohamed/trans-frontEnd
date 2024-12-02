import { TbCloudUpload } from "react-icons/tb";
import { settingProfile } from "./styles";

function checkIsImageValid() {
  let previewImage = document.getElementById(
    "selectedImage"
  ) as HTMLImageElement;
  let formInputImage = document.getElementById(
    "formInputImage"
  ) as HTMLInputElement;
  let errorsSpan = document.getElementById("image-errors") as HTMLSpanElement;
  let file = formInputImage.files;
  if (file) {
    errorsSpan.innerText = "";
    let newImage = new Image();
    newImage.src = URL.createObjectURL(file[0]);
    newImage.onload = function () {
      let size = file[0].size / 1000000; //converting from bytes to MB
      if (size > 10) errorsSpan.innerText = "image has more than 10MB";
      if (newImage.width > 400 || newImage.height > 800)
        errorsSpan.innerText =
          "image dimentions not accepted, please retry with an other one ";
      if (errorsSpan.innerText !== "") {
        formInputImage.value = "";
        previewImage.src = "";
        !previewImage.classList.contains("d-none") &&
          previewImage.classList.add("d-none");
        errorsSpan.classList.contains("d-none") &&
          errorsSpan.classList.remove("d-none");
      } else {
        previewImage.classList.contains("d-none") &&
          previewImage.classList.remove("d-none");
        !errorsSpan.classList.contains("d-none") &&
          errorsSpan.classList.add("d-none");
        previewImage.src = newImage.src;
      }
    };
  }
}

const SettingProfile = () => {
  return (
    <div className={settingProfile}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submited");
        }}
        encType="multipart/form-data"
      >
        <div className="first-last-name">
          <div className="first-name">
            <label htmlFor="firstName">First name</label>
            <input
              autoComplete="on"
              type="text"
              id="firstName"
              placeholder="alvares..."
            />
          </div>
          <div className="last-name">
            <label htmlFor="lastName">Last name</label>
            <input
              autoComplete="on"
              type="text"
              id="lastName"
              placeholder="negredo..."
            />
          </div>
        </div>
        <div className="email-username">
          <div className="email">
            <label htmlFor="emailsetting">Email</label>
            <input
              autoComplete="on"
              type="email"
              id="emailsetting"
              placeholder="mail@xyz.abc..."
              disabled
            />
          </div>
          <div className="username">
            <label htmlFor="username">User name</label>
            <input
              autoComplete="on"
              type="text"
              id="username"
              placeholder="username..."
              disabled
            />
          </div>
        </div>
        <div className="profile-img-update">
          <label htmlFor="formInputImage" className="">
            <div className="file-icon">
              <TbCloudUpload color="black" size={20} />
            </div>
            <div className="file-text">
              Click to upload or drag and drop
              <br />
              SVG, PNG, JPG, JPEG or GIF (max, 800x400px)
            </div>
            <input
              autoComplete="on"
              className="form-controld"
              type="file"
              name="image"
              id="formInputImage"
              accept=".svg,.png,.jpg,.jpeg,.gif"
              onChange={checkIsImageValid}
            />
            <img alt="user image" className="d-none" id="selectedImage" />
            <span id="image-errors" className="text-danger d-none"></span>
          </label>
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

export default SettingProfile;
