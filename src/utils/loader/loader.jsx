import './loader.css'
import styled, { keyframes } from 'styled-components'

// Compare this snippet from src/utils/loader/loader.jsx:

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  animation: ${rotate} 1s infinite linear;`
