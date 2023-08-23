export const Filter = ({ value, handleFilterChange }) => {
  return (
    <>
      <h3>Filter</h3>
      <input
        type="text"
        defaultValue={value}
        onChange={evt => {
          handleFilterChange(evt.target.value);
        }}
      />
    </>
  );
};
