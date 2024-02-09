"use client";

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

let unsedVar;
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
      }}
    >
      {index} - {data[index]}
    </div>
  );
}

export default function Home() {
  console.log("created data: ", data);

  return (
    <div
      style={{
        height: "400px",
        width: "800px",
        border: "1px solid lightgrey",
      }}
    >
      <p>
        This study project covers List Virtualization with the usage of
        React-Window package.
      </p>
      <List
        className=""
        height={500}
        itemCount={data.length}
        itemSize={35}
        width={250}
      >
        {renderData}
      </List>
    </div>
  );
}
