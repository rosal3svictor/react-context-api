import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from './utils';
import App from './App';

const performRender = () => render(<App />);

describe('Change Theme Functionality Is Working Properly', () => {
  describe('When app is launched', () => {
    it('The main app container is defined with "light theme" by default', () => {
      performRender();
      const mainContainer = screen.getByTestId('main-container');
      expect(mainContainer).toHaveClass('light-theme');
    });

    it('React Logo is on its "light version"', () => {
      performRender();
      const image = screen.getByRole('img', { name: 'light' });

      expect(image).toBeInTheDocument();
    });

    it('The "Change Theme Button" contains the expected initial text', () => {
      performRender();
      const button = screen.getByRole('button');

      expect(button).toHaveTextContent('Change to dark theme');
    });
  });

  describe('When the user', () => {
    it('Clicks the button, theme is set to "dark"', async () => {
      performRender();
      const user = userEvent.setup();
      const button = screen.getByRole('button');

      user.click(button);

      await waitFor(() => {
        const mainContainer = screen.getByTestId('main-container');
        expect(mainContainer).toHaveClass('dark-theme');
      });

      const image = screen.getByRole('img', { name: 'dark' });
      expect(image).toBeInTheDocument();

      expect(button).toHaveTextContent('Change to light theme');
    });

    it('Clicks the button again, theme is set back to "light"', async () => {
      performRender();
      const user = userEvent.setup();
      const button = screen.getByRole('button');

      user.click(button);

      await waitFor(() => {
        const mainContainer = screen.getByTestId('main-container');
        expect(mainContainer).toHaveClass('light-theme');
      });

      const image = screen.getByRole('img', { name: 'light' });
      expect(image).toBeInTheDocument();

      expect(button).toHaveTextContent('Change to dark theme');
    });
  });
});
