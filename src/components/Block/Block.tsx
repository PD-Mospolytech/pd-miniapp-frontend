import "./Block.css";

interface BlockProps {
   children: any;
   margin?: string;
   width?: string;
}

const Block: React.FC<BlockProps> = ({ children, margin, width }) => {
   return (
      <div className="Block" style={{ margin: margin, width: width }}>
         {children}
      </div>
   );
};

export default Block;
