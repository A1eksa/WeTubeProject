import React from 'react';
import styled from 'styled-components';

export const SelectorBar = () => {
  return (
    <Wrapper>
      <Label>JavaScript</Label>
      <Label>JavaScript</Label>
      <Label>JavaScript</Label>
      <Label>JavaScript</Label>
      <Label>JavaScript</Label>
      <Label>JavaScript</Label>
      <Label>JavaScript</Label>
    </Wrapper>
  );
};

export default SelectorBar;

export const Wrapper = styled.div`
  background-color: var(--background-medium);
  border-bottom: solid 1px var(--background-light);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  width: 100%;
  justify-content: space-between;
`;

export const Label = styled.p`
  min-width: 90px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: var(--text-primary);
  background-color: var(--background-light);
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  padding: 0 1rem;
  //   margin-left: 1px;
  margin-bottom: 1rem;
`;
