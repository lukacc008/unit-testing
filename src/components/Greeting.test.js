import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  const paragraphElement = screen.getByText("good to see you", {
    exact: false,
  });
  expect(paragraphElement).toBeInTheDocument();
});

test("Renders Changed! if the button was clicked", () => {
  // 1st step Arrange
  render(<Greeting />);
  // 2nd step Act
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);
  // Assert
  const outputElement = screen.getByText("Changed!");
  expect(outputElement).toBeInTheDocument();
});

test("does not render 'good to see you' if the button was clicked", () => {
  // 1st step Arrange
  render(<Greeting />);
  // 2nd step Act
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);
  // Assert
  const outputElement = screen.queryByText("good to see you", { exact: false });
  expect(outputElement).toBeNull();
});
