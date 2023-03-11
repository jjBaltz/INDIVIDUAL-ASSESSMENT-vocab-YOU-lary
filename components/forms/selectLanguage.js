import renderToDOM from '../../utils/renderToDom';
import { getLanguages } from '../../api/languageData';

const selectLanguage = (uid, languageId) => {
  let domString = `<label for="language">Select a Language</label>
    <select class="form-control" id="languageId" required>
    <option value="Language">Language</option>
    <option value="Tech">Tech</option>`;

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
