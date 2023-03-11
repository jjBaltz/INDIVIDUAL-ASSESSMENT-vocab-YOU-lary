import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewLanguage = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="text-black ms-5 details">
     <h5>${obj.languageObject.title} ${obj.languageObject.lDefinition}</h5>  
   </div>
   </div>`;

  renderToDOM('#view', domString);
};

export default viewLanguage;
