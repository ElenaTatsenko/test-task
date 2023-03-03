import Button from '../Button/Button';
import Hansel from '../../images/Hansel.png';
import { Card, Logo, BgBox, UserBox, AvatarBox, Avatar, UserProps } from './UserCard.styled';
import logo from '../../images/logo.svg';
import background from '../../images/background.png';

const UserCard = ({ user, tweets, followers }) => {
  return (
    <Card>
      <Logo alt="logo" src={logo}></Logo>
      <BgBox alt="bacground" src={background}></BgBox>
      
        <AvatarBox>
          <Avatar alt={user} src={Hansel}></Avatar>
        </AvatarBox>
        <UserBox>
        <UserProps>{user}</UserProps>
        <UserProps>{tweets} tweets</UserProps>
        <UserProps>{followers} followers</UserProps>
        </UserBox>
        <Button></Button>
      
    </Card>
  );
};

export default UserCard;
