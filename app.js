import express from "express";

import employees from "#db/employees"

const app = express();

export default app;

app.route("/").get((request, response) => {
    response.send("Hello employees!");
});

app.route("/employees").get((request, response) => {
    response.send(employees);
});

//app.route("/employees/random").get((request, response) => {
//    response.send(employees)
//});  Doesn't quite match what I've seen online, will wait to ask about tomorrow.

app.route("/employees/:id").get((request, response) => {
    const {id} = request.params;
    const employee = employees[id];

    if (!employees[id]) {
        return response.status(404).send("There is no employee with that id.")
    };
});