import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import UserContext from "../context/user.context";
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

export default function Login(props) {

    const { setUserData } = useContext(UserContext);
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.removeItem("jwt");
        window.location = '/';
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "80px",
                justifyContent: "space-between",
                backgroundColor: "transparent"
            }}
        >
            <Navbar.Brand href={props.isAuthenticated ? "/app" : "/"} style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <VideocamRoundedIcon style={{
                    fontSize: "48px",
                    color: "white"
                }} />
                <p style={{
                    marginBlock: "0px"
                }}>WatchHub</p>
            </Navbar.Brand>
            <Nav
                style={{
                    justifyContent: "flex-end"
                }}
            >
                {!props.isAuthenticated && <Link to="/" className="nav-link">Sign in</Link>}
                {!props.isAuthenticated && <Link to="/register" className="nav-link">Register</Link>}
                {props.isAuthenticated && <Link to="/favorites" className="nav-link" style={{ color: "white" }}>Favorites</Link>}
                {props.isAuthenticated && <Link to="/" className="nav-link" onClick={logout} style={{ color: "white" }}>Sign Out</Link>}
            </Nav>
        </Navbar>
    );
}
