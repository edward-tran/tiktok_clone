import { forwardRef, useState } from 'react';
import Images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [imageSrc, setImageSrc] = useState('');
    const handleImageError = () => {
        setImageSrc(Images.noImage);
    };
    return (
        <img
            ref={ref}
            src={imageSrc || src}
            alt={alt}
            {...props}
            onError={handleImageError}
        />
    );
});

export default Image;
