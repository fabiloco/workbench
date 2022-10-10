import { FC, useRef, useState } from "react";

import styles from "./styles/icon.module.css";

interface IconProps {
	name: string;
	iconUrl: string;
};

export const Icon: FC<IconProps> = ({ name, iconUrl }) => {
	const [{ x, y, dx, dy, dragging }, setPosition] = useState({ 
		x: 0, y: 0, dx: 0, dy: 0, dragging: false 
	});

	const iconRef = useRef<HTMLDivElement>(null);

	const onDragStart = (event: React.MouseEvent<HTMLDivElement> ) => {
		//console.log(event.clientX - event.currentTarget.getBoundingClientRect().left);
		//setPosition(prevState => ({
			//...prevState,
			//dx: mouseX - event.currentTarget?.getBoundingClientRect().left,
			//dy: mouseY - event.currentTarget?.getBoundingClientRect().top,
			//dragging: true,
		//}));	
	};

	const onDragging = (event: React.MouseEvent<HTMLDivElement>) => {
		//if(!dragging) return;

		let left = mouseX - dx -30;
		let top = mouseY - dy-30;

		setPosition(prevState => ({
			...prevState,
			x: left,
			y: top,
		}));
	};

	const onDragEnd = () => {
		setPosition(prevState => ({
			...prevState,
			dragging: false,
		}));
	};

  return (
		<div 
			className={styles.container}
			ref={ iconRef }
			onMouseDown={ onDragStart }
			onMouseMove={ onDragging }
			onMouseUp={ onDragEnd }
			style={{
				top: y,
				left: x,
			}}
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
