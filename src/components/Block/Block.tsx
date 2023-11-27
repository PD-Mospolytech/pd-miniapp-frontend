import "./Block.css";

interface BlockProps {
   children: any;
   margin?: string;
   width?: string;
   className?: string;
}

const Block: React.FC<BlockProps> = ({
   children,
   margin,
   width,
   className = "",
}) => {
   return (
      <div
         className={`Block ${className}`}
         style={{ margin: margin, width: width }}
      >
         {children}
      </div>
   );
};

export default Block;
