import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyLanguages = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showLanguages = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-lang-btn">Add A Language</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
        <hr>
        <p>${item.lDefinition}</p>
        <i class="btn btn-success fas fa-eye" id="view-lang-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-lang--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-lang-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showLanguages, emptyLanguages };
