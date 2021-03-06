import React from 'react';
import { render, cleanup } from 'react-testing-library';
import DropdownSelect from '../Dropdown';

afterEach(cleanup);

test('Renders <DropdownSelect />', () => {
  const dropDownSelect = render(<DropdownSelect placeholder="Search for articles" dropDownItems={[]} />);
  expect(dropDownSelect).toBeTruthy();
});
