import {Component} from 'react'
import Cookies from 'js-cookie'

import AppContext from '../../Context/AppContext'

import {
  LoginBgContainer,
  LoginCardContainer,
  LoginLogo,
  FormElement,
  InputContainer,
  Input,
  InputLabel,
  ShowPasswordContainer,
  Checkbox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponent'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    errorMessage: '',
    showErrorMessage: false,
  }

  componentDidMount() {
    const {history} = this.props
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
  }

  onSubmitForm = async event => {
    event.preventDefault()
    this.setState({showErrorMessage: false})
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  submitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  submitFailure = errorMessage =>
    this.setState({showErrorMessage: true, errorMessage})

  updateUsernameInput = event =>
    this.setState({usernameInput: event.target.value})

  updatePasswordInput = event =>
    this.setState({passwordInput: event.target.value})

  toggleShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  render() {
    const {
      usernameInput,
      passwordInput,
      showPassword,
      showErrorMessage,
      errorMessage,
    } = this.state
    const checkBoxType = showPassword ? 'text' : 'password'

    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <LoginBgContainer darkTheme={isDarkTheme}>
              <LoginCardContainer darkTheme={isDarkTheme}>
                <LoginLogo
                  alt="website logo"
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <FormElement onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <InputLabel htmlFor="username" darkTheme={isDarkTheme}>
                      USERNAME
                    </InputLabel>
                    <Input
                      id="username"
                      type="text"
                      value={usernameInput}
                      placeholder="Username"
                      onChange={this.updateUsernameInput}
                      darkTheme={isDarkTheme}
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel htmlFor="password" darkTheme={isDarkTheme}>
                      PASSWORD
                    </InputLabel>
                    <Input
                      id="password"
                      type={checkBoxType}
                      value={passwordInput}
                      placeholder="Password"
                      onChange={this.updatePasswordInput}
                      darkTheme={isDarkTheme}
                    />
                  </InputContainer>
                  <ShowPasswordContainer>
                    <Checkbox
                      id="showPassword"
                      type="checkbox"
                      onClick={this.toggleShowPassword}
                    />
                    <ShowPasswordLabel
                      htmlFor="showPassword"
                      darkTheme={isDarkTheme}
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMessage && (
                    <ErrorMessage>*{errorMessage}</ErrorMessage>
                  )}
                </FormElement>
              </LoginCardContainer>
              <p>
                Try with these sample credentials <br />
                Username: rahul <br /> Password: rahul@2021
              </p>
            </LoginBgContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
