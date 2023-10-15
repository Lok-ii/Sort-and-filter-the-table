let details = [
  { FirstName: "Lokesh", LastName: "Kataria", Country: "India" },
  { FirstName: "Berglunds", LastName: "Snabbkop", Country: "Sweden" },
  { FirstName: "Koniglich", LastName: "Essen", Country: "Canada" },
  { FirstName: "Magazzini", LastName: "Alimentari", Country: "France" },
  { FirstName: "Sakura", LastName: "Tanaka", Country: "Japan" },
  { FirstName: "Alfreds", LastName: "Futterkiste", Country: "Germany" },
  { FirstName: "Liam", LastName: "Smith", Country: "United States" },
  { FirstName: "Elena", LastName: "Rodriguez", Country: "Spain" },
  { FirstName: "Isabella", LastName: "Rossi", Country: "Italy" },
  { FirstName: "Mariusz", LastName: "Nowak", Country: "Poland" },
];

let buttons = document.querySelectorAll("button");
let tableBody = document.querySelector("tbody");

// To add people to the table

let addPeople = (list = details) => {
  tableBody.innerHTML = "";
  list.forEach((e) => {
    let tableRow = document.createElement("tr");

    tableRow.innerHTML = `<td>${e.FirstName}</td>
        <td>${e.LastName}</td>
        <td>${e.Country}</td>`;

    tableBody.appendChild(tableRow);
  });
};

// To check the validity of the name and country

let checkValid = (f) => {
  for (let i = 0; i < f.length; i++) {
    if (
      (f.charCodeAt() >= 65 && f.charCodeAt() <= 90) ||
      (f.charCodeAt() >= 97 && f.charCodeAt() <= 122)
    ) {
      return true;
    } else {
      return false;
    }
  }
};

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("add")) {
      let fName = prompt("Enter the first name : ");
      let lName = prompt("Enter the last name : ");
      let cName = prompt("Enter the country name : ");

      // Add new person to array
      if (checkValid(fName) && checkValid(lName) && checkValid(cName)) {
        fName =
          fName.charAt(0).toUpperCase() +
          fName.substring(1, fName.length).toLowerCase();
        lName =
          lName.charAt(0).toUpperCase() +
          lName.substring(1, lName.length).toLowerCase();
        cName =
          cName.charAt(0).toUpperCase() +
          cName.substring(1, cName.length).toLowerCase();
        details.push({ FirstName: fName, LastName: lName, Country: cName });
        addPeople();
      } else {
        alert("Please enter valid data");
      }
    } else if (element.classList.contains("sortF")) {
      details.sort((a, b) => {
        let fa = a.FirstName.toLowerCase(),
          fb = b.FirstName.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      addPeople();
    } else if (element.classList.contains("sortL")) {
      details.sort((a, b) => {
        let fa = a.LastName.toLowerCase(),
          fb = b.LastName.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      addPeople();
    } else {
      details.sort((a, b) => {
        let fa = a.Country.toLowerCase(),
          fb = b.Country.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      addPeople();
    }
  });
});

// To filter the list

let search = document.querySelector("#search");

let filter = (search) => {
  let filteredList = details.filter((e) => {
    if (e.FirstName.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    if (e.LastName.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }

    if (e.Country.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
  });
  //   console.log(filteredList);
  addPeople(filteredList);
};

search.addEventListener("input", () => {
  filter(search.value);
});

window.onload = () => addPeople();
