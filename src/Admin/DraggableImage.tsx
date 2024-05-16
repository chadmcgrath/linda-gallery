import { useDrag } from 'react-dnd';
import { Avatar } from '@mui/material';

interface DraggableImageProps {
  id: string;
  src: string;
}

const DraggableImage: React.FC<DraggableImageProps> = ({ id, src }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Avatar
      ref={drag}
      src={src}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    />
  );
}

export default DraggableImage;