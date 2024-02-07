import { FixedSizeList as List } from "react-window";

// create a long array
let data = Array.from(
  { length: 10000 },
  (item, index) => (item = `item ${index}`),
);

// define a function to render the list
function renderData({ index, style }: { index: number; style: string }) {
  console.log("in renderData fnc, index, style: ", index, style);
  return <div>{data}</div>;
}

export default function Home() {
  console.log("created data: ", data);

  return (
    <>
      <p className="my-4">
        This study project covers List Virtualization with the usage of
        React-Window package.
      </p>
      <List
        className=""
        height={100}
        itemCount={data.length}
        itemSize={35}
        width={50}
      >
        {renderData}
      </List>
    </>
  );
}
