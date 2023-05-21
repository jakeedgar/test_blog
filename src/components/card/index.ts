import styled from 'styled-components'

type CardProps = {
  width?: string
}

export const Card = styled.div<CardProps>`
  color: inherit;
  padding: 2rem;
  width: ${(p) => (p.width ? p.width : '300px')};
  border: 1px solid black;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
  word-break: break-word;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`
