const Filters = ({ filterTags, onDelete, deleteAllFilter }) => {
  if(filterTags.length !== 0){
    return (
      <div className="wrapper">
        {filterTags.map((filter, index) => (
          <div key={index}>
            {filter}
            <button onClick={() => onDelete(filter)}>X</button>
          </div>
        ))}
        <button onClick={deleteAllFilter}>Clear</button>
      </div>
    );
  } else {
    return null
  }

  // return (
  //   <>
  //     {filterTags.map((filter, index) => (
  //       <div key={index}>
  //         {filter}
  //         <button onClick={() => onDelete(filter)}>X</button>
  //       </div>
  //     ))}
  //     {filterTags.length !== 0 ? <button onClick={deleteAllFilter}>Clear</button> : null}
  //   </>
  // );
};

export default Filters;
