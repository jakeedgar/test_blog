import styled from 'styled-components'

const Container = styled.div`
  min-width: 340px;
  height: 50px;
  font-size: 2.5em;
`

const Header = () => {
  const title = 'In Search of Less'

  return <Container className='title'>{title}</Container>
}

export default Header
