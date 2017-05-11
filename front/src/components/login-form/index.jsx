import React from 'react';
import { connect } from 'react-redux';
import { FormGroup } from 'react-bootstrap';
import { changeLogin, changePass } from '../../actions/login';
import { login, pass } from '../../reducers/root-reducer';
import Field from '../../components/field';

class LoginForm extends React.Component {

  validate() {
    if (this.props.login && this.props.pass) {
      return 'success';
    }
    return 'warning';
  }

  render() {
    return (
      <form>
        <FormGroup
          validationState={this.validate()}
        >
          <Field
            label={'Login'}
            help={'Usual login'}
            value={this.props.login}
            onChange={e => this.props.changeLogin(e.target.value)}
          />
          <Field
            type="password"
            label={'Passowrd'}
            help={'Should be very strong'}
            value={this.props.pass}
            onChange={e => this.props.changePass(e.target.value)}
          />
        </FormGroup>
      </form>
    );
  }

}

LoginForm.propTypes = {
  login: React.PropTypes.string,
  pass: React.PropTypes.string,
  changeLogin: React.PropTypes.func,
  changePass: React.PropTypes.func,
};

LoginForm.defaultProps = {
  login: '',
  pass: '',
  changeLogin: () => {},
  changePass: () => {},
};

export default connect(
  state => ({ login: login(state), pass: pass(state) }),
  { changeLogin, changePass },
)(LoginForm);
