import { FC, RefObject } from 'react';
import { useDraggable } from '../../hooks';
import { Position } from '../desktop';

import styles from './styles/window.module.css';

interface WindowProps {
	name: string;
	width: number;
	height: number;
	containerRef: RefObject<HTMLDivElement>;
	initPosition: Position;
	mousePosition: Position;
};

export const Window: FC<WindowProps> = ({
	name,
	width,
	height,
	mousePosition,
	initPosition,
	containerRef,
}) => {
	const { 
		x, y,
		onDragEnd,
		onDragStart,
	} = useDraggable(containerRef, initPosition, mousePosition);

  return (
		<div
			className={ styles.container }
			style={{
				width,
				height,
				transform: `translate(${x}px, ${y}px)`,
			}}
		>
			<div
				className={ styles.topbar__container }
			>
				<div 
					className={ styles.real__dragger }
					onMouseDown={ onDragStart }
					onMouseUp={ onDragEnd }
				/>

				<div
					className={ styles.topbar__title }
				>
					{ name }
				</div>

				<div 
					className={ styles.topbar__dragger }	
				>
					<div className={ styles.topbar__dragger__bar } />
					<div className={ styles.topbar__dragger__bar } />
				</div>

				<div className={ styles.topbar__action }	>
					<button 
						className={ styles.topbar__button }
					>
						{/*
							TODO: make close windows functionallity
							*onClick={ () =>  }
						*/}
						x
					</button>
				</div>

			</div>

			<div
				className={ styles.window }
			>

			</div>

		</div>
	);
};
