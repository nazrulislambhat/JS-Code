function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replacedddd';

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second Item</li>';
}

function replaceAll() {
  const lis = document.querySelectorAll('li');
  lis.forEach((item, index) => {
    item.outerHTML = '<li>Replaced All Items</li>';
  });
}
replaceFirstItem();
replaceSecondItem();
replaceAll();
