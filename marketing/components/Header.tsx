import {useState, useEffect} from 'react';
// import { Button } from "antd";
import Button from "@/components/base/button2";
import { useLocation, useNavigate } from "react-router-dom";

import LogoBrand from "@/components/base/logobrand";
import LinkList from "@/components/customer/link";
import { Container } from "@/components/Container";

// 主站菜单
const mainMenu = [
    { name: "Home", href: "/" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
    { name: "Docs", href: "/docs" },
];

export default function Header() {
    const [activeKey, setActiveKey] = useState<string>('Home')
    const location = useLocation();
    const navigate = useNavigate();

    // 根据当前路径自动设置激活的菜单项
    useEffect(() => {
        // 主站路由的激活逻辑
        const currentMenu = mainMenu.find(item => item.href === location.pathname);
        if (currentMenu) {
            setActiveKey(currentMenu.name);
        }
    }, [location.pathname]);

    const handleLaunchApp = () => {
        navigate('/app');
    };

    // 主站Header
    return (
        <header className="w-full bg-black/50 backdrop-blur sticky top-0 z-50">
            <Container className="py-2 flex items-center justify-between">
                <LogoBrand />
                <nav className="flex gap-2 lg:gap-4 items-center">
                    <LinkList 
                        links={mainMenu} 
                        onLinkClick={setActiveKey} 
                        activeKey={activeKey}
                    />
                    <div className="hidden md:block">
                        <Button 
                        onClick={handleLaunchApp}>
                            Beta App
                        </Button>
                    </div>
                    <div className="md:hidden relative">
                        <Button
                            onClick={handleLaunchApp}
                        >
                            App
                        </Button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}


