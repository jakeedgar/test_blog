import React from 'react'
import styled from 'styled-components'

// Styled components
const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`

const TableCell = styled.td`
  padding: 8px;
`

// Types
type Headers = {
  key: string
  label: string
}

type Rows = {
  [key: string]: string | number
}

type TableProps = {
  headers: Headers[]
  rows: Rows[]
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {headers.map((header) => (
            <TableHeader key={header.key}>{header.label}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            {headers.map((header) => (
              <TableCell key={header.key}>{row[header.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  )
}

export default Table
