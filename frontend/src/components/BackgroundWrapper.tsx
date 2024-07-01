import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface BackgroundWrapperProps {
    children: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'grad1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color%3Apeachpuff%3Bstop-opacity%3A1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color%3Alightcoral%3Bstop-opacity%3A1\' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grad1)\' /%3E%3C/svg%3E")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                px: 2,
            }}
        >
            {children}
        </Box>
    );
};

export default BackgroundWrapper;
