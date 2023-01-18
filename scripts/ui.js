// Handles messaging to the user
const indexProsContainer = document.querySelector('#index-pro-container');
const messageContainer = document.querySelector('#message-container');

export const onIndexProSuccess = (pros) => {
  pros.forEach((pro) => {
    const div = document.createElement('div');
    div.innerHTML = `
            <h3>${pro.firstName} ${pro.lastName}</h3>
        `;
    indexProsContainer.appendChild(div);
  });
};

export const onFailure = (error) => {
  messageContainer.innerHTML = `
      <h3>You've encountered an error. Try again later</h3>
      <p>${error}</p>
  `;
};
