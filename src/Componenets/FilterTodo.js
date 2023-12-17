import React from 'react'
import { CiSearch } from "react-icons/ci";
const FilterTodo = ({ setFilterType, filterType }) => {
  // const data = {
  //     completed:true,
  //     uncompleted:false,
  //     personalCompleted: "personalCompleted",
  //     buisness: "buisness",
  //     businessCompleted: "businessCompleted",
  //     personal: "personal"
  // }
  // const option=Object.entries(data).map( ([key,value]) =>(
  //   <option key={ key } value={ value }>{key }</option>
  // ) )
  return (
    <div className="filter">
      <input
        value={filterType}
        placeholder="Search"
        onChange={(e) => setFilterType(e.target.value)}
      />
      {<CiSearch className="searchIcon" />}
    </div>
  );
};

export default FilterTodo