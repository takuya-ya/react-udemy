type HelloProps = {
  text: string
  children: React.ReactNode
}

const Hello: React.FC<HelloProps> = (props) => {
  return <h1>Hello {props.text}! {props.children}</h1>;
}
export default Hello;
