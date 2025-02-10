const fetchData = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

const displayData = (data) => {
  data.map((user) => {
    document.getElementById("table").innerHTML =
      document.getElementById("table").innerHTML +
      `<tr>
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td><img src="${user.avatar}" alt=""></td>
        </tr>`;
  });
};

const clearTable = () => {
  document.getElementById("table").innerHTML = `<tr>
        <th>ID</th>
        <th>Email</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Avatar</th>
      </tr>`;
};

const main = async () => {
  data = await fetchData();

  setTimeout(() => {
    displayData(data);
    document.getElementById("loading").style.display = "none";
  }, 1000);

  document.getElementById("sortData").addEventListener("click", () => {
    document.getElementById("loading").style.display = "block";
    data.sort((usr1, usr2) => {
      return usr1.first_name.localeCompare(usr2.first_name);
    });
    clearTable();

    setTimeout(() => {
      displayData(data);
      document.getElementById("loading").style.display = "none"; // adding some Loading time
    }, 1000);
  });

  document.getElementById("search").addEventListener("change", (e) => {
    let text = e.target.value;
    newData = data.filter((user) => {
      console.log(user.first_name.includes(text));
      return user.first_name.includes(text);
    });
    // console.log(data);
    clearTable();
    displayData(newData);
  });
};

main();
