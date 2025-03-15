document.addEventListener('DOMContentLoaded', async () => {
    const displayBox = document.getElementById('glumci');
    await fetchData();
    // Funkcija za prikaz svih glumaca
    async function fetchData() {
      displayBox.innerHTML = '';
  
      const response = await fetch('http://localhost:3000/glumci');
      const dataEntries = await response.json();

      dataEntries.forEach(enrty => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('card');
        resultDiv.innerHTML = `
          <img src="glumcislike/${enrty.slika}.jpg" alt="${enrty.ime}" class="card-image">
          <h3>${enrty.ime}</h3>
          <p>Rating: ${enrty.rating}/10</p>
        `;
        displayBox.appendChild(resultDiv);
      });
    }
})