import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Authorize.scss';
import withMK from '../../../../../hoc/withMK';
import AuthorizeContext from './AuthorizeContext';
import withContext from '../../../../../hoc/withContext';

class Authorize extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  async logout() {
    await this.props.mk.instance.unauthorize();
  }

  async login() {
    await this.props.mk.instance.authorize();
  }

  render() {
    const button = this.props.authorized ? (
      <span onClick={this.logout}>Logout</span>
    ) : (
      <span onClick={this.login}>Login</span>
    );

    return <div className={classes.authorizeWrapper}>{button}</div>;
  }
}

Authorize.propTypes = {
  mk: PropTypes.any.isRequired,
  authorized: PropTypes.bool.isRequired,
};

export default withMK(withContext(Authorize, AuthorizeContext));
