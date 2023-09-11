// eslint-disable-next-line no-unused-vars
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css';
import myapplogo from '../images/myapplogo.png';
// import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={myapplogo} alt="logo" height={65} />
    </Link>
    <h1 color="white">PlayTube</h1>
    <SearchBar />
  </Stack>
);

export default Navbar;