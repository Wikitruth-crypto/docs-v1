import React, { useState } from 'react';

interface CopyableAddressProps {
  address: string;
  className?: string;
}

export function CopyableAddress({ address, className = '' }: CopyableAddressProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
      // Fallback: use traditional method
      const textArea = document.createElement('textarea');
      textArea.value = address;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <span
      onClick={handleClick}
      className={`copyable-address ${className}`}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        position: 'relative',
        color: copied ? 'var(--theme)' : 'inherit',
        transition: 'color 0.2s ease',
      }}
      title={copied ? 'Copied!' : 'Click to copy address'}
    >
      {address}
      {copied && (
        <span
          style={{
            marginLeft: '8px',
            fontSize: '0.875rem',
            color: 'var(--theme)',
          }}
        >
          ✓
        </span>
      )}
    </span>
  );
}

