import React from 'react';
import styled from 'styled-components';
import { GrHomeRounded, GrHistory } from 'react-icons/gr';
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlinePhotoLibrary,
  MdVideoSettings,
  MdOutlineWatchLater,
} from 'react-icons/md';
import { AiOutlineYoutube, AiOutlineLike } from 'react-icons/ai';
import { BiHistory } from 'react-icons/bi';

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <IconWrapper>
        <GrHomeRounded fill='#ffffff' />
        <Text>Home</Text>
      </IconWrapper>
      <IconWrapper>
        <MdOutlineExplore fill='#ffffff' />
        <Text>Explore</Text>
      </IconWrapper>
      <IconWrapper>
        <MdOutlineSubscriptions fill='#ffffff' />
        <Text>Subscriptions</Text>
      </IconWrapper>
      <IconWrapper>
        <AiOutlineYoutube fill='#ffffff' />
        <Text>Channel</Text>
      </IconWrapper>
      <Line></Line>
      <IconWrapper>
        <MdOutlinePhotoLibrary fill='#ffffff' />
        <Text>Library</Text>
      </IconWrapper>
      <IconWrapper>
        <BiHistory fill='#ffffff' />
        <Text>History</Text>
      </IconWrapper>
      <IconWrapper>
        <MdVideoSettings fill='#ffffff' />
        <Text>Your videos</Text>
      </IconWrapper>
      <IconWrapper>
        <MdOutlineWatchLater fill='#ffffff' />
        <Text>Watch later</Text>
      </IconWrapper>
      <IconWrapper>
        <AiOutlineLike fill='#ffffff' />
        <Text>Liked videos</Text>
      </IconWrapper>
      <Line></Line>
      <TitleText>SUBSCRIPTIONS</TitleText>
    </SideBarWrapper>
  );
};

export const SideBarWrapper = styled.section`
  height: 100wh;
  width: 200px;
  background-color: var(--background-medium);
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
  :hover {
    background-color: var(--text-secondary);
  }
`;

export const Text = styled.p`
  color: var(--text-primary);
  display: flex;
  margin: 0;
  padding-left: 1rem;
`;

export const TitleText = styled.p`
  color: var(--text-primary);
  display: flex;
  margin: 0;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export const Line = styled.div`
  border-bottom: solid 1px var(--text-secondary);
`;
