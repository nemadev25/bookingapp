import "./new.css";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import { useState } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      console.log(data);
      // const uploadRes = await axios.post(
      //   "http://api.cloudinary/v1_1/nemadev/image/upload",
      //   data
      // );
      // const { url } = uploadRes.data;
      // const newUser = { ...info, img: url };
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="new__top">
          <h1>{title}</h1>
        </div>
        <div className="new__bottom">
          <div className="new__left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="new__right">
            <form>
              <div className="new__formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className=" new__formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button className="new__formButton" onClick={handleClick}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
