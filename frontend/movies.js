document.addEventListener('DOMContentLoaded', async () => {
    const displayBox = document.getElementById('movies');
    await fetchData();
    // Funkcija za prikaz svih filmova
    async function fetchData() {
      displayBox.innerHTML = '';
  
      const response = await fetch('http://localhost:3000/filmovi');
      const dataEntries = await response.json();

      dataEntries.forEach(enrty => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('card');
        resultDiv.innerHTML = `
          <img src="moviesslike/${enrty.slika}.jpg" alt="${enrty.ime}" class="card-image">
          <h3>${enrty.ime}</h3>
          <p>Rating: ${enrty.rating}/10</p>
        `;
        displayBox.appendChild(resultDiv);
      });
    }
})