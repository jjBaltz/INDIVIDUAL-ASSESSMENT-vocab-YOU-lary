import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};

export default startApp;
