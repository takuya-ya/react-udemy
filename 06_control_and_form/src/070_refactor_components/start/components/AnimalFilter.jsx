const AnimalFilter = ({ filterVal, setFilterVal }) => {
  return (
    <input
      type="text"
      value={filterVal}
      onChange={(e) => setFilterVal(e.target.value)}
    />
  );
};

export default AnimalFilter;
