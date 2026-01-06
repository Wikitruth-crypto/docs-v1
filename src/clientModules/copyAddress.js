// 客户端模块：自动为表格中的以太坊地址添加点击复制功能
// 只在浏览器环境中运行
if (typeof window !== 'undefined') {
(function () {
  // 检测是否为以太坊地址的正则表达式
  const ETH_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

  // 复制地址到剪贴板
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // 降级方案：使用传统方法
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

  // 为地址单元格添加点击复制功能
  function makeAddressCopyable(cell) {
    const text = cell.textContent.trim();
    
    // 检查是否为以太坊地址
    if (!ETH_ADDRESS_REGEX.test(text)) {
      return;
    }

    // 如果已经处理过，跳过
    if (cell.classList.contains('copyable-address-cell')) {
      return;
    }

    cell.classList.add('copyable-address-cell');
    cell.style.cursor = 'pointer';
    cell.style.userSelect = 'none';
    cell.style.position = 'relative';
    cell.style.transition = 'color 0.2s ease';

    // 添加提示
    cell.title = 'Click to copy address';

    // 点击事件
    cell.addEventListener('click', async function (e) {
      e.preventDefault();
      e.stopPropagation();

      const originalText = cell.textContent.trim();
      const success = await copyToClipboard(originalText);

      if (success) {
        // 显示复制成功反馈
        const originalColor = cell.style.color || '';
        cell.style.color = 'var(--theme)';
        
        // 添加复选标记
        const checkmark = document.createElement('span');
        checkmark.textContent = ' ✓';
        checkmark.style.marginLeft = '8px';
        checkmark.style.fontSize = '0.875rem';
        checkmark.style.color = 'var(--theme)';
        cell.appendChild(checkmark);

        // 2秒后恢复
        setTimeout(() => {
          cell.style.color = originalColor;
          if (checkmark.parentNode) {
            checkmark.parentNode.removeChild(checkmark);
          }
        }, 2000);
      }
    });

    // 鼠标悬停效果
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

  // 处理表格中的所有单元格
  function processTables() {
    const tables = document.querySelectorAll('.theme-doc-markdown table');
    
    tables.forEach((table) => {
      const cells = table.querySelectorAll('td');
      cells.forEach((cell) => {
        makeAddressCopyable(cell);
      });
    });
  }

  // 页面加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processTables);
  } else {
    processTables();
  }

  // 监听 Docusaurus 路由变化（SPA 导航）
  if (typeof window !== 'undefined' && window.docusaurus) {
    window.addEventListener('docusaurus:routeUpdate', processTables);
  }

  // 使用 MutationObserver 监听动态内容变化
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

