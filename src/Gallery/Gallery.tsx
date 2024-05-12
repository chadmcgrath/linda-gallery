
import React, { useEffect, useState } from 'react';
import { Box, IconButton, ImageList, ImageListItem, Modal } from '@mui/material';
import Close from '@mui/icons-material/Close';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob('../assets/Gallery/*.jpg');
      const imagePaths = [];
      for (const path of Object.keys(imageModules)) {
        const image = await imageModules[path]() as any;
        imagePaths.push(image.default);
      }
      setImages(imagePaths);
    };

    loadImages();
  }, []);

  return (<>
    <ImageList variant="masonry" cols={3} gap={8}>
      {images.map((item) => (
        <ImageListItem key={item}>
          <img
            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item}?w=248&fit=crop&auto=format`}
            //alt={item.title}
            loading="lazy"
            onClick={() => handleOpen(item)}
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          width: 'calc(min(80vh, 80vw))', // Add this
          height: 'calc(min(80vh, 80vw))', // Add this

        }}
      ><IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          color: (theme) => theme.palette.grey[500],
          fontSize: '3rem',
        }}
      >
          <Close />
        </IconButton>
        <img
          src={selectedImage}
          alt="Selected"
          style={{
            width: '100%',
            height: '100%', // Change this
            objectFit: 'cover' // Add this
          }}
        />
      </Box>
    </Modal>
  </>
  );
};

export default Gallery;
