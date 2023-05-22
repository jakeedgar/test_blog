import styled from 'styled-components'

// Define a typescript interface for your props
interface ParagraphProps {
  text: string
}

// Create a styled paragraph
const StyledParagraph = styled.p`
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 1100px;
  padding-right: 1rem;
`

// Functional component
const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  const { text } = props
  return <StyledParagraph>{text}</StyledParagraph>
}

export default Paragraph
