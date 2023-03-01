import React from "react";
import { Button, NavLink } from "reactstrap";

const NoPage = () => {
  return (
    <>
      <h1 style={{ margin: `50px 1100px 0px 50px` }}>
        404 Error
        <hr />
      </h1>
      <h5 style={{ marginLeft: `50px` }}>page is not available.</h5>
      <Button style={{ margin: `15px 0px 0px 50px` }}>
        <NavLink href="/">Home</NavLink>
      </Button>
    </>
  );
};

export default NoPage;