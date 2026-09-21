import React from 'react';

interface FloralMotifProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export const FloralMotif: React.FC<FloralMotifProps> = ({
  className = '',
  size = 24,
  opacity = 0.85,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none transition-transform duration-300 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Center core */}
      <circle cx="24" cy="24" r="5" fill="currentColor" fillOpacity="0.9" />
      {/* Four rounded petals */}
      <ellipse cx="24" cy="11" rx="5" ry="8" fill="currentColor" fillOpacity="0.4" />
      <ellipse cx="24" cy="37" rx="5" ry="8" fill="currentColor" fillOpacity="0.4" />
      <ellipse cx="11" cy="24" rx="8" ry="5" fill="currentColor" fillOpacity="0.4" />
      <ellipse cx="37" cy="24" rx="8" ry="5" fill="currentColor" fillOpacity="0.4" />
      {/* Diagonal mini petals */}
      <circle cx="15" cy="15" r="4" fill="currentColor" fillOpacity="0.25" />
      <circle cx="33" cy="15" r="4" fill="currentColor" fillOpacity="0.25" />
      <circle cx="15" cy="33" r="4" fill="currentColor" fillOpacity="0.25" />
      <circle cx="33" cy="33" r="4" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
};
