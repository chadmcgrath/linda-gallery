import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Owner } from '../types';

type DocumentType = {
  id: number;
  title: string;
  content: string[];
  sections: DocumentType[];
};
const Writing: React.FC<Owner> = (props: Owner) => {
  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<DocumentType>();

  const handleListItemClick = (document: DocumentType) => {
    setSelectedDocument(document);
  };
  // useeffect to get documents from public folder 


  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const fileNames = props.docs;
        const documents: DocumentType[] = [];

        for (const fileName of fileNames) {
          const response = await fetch(`/${fileName}`);
          const text = await response.text();
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(text, "text/xml");

          const sections = Array.from(xmlDoc.getElementById("document-main")?.getElementsByTagName("section") || []).map((section) => {
            const sectionTitle = section.getElementsByClassName("title")[0]?.childNodes[0]?.nodeValue || '';
            const sectionContent = Array.from(section.getElementsByTagName("p")).map(p => p.innerHTML);



            return { id: 0, title: sectionTitle, content: sectionContent || '', sections: [] };

            //return { id: 0, title: sectionTitle, content: sectionContent, sections: childSections };
          });
          documents.push(...sections);
        }

        setDocuments(documents);
        setSelectedDocument(documents[0]);
      } catch (error) {
        console.error('Failed to fetch documents:', error);
      }
    };

    fetchDocuments();
  }, [props.docs]);
  return (
    <Box display="flex">
      <Box width="30%" bgcolor="grey.200" color='#2B2C2C'>
        <List component="nav">
          {documents.map((document) => (
            <ListItem
              button
              key={document.id}
              selected={selectedDocument?.id === document.id}
              onClick={() => handleListItemClick(document)}
            >
              <ListItemText primary={document.title} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box width="70%" p={2}>
        <Typography variant="h4">{selectedDocument?.title}</Typography>
        {selectedDocument?.content.map((paragraph, index) => (
          <Typography key={index} variant="body1">{paragraph}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Writing;


