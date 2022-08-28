

let sub = document.getElementById("sub");

let inpt = document.getElementById("inpt");

sub.addEventListener("click", () => submit());

let res_arr = [];

let tbl = document.getElementById("tbl");

async function submit() {
    console.log(inpt.value);
    const url = 'http://localhost:5000/submit';
    const data = { value: inpt.value };
    try {
      const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
      'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
    res = JSON.stringify(json);
    res = JSON.parse(res);
    if (res != undefined && res != null) {
      res_arr.push(res.value);
    }
    } catch (error) {
      console.error(error);
    }
    //console.log(res_arr);
    let td = document.createElement("td")
    td.textContent = res.value;
    tbl.append(td);
    if (td.style.visibility = "hidden") {
      tbl.style.visibility = "visible";
      td.style.visibility = "visible";
    }
}