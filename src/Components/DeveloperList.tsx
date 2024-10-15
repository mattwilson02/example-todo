import DeveloperCard, { Developer } from "./DeveloperCard";

type Props = {
  developers: Developer[];
};

const DeveloperList = ({ developers }: Props) => {
  return (
    <div>
      {developers.map((developer) => {
        return <DeveloperCard key={developer.name} name={developer.name} />;
      })}
    </div>
  );
};

export default DeveloperList;
