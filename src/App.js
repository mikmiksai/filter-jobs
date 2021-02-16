// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { data } from "./data";
import Users from "./components/Users";
import Filters from "./components/Filters";

function App() {
  const [users, setUsers] = useState(data);
  const [usersCopy, setUsersCopy] = useState(data);
  const [filterTags, setFilterTags] = useState([]);

  // useEffect(() => {
  //   console.log('hey');
  // },[filterTags]);

  const deleteFilter = (tag) => {
    // Remove Filter Tag
    let newFilterTags = filterTags.filter((filterTag) => filterTag !== tag);
    setFilterTags(newFilterTags);

    console.log(`new filter:${newFilterTags}`);

    // Display All items
    if (newFilterTags.length === 0) {
      setUsersCopy(users);
      return;
    }

    // Filter users - return user that includes all newFiltertags
    let userFiltered = users.filter((user) => {
      for (let i in newFilterTags) {
        if (!user.tags.includes(newFilterTags[i])) {
          // console.log(i == newFilterTags.length - 1);
            return false;
        }
      }
      return true;
    });

    // let result = [];
    // for(let i in newFilterTags){
    //   if(user.tags.includes(newFilterTags[i]) && result.indexOf(user) < 0){
    //      result.push(user);
    //   }
    // }

    // console.log(result)
    // return result

    console.log(userFiltered);
    // Display Users
    setUsersCopy(userFiltered);
  };

  const deleteAllFilter = () => {
    setUsersCopy(users);
    setFilterTags([]);
  };


  const onFilter = (tag) => {
    const index = filterTags.indexOf(tag);

    if (index > -1) return;

    setFilterTags([...filterTags, tag]);

    let usersCopy = users.filter((user) =>
      user.tags.includes(tag.toLowerCase())
    );
    setUsersCopy(usersCopy);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Filters
          filterTags={filterTags}
          onDelete={deleteFilter}
          deleteAllFilter={deleteAllFilter}
        />
        <Users filterTags={filterTags} users={usersCopy} onFilter={onFilter} />
      </header>
    </div>
  );
}

export default App;

