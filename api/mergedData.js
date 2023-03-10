// for merged promises
import { getSingleDefinition, deleteDefinition } from './definitionData';
import { getSingleLanguage, getLanguageDefinition, deleteSingleLanguage } from './languageData';

// TODO: Get data for viewBook
const getDefinitionDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleDefinition(firebaseKey).then((definitionObject) => { // returns single book object
    getSingleLanguage(definitionObject.tech_id) // we nest this promise so that we can use the book object
      .then((languageObject) => resolve({ ...definitionObject, languageObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

const getLanguageDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleLanguage(firebaseKey).then((languageObject) => {
    getLanguageDefinition(languageObject.firebaseKey)
      .then((languageDefsArray) => resolve({ languageObject, languageDefsArray }));
  }).catch(reject);
});

const deleteLanguageDefinitionRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getLanguageDefinition(firebaseKey).then((languageDefsArray) => {
    const deleteDefinitionPromises = languageDefsArray.map((book) => deleteDefinition(book.firebaseKey));

    Promise.all(deleteDefinitionPromises).then(() => {
      deleteSingleLanguage(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getDefinitionDetails, deleteLanguageDefinitionRelationship, getLanguageDetails };
