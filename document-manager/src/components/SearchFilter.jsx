import{useDispatch}from"react-redux";
import{searchFiles}from"../features/fileSlice";

function SearchFilter(){
  const dispatch=useDispatch();

  return(
    <input
      className="search"
      placeholder="Search files..."
      onChange={e=>dispatch(searchFiles(e.target.value))}
    />
  );
}

export default SearchFilter;