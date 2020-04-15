import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Form, Text} from 'informed';

import { userActions } from '../_actions';

function LoginPage({ loggingIn, login, logout }) {
    useEffect(() => {
        logout();
    }, []);

    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit({ username = '', password = '' }) {
        setIsSubmitted(true);
        if (username && password) {
            login(username, password);
        }
    }

    return (
      <div className="col-md-6 col-md-offset-3">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
              {({formState:{values:{username, password}}}) => <>
                  <div className={'form-group' + (isSubmitted && !username ? ' has-error' : '')}>
                      <label htmlFor="username">Username</label>
                      <Text
                        field="username"
                        className="form-control"
                      />
                      {isSubmitted && !username && <div className="help-block">Username is required</div>}
                  </div>
                  <div className={'form-group' + (isSubmitted && !password ? ' has-error' : '')}>
                      <label htmlFor="password">Password</label>
                      <Text
                        field="password"
                        type="password"
                        className="form-control"
                      />
                      {isSubmitted && !password && <div className="help-block">Password is required</div>}
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary">Login</button>
                      {loggingIn && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                      <Link to="/register" className="btn btn-link">Register</Link>
                  </div>
              </>}
          </Form>
      </div>
    );
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };
