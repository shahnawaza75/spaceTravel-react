import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/index';
import Mission from '../components/Mission';

describe('Test the navigator', () => {
  it('Navigation is rendered', () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Mission />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(missions).toMatchSnapshot();
  });
});
