import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

test("displays all items when initially rendered", () => {
  const { container } = render(<TaskList tasks={TASKS} />);
  expect(container.querySelector(".Items").children).toHaveLength(TASKS.length);
});
