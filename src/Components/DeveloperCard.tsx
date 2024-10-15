export type Developer = {
  name: string;
};

function DeveloperCard(props: Developer) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>{props.name}</h1>
    </div>
  );
}

export default DeveloperCard;
