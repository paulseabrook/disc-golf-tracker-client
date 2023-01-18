// Event listeners and any other functions that are needed for the app to run

import { indexPros } from './api.js';

import { onIndexProSuccess, onFailure } from './ui.js';

indexPros()
  .then((res) => res.json())
  .then((res) => onIndexProSuccess(res.pros))
  .catch(onFailure);
