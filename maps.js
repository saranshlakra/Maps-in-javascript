// ---------------maps-------------
var a = new Map(); // Creating map ( always use new jeyword while creating map)
a.set("Question", "What is your name?"); // this is how we set value using map
a.set("Question1", "What is your hobby?");
// a.delete("Question1"); // how to delete in maps
for (let [key, value] of a.entries()) {
  // looping in map
  if (key === "Question1") {
    console.log(key + " <--key & value--> " + value);
  }
}
