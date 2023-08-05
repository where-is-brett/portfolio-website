import { GridItemPayload, PostPayload } from '@/types';
import EditorialIcon from '@/public/icons/editorial.svg';
import MarketingIcon from '@/public/icons/marketing.svg';
import DashboardIcon from '@/public/icons/dashboard.svg';
import EcommerceIcon from '@/public/icons/ecommerce.svg';

export const services: GridItemPayload[] = [
  {
    icon: MarketingIcon,
    title: 'Marketing Websites',
    description: `Captivating and results-driven marketing websites that engage visitors and promote your brand's message. I focus on fast-loading, SEO-friendly, and visually stunning websites that leave a lasting impression on your audience.`,
  },
  {
    icon: DashboardIcon,
    title: 'Data Dashboards',
    description: `Data-rich and interactive dashboards that provide valuable insights. I design user-friendly data visualisation interfaces, empowering you to make data-driven decisions efficiently and effectively.`,
  },
  {
    icon: EditorialIcon,
    title: 'Editorial Websites',
    description: `Elegant and content-focused editorial websites that captivate readers. I create seamless reading experiences, optimised for performance, while ensuring easy content management for publishers.`,
  },
  {
    icon: EcommerceIcon,
    title: 'API-Based Ecommerce',
    description: `Feature-rich and scalable storefront with your choice of ecommerce platform. I create seamless shopping experiences that drive conversions and enhance user satisfaction.`,
  },
];

export const projects: PostPayload[] = [
  {
    title: 'Editorial: Holsinger Lab',
    body: `The Holsinger Lab website is designed to showcase ground-breaking research in neuroscience at the prestigious University of Sydney. The lab recognised the need for an effective and user-friendly website to share their research with the world. With limited tech capabilities and resources, the lab needed a modern solution. 
        \n
        To accomodate their needs, I developed a fast and responsive website that incorporates content from a headless CMS. By separating content and code, this solution empowers all staff members to easily edit and manage the website.
        \n
        This approach has led to the creation of a highly maintainable platform for scientific communications. It has not only facilitated current research dissemination but its scalability also paved the way for future growth and groundbreaking discoveries.
        `,
    imageURLs: [
      '/images/holsingerlab/home.webp',
      '/images/holsingerlab/publications.webp',
      '/images/holsingerlab/contact.webp',
      '/images/holsingerlab/studio_home.webp',
      '/images/holsingerlab/studio_settings.webp',
      '/images/holsingerlab/studio_publications.webp',
      '/images/holsingerlab/studio_people.webp',
    ],
    link: 'https://holsingerlab.vercel.app',
  },
];
