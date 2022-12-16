import { createElement } from 'react';

import clsx from 'clsx';

import './DivImageCreator.css';

interface CreateDivImageProps {
    path: string;
    shape: 'circle' | 'square';
    height: string;
    margin: string;
    className?: string;
}

const CreateDivImage = ({ path, shape, height, margin, className }: CreateDivImageProps) => {
    return createElement('div', {
        style: { backgroundImage: `url(${path})`, height: `${height}`, margin: `${margin}` },
        className: clsx(className, { circle: shape === 'circle', square: shape === 'square' }),
    });
};
export default CreateDivImage;
