const getTodos = (url, cb) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      //   console.log(JSON.parse(request.responseText));
      cb(null, data);
    } else if (request.readyState === 4) {
      cb("Could not find the resource.", null);
      //   console.log("Could not find the resource.");
    }
  });

  request.open("GET", url);
  request.send();
};

getTodos("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
  if (err) {
    console.log(err);
  }

  if (data) {
    console.log(data);
  }
});

// getTodos("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
//   if (err) {
//     console.log("Could not found the data!");
//   }

//   if (data) {
//     console.log(data);
//   }
// });

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("Called");
// }, 3000);

// console.log(3);
// console.log(4);