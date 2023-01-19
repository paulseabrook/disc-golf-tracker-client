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
  div.classList.add('player-div');
  div.innerHTML = `
        <h3>${pro.firstName} ${pro.lastName}</h3>
        <p>PDGA Number: #${pro.pdgaNumber}</p>
        <p>Sponser: ${pro.sponser}</p>
        <p>${pro._id}</p>

        <form data-id="${pro._id}" class="player-form">
          <input type="text" name="firstName" value="${pro.firstName}">
          <input type="text" name="lastName" value="${pro.lastName}">
          <input type="number" name="pdgaNumber" value="${pro.pdgaNumber}">
          <input type="text" name="sponser" value="${pro.sponser}">
          <input type="submit" value="Update Pro">
        </form>
      <button data-id="${pro._id}">Delete Pro</button>
    `;
  showProContainer.appendChild(div);
};

export const onUpdateProSuccess = () => {
  messageContainer.innerText = 'Update was successful :)';
};

export const onDeleteProSuccess = () => {
  messageContainer.innerText = 'Delete was successful';
};
