import { styled } from "@emotion/styled"
import { keyframes } from "@emotion/core"

const gradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const slideDown = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-5em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: red;
`

export const Header = styled.div`
  height: 50vh;
  width: 100vw;
  background: linear-gradient(-45deg, #e15239, 	#f8c169, #dba8cd, #8ebc4f, 	#185fad);
  background-size: 500% 500%;
  animation: ${gradient} 20s ease infinite;
`

export const SideBar = styled.div`
  width: 40vw;
`