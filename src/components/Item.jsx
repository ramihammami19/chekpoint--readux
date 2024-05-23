import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask ,deleteTask } from "../store/task.slice";
function Task({ task }) {
  console.log(task);
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);
  const dispatch = useDispatch();

  const update = () => {
    if (title.length === 0 || description.length === 0) {
      toast.error("All fields are required");
    } else {
      dispatch(
        updateTask({
          id: task.id,
          data: {
            title,
            description,
          },
        })
      );
      setIsUpdate(false);
    }
  };

  return (
    <div className="w-full p-4 shadow-md lg:max-w-lg">
      <div className="space-y-2">
        {!isUpdate && (
          <>
            <h3 className="text-2xl font-semibold">{task?.title}</h3>
            <p className="text-gray-600">{task?.description}</p>
            <div className="flex items-center mb-4">
              <input
                onChange={() => {
                  dispatch(markAsDone(task?.id));
                }}
                id="default-checkbox"
                type="checkbox"
                disabled={task?.done}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                MarkAsDone
              </label>
            </div>
            {task?.done && (
              <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Well Done
              </p>
            )}
            {!task?.done && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setIsUpdate(true);
                }}
              >
                Edit
              </button>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                dispatch(deleteTask(task?.id));
              }}
            >
              kmlet
            </button>
          </>
        )}
        {isUpdate && (
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Title"
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          value={title}
                          required
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="description">Description</label>
                        <input
                          type="text"
                          name="description"
                          id="description"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Description"
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          value={description}
                          required
                        />
                      </div>
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            onClick={update}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Task;
