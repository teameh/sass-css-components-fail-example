import styles from './styles.scss';
import special from './special.scss';

document.getElementById('app').innerHTML = `
  <p class="${styles.text}">Text</p>
  <p class="${special.text}">Text</p>
`;
