import "./css/style.css";
import headerContactsAccord from './modules/headerContactsAccord';
import burgerMenu from './modules/burgerMenu';
import popupRepairTypes from './modules/popupRepairTypes';
import maskPhone from './modules/maskPhone';

// Phone List Active
headerContactsAccord();
// Burger Menu Active
burgerMenu();
// Popup Repair Types Active
popupRepairTypes();
// Mask Phone
maskPhone('input[name="phone"]');
