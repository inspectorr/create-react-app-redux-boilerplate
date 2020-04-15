import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Text } from 'informed';

import { userActions } from '../_actions';

function RegisterPage({ registering, register }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(formState) {
        const { firstName='', lastName='', username='', password='' } = formState;
        setIsSubmitted(true);
        if ([firstName, lastName, username, password].every(Boolean)) {
            register({ firstName, lastName, username, password });
        }
    }

    return (
      <div className="col-md-6 col-md-offset-3">
          <h2>Register</h2>
          <Form name="form" onSubmit={handleSubmit}>
              {({formState: { values: { firstName='', lastName='', username='', password='' }}}) => <>
                  <div className={'form-group' + (isSubmitted && !firstName ? ' has-error' : '')}>
                      <label htmlFor="firstName">First Name</label>
                      <Text className="form-control" field="firstName" />
                      {isSubmitted && !firstName &&
                      <div className="help-block">First Name is required</div>
                      }
                  </div>
                  <div className={'form-group' + (isSubmitted && !lastName ? ' has-error' : '')}>
                      <label htmlFor="lastName">Last Name</label>
                      <Text className="form-control" field="lastName" />
                      {isSubmitted && !lastName &&
                      <div className="help-block">Last Name is required</div>
                      }
                  </div>
                  <div className={'form-group' + (isSubmitted && !username ? ' has-error' : '')}>
                      <label htmlFor="username">Username</label>
                      <Text className="form-control" field="username" />
                      {isSubmitted && !username &&
                      <div className="help-block">Username is required</div>
                      }
                  </div>
                  <div className={'form-group' + (isSubmitted && !password ? ' has-error' : '')}>
                      <label htmlFor="password">Password</label>
                      <Text type="password" className="form-control" field="password" />
                      {isSubmitted && !password &&
                      <div className="help-block">Password is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary">Register</button>
                      {registering &&
                      <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                      }
                      <Link to="/login" className="btn btn-link">Cancel</Link>
                  </div>
              </>}
          </Form>
      </div>
    );
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
