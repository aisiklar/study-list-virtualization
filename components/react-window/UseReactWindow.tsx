"use client";

import { useState } from "react";
import { FixedSizeList as List } from "react-window";

// create a long array
let data = Array.from(
  { length: 10000 },
  (item, index) => (item = `item ${index}`),
);

type PropsType = {
  index: number;
  style: any;
};

// this unused variables are created to test and try linting features. Will be deleted later.
let unUsedVar;
let myString = "aaa";

// define a function to render the list
function renderData({ index, style }: PropsType) {
  console.log("in renderData fnc, index, style: ", index, style);
  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid lightgrey",
        marginLeft: "20px",
      }}
    >
      {index} - {data[index]}
    </div>
  );
}

export default function UseReactWindow() {
  console.log("created data: ", data);

  const [divHeight, setDivHeight] = useState<number>(500);
  const [divHeightTxt, setDivHeightTxt] = useState<string>("500px");

  let style = divHeightTxt;
  return (
    <div>
      <p className="mx-2 my-[30px]">
        This study project covers List Virtualization with the usage of
        React-Window package.
      </p>
      <div
        style={{
          height: divHeight,
          width: "800px",
          border: "1px solid lightgrey",
          color: "red",
        }}
        // another way to define styling is tailwindCSS:
        // className="h-[divHeightTxt], w-[800px], border border-[1px] "
      >
        <List
          className=""
          height={divHeight}
          itemCount={data.length}
          itemSize={35}
          width={190}
        >
          {renderData}
        </List>
      </div>
    </div>
  );
}
