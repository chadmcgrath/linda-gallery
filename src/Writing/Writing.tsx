import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";


const documents = [
  { id: 1, title: `Happy Mother's Day, Linda!`, content: `Mother's Day is a holiday that is celebrated on the second Sunday of May every year. It started in the United States. The holiday was founded in 1908 by Anna Jarvis. Mother's Day was first made to celebrate a person's own mother. Now it is made to celebrate all mothers and motherhood in general. It is celebrated at different times in different countries. In the United States of America, it is the second Sunday in May. Children can make cards and a lot of other things for their mother.` },
  { id: 2, title: 'Document 2', content: 'Content of Document 2' },
  // Add more documents as needed
];
type DocumentType = {
  id: number;
  title: string;
  content: string;
};
const Writing : React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState(documents[0]);

  const handleListItemClick = (document:DocumentType) => {
    setSelectedDocument(document);
  };

  return (
    <Box display="flex">
      <Box width="30%" bgcolor="grey.200" color='#2B2C2C'>
        <List component="nav">
          {documents.map((document) => (
            <ListItem
              button
              key={document.id}
              selected={selectedDocument.id === document.id}
              onClick={() => handleListItemClick(document)}
            >
              <ListItemText primary={document.title} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box width="70%" p={2}>
        <Typography variant="h4">{selectedDocument.title}</Typography>
        <Typography variant="body1">{selectedDocument.content}</Typography>
      </Box>
    </Box>
  );
};

export default Writing;


