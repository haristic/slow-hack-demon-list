const searchInput = document.getElementById('search');

// Change this selector once I know your HTML structure
const items = document.querySelectorAll('li, .level, .level-card'); 

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? '' : 'none';
  });
});
