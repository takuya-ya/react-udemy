import Hello, {Btn} from './Hello.tsx';

const Example: React.FC = () => {
  // 練習用
  return (
    <>
      <Btn fn={(text) => console.log(`Hello ${text}`)}/>
      <Hello text='TypeScript'>Children</Hello>
    </>
  );
};

export default Example;
