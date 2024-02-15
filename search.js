const form = document.querySelector('form');
const input = document.querySelector('input[name="q"]');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  fetch(`/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      resultsDiv.innerHTML = '';
      if (data.length === 0) {
        resultsDiv.textContent = 'No results found.';
        return;
      }
      data.forEach((item) => {
        const result = document.createElement('div');
        result.textContent = item.title; // Modify this line to display the correct property from your data.
        resultsDiv.appendChild(result);
      });
    });
});
