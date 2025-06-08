import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState('Banana');
  const OPTIONS = ["Apple", "Banana", "Cherry"];

  return (
    <>
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>

    <select value={selected}  onChange={(e) => setSelected(e.target.value)}>
      {OPTIONS.map(opt => {
        return  <option key={opt} value={opt}>{opt}</option>;
      })}


        {/* <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option> */}
    </select>

    <div>
      選択された果物 : {selected}
    </div>
    </>
  );
};

export default Example;
