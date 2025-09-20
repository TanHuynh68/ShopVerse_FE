interface TitleProps {
  title: string;
  className?: string | undefined;
}
const Title = ({ title, className }: TitleProps) => {
  return <div className={`${className} font-semibold`}>{title}</div>;
};

export default Title;
