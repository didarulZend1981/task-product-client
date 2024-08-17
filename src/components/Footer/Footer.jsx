import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <sapn className="font-bold text-emerald-800">TASK-BD</sapn></p>
  </aside>
</footer>
    </>
  );
};

export default Footer;