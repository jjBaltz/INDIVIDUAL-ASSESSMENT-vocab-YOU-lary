import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addDefinitionForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-def--${obj.firebaseKey}` : 'submit-def'}" class="mb-4">
      <div class="form-group">
        <label for="title">Definition Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="defTitle" placeholder="Definition Concept" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="language-type">Language/Tech</label>
        <textarea class="form-control" placeholder="Language/Tech" id="language">${obj.language || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="def-description">Definition</label>
        <textarea class="form-control" placeholder="Definition Here" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit Definition
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(user, `${obj.language_id || ''}`);
};

export default addDefinitionForm;
