const todoList = () => {
  all = [];
  const add = (item) => {
    all.push(item);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  var yestday = new Date();
  yestday.setDate(yestday.getDate() - 1).toLocaleString("en-CA");

  var todayy = new Date().toLocaleString("en-CA");

  var tomo = new Date();
  tomo.setDate(tomo.getDate() + 1).toLocaleString("en-CA");
  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var od = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == yestday) {
        od.push(all[i]);
      }
    }
    return od;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due todayy accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dt = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == todayy) {
        dt.push(all[i]);
      }
    }
    return dt;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dl = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == tomo) {
        dl.push(all[i]);
      }
    }
    return dl;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    var OUTPUT_STRING = "";
    for (var i = 0; i < list.length - 1; i++) {
      if (list[i].dueDate != todayy) {
        OUTPUT_STRING =
          OUTPUT_STRING + "[ ] " + list[i].title + " " + list[i].dueDate + "\n";
      } else {
        if (list[i].completed != true) {
          OUTPUT_STRING = OUTPUT_STRING + "[ ] " + list[i].title + " " + "\n";
        } else {
          OUTPUT_STRING = OUTPUT_STRING + "[x] " + list[i].title + " " + "\n";
        }
      }
    }

    if (list[i].dueDate != todayy) {
      OUTPUT_STRING =
        OUTPUT_STRING + "[ ] " + list[i].title + " " + list[i].dueDate;
    } else {
      if (list[i].completed != true) {
        OUTPUT_STRING = OUTPUT_STRING + "[ ] " + list[i].title + " ";
      } else {
        OUTPUT_STRING = OUTPUT_STRING + "[x] " + list[i].title + " ";
      }
    }

    return OUTPUT_STRING;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
