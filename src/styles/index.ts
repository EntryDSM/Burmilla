export const color = {
   main: '#f57278',
   sub: '#ff8888',
   backgorund: 'white',
   fail: '#707070',
   middleBar: '#cbcbcb',
   light: '#ffebec',
   disable: '#afafaf',
   primaryColor : '#f57278',
   lightPrimaryColor : '#ffebec',
   footerGradientColor : '#ff8888',
   receiptGradientColor : '#ff897b',
   primaryTextColor : '#000000',
   darkBorderColor : '#222222',
   lightBorderColor : '#3f3f3f',
};
  
  const HTML_FONT_SIZE = 16;
  
  export const pxToRem = (px: number): number => {
    return px / HTML_FONT_SIZE;
  };
  
  export const widthRatio = window.innerWidth / 1980;
  
  export const heightRatio = window.innerHeight / 1080;
  