import { css } from 'styled-components'

export const fontStyles = css`
  @font-face {
    font-family: 'Larsseit';
    src: local('Larsseit Thin'), local('Larsseit-Thin'),
      url('/fonts/Larsseit-Thin.ttf') format('ttf');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Larsseit Light';
    src: local('Larsseit-Light'), local('Larsseit-Light'),
      url('/fonts/Larsseit Light.ttf') format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Larsseit';
    src: local('Larsseit'), local('Larsseit'),
      url('/fonts/Larsseit.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Larsseit Italic';
    src: local('Larsseit-Italic'), local('Larsseit-Italic'),
      url('/fonts/Larsseit-Italic.ttf') format('ttf');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Larsseit';
    src: local('Larsseit Medium'), local('Larsseit-Medium'),
      url('/fonts/Larsseit-Medium.ttf') format('ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Larsseit';
    src: local('Larsseit Bold'), local('Larsseit-Bold'),
      url('/fonts/Larsseit-Bold.ttf') format('ttf');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Larsseit';
    src: local('Larsseit ExtraBold'), local('Larsseit-ExtraBold'),
      url('/fonts/Larsseit-ExtraBold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
  }
`
