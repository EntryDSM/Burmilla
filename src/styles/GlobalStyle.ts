import {
    createGlobalStyle,
    GlobalStyleComponent,
    DefaultTheme,
  } from 'styled-components';
  import { color } from './index';
  
  const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
    html, body {
      width: 100%;
      min-width: 1024px;
      font-family: 'Noto Sans KR', sans-serif !important;
      &::-webkit-scrollbar {
		    width: 8px;
		    background: none;
	    }
	    &::-webkit-scrollbar-thumb {
	      background: ${color.primaryColor};
        border-radius: 6px;
	    }
	    &::-webkit-scrollbar-track {
	      background: none;
	    }
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
  