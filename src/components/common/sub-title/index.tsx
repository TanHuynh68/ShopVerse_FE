interface TitleProps {
  title: string;
  className?: string | undefined;
}
const SubTitle = ({ title, className }: TitleProps) => {
  return <div className={`${className} font-medium`}>{title}</div>;
};

export default SubTitle;
