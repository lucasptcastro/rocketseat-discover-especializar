import { render } from "preact";
import { Home } from "./pages/Home";
import "./styles/global.css";

render(<Home />, document.getElementById("app") as HTMLElement);
