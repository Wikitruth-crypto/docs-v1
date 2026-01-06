import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

// 名言数据
const famous = [
  { proverb: '真相是时间的女儿', from: '达·芬奇' },
  { proverb: '正义可能会迟到，但永远不会缺席', from: '马丁·路德·金' },
  { proverb: '真相只有一个', from: '柯南·道尔' },
  { proverb: '勇敢说出真相，即使声音颤抖', from: '玛格丽特·米德' },
];

interface Props {
  textDirection?: 'left' | 'right' | 'default';
  fontSize?: number;
  fontColor?: string;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function Famous({
  textDirection = 'default',
  fontSize = 16,
  fontColor = 'white',
  className,
  autoPlay = true,
  interval = 10000,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [nextQuote, setNextQuote] = useState(famous[0]);
  const [mounted, setMounted] = useState(false);

  const getRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * famous.length);
    } while (randomIndex === currentIndex && famous.length > 1);
    return { index: randomIndex, quote: famous[randomIndex] };
  };

  const switchToNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      const { index, quote } = getRandomQuote();
      setCurrentIndex(index);
      setNextQuote(quote);
      setIsVisible(true);
    }, 300);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!autoPlay || !mounted) return;
    const timer = setInterval(() => {
      switchToNext();
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex, mounted]);

  useEffect(() => {
    if (mounted) {
      const { quote } = getRandomQuote();
      setNextQuote(quote);
    }
  }, [mounted]);

  const getTextAlignment = () => {
    switch (textDirection) {
      case 'left':
        return { proverb: 'text-left', author: 'text-left' };
      case 'right':
        return { proverb: 'text-right', author: 'text-right' };
      default:
        return { proverb: 'text-left', author: 'text-right' };
    }
  };

  const alignment = getTextAlignment();

  return (
    <div
      className={cn(
        'flex-1 transition-all duration-300 ease-in-out',
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4',
        className
      )}
      style={{ fontSize: `${fontSize}px`, color: fontColor }}
    >
      <p
        className={cn('leading-relaxed mb-2 transition-all duration-300 italic', alignment.proverb)}
        style={{ fontSize: `${fontSize}px`, color: fontColor }}
      >
        "{nextQuote.proverb}"
      </p>
      <p
        className={cn('text-sm opacity-60 transition-all duration-300', alignment.author)}
        style={{ fontSize: `${fontSize * 0.875}px`, color: fontColor }}
      >
        —— {nextQuote.from}
      </p>
    </div>
  );
}

