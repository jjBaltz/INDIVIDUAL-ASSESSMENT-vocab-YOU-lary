import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" required>
      </div>
      <div class="form-group">
        <label for="image">Language/Tech</label>
        <input type="text" class="form-control" id="language" placeholder="Last Name" required>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
        <textarea class="form-control" id="description" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Language</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;
