import Button from '../Button/Button';
import {
  Card,
  Logo,
  BgBox,
  UserBox,
  AvatarBox,
  Avatar,
  UserProps,
} from './UserCard.styled';
import logo from '../../images/logo.svg';
import background from '../../images/background.png';
import { useState, useEffect } from 'react';

const UserCard = ({
  id,
  avatar,
  user,
  tweets,
  followers,
  onClick,
  followed,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [count, setCount] = useState(followers);

  useEffect(() => {
    followed.includes(id) && setIsFollowing(true);
  }, [followed, id]);

  useEffect(() => {
    followed.includes(id) && setCount(followers + 1);
  }, [followed, followers, id]);

  useEffect(() => {
    !followed.includes(id) && setCount(followers);
  }, [followed, followers, id]);

  useEffect(() => {
    !followed.includes(id) && setIsFollowing(false);
  }, [followed, id]);

  const handleClick = () => {
    onClick(id);
  };

  const localFollowers = count.toLocaleString('en-EN');

  return (
    <Card>
      <Logo alt="logo" src={logo}></Logo>
      <BgBox alt="bacground" src={background}></BgBox>
      <AvatarBox>
        <Avatar alt={user} src={avatar}></Avatar>
      </AvatarBox>
      <UserBox>
        <UserProps>{user}</UserProps>
        <UserProps>{tweets} tweets</UserProps>
        <UserProps>{localFollowers} followers</UserProps>
      </UserBox>
      <Button
        onClick={handleClick}
        text={!isFollowing ? 'Follow' : 'Following'}
        style={{ backgroundColor: !isFollowing ? '#EBD8FF' : '#5CD3A8' }}
      ></Button>
    </Card>
  );
};

export default UserCard;
//