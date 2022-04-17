import { useEffect, useRef } from "react";

const useBackToTop = (depencency) => {
  const timeline = useRef(null);

  useEffect(() => {
    timeline.current.scrollTo(0, 0);
  }, [depencency]);

  return timeline;
};

export default useBackToTop;
