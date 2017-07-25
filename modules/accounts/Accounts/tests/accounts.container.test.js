import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import accounts from '../model';
import Accounts from '../Accounts'

const middlewares = []
const mockStore = configureMockStore(middlewares)

describe('Test Accounts container', () => {
  it('should render with default props', () => {
    const store = mockStore({ accounts });

    expect(shallow(
      <Accounts store={store} />
    ));
  });
});