import * as React from 'react';
import renderer from 'react-test-renderer';

import FilterBox from '../component';

describe('<FilterBoxComponent />', () => {
  it('matches snapshot', () => {
    let component: React.ReactElement<any>;

    component = (
      <FilterBox label="label" handleCheck={jest.fn()} value="language" />
    );

    const json: renderer.ReactTestRendererJSON | null = renderer
      .create(component)
      .toJSON();
    expect(json).toMatchSnapshot();
  });
});
