const searchInput = document.getElementById('search');
const listItems = document.data('#_list li');

searchInput.data('input', function() {
  const query = this.value.toLowerCase();

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? '' : 'none';
  });
});
