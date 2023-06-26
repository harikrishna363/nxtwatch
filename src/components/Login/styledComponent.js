import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#f8fafc')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginCardContainer = styled.div`
  box-shadow: 0px 4px 16px 0px
    ${props => (props.darkTheme ? '#000000' : '#bfbfbf')};
  width: 28%;
  background-color: ${props => (props.darkTheme ? '#000000' : '#f9f9f9')};
  padding: 30px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const LoginLogo = styled.img`
  height: 35px;
  width: 50%;
  margin: 10px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`
export const FormElement = styled.form`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const InputLabel = styled.label`
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#616e7c')};
  font-size: 13px;
  font-weight: 500;
  margin: 3px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const Input = styled.input`
  background-color: transparent;
  border: 2px solid ${props => (props.darkTheme ? ' #383838' : '#cccccc')};
  color: ${props => (props.darkTheme ? ' #f1f1f1' : '#181818')};
  padding: 30px;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 15px;
`
export const ShowPasswordContainer = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
`
export const Checkbox = styled.input`
  border: none;
  padding: 5px;
  margin: 3px;
  border: 2px solid #616e7c;
`
export const ShowPasswordLabel = styled.label`
  font-weight: 500;
  color: ${props => (props.darkTheme ? ' #d7dfe9' : '#231f20')};
  font-size: 13px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const LoginButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  align-self: stretch;
  background-color: #3b82f6;
  border: none;
  border-radius: 7px;
  padding: 10px;
  color: #ffffff;
`
export const ErrorMessage = styled.p`
  font-size: 14px;
  color: #ff0000;
`
