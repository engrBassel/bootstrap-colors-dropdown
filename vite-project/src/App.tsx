import { useState, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import Alert from "./components/Alert";

function App() {
  const colors = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ],
    [show, setShow] = useState(false),
    [value, setValue] = useState("primary");
  return (
    <>
      {show && <Alert color={value} onClose={() => setShow(false)} />}
      <Dropdown
        colors={colors}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setValue(e.target.value)
        }
      />
      <hr />
      <Button color={value} onClick={() => setShow(true)}>
        Click me
      </Button>
    </>
  );
}

export default App;
