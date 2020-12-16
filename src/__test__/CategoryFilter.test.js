import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import App from "../components/App";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  for (const category of CATEGORIES) {
    expect(screen.queryByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<CategoryFilter categories={CATEGORIES} />);

  const codeButton = screen.queryByText("Code");
  const allButton = screen.queryByText("All");

  fireEvent.click(codeButton);

  expect(codeButton.classList).toInclude("selected");
  expect(allButton.classList).not.toInclude("selected");
});

test("clicking the category button filters the task list", () => {
  render(<App />);

  const codeButton = screen.queryByText("Code");

  fireEvent.click(codeButton);

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<App />);

  const allButton = screen.queryByText("All");

  fireEvent.click(allButton);

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
});
