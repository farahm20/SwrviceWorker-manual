if ('serviceWorker' in navigator) {
	// Assumes your service worker has file name "sw.js"
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('Registration succeeded. Scope is ' + reg.scope);
    });
}

const friends = document.querySelector("#friends");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    let html = "";
    data.forEach(element => {
        html += `<div class="card">
        <h2>${element.name}</h2>
        <div> ${element.email}</div>
        </div>
        `;
    });
    friends.innerHTML = html;
    console.log(data);
}); 