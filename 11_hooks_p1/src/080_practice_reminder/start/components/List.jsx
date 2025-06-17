import Item from "./Item"

const List = ({todos, deleteTodo, updateTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <div>
            {todos.map(todo => {
                return (
                    // todo 属性の指定
                    <Item key={todo.id} todo={todo} complete={complete} updateTodo={updateTodo}/>
                )
            })}
        </div>
    );
}

export default List;
