interface Props {
    cb: (show: boolean) => void
}
const useIntersectionObserver = ({cb}:Props) => {
    const options : IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const handleIntersect : IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio === 0){
                cb(true)
            }
            else {
                cb(false)
            }
        })
    }

    const observer = new IntersectionObserver(handleIntersect, options);
  return (
    observer
  )
}

export default useIntersectionObserver;
