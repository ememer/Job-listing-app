import React from "react";
import { getUniqueElements } from "./../utils/getUniqueElements";
import clsx from "clsx";

interface Props {
  title: string;
  data: any;
  targetKey: string;
  filtersArray: string[];
  onClick: Function;
}

const SearchItemList = ({
  title,
  data,
  targetKey,
  filtersArray,
  onClick,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {getUniqueElements(data, targetKey).map((element) => (
          <li
            className={clsx(
              filtersArray.includes(element) ? "selected" : "unselected"
            )}
            key={element}
          >
            <button onClick={(e) => onClick(e)} id={element}>
              {element}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItemList;
