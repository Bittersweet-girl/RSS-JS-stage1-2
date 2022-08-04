import { changePage } from './components/changePage';
import './index.scss';
import { makeMainLayout } from './mainlayout/mainlayout';

window.addEventListener('DOMContentLoaded', () => {
  makeMainLayout();
  changePage();
});
