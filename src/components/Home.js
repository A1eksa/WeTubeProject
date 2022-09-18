import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { SideBar } from './SideBar';

const Home = ({ data }) => {
  console.log(data);

  return (
    <>
      <Wrapper>
        <SideBar />
        <VideoWrapper>
          {data.map((video) => (
            <Card>
              <ReactPlayer
                controls
                width='95%'
                height='100%'
                url={video.videoId}
              />

              <a href={video.videoId}>
                <div key={video.id}>
                  <div>{video.videoName}</div>
                </div>
              </a>
              <img src={video.channelThumbnail}></img>
              <p>Views: {video.views}</p>
            </Card>
          ))}
        </VideoWrapper>
      </Wrapper>
    </>
  );
};

export default Home;

export const Wrapper = styled.div`
  width: vw;
  display: flex;
  flex-direction: row;
`;

export const VideoWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding: 2rem;
  background-color: var(--background);
`;

export const ListWrapper = styled.section`
  //   display: flex;
  //   flex-direction: column;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
