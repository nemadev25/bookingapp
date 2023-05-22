import "./listing.css";
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from "../../../components/admin/navbar/Navbar";
import Datatable from "../../../components/admin/datatable/Datatable";
const Listing = ({columns}) => {
  return <div className="listing">
    <Sidebar />
    <div className="listingContainer">
      <Navbar />
      <Datatable columns={columns} />
    </div>
  </div>;
};

export default Listing;
