export const initialState = {
  students: [],
  editId: null,
  input: "",
};

export const studentReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };

    case "ADD_STUDENT":
      if (state.input.trim() === "") return state;

      return {
        ...state,
        students: [
          ...state.students,
          {
            id: Date.now(),
            name: state.input,
          },
        ],
        input: "",
      };

    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload,
        ),
      };

    case "EDIT_STUDENT":
      const selectedStudent = state.students.find(
        (student) => student.id === action.payload,
      );

      return {
        ...state,
        editId: action.payload,
        input: selectedStudent.name,
      };

    case "UPDATE_STUDENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === state.editId
            ? { ...student, name: state.input }
            : student,
        ),
        editId: null,
        input: "",
      };

    default:
      return state;
  }
};
