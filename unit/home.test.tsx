import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '../src/pages/Home';

const changeLanguageMock = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      switch (key) {
        case 'home.greeting':
          return 'Hello, world!';
        case 'home.translate':
          return 'Translate';
        default:
          return key;
      }
    },
    i18n: {
      resolvedLanguage: 'en',
      changeLanguage: changeLanguageMock,
    },
  }),
}));



describe('Home component', () => {
  it('renders greeting and translate button', () => {
    render(<Home />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
    expect(screen.getByText('Translate')).toBeInTheDocument();
  });

  it('calls changeLanguage with "ru" when current language is "en"', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Translate'));
    expect(changeLanguageMock).toHaveBeenCalledWith('ru');
  });
});
