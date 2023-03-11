import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyDefinitions = () => {
  const domString = '<h1>Nothing Here</h1>';
  renderToDOM('#store', domString);
};

const showDefinitions = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-def-btn">Add A Definition</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p>${item.definition}</p>
            <i class="btn btn-success fas fa-eye" id="view-def-btn--${item.firebaseKey}"></i>
            <i id="edit-def-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-def-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showDefinitions, emptyDefinitions };
