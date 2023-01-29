import { useEffect, useRef } from "react";


export default function useDragDrop(onDrop) {
    const dropRef = useRef();

    function handleDrag(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            onDrop(file)
            e.dataTransfer.clearData();
        }
    }

    useEffect(() => {
        const dropArea = dropRef.current;
        dropArea.addEventListener('dragover', handleDrag)
        dropArea.addEventListener('drop', handleDrop)

        return () => {
            dropArea.removeEventListener('dragover', handleDrag)
            dropArea.removeEventListener('drop', handleDrop)
        }
    })

    return {dropRef}
}
