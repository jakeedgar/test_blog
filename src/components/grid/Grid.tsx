import React from 'react'
import styled from 'styled-components'

interface GridProps {
  columns: number
  gap?: string
  children?: React.ReactNode
}

const GridContainer = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  margin: -${(props: GridProps) => props.gap};
`

const GridItem = styled.div<GridProps>`
  flex: 0 0 calc(100% / ${(props: GridProps) => props.columns});
  padding: ${(props: GridProps) => props.gap};
`

const Grid: React.FC<GridProps> = ({ columns, gap = '0px', children }) => {
  return (
    <GridContainer columns={columns} gap={gap}>
      {React.Children.map(children, (child) => (
        <GridItem columns={columns} gap={gap}>
          {child}
        </GridItem>
      ))}
    </GridContainer>
  )
}

export default Grid
