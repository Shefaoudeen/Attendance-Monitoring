import { Model, createServer } from "miragejs";
import { Studentimage } from "./src/assets";

createServer({
  models: {
    students: Model,
  },
  seeds(server) {
    server.create("student", {
      id: "1",
      name: "Student 1",
      regno: "21EC1001",
      image: Studentimage,
      attendance: {
        moe: 0,
        dcn: 1,
        vd: 2,
        cse: 0,
        ime: 1,
        moel: 2,
        dcnl: 0,
        vdl: 2,
      },
    });
    server.create("student", {
      id: "2",
      name: "Student 2",
      regno: "21EC1002",
      image: Studentimage,
    });
    server.create("student", {
      id: "3",
      name: "Student 3",
      regno: "21EC1003",
      image: Studentimage,
    });
    server.create("student", {
      id: "4",
      name: "Student 4",
      regno: "21EC1004",
      image: Studentimage,
    });
    server.create("student", {
      id: "5",
      name: "Student 5",
      regno: "21EC1005",
      image: Studentimage,
    });
    server.create("student", {
      id: "6",
      name: "Student 6",
      regno: "21EC1006",
      image: Studentimage,
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/students", (schema, request) => {
      return schema.students.all();
    });

    this.get("/students/:id", (schema, request) => {
      const id = request.params.id;
      return schema.students.find(id);
    });
  },
});
