import UserCard from '../UserCard/UserCard';
const UsersList = ({ users }) => {
  return (
    <div>
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
    </div>
  );
};

export default UsersList;
