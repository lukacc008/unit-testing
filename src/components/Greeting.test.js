import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Renders Hello World as a text", () => {
  render(<Greeting />);
  const helloWorldElement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
