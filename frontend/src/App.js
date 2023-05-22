import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Admin from "./pages/dashboard/admin/Admin";
import Listing from "./pages/dashboard/listing/Listing";
import New from "./pages/dashboard/new/New";
import Single from "./pages/dashboard/single/Single";
import NewHotel from "./pages/dashboard/newHotel/NewHotel";
import NewRoom from "./pages/dashboard/newRoom/NewRoom";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Register from "./pages/register/Register";

const App = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    if (user && !user.isAdmin) {
      return <Navigate to="/" />;
    }

    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="/admin/users">
          <Route
            index
            element={
              <ProtectedRoute>
                <Listing columns={userColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":userId"
            element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <New inputs={userInputs} title="Add New User" />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/admin/hotels">
          <Route
            index
            element={
              <ProtectedRoute>
                <Listing columns={hotelColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":hotelId"
            element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <NewHotel />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/admin/rooms">
          <Route
            index
            element={
              <ProtectedRoute>
                <Listing columns={roomColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":roomId"
            element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <NewRoom />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
