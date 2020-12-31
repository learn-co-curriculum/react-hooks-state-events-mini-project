import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";
import App from "../components/App";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  fireEvent.change(screen.queryByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.queryByText(/Add task/));

  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const codeCount = screen.queryAllByText(/Code/).length;

  fireEvent.change(screen.queryByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.queryByText(/Add task/));

  expect(screen.queryByText(/Pass the tests/)).toBeInTheDocument();

  expect(screen.queryAllByText(/Code/).length).toBe(codeCount + 1);
});
