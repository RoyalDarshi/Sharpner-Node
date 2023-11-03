console.log("a");
console.log("b");
let pr1 = new Promise((resolve, reject) => {
  setTimeout(resolve("c"), 1000);
});
let pr2 = new Promise((resolve, reject) => {
  setTimeout(resolve("d"), 0);
});
async function promise() {
  let val = await pr1;
  console.log(val);
  val = await pr2;
  console.log(val);
}
promise();
