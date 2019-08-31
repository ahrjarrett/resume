import { css } from "styled-components"

export const animationStyles = css`
  @keyframes fromTop {
    0% {
      transform: translateY(-100vh);
    }
  }

  @keyframes fromLeft {
    0% {
      transform: translateX(-100vw);
    }
  }

  @keyframes fadeOut {
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
  }

  @keyframes fadePartialOut {
    100% {
      opacity: 0.5;
    }
  }

  @keyframes fadePartialIn {
    0% {
      opacity: 0.5;
    }
  }

  @keyframes zoomIn {
    100% {
      transform: scale(3);
    }
  }

  @keyframes zoomOut {
    0% {
      transform: scale(3);
    }
  }

  @keyframes growIn {
    0% {
      transform: scale(0);
    }
  }

  @keyframes growOut {
    100% {
      transform: scale(0);
    }
  }

  @keyframes fromFarLeft {
    0% {
      transform: translateX(-34.5rem) translateX(-50rem) scale(0.8);
    }
  }

  @keyframes toLeft {
    100% {
      transform: translateX(-100vw);
    }
  }

  @keyframes toFarLeft {
    100% {
      transform: translateX(-34.5rem) translateX(-50rem) scale(0.8);
    }
  }

  @keyframes fromRight {
    0% {
      transform: translateX(100vw);
    }
  }

  @keyframes fromFarRight {
    0% {
      transform: translateX(34.5rem) translateX(50rem) scale(0.8);
    }
  }

  @keyframes toRight {
    100% {
      transform: translateX(100vw);
    }
  }

  @keyframes toFarRight {
    100% {
      transform: translateX(34.5rem) translateX(50rem) scale(0.8);
    }
  }

  @keyframes fromBottom {
    0% {
      transform: translateY(100vh);
    }
  }
`
