import { useState } from "react";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import { roomInputs } from "../../../formSource";
import "./newRoom.css";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/hotels");
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="newRoom">
      <Sidebar />
      <div className="newRoom__container">
        <Navbar />
        <div className="newRoom__top">
          <h1>Add New Room</h1>
        </div>
        <div className="newRoom__bottom">
          <div className="newRoom__right">
            <form>
              {roomInputs.map((input) => (
                <div className="newRoom__formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="newRoom__formInput">
                <label>Rooms</label>
                <textarea
                  placeholder="give comma between room numbers"
                  onChange={(e) => setRooms(e.target.value)}
                ></textarea>
              </div>
              <div className="newRoom__formInput">
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option value={hotel._id} key={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>
              <button className="newRoom__button" onClick={handleClick}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
