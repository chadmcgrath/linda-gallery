
import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

interface DocumentProps {
    topImage?: string;
    leftImage?: string;
    bottomImage?: string;
    rightImage?: string;
    title: string,
    children: React.ReactNode;
}

const Document: React.FC<DocumentProps> = ({
    topImage,
    leftImage,
    bottomImage,
    rightImage,
    children,
    title,
}) => {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    {/* Add your app bar content here */}
                    {/* For example, you can add a title */}
                    <Typography variant="h6">{title}</Typography>
                </Toolbar>
            </AppBar>

            <div>
                {topImage && <img src={topImage} alt="Top Image" />}
                <div style={{ display: 'flex' }}>
                    {leftImage && <img src={leftImage} alt="Left Image" />}
                    <div>{children}</div>
                    {rightImage && <img src={rightImage} alt="Right Image" />}
                </div>
                {bottomImage && <img src={bottomImage} alt="Bottom Image" />}
            </div>
        </div>
    );
};

export default Document;

