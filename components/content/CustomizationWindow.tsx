const CustomizationWindow = ({
  title,
  framework,
}: {
  title: string;
  framework: string;
}) => {
  return (
    <div>
      <hr />
      <h2>{title}</h2>
      <span>{framework}</span>
      <hr />
    </div>
  );
};

export default CustomizationWindow;
