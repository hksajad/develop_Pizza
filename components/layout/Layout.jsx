import React from "react";
import "./Layout.css";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <div>
      <header className="header max-w-[900px] m-auto flex justify-between items-center py-[20px] max-[992px]:mx-[70px] max-[768px]:mx-[40px]">
        <div className="left">
          <Link href="/" className="text-[#53c60b] font-semibold text-[1.2rem]">
            DevelopFood
          </Link>
        </div>
        <div className="right  text-gray-600 font-medium">
          <Link href="/menu">Menu</Link>
          <Link href="/categories" className="ml-[15px]">
            Categories
          </Link>
        </div>
      </header>
      <div className="main">{children}</div>
      <footer className="footer bg-[#53c60b] text-center text-[#fff] p-[10px] mt-[100px]">
        <a
          href="https://developmart.ir/"
          target="_blank"
          rel="noreferrer"
          className="no-underline"
        >
          Devrlop Mart
        </a>
        Next.js course | BotoFood Project;
      </footer>
    </div>
  );
};

export default Layout;