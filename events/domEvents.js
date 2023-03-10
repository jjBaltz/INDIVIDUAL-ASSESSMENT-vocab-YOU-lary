import { getDefinitions, getSingleDefinition, deleteDefinition } from '../api/definitionData';
import { getLanguages, getSingleLanguage } from '../api/languageData';
import { showDefinitions } from '../pages/definitions';
import { showLanguages } from '../pages/languages';
import addDefinitionForm from '../components/forms/addDefinitionForm';
import addLanguageForm from '../components/forms/addLanguageForm';
import viewDefinition from '../pages/viewDefinitions';
import viewLanguage from '../pages/viewLanguages';
import { getDefinitionDetails, getLanguageDetails, deleteLanguageDefinitionRelationship } from '../api/mergedData';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A DEFINITION
    if (e.target.id.includes('delete-def')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteDefinition(firebaseKey).then(() => {
          getDefinitions().then(showDefinitions);
        });
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A DEFINITION
    if (e.target.id.includes('add-def-btn')) {
      addDefinitionForm(user);
    }

    // CLICK EVENT EDITING/UPDATING A DEFINITION
    if (e.target.id.includes('edit-def-btn')) {
      const [, firebaseKey] = e.target.is.split('--');
      getSingleDefinition(firebaseKey).then((definitionObj) => addDefinitionForm(user, definitionObj));
    }

    // CLICK EVENT FOR VIEW DEFINITION DETAILS
    if (e.target.id.includes('view-def-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getDefinitionDetails(firebaseKey).then(viewDefinition);
    }

    // ADD CLICK EVENT FOR DELETING A LANGUAGE
    if (e.target.id.includes('delete-lang-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteLanguageDefinitionRelationship(firebaseKey).then(() => {
          getLanguages().then(showLanguages);
        });
      }
    }

    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A LANGUAGE
    if (e.target.id.includes('add-lang-btn')) {
      addLanguageForm(user);
    }

    // ADD CLICK EVENT FOR EDITING A LANGUAGE
    if (e.target.id.includes('update-lang')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleLanguage(firebaseKey).then((languageObject) => addLanguageForm(languageObject));
    }

    // CLICK EVENT FOR VIEW LANGUAGE BUTTON
    if (e.target.id.includes('view-lang')) {
      const [, firebaseKey] = e.target.id.split('--');

      getLanguageDetails(firebaseKey).then(viewLanguage);
    }
  });
};

export default domEvents;
