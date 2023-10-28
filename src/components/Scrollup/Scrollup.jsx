import { RiArrowUpSLine } from "react-icons/ri";
import './Scrollup.scss';
import { useEffect, useState } from "react";

const Scrollup = () => {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
         const checkScrollTop = () => {
            if(window.scrollY >= 350) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
         };

         window.addEventListener('scroll', checkScrollTop);

         return () => {
            window.removeEventListener('scroll', checkScrollTop);
         };

    }, [])



  return (
    <a className={`scrollup ${showScroll ? 'show-scroll' : ''}`} id="scrollup" href="#">
        <RiArrowUpSLine />
    </a>
  )
}

export default Scrollup