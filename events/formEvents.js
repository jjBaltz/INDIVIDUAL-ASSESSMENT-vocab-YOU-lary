import { createDefinition, updateDefinition, getDefinitions } from '../api/definitionData';
import { createLanguage, updateLanguage, getLanguages } from '../api/languageData';
import { showDefinitions } from '../pages/definitions';
import { showLanguages } from '../pages/languages';

const currentTime = Date.now();

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A DEFINITION
    if (e.target.id.includes('submit-def')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
        time: currentTime
      };
      createDefinition(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateDefinition(patchPayload).then(() => {
          getDefinitions(user.uid).then(showDefinitions);
        });
      });
    }

    // CLICK EVENT FOR EDITING A DEFINITION
    if (e.target.id.includes('update-def')) {
      console.warn('did it work');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };
      updateDefinition(payload).then(() => {
        getDefinitions(user.uid).then(showDefinitions);
      });
    }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING A LANGUAGE
    if (e.target.id.includes('submit-language')) {
      e.preventDefault();
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        lDefinition: document.querySelector('#lDefinition').value,
        uid: user.uid,
        time: currentTime,
      };
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLanguage(patchPayload).then(() => {
          getLanguages(user.uid).then(showLanguages);
        });
      });
    }

    // ADD CLICK EVENT FOR EDITING A LANGUAGE
    if (e.target.id.includes('update-lang')) {
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
