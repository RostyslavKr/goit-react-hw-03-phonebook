import React from 'react';
import PropTypes from 'prop-types';
import {
  ContainerFilterInput,
  TitleFilter,
  FilterInput,
} from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <ContainerFilterInput>
    <ContainerFilterInput htmlFor="name">
      <TitleFilter>Find contacts by name</TitleFilter>
      <FilterInput
        autoComplete="off"
        type="text"
        name="name"
        value={value}
        onChange={onChange}
      />
    </ContainerFilterInput>
  </ContainerFilterInput>
);

Filter.protoTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
