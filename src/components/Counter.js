import { useState } from "react";
import { useDispatch } from "react-redux";
import { LuPlusSquare, LuMinusSquare } from "react-icons/lu";
const IncDecCounter=(props)=> {
  let [num, setNum] = useState(1);
console.log(props.cost)
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);

    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);

    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div counter={num}>
<span className="flex justify-center">
      <LuMinusSquare className="text-orange-600 text-2xl" onClick={decNum} />

      <input
        className="w-8 h-6 text-center"
        type="text"
        value={num}
        onChange={handleChange}
      />
      <LuPlusSquare className="text-orange-600 text-2xl" onClick={incNum} />
      </span>
      <p>{props.cost*num}</p>
    </div>
  );
}

export default IncDecCounter;
