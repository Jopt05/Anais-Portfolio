
import '../css/components.css';

export function component() {
    const element = document.createElement('h1');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'Jesus'], ' ');
  
    return element;
  }