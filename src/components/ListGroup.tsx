

function ListGroup() {
  const items = ["New York", "Tokyo", "Berlin"];
  let selectedIndex = 0
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ?'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={()=>selectedIndex = index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
