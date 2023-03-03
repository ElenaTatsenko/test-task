import Button from '../Button/Button';
import Hansel from '../../images';
import { Card, Logo } from './UserCard.styled';
import logo from '../../images/logo.svg';

const UserCard = ({ user, tweets, followers }) => {
    console.log(logo)
  return (
    <Card>
      <Logo alt="logo" image={logo}></Logo>

      <img alt={user} src={Hansel}></img>

      <h1>{user}</h1>
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>
      <Button></Button>
    </Card>
  );
};

export default UserCard;
