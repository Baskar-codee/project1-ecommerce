import React from "react";
import "./style.css";
import { Link } from 'react-router';

export default function App() {
  return (
    <div className="container">
      <section className="header_container">
          <div className="logo logo_txt_big">Shop<br/><span className="logo_txt_small">grocerys</span>
          </div>
          <div className="catagory_icon"><span class="material-symbols-outlined">grid_view</span><span className="cat_txt">All Catagory</span></div>
          <input className="search_box" type="text" placeholder="Search the Product"></input>
          <div></div>
      </section>
      <section className="header_container_two">
          <nav className="nav-components_two logo">
              <ul className="nav_two">
                <li>
                  Home
                </li>
                <li> 
                  About&nbsp;Us
                </li>
                <li> 
                  Best sales
                </li>
                <li> 
                  Promotion
                </li>
                <li> 
                  Blog
                </li>
                <li> 
                  contact
                </li>
              </ul>
          </nav>
      </section>
      <div>heolo</div>
      <div>heolo</div>
    </div>
  );
}