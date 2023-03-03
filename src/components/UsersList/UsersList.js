import UserCard from '../UserCard/UserCard';
import { List } from './UsersList.styled';

const UsersList = ({ users }) => {
  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }) => {
        return (
          <UserCard
            key={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        );
      })}
    </List>
  );
};

export default UsersList;
