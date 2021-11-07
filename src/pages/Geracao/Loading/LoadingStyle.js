import styled from "styled-components";

export const LoadingAnim = styled.section `


.loading-dots {

  color: rgba(255,2555,255,0);
  animation-name: loading-dots-animation;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes loading-dots-animation {
  0% {
    text-shadow: -1em 0 0 rgba(255,2555,255,.6), 0em 0 0 rgba(255,2555,255,.2), 1em 0 0 rgba(255,2555,255,.2);
  }
   20% {
    text-shadow: -1em 0 0 rgba(255,2555,255,1), 0em 0 0 rgba(255,2555,255,.6), 1em 0 0 rgba(255,2555,255,.2);
  }
  40% {
    text-shadow: -1em 0 0 rgba(255,2555,255,.6), 0em 0 0 rgba(255,2555,255,1), 1em 0 0 rgba(255,2555,255,0.6);
  }
  60% {
    text-shadow: -1em 0 0 rgba(255,2555,255,.2), 0em 0 0 rgba(255,2555,255,.6), 1em 0 0 rgba(255,2555,255,1);
  }
  80% {
    text-shadow: -1em 0 0 rgba(255,2555,255,.2), 0em 0 0 rgba(255,2555,255,.2), 1em 0 0 rgba(255,2555,255,.6);
  }
  100% {
    text-shadow: -1em 0 0 rgba(255,2555,255,.6), 0em 0 0 rgba(255,2555,255,.2), 1em 0 0 rgba(255,2555,255,.2);
  }
}
`;