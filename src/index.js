import styles from './styles.scss';
import customStyles from './custom.scss';

document.getElementById('app').innerHTML = `
  <p class="${styles.text}">Text</p>
  <p class="${customStyles.text}">Text</p>
`;
