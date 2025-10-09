const searchInput = document.getElementById('search');
const listItems = document.data('#_list level-name');

export function search
searchInput.getElementById('input', function() {
  const query = this.value.toLowerCase();

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? '' : 'none';
  });
});
