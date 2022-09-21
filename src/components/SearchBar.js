import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import logo from '../components/logo.svg';

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
      <InnerWrapper>
        <InputContainer>
          <Logo src={logo}></Logo>
          <Input
            type='text'
            value={wordEntered}
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <Button>
            <BsSearch fill='white' />
          </Button>
          {/* <Microphone>
            <BiMicrophone fill='#ffffff' />
          </Microphone> */}
        </InputContainer>

        {filteredData.length != 0 && (
          <DataResult>
            {filteredData.map((value) => {
              return (
                <a href={value.videoId}>
                  <DataItem>{value.videoName}</DataItem>
                </a>
              );
            })}
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
  height: auto;
  background-color: var(--background-medium);
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 10px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 7px 0 7px 7px;
  margin: 0;
  margin-top: 0;
  width: 40%;
  background: rgb(18, 18, 18);
  border: solid 1px rgb(136, 136, 136);
  border-radius: 3px 0 0 3px;
  box-shadow: none;
  ::placeholder {
    color: rgb(136, 136, 136);
  }
`;

export const InputContainer = styled.div`
  displey: flex;
  flex-direction: row;
  margin-top: 0;
  padding-top: 0;
`;

export const Button = styled.button`
  background-color: var(--text-secondary);
  border: none;
  color: white;
  padding: 9px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0 3px 3px 0;
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

// export const Microphone = styled.div`
//   background-color: var(--background);
//   width 35px;
//   height: 35px;
//   border-radius: 50%;
// `;

const Logo = styled.img`
  width: 120px;
  height: 30px;
  padding: 10px 14px 0 30px;
  filter: invert();
  margin-bottom: 0;
  padding-right: 60px;
`;
