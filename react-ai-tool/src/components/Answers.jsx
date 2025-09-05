import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "./helper";

const Answer = ({ ans , index , totalResult , type}) => {
  const [heading, setHeading] = useState(false);
  const [displayText, setDisplayText] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) setHeading(true);
    setDisplayText(replaceHeadingStars(ans));
  }, [ans]);

  return (
    <div>

      {
        index==0 && totalResult>1?<span className="pt-2 text-xl block text-white">{displayText}</span>:
        heading ? (
        <span className="pt-2 text-lg block text-white">{displayText}</span>
      ) : (
        <span className={type=='q'?'pl-1':'pl-5'}>{displayText}</span>
      )}
      

      
    </div>
  );
};

export default Answer;
