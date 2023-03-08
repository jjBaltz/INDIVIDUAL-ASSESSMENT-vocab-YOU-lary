import { createDefinition, updateDefinition, getDefinitions } from '../api/definitionData';
import { createLanguage, updateLanguage, getLanguages } from '../api/launguageData';
import showDefinitions from '../pages/definitions';
import showLanguages from '../pages/languages';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A DEFINITION
    if (e.target.id.includes('')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        tech_id: document.querySelector('#techID').value,
        uid: user.uid,
      };
      createDefinition(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateDefinition(patchPayload).then(() => {
          getDefinitions(user.uid).then(showDefinitions);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A DEFINITION
    if (e.target.id.includes('')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        tech_id: document.querySelector('#techID').value,
        firebaseKey,
      };
      updateDefinition(payload).then(() => {
        getDefinitions(user.uid).then(showDefinitions);
      });
    }

    // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING A LANGUAGE
    if (e.target.id.includes('')) {
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        lDefinition: document.querySelector('#lDefinition').value,
      };
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLanguage(patchPayload).then(() => {
          getLanguages(user.uid).then(showLanguages);
        });
      });
    }

    // FIXME:ADD CLICK EVENT FOR EDITING AN Language
    if (e.target.id.includes('')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        lDefinition: document.querySelector('#lDefinition').value,
        firebaseKey
      };
      updateLanguage(payload).then(() => {
        getLanguages(user.uid).then(showLanguages);
      });
    }
  });
};

export default formEvents;
