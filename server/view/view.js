let dataAPI;

async function funcApi() {
    let api = await fetch('/princess', {
        method: "GET",
        mode: "no-cors",
    });
    let dataAPI = await api.json();
    console.log(dataAPI);

    let table = document.getElementById("div");
    let li1 = document.createElement('p');

    dataAPI.Princess.princess.forEach(item => {
        li1.innerHTML += `id: ${item.id}, princesa: ${item.name}, filme: ${item.filme} <br/>`;
       
    });

    table.appendChild(li1);
}

funcApi()





