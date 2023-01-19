// Event listeners and any other functions that are needed for the app to run

import { indexPros, createPro, showPro } from './api.js';

import {
  onIndexProSuccess,
  onFailure,
  onCreateProSuccess,
  onShowProSuccess,
} from './ui.js';

const createProForm = document.querySelector('#create-pro-form');
const indexProsContainer = document.querySelector('#index-pro-container');

indexPros()
  .then((res) => res.json())
  .then((res) => onIndexProSuccess(res.pros))
  .catch(onFailure);

createProForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const proData = {
    pro: {
      firstName: event.target['firstName'].value,
      lastName: event.target['lastName'].value,
      pdgaNumber: event.target['pdgaNumber'].value,
      sponser: event.target['sponser'].value,
    },
  };
  createPro(proData).then(onCreateProSuccess).catch(onFailure);
});

indexProsContainer.addEventListener('click', (event) => {
  const id = event.target.getAttribute('data-id');

  if (!id) return;

  showPro(id)
    .then((res) => res.json())
    .then((res) => onShowProSuccess(res.pro))
    .catch(onFailure);
});
