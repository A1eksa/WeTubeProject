import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { ReactComponent as ReactLogo } from './logo.svg';

export const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    console.log(searchWord);

    const newFilter = data.filter((value) => {
      return value.videoName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <Wrapper>
      <ReactLogo />
      <InnerWrapper>
        <InputContainer>
          <Input
            type='text'
            value={wordEntered}
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <Button>
            <BsSearch fill='white' />
          </Button>
        </InputContainer>

        {filteredData.length != 0 && (
          <DataResult>
            {/* <div> */}
            {filteredData.map((value) => {
              return (
                // <Link >
                <a href={value.videoId}>
                  <DataItem>{value.videoName}</DataItem>
                </a>
                // </Link>
              );
            })}
            {/* </div> */}
          </DataResult>
        )}
      </InnerWrapper>
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

{
  /* export const Line = styled.div`
  border-bottom-color: red;
`; */
}

export const InputContainer = styled.div`
  displey: flex;
`;

export const Button = styled.button`
  background-color: var(--text-secondary);
`;

export const DataResult = styled.div`
  margin-top: 5px;
  width: 40%;
  height: 100px;
  overflow: hidden;
  overflow-y: auto;
  background-color: white;
`;

export const DataItem = styled.p`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  color: black;
`;
