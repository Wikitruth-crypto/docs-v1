import React, { useState } from 'react';
import { FaTwitter, FaTelegram, FaFacebook, FaShareAlt } from 'react-icons/fa';

interface ShareModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  url?: string;
  title?: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onOpenChange,
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'WikiTruth Docs',
}) => {
  if (!isOpen) return null;

  const shareLinks = [
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: 'Telegram',
      icon: <FaTelegram />,
      url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="bg-black border border-white/20 rounded-lg p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-bold">Share</h3>
          <button
            onClick={() => onOpenChange(false)}
            className="text-white/70 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="flex gap-4 justify-center mb-4">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            readOnly
            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white text-sm"
          />
          <button
            onClick={handleCopyLink}
            className="px-4 py-2 bg-theme text-white rounded hover:opacity-80 transition"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;

