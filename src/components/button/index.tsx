import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  onClick?: () => void
  variant?: 'default' | 'primary' | 'secondary'
  children: React.ReactNode
}

const ButtonContainer = styled.button<ButtonProps>`
  position: relative;
  width: 160px;
  height: 50px;
  border-radius: 8px;
  color: #fbf7d9;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.variant === 'default' &&
    css`
      background: #008981;
    `}

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background: #007bff;
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: #6c757d;
    `}

  &:hover {
    background-color: ${(props) =>
      props.variant === 'default' ? '#00736d' : props.variant === 'primary' ? '#0069d9' : props.variant === 'secondary' ? '#5a6268' : '#008981'};
  }
`

const Button: React.FC<ButtonProps> = ({ onClick, variant = 'default', children }) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
      {children}
    </ButtonContainer>
  )
}

export default Button
