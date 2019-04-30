import { keyframes } from "@emotion/core"

export const gradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

export const hoverEffect = keyframes`
  0% { opacity: 0.7; }
  100% { opacity: 1.0; }
`

export const slideDown = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-5em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`