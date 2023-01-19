// Event listeners and any other functions that are needed for the app to run

import { indexPros, createPro, showPro, updatePro, deletePro } from './api.js';

import {
  onIndexProSuccess,
  onFailure,
  onCreateProSuccess,
  onShowProSuccess,
  onUpdateProSuccess,
  onDeleteProSuccess,
} from './ui.js';

const createProForm = document.querySelector('#create-pro-form');
const indexProsContainer = document.querySelector('#index-pro-container');
const showProContainer = document.querySelector('#show-pro-container');

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

showProContainer.addEventListener('submit', (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  const proData = {
    pro: {
      firstName: event.target['firstName'].value,
      lastName: event.target['lastName'].value,
      pdgaNumber: event.target['pdgaNumber'].value,
      sponser: event.target['sponser'].value,
    },
  };
  updatePro(proData, id).then(onUpdateProSuccess).catch(onFailure);
});

showProContainer.addEventListener('click', (event) => {
  const id = event.target.getAttribute('data-id');

  if (!id) return;

  deletePro(id).then(onDeleteProSuccess).catch(onFailure);
});
