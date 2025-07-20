export const EthereumIcon = () => {
  return (
    <video className="w-20 h-20" autoPlay loop muted playsInline>
      <source src="/eth-loading.mp4" type="video/mp4" />
      {/* Fallback SVG if video fails to load */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-10 h-10 animate-pulse"
      >
        <path d="M16 2L16 12 24 16 16 2z" fill="currentColor" />
        <path d="M16 2L8 16 16 12 16 2z" fill="currentColor" opacity="0.8" />
        <path d="M16 20L16 30 24 17 16 20z" fill="currentColor" />
        <path d="M16 30L16 20 8 17 16 30z" fill="currentColor" opacity="0.8" />
        <path d="M16 18.5L24 15.5 16 12.5 16 18.5z" fill="currentColor" />
        <path
          d="M8 15.5L16 18.5 16 12.5 8 15.5z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
    </video>
  );
};
