import "regenerator-runtime/runtime";
import "./styles/index.css";
import loginHandler from './modules/loginHandler';
import adminPanelHandler from './modules/adminPanelHandler';

if (!location.pathname.includes('/admin/table.html')) {
  loginHandler();
} else {
  adminPanelHandler();
}
