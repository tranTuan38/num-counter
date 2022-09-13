import counter from "./couter";

function Content({ arr, numValue }) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let htmls;
  arr.forEach((num) => {
    if (!arr1.includes(num)) {
      arr1.push(num);
    }
  });

  arr1.forEach((num) => {
    arr2 = [...arr2, counter(arr, num)];
    for (let i = 0; i < arr2.length > 0; i++) {
      if (!arr3.includes(arr2[i][1])) {
        arr3.push(arr2[i][1]);
      }
    }
  });

  arr3.forEach((num) => {
    let arr6 = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i][1] === num) {
        arr6 = [...arr6, arr2[i][0]];
      }
    }
    arr4 = [...arr4, [[...arr6], num]];
  });

  htmls = arr4.map((html) => {
    let data = [];
    for (let i = 0; i < html[0].length; i++) {
      if (html[0][i] >= 0 && html[0][i] < 10) {
        html[0][i] = `0${html[0][i]}`;
      }
      data = [...data, html[0][i]];
    }

    return `${data.join(", ")} x${html[1] * numValue} d`;
  });

  const htmlsAct = htmls.map((html, index) => {
    return <div key={index}>{html}</div>;
  });

  return htmlsAct;
}

export default Content;
