import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>แจ้งเตือนโครงการ Good Space</MenuItem>
            <MenuItem eventKey={2.2}>แจ้งเตือนการฉีดวัคซีนภายในโครงการจังหวัดนนทบุรี</MenuItem>
            <MenuItem eventKey={2.3}>แจ้งเตือนการลง Good Space</MenuItem>
            <MenuItem eventKey={2.4}>แจ้งเตือนพื้นที่ลงทะเบียนเด็ก</MenuItem>
            <MenuItem eventKey={2.5}>แจ้งเตือนพื้นที่เริ่มโครงการ</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
