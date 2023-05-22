import Chart from "../../../components/admin/chart/Chart";
import Featured from "../../../components/admin/featured/Featured";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Widget from "../../../components/admin/widget/Widget";
import "./admin.css";
import Table from "../../../components/admin/table/Table";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="earning" />
          <Widget type="balance" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="adminListContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Admin;
