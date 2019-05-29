import { $DOC } from '../constants';

export default function showPassword() {
  const btn = 'js-password-toggle';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();

    const input = e.currentTarget.parentNode.querySelector('input');
    if (!input) return;

    if (input.type === 'text') {
      input.type = 'password';
    } else {
      input.type = 'text';
    };
  });
};
