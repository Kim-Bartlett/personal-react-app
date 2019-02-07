import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import FilterBoxContainer, { FilterBoxProps } from '../container';
import FilterBoxComponent from '../component';

let instance: FilterBoxContainer;

describe('<FilterBox />', () => {
  let shallowWrapper: ShallowWrapper;

  const mockProps: FilterBoxProps = {
    label: 'test',
    value: 'react',
    handleFilter: jest.fn()
  };

  const renderComponent = () => {
    return shallow(<FilterBoxContainer {...mockProps} />);
  };

  beforeEach(() => {
    shallowWrapper = renderComponent();
    instance = shallowWrapper.instance() as FilterBoxContainer;
  });

  describe('handleCheck ', () => {
    it('should make a call to handleFilter', () => {
      const mockEvent = {
        currentTarget: { getAttribute: jest.fn().mockReturnValue(mockProps.value) }
      };

      instance.handleCheck(mockEvent as any, true);
      expect(mockProps.handleFilter).toBeCalledWith(true, mockProps.value);
    });
  });

  describe('<FilterBoxComponent />', () => {
    it('should have the correct props', () => {
      const filterBox = shallowWrapper.find(FilterBoxComponent);
      expect(filterBox.prop('label')).toEqual(mockProps.label);
      expect(filterBox.prop('handleCheck')).toEqual(instance.handleCheck);
      expect(filterBox.prop('value')).toEqual(mockProps.value);
    });
  });
});
