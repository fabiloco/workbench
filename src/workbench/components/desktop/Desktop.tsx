import { 
  useRef, 
  useState 
} from "react";

import { Icon } from "../icon/Icon";

import styles from "./styles/desktop.module.css";

export interface Position {
	x: number;
	y: number;
};

export const Desktop = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
	const desktopRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setMousePosition({
        x: event.pageX,
        y: event.pageY,
      });
  };

  return (
    <div 
      className={styles.container}
      ref={ desktopRef }
      onMouseMove={ onMouseMove }
    >
      <Icon 
        name="test" iconUrl="/assets/imgs/apple-outlined.png"
        containerRef={ desktopRef }
        initPosition={{ x: 100, y: 100 }}
        mousePosition={ mousePosition }
      />
    </div>
  )
}

