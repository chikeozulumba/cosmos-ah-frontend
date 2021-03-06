import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { mount } from 'enzyme';
import { render, cleanup, } from 'react-testing-library';

import Title from '../../ArticleComponent/Create/Content/Title';

import { mockStoreData, articleIsViewed } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore(mockStoreData);

afterEach(cleanup);

describe('Should render the component ', () => {
  test('<Title /> component', () => {
    const articleTitle = render(<Provider store={store}><Router><Title /></Router></Provider>);
    expect(articleTitle).toBeTruthy();
    expect(articleTitle).toMatchSnapshot();
  });

  test("Should register onchange events for the title field", async () => {
    const storeWithArticle = mockStore(mockStoreData);
    const props = {
      articles: { articleIsViewed, },
      match: { params: { id: null } },
      articleIsViewed, 
      history: { push: jest.fn() },
      setTitle: jest.fn(),
      setArticle: jest.fn(),
      articleTitle: articleIsViewed.data.title,
    }
    const wrapper = mount(<Provider store={storeWithArticle}><Router><Title {...props} /></Router></Provider>);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('.autoExpand')).toBeTruthy();
    wrapper.find('.autoExpand').first().simulate('blur');

    const event = { target: {name: "pollName", value: articleIsViewed.data.title }};
    wrapper.find('.autoExpand').first().simulate('change', event);
  });
});
