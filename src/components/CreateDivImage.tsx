import './DivImageCreator.css';

import clsx from 'clsx';
import { createElement } from 'react';

interface CreateDivImageProps {
    path: string;
    shape: 'circle' | 'square';
    height: string;
    margin: string;
}

const CreateDivImage = ({ path, shape, height, margin }: CreateDivImageProps) => {
    return createElement('div', {
        style: { backgroundImage: `url(${path})`, height: `${height}`, margin: `${margin}` },
        className: clsx({ circle: shape === 'circle', square: shape === 'square' }),
    });
};
export default CreateDivImage;
