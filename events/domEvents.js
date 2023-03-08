const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A DEFINITION
    if (e.target.id.includes('')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        delete(firebaseKey).then(() => {
          getDefinitions().then(showDefinitions);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A DEFINITION
    if (e.target.id.includes('')) {
      addDefinitionForm(user);
    }

    // TODO: CLICK EVENT EDITING/UPDATING A DEFINITION
    if (e.target.id.includes('')) {
      const [, firebaseKey] = e.target.is.split('--');
      getSingleDefinition(firebaseKey).then((definitionObj) => addDefinitionForm(user, definitionObj));
    }

    // TODO: CLICK EVENT FOR VIEW DEFINITION DETAILS
    if (e.target.id.includes('')) {
      const [, firebaseKey] = e.target.id.split('--');

      getDefinitionDetails(firebaseKey).then(viewDefinition);
    }

    // FIXME: ADD CLICK EVENT FOR DELETING A LANGUAGE
    if (e.target.id.includes('')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteLanguageDefinitionsRelationship(firebaseKey).then(() => {
          getLanguage().then(showLanguage);
        });
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A LANGUAGE
    if (e.target.id.includes('')) {
      addLanguageForm(user);
    }

    // FIXME: ADD CLICK EVENT FOR EDITING A LANGUAGE
    if (e.target.id.includes('')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleLanguage(firebaseKey).then((languageObject) => addLanguageForm(languageObject));
    }

    // CLICK EVENT FOR VIEW LANGUAGE BUTTON
    if (e.target.id.includes('')) {
      const [, firebaseKey] = e.target.id.split('--');

      getLanguageDetails(firebaseKey).then(viewLanguage);
    }
  });
};

export default domEvents;
