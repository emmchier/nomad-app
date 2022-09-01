import styled from 'styled-components';

export const Content = styled.div`
  .ring {
    position: fixed;
    top: 0;
    left: 0;
    width: 22px;
    height: 22px;
    border: 2px solid ${({ theme }) => theme.color.orange.main};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    -webkit-transition-duration: 100ms;
    transition-duration: 100ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    will-change: width, height, transform, border;
    z-index: 999999999;
    pointer-events: none;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      border: none;
    }
  }

  .dot {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.color.orange.main};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: 99999999;
    pointer-events: none;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      background-color: transparent;
    }
  }

  .ring.hovered {
    transition: all 0.3s ease;
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.color.cursor};
    border-color: ${({ theme }) => theme.color.cursor};
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    mix-blend-mode: difference !important;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      background-color: transparent;
      border-color: transparent;
    }
  }

  .ring.reserve {
    transition: all 0.3s ease;
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.color.orange.main};
    border-color: ${({ theme }) => theme.color.orange.main};
    border-radius: 50%;
    position: fixed;
    pointer-events: none;

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      background-color: transparent;
      border-color: transparent;
    }
  }

  .hovered:hover ~ .ring {
    transform: translate(-50%, -50%) scale(8);

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      transform: none;
    }
  }

  .dot.hovered,
  .dot.reserve {
    display: none;
  }
`;
