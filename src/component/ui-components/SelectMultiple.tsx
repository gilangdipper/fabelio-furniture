import React, { FC, useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Checkbox from './Checkbox';

const MultipleSelectWrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background-color: #ffffff;

  .placeholder {
    font-size: 16px;
    padding: 4px 10px;
    font-weight: 500;
  }

  .options-wrapper {
    position: absolute;
    width: 100%;

    .options {
      height: 0;
      width: 100%;
      max-height: 0;
      overflow: hidden;
      overflow-y: scroll;
      background-color: #ffffff;
      -webkit-transition: max-height .5s ease;
      display: flex;
      flex-flow: column;

      ${props => props.optionsVisible &&
        css`
          height: auto;
          max-height: 200px;
          -webkit-transition: max-height .5s ease;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
          border-style: solid;
          border-width: 0 1px 1px 1px;
          border-color: #d2d6da;
        `
      }

      label {
        padding: 8px;
        display: flex;
        font-weight: 500;
        font-size: 12px;

        input {
          margin-left: auto;
        }
      }
    }
  }
`;

type Props = {
  onChange: () => void,
  options: object[],
  checked: object,
  placeholder: string
}

const SelectMultiple: FC<Props> = ({ options, placeholder, checked, onChange }) => {
  const wrapperRef = useRef(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setOptionsVisible(false);
    }
    return;
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <MultipleSelectWrapper
      optionsVisible={optionsVisible}
      onClick={() => setOptionsVisible(true)}
      ref={wrapperRef}
      className="multiple-select-wrapper"
    >
      <div className="placeholder">{placeholder}</div>
      <div className="options-wrapper">
        <div className="options">
          {options.map((item, index) => 
            <label key={index}>
              {item.name}
              <Checkbox
                name={item.name}
                checked={checked[item.name]}
                onChange={onChange}
              />
            </label>)}
        </div>
      </div>
    </MultipleSelectWrapper>
  );
};

export default SelectMultiple;
