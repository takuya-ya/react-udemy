import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title='まとめて渡す'>
        <Profile {...profile[0]}/>
        <Profile {...profile[1]}/>
      </Container>

      <Container>
        <Profile {...profile[1]}/>
        <Profile {...profile[0]}/>
      </Container>

    </div>
  );
};

export default Example;
