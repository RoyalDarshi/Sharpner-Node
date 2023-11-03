let froots = ["Mango", "Grapes", "", "Banana", "", "Coconut"];
console.log(
  froots.map((froot) => {
    if (!froot) {
      return "Empty String";
    }
    return froot;
  })
);
