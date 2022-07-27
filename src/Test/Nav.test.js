import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Test the navigator', () => {
  it('Navigation is rendered', () => {
    const nav = renderer
      .create(
        <BrowserRouter>
          {' '}
          <Nav />
          {' '}
        </BrowserRouter>,
      )
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});
