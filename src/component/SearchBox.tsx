import React, { FC } from 'react';
import styled from 'styled-components';
import InputBox from './ui-components/InputBox';
import SelectMultiple from './ui-components/SelectMultiple';

const SearchBoxWrapper = styled.div`
  width: 100%;
  background-color: #0f6cc8;
  padding: 16px;
  display: flex;
  flex-flow: row wrap;

  .row {
    flex: 0 0 100%;
    margin-bottom: 14px;
    display: flex;

    .multiple-select-wrapper {
      &:first-child {
        margin-right: 8px;
      }
      &:last-child {
        margin-left: 8px;
      }
    }

    .input-box {
      width: calc(50% - 8px);
    }

    @media only screen and (max-width: 425px) {
      .input-box {
        width: 100%;
      }
    }
  }
`;

const FILTERS = [ "furnitureStyle", "deliveryTime" ];
const defaultSelectOptions = {
  deliveryTime: [
    {
      name: 'one-week',
      label: '1 Week',
    },
    {
      name: 'two-weeks',
      label: '2 Weeks',
    },
    {
      name: 'one-month',
      label: '1 Month',
    },
    {
      name: 'more',
      label: 'More',
    }
  ]
};
const FILTER_NAME_MAP = {
  furnitureStyle: "Furniture Style",
  deliveryTime: "Delivery Time"
};

type Props = {
  furnitureStyles: string[],
  filters: object,
  setFilters: () => void
}

const SearchBox: FC<Props> = ({ furnitureStyles, filters, setFilters }) => {
  const selectOptions = {
    ...defaultSelectOptions,
    ...(furnitureStyles !== undefined && {
      furnitureStyle: furnitureStyles.map(item => ({ name: item, label: item }))
    })
  };

  const handleInputChange = e => {
    const inputText = e.target.value
    setFilters(prevState => ({ ...prevState, search: inputText }));
  };

  const renderMultipleSelect = (filterName, index) => {
    const handleSelectChange = (e) => {
      const item = e.target.name;
      const isChecked = e.target.checked;
      setFilters(prevState => ({
        ...prevState,
        [filterName]: {
          ...prevState[filterName],
          [item]: isChecked
        }
      }));
    };

    return (
      <SelectMultiple
        key={index}
        placeholder={FILTER_NAME_MAP[filterName]}
        options={selectOptions[filterName]}
        onChange={handleSelectChange}
        checked={filters[filterName]}
      />
    );
  };

  return (
    <SearchBoxWrapper>
      <div className="row">
        <InputBox
          placeholder="Search Furniture"
          value={filters.search}
          onChange={handleInputChange}
        />
      </div>
      <div className="row">
        {FILTERS.map(renderMultipleSelect)}
      </div>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
