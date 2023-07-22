function handleSearch() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase();
  var url = '';

  // Array of items for each menu
  var foodItems = ['pizza', 'burger', 'sushi', 'pasta', 'tacos', 'steak'];
  var cakeItems = ['chocolate', 'oreo', 'black forest', 'red velvet', 'strawberry', 'fruit', 'cake', 'cakes'];
  var beverageItems = ['coffee', 'tea', 'juice', 'smoothie', 'iced tea', 'soda'];

  // Function to check if any keyword matches an item
  function checkKeywords(keywords, items) {
    return keywords.some(keyword => items.some(item => item.includes(keyword)));
  }

  // Split the search input into keywords
  var keywords = searchInput.split(' ');

  // Check if any of the keywords match the items in the respective menus
  if (checkKeywords(keywords, foodItems)) {
    url = '/menu/savory-delights'; 
  } else if (checkKeywords(keywords, cakeItems)) {
    url = '/menu/cakes'; 
  } else if (checkKeywords(keywords, beverageItems)) {
    url = '/menu/beverages'; 
  }

  if (url) {
    window.location.href = url;
  } else {
    // Item not found, display custom alert
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'The item you searched for is not available !!',
      confirmButtonText: 'OK'
    });
  }
}
