//your code here!

const infiList = document.getElementById('infi-list');

// Populate initial list items lets take dummy list
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li');
  listItem.innerText = `List Item ${i}`;
  infiList.appendChild(listItem);
}
function isEndOfList() { 
    return infiList.scrollHeight - infiList.scrollTop === infiList.clientHeight;
}

function addMoreItems() {
  for (let i = 1; i <= 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List Item ${infiList.children.length + i}`;
    infiList.appendChild(listItem);
  }
}

infiList.addEventListener('scroll', () => {
  if (isEndOfList()) {
    addMoreItems();
  }
});