// a place for our API Calls

export const indexPros = () => {
  return fetch(`http://localhost:8000/pros`);
};

export const createPro = (data) => {
  return fetch(`http://localhost:8000/pros`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const showPro = (id) => {
  return fetch(`http://localhost:8000/pros/${id}`);
};

export const updatePro = (data, id) => {
  return fetch(`http://localhost:8000/pros/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const deletePro = (id) => {
  return fetch(`http://localhost:8000/pros/${id}`, {
    method: 'DELETE',
  });
};
