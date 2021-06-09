import {
    createGlobalStyle,
    GlobalStyleComponent,
    DefaultTheme,
  } from 'styled-components';
  import { color } from './index';
  
  const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    html, body {
      width: 100%;
      min-width: 1024px;
      font-family: 'NanumSquare', sans-serif !important;;
    }
    input {
      border: none;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    ol, ul {
      list-style: none;
    }
    a {
      &:link{
        text-decoration: none;
      }
      &:visited{
        text-decoration: none;
      }
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    button {
      all: unset;
      color: ${color.primaryTextColor};
      cursor: pointer;
      text-align: center;
    }
  
    .no-select {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `;
  
  export default GlobalStyle;
  