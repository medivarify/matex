import React from 'react';
import { 
  optimizePexelsImage, 
  generateResponsiveSizes, 
  createSrcSet,
  type OptimizedImageProps 
} from '../../utils/imageOptimization';

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 400,
  height = 400,
  quality = 80,
  className = '',
  loading = 'lazy',
  placeholder = 'empty'
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  
  const optimizedSrc = optimizePexelsImage(src, width, height, quality);
  const sizes = generateResponsiveSizes(width);
  const srcSet = createSrcSet(src, sizes);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`} 
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {placeholder === 'blur' && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={`(max-width: 768px) ${sizes.small}px, (max-width: 1024px) ${sizes.medium}px, ${sizes.large}px`}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};