import React, { Fragment,useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        userid: '',
        password: ''
      });
    
      const { userid, password } = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        login(userid, password);
      };

      if (isAuthenticated) {
        return <Redirect to="/employees" />;
      }
    return (
        <Fragment>
            <div className="container">
                <div className="login-container">
                <h1 className="text-primary">Sign In</h1>
                
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                    <label className="lb-text">User ID:</label>
                    <input
                        type="text"
                        placeholder="Enter User ID"
                        name="userid"
                        value={userid}
                        onChange={onChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label className="lb-text">Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="5"
                    />
                    </div>
                    <input type="submit" className="btn" value="Login" />
                </form>
                </div>
            </div>
        </Fragment>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
  
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
  
export default connect(mapStateToProps, { login })(Login);
