'use client';
import { IconMail, IconBrandWhatsapp } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import InteractiveCTA from './interactive-cta';

export default function CTAWrapper() {
  const pathname = usePathname();
  const showCTA = !['/contact'].includes(pathname);
  if (!showCTA) return null;

  return (
    <InteractiveCTA
      heading="Want to discuss a project?"
      subheading="Let's connect."
      initialOpen={false}
      navigationLinks={[
        {
          href: 'mailto:jackie@mhitaryan.com',
          text: 'Email us',
          icon: <IconMail size={14} />,
          className:
            'px-2 py-1 text-zinc-600 dark:text-zinc-200 hover:text-blue-500 font-body', // <-- subtle grey + blue hover
        },
        {
          href: 'https://wa.me/46703245598',
          text: 'Message us on WhatsApp',
          icon: <IconBrandWhatsapp size={14} />,
          className:
            'px-2 py-1 text-zinc-600 dark:text-zinc-200 hover:text-[#25D366] font-body', // <-- WhatsApp green hover
          target: '_blank',
        },
      ]}
    />
  );
}
