import { useCalc } from "../context/CalcContext";

const Result = () => {
  const state = useCalc();
  // return (の（は改行していれないこと。retunrと同じ行でないとエラー)
  return <h3>結果：{state.result}</h3>;
};

export default Result;
