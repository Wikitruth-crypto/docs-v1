// import React, { useState } from 'react';
// import { Container } from '../../components/Container';
// import LogoBrand from '../../components/base/LogoBrand';
// import TextSpan from '../../components/base/TextSpan';
// import { FaGithub, FaMailBulk, FaShareAlt } from 'react-icons/fa';
// import ShareModal from '../../components/customer/ShareModal';
// import Famous from '../../components/customer/Famous';

// const links = [
//   { name: '@2025 All rights reserved', href: '#' },
//   { name: 'Terms of Service', href: '#' },
// ];

// interface FooterProps {
//   // Docusaurus may pass some props, but we don't process them for now
//   [key: string]: any;
// }

// export default function Footer(props: FooterProps): JSX.Element {
//   // ensure the Footer is always displayed, even if the configuration is empty
//   const [isShareModalOpen, setIsShareModalOpen] = useState(false);

//   const handleShareClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setIsShareModalOpen(true);
//   };

//   const socialLinks = [
//     // {
//     //   name: 'twitter',
//     //   icon: <FaTwitter />,
//     //   href: 'https://x.com/WikiTruthLabs',
//     //   label: 'Twitter',
//     // },
//     // {
//     //   name: 'telegram',
//     //   icon: <FaTelegram />,
//     //   href: 'https://t.me/+kKfEGJ6Ua2FhYjI1',
//     //   label: 'Telegram',
//     // },
//     {
//       name: 'github',
//       icon: <FaGithub />,
//       href: 'https://github.com/WikiTruth-crypto',
//       label: 'GitHub',
//     },
//     // {
//     //   name: 'discord',
//     //   icon: <FaDiscord />,
//     //   href: 'https://discord.gg/KVDs7CFSr2',
//     //   label: 'Discord',
//     // },
//     {
//       name: 'email',
//       icon: <FaMailBulk />,
//       href: 'mailto:wikitruth@proton.me',
//       label: 'Email',
//     },
//     {
//       name: 'share',
//       icon: <FaShareAlt />,
//       href: '#',
//       label: 'Share',
//       onClick: handleShareClick,
//     },
//   ];

//   return (
//     <>
//       <footer 
//         className="w-full bg-black/95 backdrop-blur-sm pt-12 pb-10 mt-20 border-t border-white/20"
//         style={{ display: 'block', visibility: 'visible', opacity: 1 }}
//       >
//         <Container>
//           <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-white/10 pb-8">
//             <Famous className="max-w-2xl" />
//             <div className="flex flex-col items-end gap-2">
//               <TextSpan>Social media</TextSpan>
//               <div className="flex items-center gap-2">
//                 {socialLinks.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     target={item.name !== 'share' ? '_blank' : undefined}
//                     rel="noopener noreferrer"
//                     onClick={item.onClick}
//                     className="transition-transform hover:scale-110"
//                   >
//                     <div className="w-10 h-10 rounded-md flex items-center justify-center opacity-80 hover:text-theme hover:opacity-100 transition-all text-lg bg-white/5 hover:bg-white/10">
//                       {item.icon}
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 gap-4">
//             <div className="flex items-center gap-2">
//               <LogoBrand />
//             </div>
//             <div className="flex gap-6">
//               {links.map((item, i) => (
//                 <a
//                   key={i}
//                   href={item.href}
//                   className="text-white/70 hover:text-theme transition-colors"
//                 >
//                   <TextSpan>{item.name}</TextSpan>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </Container>
//       </footer>

//       {/* share modal */}
//       <ShareModal isOpen={isShareModalOpen} onOpenChange={setIsShareModalOpen} />
//     </>
//   );
// }

