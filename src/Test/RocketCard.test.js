import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/index';
import Rockets from '../components/Rockets';

describe('Test the navigator', () => {
  it('Navigation is rendered', () => {
    const rockets = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Rockets />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });
});
