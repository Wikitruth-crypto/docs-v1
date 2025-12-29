import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import LogoBrand from '../../components/base/LogoBrand';
import LinkList from '../../components/customer/LinkList';
import Button2 from '../../components/base/Button2';
import { Container } from '../../components/Container';

// 主站菜单
const mainMenu = [
  { name: 'Home', href: '/' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Blog', href: '/blog' },
  { name: 'Team', href: '/team' },
  { name: 'Docs', href: '/docs' },
];

interface NavbarProps {
  // Docusaurus 可能会传递一些 props，但我们先不处理它们
  [key: string]: any;
}

export default function Navbar(props: NavbarProps): JSX.Element {
  const [activeKey, setActiveKey] = useState<string>('Home');
  const location = useLocation();

  // 根据当前路径自动设置激活的菜单项
  useEffect(() => {
    const currentMenu = mainMenu.find((item) => item.href === location.pathname);
    if (currentMenu) {
      setActiveKey(currentMenu.name);
    } else if (location.pathname.startsWith('/docs')) {
      setActiveKey('Docs');
    }
  }, [location.pathname]);

  const handleLaunchApp = () => {
    // 在 Docusaurus 中，可以使用 window.location 或 Link 组件
    if (typeof window !== 'undefined') {
      window.location.href = '/app';
    }
  };

  return (
    <header 
      className="w-full bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/10"
      style={{ display: 'block', visibility: 'visible', opacity: 1 }}
    >
      <Container className="py-3 flex items-center justify-between">
        <LogoBrand />
        <nav className="flex gap-2 lg:gap-4 items-center">
          <LinkList links={mainMenu} onLinkClick={setActiveKey} activeKey={activeKey} />
          <div className="hidden md:block">
            <Button2 onClick={handleLaunchApp}>Beta App</Button2>
          </div>
          <div className="md:hidden relative">
            <Button2 onClick={handleLaunchApp}>App</Button2>
          </div>
        </nav>
      </Container>
    </header>
  );
}

