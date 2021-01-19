import {render, RenderOptions, RenderResult} from '@testing-library/react';
import i18n from 'i18next';
import {FC, ReactElement} from 'react';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import {PreloadedState} from 'redux';

import {RootState} from 'model/helper';
import {wrapper} from 'model/store';

const resources = {
  en: {
    translation: require('./locales/en.json'),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

const AppProvider: FC = ({children}) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: Partial<PreloadedState<RootState>>;
}

function customRender(ui: ReactElement, options?: CustomRenderOptions): RenderResult {
  const ReduxProvider = wrapper.withRedux(AppProvider);
  const Wrapper: FC = ({children}) => {
    return (
      <ReduxProvider initialProps={{}} initialState={options?.initialState}>
        {children}
      </ReduxProvider>
    );
  };

  return render(ui, {wrapper: Wrapper, ...options});
}

export * from '@testing-library/react';
// override render method
export {customRender as render};

export {default as userEvent} from '@testing-library/user-event';
