'use client';
import { IconMail, IconBrandWhatsapp, IconCalendar } from '@tabler/icons-react';
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
          text: 'Email me',
          icon: <IconMail size={14} />,
          className:
            'px-2 py-1 text-white/70 hover:text-[#2563EB] font-body',
        },
        {
          href: 'https://wa.me/46703245598',
          text: 'Message me',
          icon: <IconBrandWhatsapp size={14} />,
          className:
            'px-2 py-1 text-white/70 hover:text-[#25D366] font-body',
          target: '_blank',
        },
        {
          href: 'https://cal.com/mhitaryan',
          text: 'Book a call',
          icon: <IconCalendar size={14} />,
          className:
            'px-2 py-1 text-white/70 hover:text-[#8B5CF6] font-body',
          target: '_blank',
        },
      ]}
    />
  );
}
