import UserCard from '../UserCard/UserCard';
import { ListBox, List } from './UsersList.styled';

const UsersList = ({ users }) => {
  return (
    <ListBox>
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
    </ListBox>
  );
};

export default UsersList;
