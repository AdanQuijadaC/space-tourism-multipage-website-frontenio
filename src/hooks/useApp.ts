import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {data} from "../data/index"

export function useApp() {
    const { pathname: url } = useLocation()
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [widthSize, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
    
    return {
        openMenu,
        setOpenMenu,
        url,
        navigate,
        data,
        widthSize
        
    }
}