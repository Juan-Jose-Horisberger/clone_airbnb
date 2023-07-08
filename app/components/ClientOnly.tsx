'use client';
// component to validate if we are on the server side or not
import React, { useState, useEffect } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) return null;

    return (
        <>
            {children}
        </>
    );
};

export default ClientOnly;