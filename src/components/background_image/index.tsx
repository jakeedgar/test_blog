import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import default_image from './main_background.png'

const ImageContainer = styled.div`
  margin: 1rem 0;
`

const ResponsiveImage: React.FC = () => {
  return (
    <ImageContainer>
      <Image
        width={1050}
        src={default_image}
        alt='Responsive Image'
        style={{
          margin: 'auto',
          objectFit: 'cover',
        }}
      />
    </ImageContainer>
  )
}

export default ResponsiveImage
