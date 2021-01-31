import { Spinner } from "react-bootstrap";

const Loader = () => (
  <Spinner
    animation="border"
    role="status"
    style={{
      height: "100px",
      width: "100px",
      display: "block",
      margin: "auto",
    }}
  >
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default Loader;
