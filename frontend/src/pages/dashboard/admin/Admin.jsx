import Chart from "../../../components/admin/chart/Chart";
import Featured from "../../../components/admin/featured/Featured";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Widget from "../../../components/admin/widget/Widget";
import "./admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Admin;
