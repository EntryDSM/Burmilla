export const getIndexList = (currentIndex: number, maxIndex: number) => {
    const range = (start: number, end: number) => {
      let arr = [];
  
      let length = end - start;
  
      for (let i = 0; i <= length; i++) {
        arr[i] = start;
        start++;
      }
  
      return arr;
    };
  
    if (maxIndex < 6) return range(1, maxIndex);
    else if (currentIndex < 3) return range(1, 5);
    else if (maxIndex - currentIndex < 3) return range(maxIndex - 4, maxIndex);
    else return range(currentIndex - 2, currentIndex + 2);
  };
  