import Button from '../Button/Button'
import Hansel from '../../images'

const UserCard = ({ user, tweets, followers}) => {
return (<div>
    <img alt={user} src={Hansel}></img>
    <h1>{user}</h1>
    <p>{tweets} tweets</p>
    <p>{followers} followers</p>
    <Button></Button>
</div>)
}

export default UserCard