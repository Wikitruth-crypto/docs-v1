// Client module: Automatically add click-to-copy functionality for Ethereum addresses in tables
// Only runs in browser environment
if (typeof window !== 'undefined') {
(function () {
  // Regular expression to detect Ethereum addresses
  const ETH_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

  // Copy address to clipboard
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Fallback: use traditional method
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        return success;
      } catch (fallbackErr) {
        document.body.removeChild(textArea);
        return false;
      }
    }
  }

  // Add click-to-copy functionality to address cells
  function makeAddressCopyable(cell) {
    const text = cell.textContent.trim();
    
    // Check if it's an Ethereum address
    if (!ETH_ADDRESS_REGEX.test(text)) {
      return;
    }

    // Skip if already processed
    if (cell.classList.contains('copyable-address-cell')) {
      return;
    }

    cell.classList.add('copyable-address-cell');
    cell.style.cursor = 'pointer';
    cell.style.userSelect = 'none';
    cell.style.position = 'relative';
    cell.style.transition = 'color 0.2s ease';

    // Add tooltip
    cell.title = 'Click to copy address';

    // Click event
    cell.addEventListener('click', async function (e) {
      e.preventDefault();
      e.stopPropagation();

      const originalText = cell.textContent.trim();
      const success = await copyToClipboard(originalText);

      if (success) {
        // Show copy success feedback
        const originalColor = cell.style.color || '';
        cell.style.color = 'var(--theme)';
        
        // Add checkmark
        const checkmark = document.createElement('span');
        checkmark.textContent = ' ✓';
        checkmark.style.marginLeft = '8px';
        checkmark.style.fontSize = '0.875rem';
        checkmark.style.color = 'var(--theme)';
        cell.appendChild(checkmark);

        // Restore after 2 seconds
        setTimeout(() => {
          cell.style.color = originalColor;
          if (checkmark.parentNode) {
            checkmark.parentNode.removeChild(checkmark);
          }
        }, 2000);
      }
    });

    // Mouse hover effect
    cell.addEventListener('mouseenter', function () {
      if (!cell.style.color || cell.style.color === 'var(--theme)') {
        return;
      }
      cell.style.opacity = '0.8';
    });

    cell.addEventListener('mouseleave', function () {
      if (!cell.style.color || cell.style.color === 'var(--theme)') {
        return;
      }
      cell.style.opacity = '1';
    });
  }

  // Process all cells in tables
  function processTables() {
    const tables = document.querySelectorAll('.theme-doc-markdown table');
    
    tables.forEach((table) => {
      const cells = table.querySelectorAll('td');
      cells.forEach((cell) => {
        makeAddressCopyable(cell);
      });
    });
  }

  // Execute after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processTables);
  } else {
    processTables();
  }

  // Listen for Docusaurus route changes (SPA navigation)
  if (typeof window !== 'undefined' && window.docusaurus) {
    window.addEventListener('docusaurus:routeUpdate', processTables);
  }

  // Use MutationObserver to monitor dynamic content changes
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            if (node.tagName === 'TABLE' || node.querySelector?.('table')) {
              shouldProcess = true;
            }
          }
        });
      }
    });
    if (shouldProcess) {
      setTimeout(processTables, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
}

