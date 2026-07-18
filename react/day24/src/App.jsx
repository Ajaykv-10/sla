import { useReducer } from "react";
import { initialState, studentReducer } from "./StudentReducer";


function App() {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  const handleSubmit = () => {
    if (state.editId) {
      dispatch({ type: "UPDATE_STUDENT" });
    } else {
      dispatch({ type: "ADD_STUDENT" });
    }
  };

  return (
    <div className="container">

      <h2>Student Management System</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: "SET_INPUT",
            payload: e.target.value,
          })
        }
      />

      <button onClick={handleSubmit}>
        {state.editId ? "Update" : "Add"}
      </button>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {state.students.map((student) => (

            <tr key={student.id}>

              <td>{student.id}</td>

              <td>{student.name}</td>

              <td>

                <button
                  onClick={() =>
                    dispatch({
                      type: "EDIT_STUDENT",
                      payload: student.id,
                    })
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: "DELETE_STUDENT",
                      payload: student.id,
                    })
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;