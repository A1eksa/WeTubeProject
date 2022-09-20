import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { SideBar } from './SideBar';
import { SearchBar } from './SearchBar';

// import { BsDot } from 'react-icons/bs';

const Home = ({ data }) => {
  console.log(data);

  return (
    <>
      <Wrapper>
        <SideBar />
        <VideoWrapper>
          {data.map((video, key) => (
            <Card>
              <ReactPlayer
                controls={false}
                width='95%'
                height='100%'
                url={video.videoId}
              />

              <InnerWrapper>
                <Left>
                  <Thumbnail src={video.channelThumbnail}></Thumbnail>
                </Left>
                <Right>
                  <Link href={video.videoId} target='blank'>
                    <VideoName key={video.id}>{video.videoName}</VideoName>
                  </Link>
                  {/* <VideoName key={video.id}>{video.videoName}</VideoName> */}
                  <ViewsWrapper>
                    <Views> {video.views.toString().slice(0, 4)} views</Views>
                    {/* <BsDot classname='dot' /> */}
                    <Views>{video.timeViewed}</Views>
                  </ViewsWrapper>
                </Right>
              </InnerWrapper>
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

export const Thumbnail = styled.img`
  width: 48px;
  border-radius: 50%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  margin-top: 1rem;
`;

export const Right = styled.div`
  margin-left: 1rem;
`;

export const VideoName = styled.p`
  color: var(--text-primary);
  font-size: 14px;
`;

export const Views = styled.p`
  color: var(--text-secondary);
  font-size: 12px;
`;

export const ViewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // margin-left: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
`;
