import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewLanguage = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-lang-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-lang--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.languageObject.title} ${obj.languageObject.definition} '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>  
   </div>
   </div>`;

  renderToDOM('#view', domString);
};

export default viewLanguage;
