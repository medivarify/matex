// Image optimization utilities for better performance

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
}

// Pexels image optimization
export const optimizePexelsImage = (
  originalUrl: string,
  width: number = 400,
  height: number = 400,
  quality: number = 80
): string => {
  // Extract the image ID from Pexels URL
  const match = originalUrl.match(/photos\/(\d+)/);
  if (!match) return originalUrl;
  
  const imageId = match[1];
  
  // Return optimized Pexels URL with specific dimensions
  return `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop&q=${quality}`;
};

// Generate responsive image sizes
export const generateResponsiveSizes = (baseWidth: number) => ({
  small: Math.round(baseWidth * 0.5),
  medium: baseWidth,
  large: Math.round(baseWidth * 1.5),
  xlarge: Math.round(baseWidth * 2)
});

// Create srcSet for responsive images
export const createSrcSet = (baseUrl: string, sizes: Record<string, number>): string => {
  return Object.entries(sizes)
    .map(([key, width]) => {
      const optimizedUrl = optimizePexelsImage(baseUrl, width, width);
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Lazy load images with intersection observer
export const useLazyImage = (src: string, threshold: number = 0.1) => {
  const [imageSrc, setImageSrc] = React.useState<string>('');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, threshold]);

  const handleLoad = () => setIsLoaded(true);

  return { imgRef, imageSrc, isLoaded, handleLoad };
};

// Image component with optimization