import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "./helper";

const Answer = ({ ans }) => {
  const [heading, setHeading] = useState(false);
  const [displayText, setDisplayText] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) setHeading(true);
    setDisplayText(replaceHeadingStars(ans));
  }, [ans]);

  return (
    <div>
      {heading ? (
        <span className="pt-2 text-2xl block text-white">{displayText}</span>
      ) : (
        <span className="pl-2">{displayText}</span>
      )}
    </div>
  );
};

export default Answer;
