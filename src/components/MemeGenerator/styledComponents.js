import styled from 'styled-components'

export const MainMemeGeneratorContainer = styled.div`
  min-height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`
export const MemeGeneratorContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #35469c;
  text-align: start;
  font-weight: bold;
`
export const FormAndMemeHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const FormElement = styled.form`
  height: 80%;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40%;
    padding: 0px;
    margin: 0px;
  }
`
export const InputElement = styled.input`
  height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-left: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #5a7184;
`

export const SelectElement = styled.select`
  width: 100%;
  height: 40px;
  outline: none;
  cursor: pointer;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
`
export const OptionElement = styled.option`
  font-family: 'Roboto';
  font-size: 15px;
`
export const SubmitButton = styled.button`
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: #0b69ff;
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  margin-top: 25px;
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 50vh;
  width: 45%;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40vh;
    margin-bottom: 0px;
  }
`
export const TextElement = styled.p`
  font-family: 'Roboto';
  font-size: {
    ${props => props.activeFontSize}
  }
  color: #ffffff;
  margin-bottom: 0px;
`
