/* eslint-disable import/no-extraneous-dependencies */
import { render, RenderOptions } from '@testing-library/react';
import ThemeProvider from '../ThemeProvider';

function AllTheProviders({ children }: { children: React.ReactElement }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

/**
 * It is set up a custom method, transformed from its basic version from Library
 * React Testing, that includes things like global context providers, data
 * stores, etc. On the 'render' method to make them available globally on every
 * implementation that requires it, when performing unit testing.
 *
 * This was followed from the reference:
 * {@link https://testing-library.com/docs/react-testing-library/setup/#custom-render}
 */
function CustomRender(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';

export { CustomRender as render };
