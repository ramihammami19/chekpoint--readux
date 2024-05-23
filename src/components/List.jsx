import Item from "./Item";
import { useSelector } from "react-redux";
function List() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <div>
        {tasks.map((element, index) => {
          console.log(element);
          return (
            <div key={index}>
              <Item task={element} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
