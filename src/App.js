import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contacts";
import NoPage from "./NoPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



/*
M - Modified (An existing file has been changed)
D - Deleted (a file has been deleted)
U - Untracked (The file is new or has been changed but has not been added to the repository yet)
C - Conflict (There is a conflict in the file)
R - Renamed (The file has been renamed)
*/


// npx create-react-app my-react-app
// cd my-react-app
// npm start


// npm i 
// npm start

// npm help

// npm audit fix    
// npm audit fix --force

// npm i -D react-router-dom  
// npm i -D react-router-dom@latest


// npm install reactstrap react react-dom
// npm install --save bootstrap
// npm install react-bootstrap bootstrap

// npm install react-icons --save
// npm install @react-icons/all-files --save

