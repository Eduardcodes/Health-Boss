import User from '../components/User'

const UserList = ({users}) => {
    return (
        <ul>
            {
                users.map(user => (
                    <User key={user.id} user={user} />
                ))
            }
        </ul>
    )
}

export default UserList;