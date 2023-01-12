const CTA = ({
  title,
  subtitle,
  linkUrl,
  linkTitle,
}: {
  title: string;
  subtitle: string;
  linkUrl: string;
  linkTitle: string;
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>

      <a href={linkUrl}>{linkTitle}</a>
    </div>
  );
};

export default CTA;
