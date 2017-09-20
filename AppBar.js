import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import DropDownMenu from 'material-ui/DropDownMenu';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';

import styles from './appBar.scss';

export default class AppBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 3,
      open1: false,
      open2: false,
      num: 0,
      enteredMenu: false,
      entrance: 0
    };
  }
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  handleChange = (event, index, value) => this.setState({value});

  handleLeaveMenu1 = (event) => {
    this.setState({
      open1: false
    })
  }

  handleLeaveMenu2 = (event) => {
    this.setState({
      open2: false
    })
  }

  handleTouchTap1 = (event) => {
    event.preventDefault();
    this.setState({
      open1: true,
      anchorEl1: event.currentTarget,
    });
  }

  handleTouchTap2 = (event) => {
    event.preventDefault();
    this.setState({
      open2: true,
      anchorEl2: event.currentTarget,
    });
  }

  handleRequestClose1 = () => {
    this.setState({
      open1: false,
    });
  };

  handleRequestClose2 = () => {
    this.setState({
      open2: false,
    });
  };

//#4CAF50 Log in color
//#673AB7 Sign up color
  render() {
    const {children} = this.props;
    const styles = {
      menuItemStyle: {
        color: "white"
      },
      buttonStyle: {
        backgroundColor: "transparent",
        color: "white"
      }
    }
    /*<FlatButton label="LOGIN"
                  style = {styles.buttonStyle}
                  onClick={this.handleTouchTap1}
                  onMouseEnter={this.handleTouchTap1}/>*/
    return (
      <Toolbar className="appbar">
        <ToolbarGroup firstChild={true}>
        <FontIcon className="material-icons">menu</FontIcon>
        <ToolbarSeparator />
        <MenuItem primaryText="Logo" style={styles.menuItemStyle}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <MenuItem primaryText="Login"
                    style={styles.menuItemStyle}
                    onClick={this.handleTouchTap2}
                    onMouseEnter={this.handleTouchTap2}/>
          <Popover
            open={this.state.open2}
            anchorEl={this.state.anchorEl2}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose2}>
          <Menu onMouseLeave={this.handleLeaveMenu2}>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
          </Popover>
          <ToolbarSeparator />
          <MenuItem
            primaryText="Sign up"
            style = {styles.menuItemStyle}
            onClick={this.handleTouchTap1}
            onMouseEnter={this.handleTouchTap1}/>
          <Popover
            open={this.state.open1}
            anchorEl={this.state.anchorEl1}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose1}>
          <Menu onMouseLeave={this.handleLeaveMenu1}>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
          </Popover>
          <ToolbarSeparator />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
