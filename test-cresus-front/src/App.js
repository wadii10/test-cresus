import "./App.css";
import ListUsers from "./components/ListUsers";
import UserNav from "./components/UserNav";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import DetailUser from "./components/DetailUser";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <Router>
        <UserNav />
        <Container>
          <Routes>
            <Route path="/" element={<ListUsers />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/detailUser/:id" element={<DetailUser />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
      </Router>
      {/* <SignUP /> */}
    </div>
  );
}

export default App;
