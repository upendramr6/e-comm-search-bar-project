document.getElementById("search-bar").addEventListener('input', function () {
    let query = this.value.trim();
    console.log(query)
    if (query.length > 3) {
        fetchResult(query)
    } else {
        clearResult()
    }
});


async function fetchResult(query) {
    try {
        let response = await fetch(`http://localhost:3000/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

function displayResults(items) {
    const resltDiv = document.getElementById("results");
    resltDiv.innerHTML = ""
    items.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('col-md-4', 'mb-4');
        elementDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.description}</p>
                    <p class="card-text text-muted">${element.price}</p>
                </div>
            </div>
        `;
        resltDiv.appendChild(elementDiv);
    });
}


function clearResult() {
    document.getElementById('results').innerHTML = "";
}