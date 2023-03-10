import renderToDOM from '../../utils/renderToDom';
import { getLanguages } from '../../api/languageData';

const selectLanguage = (uid, languageId) => {
  let domString = `<label for="language">Select a Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>`;

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

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
