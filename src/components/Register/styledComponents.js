import styled from 'styled-components'

export const RegisterBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 30px;
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  min-height: 60vh;
`

export const RegisterImg = styled.img`
  width: 40%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  padding: 10px;
`
export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 34px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 7px;
`

export const Label = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 7px;
`

export const Input = styled.input`
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  width: 100%;
  padding: 14px 12px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
`

export const Select = styled.select`
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  width: 100%;
  padding: 14px 12px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  margin-bottom: 0px;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-family: 'Roboto';
`
