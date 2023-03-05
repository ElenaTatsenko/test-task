import styled from '@emotion/styled';
import avatarFrame from '../../images/avatarFrame.svg';
import centralLine from '../../images/centralLine.svg'

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 28px 0px 36px 0px;
  width: 380px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  margin: 15px;
`
export const Logo = styled.img`
  width: 76px;
  position: absolute;
  top: 20px;
  left: 20px;`

export const BgBox = styled.img`
  width: 308px;
`
export const AvatarBox = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  background-image: url(${avatarFrame}), url(${centralLine});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90px contain;  
`
export const Avatar = styled.img`
  width: 62px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);`

export const UserBox = styled.ul`
  margin-top: 26px;
  margin-bottom: 26px;
`
export const UserProps = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0 0 16px 0;
`//