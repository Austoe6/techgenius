import styled from 'styled-components'

const Input = styled.input`
  appearance: none;
  min-height: 36px;
  padding: 6px 10px;
  box-sizing: border-box;
  line-height: inherit;
  font-family: inherit;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius};
  border-width: 1px solid ${({ theme }) => theme.colors.textLight};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  ::-ms-clear {
    display: none;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.textDark};
  }

  &[type='textarea'] {
    resize: vertical;
  }

  &[type='button'] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  ${props => props.customStyles}
`

export default Input
