import { FILTERS } from "@/constants";
import useTasks from "@/hooks/useTasks";
import React from "react";

const FilterTasks = () => {
  const { filterTasks } = useTasks();

  const handleFilter = (filterOption) => {
    filterTasks(filterOption);
  };

  return (
    <div className="flex gap-2">
      <p>Filter by:</p>
      <div className="flex gap-2">
        {Object.values(FILTERS).map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => handleFilter(filterOption)}
            className="bg-blue-200 px-3 hover:bg-blue-600 transition"
          >
            {filterOption}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTasks;
