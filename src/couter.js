function counter(arr, num) {
  let count = 0;
  let html;

  arr.forEach((item, index) => {
    if (item === num) {
      count++;
    }
  });

  html = [num, count];
  return html;
}

export default counter;
