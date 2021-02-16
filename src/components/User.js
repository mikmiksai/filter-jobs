import Tags from './Tags'

const User = ({ user, onFilter }) => {
  return (
    <div className="card">
      <p>Position: {user.position}</p>
      <p>Date: {user.date}</p>
      <p>Employed: {user.employed}</p>
      <p>Location: {user.location}</p>
      <Tags tags={user.tags} user={user} onFilter={onFilter}/>
    </div>
  );
};

export default User;
