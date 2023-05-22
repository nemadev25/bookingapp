import { useState } from "react";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import "./newHotel.css";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { hotelInputs } from "../../../formSource";
import useFetch from "../../../hooks/useFetch";

const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/rooms");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectecOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  return (
    <div className="newHotel">
      <Sidebar />
      <div className="newHotel__container">
        <Navbar />
        <div className="newHotel__top">
          <h1>Add New Hotel</h1>
        </div>
        <div className="newHotel__bottom">
          <div className="newHotel__left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="newHotel__right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.value)}
                  style={{ display: "none" }}
                />
              </div>
              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>
              <button className="newHotel__button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
