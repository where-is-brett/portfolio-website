import { GridItemPayload, PostPayload } from "@/types"
import EditorialIcon from '@/public/icons/editorial.svg'
import MarketingIcon from '@/public/icons/marketing.svg'
import DashboardIcon from '@/public/icons/dashboard.svg'
import EcommerceIcon from '@/public/icons/ecommerce.svg'

export const services: GridItemPayload[] = [
    {
        icon: MarketingIcon,
        title: "Marketing Websites",
        description: `Create captivating and results-driven marketing websites that engage visitors and promote your brand's message. Leveraging Next.js and Sanity, I ensure fast-loading, SEO-friendly, and visually stunning websites that leave a lasting impression on your audience.`,
    },
    {
        icon: DashboardIcon,
        title: "Data Dashboards",
        description: `Develop data-rich and interactive dashboards that provide valuable insights at a glance. Utilising Next.js and Sanity, I design user-friendly data visualisation interfaces, empowering you to make data-driven decisions efficiently and effectively.`,
    },
    {
        icon: EditorialIcon,
        title: "Editorial Websites",
        description: `Craft elegant and content-focused editorial websites that captivate readers.
        With Next.js and Sanity, I create seamless reading experiences, optimised for performance, while ensuring easy content management for publishers.`,
    },
    {
        icon: EcommerceIcon,
        title: "API-Based Ecommerce",
        description: `Build feature-rich and scalable ecommerce platforms using Next.js and Sanity. By integrating APIs and leveraging modern web technologies, I create seamless shopping experiences that drive conversions and enhance user satisfaction.`,
    },
]

export const projects: PostPayload[] = [
    {
        title: "Case Study: Holsinger Lab",
        body: `The Holsinger Lab website is designed to showcase ground-breaking research in neuroscience at the prestigious University of Sydney. The lab recognised the need for an effective and user-friendly website to share their research with the world. With limited tech capabilities and resources, the lab needed a modern solution. 
        \n
        To accomodate their needs, I developed a fast and responsive website that incorporates content from a headless CMS. By separating content and code, this solution empowers all staff members to easily edit and manage the website.
        \n
        This approach has led to the creation of a highly maintainable platform for scientific communications. It has not only facilitated current research dissemination but its scalability also paved the way for future growth and groundbreaking discoveries.
        `,
        imageURLs: [
            '/images/holsingerlab/home.png',
            '/images/holsingerlab/publications.png',
            '/images/holsingerlab/contact.png',
            '/images/holsingerlab/studio_home.png',
            '/images/holsingerlab/studio_settings.png',
            '/images/holsingerlab/studio_publications.png',
            '/images/holsingerlab/studio_people.png',
        ],
        link: "https://holsingerlab.vercel.app",
    },
]


{/* <svg width="100%" height="100%" viewBox="0 0 212 24">
                    <text x="50%" y="65%" textAnchor="middle" alignmentBaseline="middle" className="font-bold text-center max-w-fit font-raleway">
                        Where Code Weaves Artistry
                    </text>
                </svg> */}
{/* <svg width="100%" height="100%" viewBox="0 0 480 24">
                        <text x="50%" y="65%" textAnchor="middle" alignmentBaseline="middle" className="font-bold">What I Offer</text>
                        </svg> */}



{/* <div className="grid grid-cols-2 justify-center items-center px-auto gap-8 font-raleway font-medium whitespace-nowrap text-xl md:text-2xl">
                            <div className="flex justify-center items-center gap-4">
                                <Image src={ReactIcon} alt={"React logo"} className="h-8 w-full" />
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <Image src={NextIcon} alt={"Next.js logo"} className="h-8 w-full" />
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <Image src={SanityIcon} alt={"Sanity.io logo"} className="h-8 w-full" />
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <Image src={TailwindIcon} alt={"Tailwind CSS logo"} className="h-8 w-full" />
                            </div>
                        </div> */}