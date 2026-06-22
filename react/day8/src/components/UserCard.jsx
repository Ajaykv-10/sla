

const UserCard = (props) => {
    const {name,role,className} = props;
  return (
    <div className={className}>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  )
}

export default UserCard