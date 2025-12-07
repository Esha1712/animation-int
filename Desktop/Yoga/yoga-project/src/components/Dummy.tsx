import React, { useEffect, useRef, useState } from 'react';

const Dummy = () => {

    const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);
    const canvas = useRef<HTMLCanvasElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        console.log('Mouse move event:', e);
        const ctx = canvas.current?.getContext('2d');
        if (!ctx) return;

        const rect = canvas.current?.getBoundingClientRect();
        const x = e.clientX - rect?.left!;
        const y = e.clientY - rect?.top!;

        if (lastPos) {
            console.log('Drawing from', lastPos, 'to', { x, y });
            ctx.beginPath();
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        }

        setLastPos({ x, y });
    }
    return (
        <canvas
            style={{ background: 'black', display: 'block' }}
            ref={canvas}
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseUp={() => {
                setLastPos(null);
            }}
            onMouseMove={handleMouseMove}
        />
    )
}

export default Dummy
