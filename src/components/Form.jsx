import { useState } from "react";
import { add } from "../store/task.slice";
import { useDispatch } from "react-redux";


function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  const handleChange = (e, set) => {
    set(e.target.value);

    // setDescription(e.target.description.value);
  };

  const create = () => {
    if (title.length == 0 || description.length == 0) {
      alert("all fields are required");
    } else {
      dispatch(
        add({
          id: generateUniqueId(),
          title: title,
          description: description,
          done: false,
        })
      );
    }
  };
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
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
                      placeholder="title"
                      onChange={(e) => {
                        handleChange(e, setTitle);
                      }}
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
                      placeholder="Desciption"
                      onChange={(e) => {
                        handleChange(e, setDescription);
                      }}
                      required
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        onClick={create}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
