import signOut from '../utils/auth';
import getDefinitions from '../api/definitionData';
import showDefinitions from '../pages/definitions';
import getLaunguages from '../api/launguageData';
import showLanguages from '../pages/languages';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL DEFINITIONS
  document.querySelector('#all-books').addEventListener('click', () => {
    getDefinitions(user.uid).then(showDefinitions);
  });

  // ALL LANGUAGES
  document.querySelector('#authors').addEventListener('click', () => {
    getLaunguages(user.uid).then(showLanguages);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
