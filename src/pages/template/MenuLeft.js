import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Glyphicon } from "react-bootstrap";
import history from "../../history";
import { CONSTANT } from "../../helpers";
import SideMenu from "react-sidemenu";
import imgSidebar from "../../assets/images/reactjs.png";
import { FormattedMessage, injectIntl } from "react-intl";

class MenuLeft extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "",
    };
  }
  render() {
    const { intl } = this.props;
    let items = [
      {
        label: "Movies",
        value: "movie",
        icon: "glyphicon glyphicon-th-large",
      },
    ];

    return (
      <div className="menu-left-wrapper">
        <div
          className="menu-left-header"
          style={{ backgroundImage: 'url("' + imgSidebar + '")' }}
        >
          <div className="menu-left-title-wrapper">
            <span className="menu-left-title">React JS Movies</span>
          </div>
        </div>
        <div className="menu-left-content">
          {
            <SideMenu
              activeItem={
                this.state.activeItem !== ""
                  ? this.state.activeItem
                  : this.props.path
              }
              items={items}
              onMenuItemClick={(value) => {
                history.push(value);
                this.setState({ activeItem: value });
              }}
            />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps)(injectIntl(MenuLeft));
