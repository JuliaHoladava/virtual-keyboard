const heading = document.createElement('h1');
heading.className = 'heading';
heading.textContent = 'Virtual Keyboard';
document.body.appendChild(heading);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
document.body.appendChild(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard__container';
document.body.appendChild(keyboard);

const keyboardKeysEn = [
  { code: 'Backquote', key: '`' },
  { code: 'Digit1', key: '1' },
  { code: 'Digit2', key: '2' },
  { code: 'Digit3', key: '3' },
  { code: 'Digit4', key: '4' },
  { code: 'Digit5', key: '5' },
  { code: 'Digit6', key: '6' },
  { code: 'Digit7', key: '7' },
  { code: 'Digit8', key: '8' },
  { code: 'Digit9', key: '9' },
  { code: 'Digit0', key: '0' },
  { code: 'Minus', key: '-' },
  { code: 'Equal', key: '=' },
  { code: 'Backspace', key: 'Backspace' },
  { code: 'Tab', key: 'Tab' },
  { code: 'KeyQ', key: 'q' },
  { code: 'KeyW', key: 'w' },
  { code: 'KeyE', key: 'e' },
  { code: 'KeyR', key: 'r' },
  { code: 'KeyT', key: 't' },
  { code: 'KeyY', key: 'y' },
  { code: 'KeyU', key: 'u' },
  { code: 'KeyI', key: 'i' },
  { code: 'KeyO', key: 'o' },
  { code: 'KeyP', key: 'p' },
  { code: 'BracketLeft', key: '[' },
  { code: 'BracketRight', key: ']' },
  { code: 'Backslash', key: '\\' },
  { code: 'Delete', key: 'Del' },
  { code: 'CapsLock', key: 'CapsLock' },
  { code: 'KeyA', key: 'a' },
  { code: 'KeyS', key: 's' },
  { code: 'KeyD', key: 'd' },
  { code: 'KeyF', key: 'f' },
  { code: 'KeyG', key: 'g' },
  { code: 'KeyH', key: 'h' },
  { code: 'KeyJ', key: 'j' },
  { code: 'KeyK', key: 'k' },
  { code: 'KeyL', key: 'l' },
  { code: 'Semicolon', key: ';' },
  { code: 'Quote', key: '\'' },
  { code: 'Enter', key: 'Enter' },
  { code: 'ShiftLeft', key: 'Shift' },
  { code: 'KeyZ', key: 'z' },
  { code: 'KeyX', key: 'x' },
  { code: 'KeyC', key: 'c' },
  { code: 'KeyV', key: 'v' },
  { code: 'KeyB', key: 'b' },
  { code: 'KeyN', key: 'n' },
  { code: 'KeyM', key: 'm' },
  { code: 'Comma', key: ',' },
  { code: 'Period', key: '.' },
  { code: 'Slash', key: '/' },
  { code: 'ArrowUp', key: '↑' },
  { code: 'ShiftRight', key: 'Shift' },
  { code: 'ControlLeft', key: 'Ctrl' },
  { code: 'MetaLeft', key: 'Win' },
  { code: 'AltLeft', key: 'Alt' },
  { code: 'Space', key: '' },
  { code: 'AltRight', key: 'Alt' },
  { code: 'ArrowRight', key: '←' },
  { code: 'ArrowDown', key: '↓' },
  { code: 'ArrowLeft', key: '→' },
  { code: 'ControlRight', key: 'Ctrl' },
];

const keyboardKeysRu = [
  { code: 'Backquote', key: 'ё' },
  { code: 'Digit1', key: '1' },
  { code: 'Digit2', key: '2' },
  { code: 'Digit3', key: '3' },
  { code: 'Digit4', key: '4' },
  { code: 'Digit5', key: '5' },
  { code: 'Digit6', key: '6' },
  { code: 'Digit7', key: '7' },
  { code: 'Digit8', key: '8' },
  { code: 'Digit9', key: '9' },
  { code: 'Digit0', key: '0' },
  { code: 'Minus', key: '-' },
  { code: 'Equal', key: '=' },
  { code: 'Backspace', key: 'Backspace' },
  { code: 'Tab', key: 'Tab' },
  { code: 'KeyQ', key: 'й' },
  { code: 'KeyW', key: 'ц' },
  { code: 'KeyE', key: 'у' },
  { code: 'KeyR', key: 'к' },
  { code: 'KeyT', key: 'е' },
  { code: 'KeyY', key: 'н' },
  { code: 'KeyU', key: 'г' },
  { code: 'KeyI', key: 'ш' },
  { code: 'KeyO', key: 'щ' },
  { code: 'KeyP', key: 'з' },
  { code: 'BracketLeft', key: 'х' },
  { code: 'BracketRight', key: 'ъ' },
  { code: 'Backslash', key: '\\' },
  { code: 'Delete', key: 'Del' },
  { code: 'CapsLock', key: 'CapsLock' },
  { code: 'KeyA', key: 'ф' },
  { code: 'KeyS', key: 'ы' },
  { code: 'KeyD', key: 'в' },
  { code: 'KeyF', key: 'а' },
  { code: 'KeyG', key: 'п' },
  { code: 'KeyH', key: 'р' },
  { code: 'KeyJ', key: 'о' },
  { code: 'KeyK', key: 'л' },
  { code: 'KeyL', key: 'д' },
  { code: 'Semicolon', key: 'ж' },
  { code: 'Quote', key: 'э' },
  { code: 'Enter', key: 'Enter' },
  { code: 'ShiftLeft', key: 'Shift' },
  { code: 'KeyZ', key: 'я' },
  { code: 'KeyX', key: 'ч' },
  { code: 'KeyC', key: 'с' },
  { code: 'KeyV', key: 'м' },
  { code: 'KeyB', key: 'и' },
  { code: 'KeyN', key: 'т' },
  { code: 'KeyM', key: 'ь' },
  { code: 'Comma', key: 'б' },
  { code: 'Period', key: 'ю' },
  { code: 'Slash', key: '.' },
  { code: 'ArrowUp', key: '↑' },
  { code: 'ShiftRight', key: 'Shift' },
  { code: 'ControlLeft', key: 'Ctrl' },
  { code: 'MetaLeft', key: 'Win' },
  { code: 'AltLeft', key: 'Alt' },
  { code: 'Space', key: '' },
  { code: 'AltRight', key: 'Alt' },
  { code: 'ArrowRight', key: '←' },
  { code: 'ArrowDown', key: '↓' },
  { code: 'ArrowLeft', key: '→' },
  { code: 'ControlRight', key: 'Ctrl' },
];

const lineBreaks = ['Backspace', 'Delete', 'Enter', 'ShiftRight'];
const specialKey = ['Backspace', 'Delete', 'Enter', 'ShiftRight', 'ShiftLeft', 'Tab',
  'Escape', 'CapsLock', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft',
  'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft'];
let isCapsPressed = false;
let isShiftPressed = false;
let isCtrlPressed = false;
let choosedLanguage = keyboardKeysEn;

const printToInput = (char) => {
  textarea.value += char;
};

const printToUpperInput = (char) => {
  textarea.value += char.toUpperCase();
};

const delToInput = () => {
  const { value } = textarea;
  textarea.value = value.substring(0, value.length - 1);
};

const toggleShift = () => {
  isShiftPressed = false;
  keyboard.querySelector('button[data-code=ShiftLeft]').classList.toggle('highlight');
  keyboard.querySelector('button[data-code=ShiftRight]').classList.toggle('highlight');
};

const createKeyboard = () => {
  choosedLanguage.forEach((key) => {
    const keyElement = document.createElement('button');
    const addBreak = lineBreaks.includes(key.code);

    keyElement.classList.add('keyboard__key');
    keyElement.textContent = key.key;
    keyElement.dataset.code = key.code;

    switch (key.code) {
      case 'Backspace':
        keyElement.classList.add('keyboard__key_long');

        keyElement.addEventListener('click', () => {
          delToInput();
        });
        break;

      case 'Tab':
        keyElement.addEventListener('click', () => {
          printToInput('\t');
        });
        break;

      case 'CapsLock':
        keyElement.classList.add('keyboard__key_long');

        keyElement.addEventListener('click', () => {
          if (!isCapsPressed) {
            isCapsPressed = true;
          } else {
            isCapsPressed = false;
          }

          keyElement.classList.toggle('highlight');
        });
        break;

      case 'Space':
        keyElement.classList.add('keyboard__key_super-long');

        keyElement.addEventListener('click', () => {
          printToInput(' ');
        });
        break;

      case 'Enter':
        keyElement.classList.add('keyboard__key_long');

        keyElement.addEventListener('click', () => {
          printToInput('\n');
        });
        break;

      case 'ShiftLeft':
        keyElement.classList.add('keyboard__key_long');

        keyElement.addEventListener('click', () => {
          isShiftPressed = true;

          keyElement.classList.toggle('highlight');
          keyboard.querySelector('button[data-code=ShiftRight]').classList.toggle('highlight');
        });
        break;

      case 'ShiftRight':
        keyElement.classList.add('keyboard__key_long');

        keyElement.addEventListener('click', () => {
          isShiftPressed = true;

          keyElement.classList.toggle('highlight');
          keyboard.querySelector('button[data-code=ShiftLeft]').classList.toggle('highlight');
        });
        break;

      case 'ControlLeft':
        keyElement.addEventListener('click', () => {
          isCtrlPressed = true;

          keyElement.classList.toggle('highlight');
        });
        break;

      case 'AltLeft':
        keyElement.addEventListener('click', () => {
          if (isCtrlPressed) {
            if (choosedLanguage === keyboardKeysEn) {
              choosedLanguage = keyboardKeysRu;
            } else {
              choosedLanguage = keyboardKeysEn;
            }
          }
          isCtrlPressed = true;

          keyElement.classList.toggle('highlight');
        });
        break;

      default:
        keyElement.addEventListener('click', () => {
          if (!specialKey.includes(key.code)) {
            if (isCapsPressed) {
              if (isShiftPressed) {
                printToInput(key.key);
                toggleShift();
              } else {
                printToUpperInput(key.key);
              }
            } else if (isShiftPressed) {
              printToUpperInput(key.key);
              toggleShift();
            } else {
              printToInput(key.key);
            }
          }
        });
    }

    keyboard.appendChild(keyElement);

    if (addBreak) {
      keyboard.appendChild(document.createElement('br'));
    }
  });
};

createKeyboard();

document.addEventListener('keydown', (event) => {
  const keyElement = keyboard.querySelector(`button[data-code='${event.code}']`);

  if (keyElement) {
    keyElement.classList.add('highlight');
  }

  if (!specialKey.includes(event.code)) {
    printToInput(event.key);
  }
});

document.addEventListener('keyup', (event) => {
  const keyElement = keyboard.querySelector(`button[data-code='${event.code}']`);

  if (keyElement) {
    keyElement.classList.toggle('highlight');
  }
});

const p1 = document.createElement('p');
p1.className = 'p';
p1.textContent = 'The keyboard is designed for the Windows';
document.body.appendChild(p1);

const p2 = document.createElement('p');
p2.className = 'p';
p2.textContent = 'Switching keyboard layouts between English and another language is not implemented';
document.body.appendChild(p2);
