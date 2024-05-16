import { useDrop } from 'react-dnd';
import { Box } from '@mui/material';
import DraggableImage from './DraggableImage';

interface DropZoneProps {
    onDrop: (id: string) => void;
    images: { id: string, src: string }[];
  }

const DropZone: React.FC<DropZoneProps> = ({ onDrop, images }) => {
const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: any, monitor) => {
        if (monitor.didDrop()) {
          // The draggable item was dropped over a valid drop target
          onDrop(item.id);
        }
      },
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    }),
}));

  return (
    <Box
      ref={drop}
      sx={{ bgcolor: isOver ? 'lightgreen' : 'white' }}
    >
      {images.map((image) => (
        <DraggableImage key={image.id} id={image.id} src={image.src} />
      ))}
    </Box>
  );
}

export default DropZone;