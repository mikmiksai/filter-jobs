import User from './User'

const Users = ({ onFilter, users }) => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} onFilter={onFilter}/>
      ))}
    </div>
  );
};

export default Users;


   // {
    //   id: 1,
    //   name: "michelle",
    //   age: "23",
    //   hobbies: ["drawing", "singing", "watching"],
    // },
    // {
    //   id: 2,
    //   name: "cindy",
    //   age: "16",
    //   hobbies: ["watching kdrama", "reading"],
    // },
    // {
    //   id: 3,
    //   name: "kaythleen",
    //   age: "25",
    //   hobbies: ["watching Mukbang", "coloring"],
    // },