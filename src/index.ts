import { User } from "./models/User";

const user = new User({ age: 1, name: "NEW RECORD" });

user.events.on("change", () => {
  console.log("change!");
});

user.events.trigger("change");
