// Handles messaging to the user
const indexProsContainer = document.querySelector('#index-pro-container');
const messageContainer = document.querySelector('#message-container');
const showProContainer = document.querySelector('#show-pro-container');

export const onIndexProSuccess = (pros) => {
  pros.forEach((pro) => {
    const div = document.createElement('div');
    div.innerHTML = `
            <h3>${pro.firstName} ${pro.lastName}</h3>
            <button data-id='${pro._id}'>Show Pro</button>
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
export const onCreateProSuccess = () => {
  messageContainer.innerText = 'You have created a pro!';
};

export const onShowProSuccess = (pro) => {
  if (showProContainer.firstChild) {
    for (const child of showProContainer.children) {
      showProContainer.removeChild(child);
    }
  }
  const div = document.createElement('div');
  div.innerHTML = `
        <h3>${pro.firstName} ${pro.lastName}</h3>
        <p>PDGA Number: #${pro.pdgaNumber}</p>
        <p>Sponser: ${pro.sponser}</p>
        <p>${pro._id}</p>
    `;
  showProContainer.appendChild(div);
};
