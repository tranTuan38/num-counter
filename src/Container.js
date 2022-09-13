import { useState, useEffect } from "react";
import Content from "./Content";

const initState = {
  textValue: "",
  numValue: "",
};

function Container() {
  const [state, setState] = useState(initState);
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);

  const { textValue, numValue } = state;

  useEffect(() => {
    const valueAct = [];
    const newValue = textValue.trim().split(",");
    newValue.forEach((item, index) => {
      if (item !== "" && item !== " ") {
        valueAct.push(Number(item));
      }

      if (item.trim().indexOf(" ") !== -1) {
        item
          .trim()
          .split(" ")
          .forEach((item2) => {
            valueAct.push(Number(item2));
          });
      }
    });

    setData(valueAct);
  }, [textValue]);

  const handleTextValue = (e) => {
    setState((prev) => {
      const newValue = e.target.value;

      return { ...prev, textValue: newValue };
    });
    setCheck(false);
  };

  const handleNumValue = (e) => {
    setState((prev) => {
      const newValue = e.target.value;

      return { ...prev, numValue: newValue };
    });
    setCheck(false);
  };

  const handleBtn = (e) => {
    setCheck(true);
  };

  return (
    <div className="wrapper">
      <div className="context">
        <div className="context-item">
          <span>Nhập giá trị mảng:</span>
          <textarea
            value={textValue}
            onChange={handleTextValue}
            className="textarea"
          />
        </div>
        <div className="context-item">
          <span>Nhập giá trị nhân:</span>
          <input value={numValue} onChange={handleNumValue} className="input" />
        </div>
      </div>

      <button className="btn" onClick={handleBtn}>
        Thực thi
      </button>
      <div className="result">
        <span>Kết Quả:</span>
        <div className="result-item">
          {check && <Content arr={data} numValue={Number(numValue)} />}
        </div>
      </div>
    </div>
  );
}

export default Container;
