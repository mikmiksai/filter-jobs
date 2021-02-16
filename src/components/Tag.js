const Tag = ({ tag,onFilter }) => {

  return (
    <>
      <button onClick={() => onFilter(tag)}>{tag}</button>
    </>
  );
};

export default Tag;
