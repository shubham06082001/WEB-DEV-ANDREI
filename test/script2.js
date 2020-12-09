const fetch = require("node-fetch");

const getSinglePeoplePromise = (fetch) => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
    //   console.log(data.title);
      return {
        userId: data.userId,
        id: data.id,
        title: data.title,
        completed: data.completed,
      };
    });
};

getSinglePeoplePromise(fetch);

const getManyPeople = async (fetch) => {
  const getRequest = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await getRequest.json();
  //   console.log(data.length > 3 ? data.slice(0, 3) : data);
  //   console.log(data[0].userId);
  return {
    userId: data[0].userId,
    id: data[0].id,
    title: data[0].title,
    completed: data[0].completed,
  };
};

getManyPeople(fetch);

module.exports = {
  getManyPeople,
  getSinglePeoplePromise,
};
