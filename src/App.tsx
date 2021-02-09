import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useFormik } from "formik";
import { TextInput } from "@platformbuilders/react-elements";

const App: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleOnBlur = () => {
    console.log("Teste");
  };

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={handleOnBlur}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
