import { 
	FC, 
	RefObject, 
} from 'react';

import { useDraggable } from '../../hooks';

import { Position } from '../desktop';

import styles from './styles/icon.module.css';

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
	const { 
		x, y,
		onDragEnd,
		onDragStart,
	} = useDraggable(containerRef, initPosition, mousePosition);

  return (
		<div 
			className={ styles.container }
			onMouseDown={ onDragStart }
			onMouseUp={ onDragEnd }
			onDoubleClick={ () => console.log('double click') }
			style={{
				transform: `translate(${x}px, ${y}px)`,
			}}
		>
			<div className={styles.icon__dragger} />
			<img className={styles.icon__img} src={iconUrl}/>
			<p>{ name }</p>
		</div>
  );
};
