import React, { useState, useRef, useEffect } from 'react';
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

        input {
          margin-left: auto;
        }
      }
    }
  }
`;

const checkboxes = [
  {
    name: 'check-box-1',
    key: 'checkBox1',
    label: 'Check Box 1',
  },
  {
    name: 'check-box-2',
    key: 'checkBox2',
    label: 'Check Box 2',
  },
  {
    name: 'check-box-3',
    key: 'checkBox3',
    label: 'Check Box 3',
  },
  {
    name: 'check-box-4',
    key: 'checkBox4',
    label: 'Check Box 4',
  },
];

const SelectMultiple: React.SFC<any> = () => {
  const wrapperRef = useRef(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [optionsChecked, setOptionsChecked] = useState({});
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setOptionsVisible(false);
    }
    return;
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setOptionsChecked(prevState => ({ ...prevState, [item]: isChecked }));
  }

  return (
    <MultipleSelectWrapper
      optionsVisible={optionsVisible}
      onClick={() => setOptionsVisible(true)}
      ref={wrapperRef}
      className="multiple-select-wrapper"
    >
      <div className="placeholder">Delivery Time</div>
      <div className="options-wrapper">
        <div className="options">
          {checkboxes.map(item => 
            <label key={item.key}>
              {item.name}
              <Checkbox
                name={item.name}
                checked={optionsChecked[item.name]}
                onChange={handleChange}
              />
            </label>)}
        </div>
      </div>
    </MultipleSelectWrapper>
  );
};

export default SelectMultiple;
