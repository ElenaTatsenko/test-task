import UserCard from '../UserCard/UserCard';
import { ListBox, List } from './UsersList.styled';
import { useState } from 'react';

const UsersList = ({ users }) => {
  const [followed, setFollowed] = useState(
    JSON.parse(window.localStorage.getItem('followed')) || []
  );

  const onClick = id => {
    const newFollowed = [...followed];

    if (newFollowed.includes(id)) {
      const index = newFollowed.indexOf(id);
      newFollowed.splice(index, 1);
      setFollowed(newFollowed);
      window.localStorage.setItem('followed', JSON.stringify(newFollowed));
      return;
    }

    newFollowed.push(id);
    setFollowed(newFollowed);
    window.localStorage.setItem('followed', JSON.stringify(newFollowed));
  };
  return (
    <ListBox>
      <List>
        {users.map(({ id, user, tweets, followers, avatar }) => {
          return (
            <UserCard
              key={id}
              id={id}
              user={user}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              onClick={onClick}
              followed={followed}
            />
          );
        })}
      </List>
    </ListBox>
  );
};

export default UsersList;
