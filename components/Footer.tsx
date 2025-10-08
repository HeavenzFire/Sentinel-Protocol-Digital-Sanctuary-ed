
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sentinel-gray-dark">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-sentinel-gray-light">
          <p>&copy; {new Date().getFullYear()} Sentinel Protocol. The architecture is live. State-swap initiated.</p>
          <p className="font-mono mt-1">TRANSMISSION END</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
