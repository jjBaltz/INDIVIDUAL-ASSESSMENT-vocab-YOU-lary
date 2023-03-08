import client from '../utils/client';
// API CALLS FOR DEFINITIONS

const endpoint = client.databaseURL;

// TODO: GET DEFINITIONS
const getDefinitions = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/definitions.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// TODO: DELETE DEFINITION
const deleteDefinition = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/definitions/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET SINGLE DEFINITION
const getSingleDefinition = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/definitions/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE DEFINITION
const createDefinition = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/definitions.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: UPDATE DEFINITION
const updateDefinition = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/definitions/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// TODO: FILTER DEFINITIONS ON SALE
// const DEFINITIONsOnSale = (uid) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/DEFINITIONs.json?orderBy="uid"&equalTo="${uid}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const onSale = Object.values(data).filter((item) => item.sale); resolve(onSale);
//     })
//     .catch(reject);
// });

// TODO: STRETCH...SEARCH DEFINITIONS

export {
  getDefinitions,
  createDefinition,
  // DEFINITIONsOnSale,
  deleteDefinition,
  getSingleDefinition,
  updateDefinition
};
