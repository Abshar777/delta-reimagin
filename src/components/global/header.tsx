"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { nav } from "@/constants/nav";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <header className="main-header">
    <div className="header-sticky">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img style={{width: "130px"}} src="/images/my/logo.webp" alt="Logo" />
          </a>

          <div className="collapse navbar-collapse main-menu">
            <div className="nav-menu-wrapper">
              <ul className="navbar-nav mr-auto" id="menu">
                {nav.map((item) => (
                  <li key={item.name} className="nav-item">
                    <Link className="nav-link" href={item.href}>  {item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>


            <div className="header-btn">
              <a href="https://wa.me/+971558602028?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20this.%20Could%20you%20please%20provide%20details?" className="btn-default btn-highlighted"
                >contact us</a
              >
            </div>

          </div>
          <div className="navbar-toggle"></div>
        </div>
      </nav>
      <div className="responsive-menu"></div>
    </div>
  </header>
  );
};

export default Header;
