import { Outlet } from "react-router-dom";
import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Layout = (args) => {
  return (
    <>
      <div>
        <Navbar {...args} className="bg-light">
          <NavbarBrand href="/">
            <img
              src="https://picsum.photos/seed/picsum/60"
              alt="logo"
              style={{ borderRadius: "100%" }}
            />
          </NavbarBrand>

          <Nav className="me-auto">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blogs">Blogs</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;