function createButton(classes) {
  const button = document.createElement('button');
  button.className = button.className;
  return button;
}
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = icon.className;
  return icon;
}
const button = createButton('remove-item btn-link text-red');
const icon = createIcon('fa-solid fa-xmark');
