import "./Section.css";

interface SectionProps {
   children: any;
}

const Section:React.FC<SectionProps> = ({children}) => {
   return (
      <div className="Section">
         {children}
      </div>
   );
}

export default Section;
