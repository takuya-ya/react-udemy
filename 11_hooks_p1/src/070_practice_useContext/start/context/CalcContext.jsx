import { createContext, useReducer, useContext } from "react";

const CalcContext = createContext();
const CalcDispatchContext = createContext();

const reducer = (state, { type, payload }) => {
switch (type) {
  case "change": {
    const { name, value } = payload;
    return { ...state, [name]: value };
  }
  case "add": {
    return { ...state, result: parseInt(state.a) + parseInt(state.b) };
  }
  case "minus": {
    return { ...state, result: state.a - state.b };
  }
  case "divide": {
    return { ...state, result: state.a / state.b };
  }
  case "multiply": {
    return { ...state, result: state.a * state.b };
  } 
  default:
    throw new Error("operator is invalid");
}
};

const useCalc = () => {
    return useContext(CalcContext);
}

// const useDispatchCalc = useDispatchContext(CalcDispatchContext);は即実行してその値を代入しているだけなのでだめ。関数で定義する必要がある
const useDispatchCalc = () => {
    return useContext(CalcDispatchContext);
}

const CalcProvaider = ( {children} ) => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CalcContext.Provider value={state}>
      <CalcDispatchContext.Provider value={dispatch}>
        {children};
      </CalcDispatchContext.Provider>
    </CalcContext.Provider>
  );
};

export default {CalcProvaider, useCalc, useDispatchCalc};
