import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();
  const links = [
    { to: "/project/signin", label: "Sign in" },
    { to: "/project/signup", label: "Sign up" },
    { to: "/project/account", label: "Account" },
  ];
  const active = (path) => (pathname.includes(path) ? "active" : "");
  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`list-group-item ${active(link.to)}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
