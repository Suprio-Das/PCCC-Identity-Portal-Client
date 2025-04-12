import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href="https://www.pciucomputerclub.tech/" target='_blank' className='font-semibold text-blue-500'>PCIU Computer Club</a> - <a href="https://github.com/Suprio-Das" target='_blank' className='font-semibold text-blue-500'>Suprio Das, IT Secretary</a></p>
            </aside>
        </footer>
    );
};

export default Footer;