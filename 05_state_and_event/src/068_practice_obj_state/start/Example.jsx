import { useState } from 'react';

const Example = () => {
  const orderObj = { item: 'apple', count: 10 };
  const [order, setOrder] = useState(orderObj);
  const changeItem = (e) => {
    const newItem = e.target.value;
    setOrder(order => ({...order, item: newItem}));
  };
  const countUp = () => {
    setOrder(order => ({...order, count: order.count + 1}));
  };

  const countDown = () => {
    setOrder(order => ({...order, count:order.count -1}))
  };

  return (
    <div>
      <h3>Item:{order.item}</h3>
      <h3>Count:{order.count/* ここにorder.countを表示してください。*/}</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
