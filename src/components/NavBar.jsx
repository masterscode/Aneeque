import React from "react";
import { v4 as key } from "uuid";

const NavItem = ({ icon, link }) => (
  <div className={link=== 'overview' ?'nav-item nav-item--active': "nav-item"}>
    <div className="nav-item__icon">
      <i className={icon}></i>
    </div>
    <div className="nav-item__link ">{link}</div>
  </div>
);

export const NavBar = () => {
  const menu = [
    { icon: "bi-grid", link: "overview" },
    { icon: "bi-file-earmark-text-fill", link: "orders" },
    { icon: "bi-bag-fill", link: "products" },
    { icon: "bi-gear-fill", link: "settings" },
  ];
  const business = [
    { icon: "bi-cursor-fill", link: "shipment" },
    { icon: "bi-people-fill", link: "employee" },
  ];

  return (
    <section className="navbar">
      {/* header start */}
      <div className="navbar-header">
        <div className="icon-avatar-circle-fill">
          <i className="bi-person-fill"></i>
        </div>
        <h2 className="logo-text">tumbas</h2>
      </div>
      {/* header end */}

      <div className="nav-menu__title">menu</div>
      {menu.map(({ icon, link }) => (
        <NavItem key={key()} icon={icon} link={link} />
      ))}
      <div className="nav-menu__title">business</div>
      {business.map(({ icon, link }) => (
        <NavItem key={key()} icon={icon} link={link} />
      ))}
      {/* footer start */}
      <div className="navbar-footer">
          <h3 className='lead-text'> &copy; Tumbas. 2021</h3>
          <small className='sub-text'>platform for solution of all types of business to be more advanced</small>
      </div>
      {/* footer end */}

    </section>
  );
};
