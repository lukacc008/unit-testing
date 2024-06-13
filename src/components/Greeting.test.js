import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("Renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});


test("Checks for text in paragraph", () => {
  render(<Greeting />);
  const paragraphElement = screen.getByText("It's good to see you", { exact: false });
  expect(paragraphElement).toBeInTheDocument();
});