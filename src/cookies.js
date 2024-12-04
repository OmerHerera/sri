// Function to get the value of a specific cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null; // Cookie not found
}

// Example usage:
const myCookie = getCookie('myCookie');
console.log('My Cookie:', myCookie);