import { KeyboardArrowUp, PersonOutlined } from "@mui/icons-material";
import "./widget.css";

const Widget = () => {
  const amount = 100;
  const diff = 20;
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Title</span>
        <span className="counter">$ {amount}</span>
        <span className="link">Link</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp /> {diff}%
        </div>
        <PersonOutlined
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default Widget;
