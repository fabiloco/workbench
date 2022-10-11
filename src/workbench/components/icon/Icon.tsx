import { FC, RefObject, useEffect, useRef, useState } from "react";

import { Position } from "../desktop";

import styles from "./styles/icon.module.css";

interface IconProps {
	name: string;
	iconUrl: string;
	containerRef: RefObject<HTMLDivElement>;
	initPosition: Position;
	mousePosition: Position;
};

export const Icon: FC<IconProps> = ({ 
	name, 
	iconUrl, 
	containerRef,
	initPosition,
	mousePosition,
}) => {
	const [draggin, setDraggin] = useState(false);
	const [{ x, y }, setPosition] = useState<Position>({ 
		x: initPosition.x, 
		y: initPosition.y 
	});

	const [{ dx, dy }, setDPosition] = useState({ dx: 0, dy: 0 });

	const iconRef = useRef<HTMLDivElement>(null);

	const onDragStart = (event: React.MouseEvent<HTMLDivElement> ) => {
		setDraggin(true);
		setDPosition({
			dx: event.nativeEvent.offsetX,
			dy: event.nativeEvent.offsetY,
		});
	};

	const onDragEnd = () => {
		setDraggin(false);
	};

	useEffect(() => {
		if (!draggin) return;
		setPosition(prevState => {
			return {
				...prevState,
				x: mousePosition.x - containerRef?.current?.offsetLeft - dx, 
				y: mousePosition.y - containerRef.current?.offsetTop - dy,
			}
		});
		iconRef.current?.setAttribute('style', `transform: translate(${x}px, ${y}px)`); 
	}, [mousePosition, dx, dy]);

  return (
		<div 
			className={styles.container}
			ref={ iconRef }
			onMouseDown={ onDragStart }
			onMouseUp={ onDragEnd }
		>
			<div
				className={styles.icon__dragger}
			>
			</div>
			<img className={styles.icon__img} src={iconUrl}/>
			<p>{ name }</p>
		</div>
  );
};
