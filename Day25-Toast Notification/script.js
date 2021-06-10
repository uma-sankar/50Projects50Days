const button = document.querySelector('.btn');
const toastContainer = document.querySelector('#toasts');
const messages = [
  'message one',
  'message Two',
  'message Three',
  'message Four',
]
const messageType = [
  'info',
  'success',
  'error',
  'warning'
]
const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
}
const getRandomMessageType = () => {
  return messageType[Math.floor(Math.random() * messageType.length)];
}
const showNotification = () => {

  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.innerText = getRandomMessage();
  notification.classList.add(getRandomMessageType());
  const closeItem = document.createElement('button');
  closeItem.classList.add('close');
  closeItem.innerText = 'X';
  notification.appendChild(closeItem);
  toastContainer.appendChild(notification);
  //Automatically removed after timeout
  setTimeout(() => {
    closeItem.parentNode.remove();
  }, 3000)
  //Manually Closing the Notification
  closeItem.addEventListener('click', () => {
    closeItem.parentNode.remove();
  })
}
button.addEventListener('click', showNotification);
