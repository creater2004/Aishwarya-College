import React from "react";
import { NavLink, Outlet } from "react-router";
import "../App.css";

function AppLayout() {
  const [isAppReady, updateAppStatus] = React.useState(false);

  setTimeout(() => {
    updateAppStatus(true);
  }, 3 * 1000);

  if (!isAppReady) {
    return <div>Page is Loading</div>;
  }
  return (
    <div>
      <header>
        <marquee behavior="alternate" direction="right">
          Welcome To College Portal,For More Inforamtion Login With Your
          Credential's 🙏
        </marquee>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink className="NavLink" to={"/"}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to={"/student"}>
              Student
            </NavLink>
          </li>
          <li>Teacher</li>
          <li>Staff</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default AppLayout;
