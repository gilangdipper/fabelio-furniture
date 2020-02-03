import React from 'react';
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
        margin-right: 6px;
      }
      &:last-child {
        margin-left: 6px;
      }
    }
  }
`;

const SearchBox: React.FC<any> = () => {
  return (
    <SearchBoxWrapper>
      <div className="row">
        <InputBox />
      </div>
      <div className="row">
        <SelectMultiple />
        <SelectMultiple />
      </div>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
