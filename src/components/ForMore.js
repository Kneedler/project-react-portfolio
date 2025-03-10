import React from 'react'
import styled from 'styled-components/macro'
import { ClonedSectionWrapper, HeadH4, InnerWrapper, HeadWrapper } from './styles/MainStyle'

const ForMore = () => {
  const socials = [
    {
      name: 'LinkedIn',
      aria: 'visit my linkedin',
      link: 'https://www.linkedin.com/in/sarah-kneedler/',
      icon: 'M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z'
    },
    {
      name: 'GitHub',
      aria: 'visit my Github',
      link: 'https://github.com/Kneedler"',
      icon: 'M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'
    },
    {
      name: 'StackOverflow',
      aria: 'visit my stackoverflow',
      link: 'https://stackoverflow.com/users/19453494/kneedler',
      icon: 'M 20.53125 0.46875 C 19.988281 0.542969 19.613281 1.046875 19.6875 1.59375 L 20.84375 9.53125 C 20.921875 10.074219 21.425781 10.453125 21.96875 10.375 C 22.515625 10.296875 22.890625 9.765625 22.8125 9.21875 L 21.6875 1.3125 C 21.609375 0.769531 21.078125 0.390625 20.53125 0.46875 Z M 14.5 2.5625 C 14.371094 2.585938 14.242188 2.644531 14.125 2.71875 C 13.664063 3.019531 13.542969 3.628906 13.84375 4.09375 L 18.21875 10.8125 C 18.519531 11.273438 19.132813 11.394531 19.59375 11.09375 C 20.058594 10.792969 20.175781 10.183594 19.875 9.71875 L 15.5 3 C 15.273438 2.65625 14.882813 2.492188 14.5 2.5625 Z M 10.125 6.75 C 9.871094 6.796875 9.625 6.960938 9.46875 7.1875 C 9.15625 7.640625 9.265625 8.246094 9.71875 8.5625 L 16.3125 13.125 C 16.761719 13.4375 17.375 13.324219 17.6875 12.875 C 18.003906 12.421875 17.890625 11.78125 17.4375 11.46875 L 10.875 6.9375 C 10.648438 6.78125 10.378906 6.703125 10.125 6.75 Z M 7.71875 11.5 C 7.332031 11.542969 6.992188 11.789063 6.875 12.1875 C 6.71875 12.714844 7.035156 13.28125 7.5625 13.4375 L 15.21875 15.6875 C 15.746094 15.84375 16.3125 15.558594 16.46875 15.03125 C 16.625 14.503906 16.308594 13.9375 15.78125 13.78125 L 8.125 11.53125 C 7.992188 11.492188 7.847656 11.484375 7.71875 11.5 Z M 2 16 L 2 23 C 2 24.65625 3.34375 26 5 26 L 17 26 C 18.65625 26 20 24.65625 20 23 L 20 16 L 18 16 L 18 23 C 18 23.550781 17.550781 24 17 24 L 5 24 C 4.449219 24 4 23.550781 4 23 L 4 16 Z M 7.125 16.125 C 6.574219 16.070313 6.085938 16.484375 6.03125 17.03125 C 5.976563 17.582031 6.390625 18.070313 6.9375 18.125 L 14.90625 18.90625 C 15.457031 18.960938 15.945313 18.550781 16 18 C 16.054688 17.453125 15.640625 16.960938 15.09375 16.90625 Z M 7 20 C 6.449219 20 6 20.449219 6 21 C 6 21.550781 6.449219 22 7 22 L 15 22 C 15.550781 22 16 21.550781 16 21 C 16 20.449219 15.550781 20 15 20 Z'
    }
  ]
  return (
    <ClonedSectionWrapper>
      <ClonedInnerWrapper>
        <HeadWrapper>
          <HeadH4>For more</HeadH4>
        </HeadWrapper>
        <ForMoreNav>
          {socials.map((socialLink) => {
            return (
              <ForMoreContainer>
                <BottomLink
                  href={socialLink.link}
                  target="_blank"
                  aria-label={socialLink.aria}
                  rel="noreferrer">
                  <BottomIcon
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="60"
                    height="60"
                    viewBox="0 0 30 30"
                    style={{ fill: '#575757' }}>
                    <path d={socialLink.icon} />
                  </BottomIcon>
                  {/* <LogoText>{socialLink.name}</LogoText> */}
                </BottomLink>
              </ForMoreContainer>
            )
          })}
        </ForMoreNav>
      </ClonedInnerWrapper>
    </ClonedSectionWrapper>

  )
}

export default ForMore;

/* const LogoText = styled.p`
  font-family: "Roboto";
  color: #575757;
  font-weight: bold;
  height: 40px;
  margin: 0;
  padding: 0;
  align-self: center;
  ` */
export const BottomLink = styled.a`
    height: 40px;
    width: 40px;
    display: inline-block;
    transition: 0.2s;
    position: relative;

  @media(min-width: 768px)  {
     height: 60px;
     width: 60px;
    }
  @media(min-width: 1024px) {
      &:Hover {
        transform: scale(1.1);
        }
    }
`
export const BottomIcon = styled.svg`
    width: 40px;
    height: 40px;

    @media(min-width: 768px) {
      width: 70px;
      height: 70px;
    }
    @media(min-width: 1024px) {
        &:Hover {
        transform: scale(1.1);
      }
    }
    `
const ForMoreNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
const ForMoreContainer = styled.div`
  flex: 1;
  text-align: center;
  flex-direction: column;
  margin: auto;
`
const ClonedInnerWrapper = styled(InnerWrapper)`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    max-width: 25rem;

  @media(min-width: 768px) {
     width: 80%; 
     max-width: 35rem;
  }
   @media(min-width: 1024px) {
     width: 75%; 
     max-width: 35rem;
  }
`