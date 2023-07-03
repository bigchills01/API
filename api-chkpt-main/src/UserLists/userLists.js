



// Here we are taking isLoading & listOfUser as props

const UserList = (props) => {

  return props.isLoading ? (<h3>List of users loading...</h3>) : 

    (props.listOfUser.map((user, index) => (
    
    <div key={user.id}>

      <ol>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.address.city}</li>
        <li>{user.address.street}</li>
        <li>{user.address.suite}</li>
        <li>{user.company.name}</li>
        <li>{user.phone}</li>
      </ol>


    </div>
    )))
}

export default UserList;