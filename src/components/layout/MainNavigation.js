import { Link } from "react-router-dom";

function MainNavigation() {
    return (
        <header>
            <div>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/nav1">Nav1</Link>
                    </li>
                    <li>
                        <Link to="/nav2">Nav2</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;