import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ placeholder, data }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <InputContainer>
          <Input type='text' placeholder={placeholder} />
          <Button>
            <BsSearch fill='white' />
          </Button>
        </InputContainer>
      </InnerWrapper>
      <Line></Line>
    </Wrapper>
  );
};

export default SearchBar;

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 15%;
  background-color: var(--background-medium);
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;
  padding: 1rem;
  margin-left: 25%;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 7px 0 7px 7px;
  margin: 0;
  width: 40%;
  background: rgb(18, 18, 18);
  border: solid 1px rgb(136, 136, 136);
  border-radius: 3px;
  ::placeholder {
    color: rgb(136, 136, 136);
  }
`;

export const Line = styled.div`
  border-bottom-color: red;
`;

export const InputContainer = styled.div`
  displey: flex;
`;

export const Button = styled.button`
  background-color: var(--text-secondary);
`;
