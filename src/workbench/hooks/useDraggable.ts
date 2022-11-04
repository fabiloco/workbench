import { RefObject, useEffect, useState } from 'react';

import { Position } from '../components/desktop';

export const useDraggable = ( 
	containerRef: RefObject<HTMLDivElement>,
	initPosition: Position,
	mousePosition: Position,
) => {
	const [draggin, setDraggin] = useState(false);
	const [{ x, y }, setPosition] = useState<Position>({ 
		x: initPosition.x, 
		y: initPosition.y 
	});

	const [{ dx, dy }, setDPosition] = useState({ dx: 0, dy: 0 });

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
		setPosition( prevState => {
			return {
				...prevState,
				x: mousePosition.x - containerRef.current!.offsetLeft - dx, 
				y: mousePosition.y - containerRef.current!.offsetTop - dy,
			};
		});
	}, [mousePosition, dx, dy]);

	return {
		onDragStart,
		onDragEnd,

		x,
		y,
	};
};
