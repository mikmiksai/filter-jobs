import Tag from "./Tag";

const Tags = ({ tags, onFilter }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} onFilter={onFilter}/>
      ))}
    </div>
  );
};

export default Tags;
