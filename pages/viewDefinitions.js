import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewDefinitions = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-def-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-def--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${obj.language}</h5>
     <h6 class="card-subtitle mb-2 text-muted">${obj.title}</h6>
     <p class="card-text">${obj.definition}</p>
   </div>
   </div>
  </div>`;

  renderToDOM('#view', domString);
};

export default viewDefinitions;
