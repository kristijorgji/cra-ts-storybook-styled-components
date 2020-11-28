import React from 'react';
import { Wrapper } from './Example.styles';

export interface ExampleProps {
    name: string;
}

export const Example: React.FC<ExampleProps> = (p) => {
    return <Wrapper>{p.name}</Wrapper>;
};
