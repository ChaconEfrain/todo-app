import { FILTERS } from "@/constants";
import useTasks from "@/hooks/useTasks";
import React, { useState } from "react";

const FilterTasks = () => {
  const { filterTasks } = useTasks();
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilter = (filterOption) => {
    filterTasks(filterOption);
    setActiveFilter(filterOption);
  };

  return (
    <div className="flex gap-2">
      <p>Filter by:</p>
      <div className="flex gap-2">
        {Object.values(FILTERS).map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => handleFilter(filterOption)}
            className={`bg-blue-200 px-3 hover:bg-blue-600 transition ${
              activeFilter === filterOption && "bg-blue-600"
            }`}
          >
            {filterOption}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTasks;
