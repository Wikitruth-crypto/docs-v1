"use client"

import { cn } from "@/lib/utils";
// import useTheme from "@/hooks/useThemeColorClass";
// import { useBrandColorStore } from "@/store/storeBrandColor";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function TitleLabel({ children, className }: Props) {


    return (
        <div className={cn("w-full flex items-center justify-center gap-4", className)}>
            {/* 左侧线条 */}
            <div className="flex-1 flex items-center">
                <hr className="w-full border-neutral-300/50" />
            </div>
            
            {/* 中央文本 */}
            <div className="flex-shrink-0 flex items-center justify-center text-sm font-mono border border-white/30 rounded-xl px-4 py-2 whitespace-nowrap min-h-[2rem]">
                {children}
            </div>
            
            {/* 右侧线条 */}
            <div className="flex-1 flex items-center">
                <hr className="w-full border-neutral-300/50" />
                
            </div>
        </div>
    )
}

