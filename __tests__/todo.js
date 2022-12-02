const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

var yestday = new Date();
yestday.setDate(yestday.getDate() - 1).toLocaleString("en-CA");

var todayy = new Date().toLocaleString("en-CA");

var tomo = new Date();
tomo.setDate(tomo.getDate() + 1).toLocaleString("en-CA");

describe("TodoList", () => {
  beforeAll(() => {
    add({
      title: "todo 1",
      completed: false,
      dueDate: yestday,
    });
  });

  test("Add Todo Here", () => {
    const todoitemsCount = all.length;
    add({
      title: "todo 2",
      completed: false,
      dueDate: todayy,
    });

    add({
      title: "todo 3",
      completed: false,
      dueDate: tomo,
    });

    expect(all.length).toBe(todoitemsCount + 2);
  });

  test("Marking a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("checking retrieval of overdue items", () => {
    expect(all[0].dueDate).toBe(yestday);
  });

  test("To check retrieval of due todayy items.", () => {
    expect(all[1].dueDate).toBe(todayy);
  });

  test("To lookover retrieval of due later items.", () => {
    expect(all[2].dueDate).toBe(tomo);
  });
});
