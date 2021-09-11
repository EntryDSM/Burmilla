export const isOneOfTextEmpty = (...texts: string[]) => {
    let flag = false;
    texts.forEach(text => {
      if (text.length <= 11) {
        flag = true;
      }
    });
    return flag;
  };
  