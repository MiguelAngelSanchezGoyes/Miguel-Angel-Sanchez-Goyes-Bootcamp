import Header from './header.js';
import { screen } from '@testing-library/dom';

describe('given the component Header', () => {
  describe('when component is instantiated', () => {
    let element;
    beforeEach(() => {
      document.body.innerHTML = '<header class="header"></header>';

      element = new Header('.header');
    });

    test('then it should be rendered', () => {
      expect(element).toBeTruthy();
      expect(screen).toBeTruthy();
      expect(screen.getByText(/Tour of Heroes/));
    });
  });
});
