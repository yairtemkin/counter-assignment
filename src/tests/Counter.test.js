import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const counterText = screen.getByText(/Counter/);
  expect(counterText).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const countText = screen.getByTestId(/count/);
  expect(countText.textContent).toBe("0");
});

test("clicking + increments the count", () => {
  const countText = screen.getByTestId(/count/);
  const increment = screen.getByText("+");
  userEvent.click(increment);
  expect(countText.textContent).toBe("1");
});

test("clicking - decrements the count", () => {
  const countText = screen.getByTestId(/count/);
  const decrement = screen.getByText("-");
  userEvent.click(decrement);
  expect(countText.textContent).toBe("-1");
});
