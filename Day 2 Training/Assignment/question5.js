// Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
// the data has been received in the fetch.
// Complete the above tasks with async/await.

const fetch_data = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data);
};

fetch_data();
