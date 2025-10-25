import Facebook from '@/components/svg/facebook';
import Github from '@/components/svg/github';
import Instagram from '@/components/svg/instagram';
import Linkedin from '@/components/svg/linkedin';
import TwitterX from '@/components/svg/twitter-x';

export const contacts = {
   phoneNos: {
      'Siddharth Menon': '+91 8921963995',
      'Souri S': '+91 8089810820',
   },
   mails: ['fosster@amfoss.in'],
};

export const socials = [
   { link: 'https://www.instagram.com/amfoss.in', icon: <Instagram /> },
   { link: 'https://twitter.com/amfoss_in', icon: <TwitterX /> },
   { link: 'https://www.linkedin.com/company/amfoss', icon: <Linkedin /> },
   { link: 'https://github.com/amfoss', icon: <Github /> },
   { link: 'https://www.facebook.com/amfoss.in', icon: <Facebook /> },
];
