export const Contacts = ({ items, deleteFunction }) => {
  return (
    <ul>
      {items.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            onClick={() => {
              deleteFunction(el.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
