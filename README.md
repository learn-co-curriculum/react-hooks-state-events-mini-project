# State and Events Mini Project

To build on what you've learned over the course of this section, we'll be
building out a simple task list app to practice working with state and events,
focusing in particular on working with arrays.

## Deliverables

There is some starter code built out for all of the components you'll need. The
data for the application is imported in `App`, so you'll need to pass that data
down to the components that need it as props.

Run `npm install` and `npm start`, then check out the starter code in the
browser. You'll see a console message with the `TASK` and `CATEGORY` data you'll
need down from `App`.

### TaskList

First, we'll want to display all the tasks in our app. Display each task using
the `Task` component. Make sure to use a `key` prop!

You should also update the `Task` component so that it shows the text and
category its task.

### CategoryFilter

First, update this component to display `<button>` elements for each category
(again, make sure to use a key prop). _When the button is clicked_, the
following should happen:

- Whichever button was clicked should have a class of `selected`. The other
  buttons should not have any class assigned.
- The list of tasks being displayed should be filtered, so that only tasks that
  match the category that was clicked are displayed.
- If the button for "All" is selected, all the tasks should be displayed.

### NewTaskForm

First, update this component to display `<option>` elements for each category
inside of the `<select>` element, so that the user can select a category when
adding a new task.

Next, update this form to be a _controlled component_, so that all form inputs
are captured in state.

_When the form is submitted_, add a new task to the list with the text and
category from the form. You'll need a callback prop named `onTaskFormSubmit` for
the tests to pass for this feature.

### Task

_When the delete button is clicked_, remove the task from the list!
