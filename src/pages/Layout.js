import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="container">
            <ul className="nav nav-pills" >
                <li className="nav-item" role="presentation">
                    <Link className="nav-link"  to="/" >Home</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" to="/cat-facts" data-bs-toggle="tab">Cat Facts</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/button">Button Page (Broken)</Link>
                </li>
            </ul>
            <div className="container">
                <Outlet />

            </div>
        </div>
    )
};

export default Layout;
