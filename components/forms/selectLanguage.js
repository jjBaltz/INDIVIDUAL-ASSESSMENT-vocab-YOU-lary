import getLanguages from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (uid, languageId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getLanguages(uid).then((languagesArray) => {
    languagesArray.forEach((language) => {
      domString += `
          <option 
            value="${language.firebaseKey}" 
            ${languageId === language.firebaseKey ? 'selected' : ''}>
              ${language.title} ${language.language}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectLanguage;
