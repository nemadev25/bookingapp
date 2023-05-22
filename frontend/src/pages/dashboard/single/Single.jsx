import Chart from "../../../components/admin/chart/Chart";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import "./single.css";
import List from "../../../components/admin/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single__container">
        <Navbar />
        <div className="single__top">
          <div className="single__topLeft">
            <div className="single__topLeft__editButton">Edit</div>
            <h1 className="single__title">Information</h1>
            <div className="single__topLeft__item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="single__topLeft__itemImg"
              />
              <div className="single__topLeft__details">
                <h1 className="single__topLeft__itemTitle">Jane Doe</h1>
                <div className="single__topLeft__detailItem">
                  <span className="single__topLeft__itemKey">Email:</span>
                  <span className="single__topLeft__itemValue">
                    janedoe@email.com
                  </span>
                </div>
                <div className="single__topLeft__detailItem">
                  <span className="single__topLeft__itemKey">Phone:</span>
                  <span className="single__topLeft__itemValue">
                    +1 123 456789
                  </span>
                </div>
                <div className="single__topLeft__detailItem">
                  <span className="single__topLeft__itemKey">Address:</span>
                  <span className="single__topLeft__itemValue">
                    Elton St. 234 Garden Yd. New York
                  </span>
                </div>
                <div className="single__topLeft__detailItem">
                  <span className="single__topLeft__itemKey">Country:</span>
                  <span className="single__topLeft__itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single__topRight">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="single__bottom">
          <h1 className="single__title title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
