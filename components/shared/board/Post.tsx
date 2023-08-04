import Image from 'next/image';
import Carousel from '../Carousel';

interface PostProps {
  title: string;
  body: string;
  imageURLs?: string[];
  link: string | undefined;
}

const Post = ({ title, body, imageURLs, link }: PostProps) => {
  const paragraphs: string[] = body.split('\n\n');

  return (
    <>
      <div className='w-full space-y-4 border-2 border-border bg-bg-secondary p-6 '>
        <h1 className='text text-xl font-bold capitalize md:text-2xl'>
          {title}
        </h1>
        {paragraphs.map((paragraph: string, key: number) => (
          <p key={key}>{paragraph}</p>
        ))}
        <div className='w-full'>
          {imageURLs &&
            (imageURLs.length === 1 ? (
              <Image
                src={imageURLs[0]}
                alt={title}
                width={0}
                height={0}
                layout='responsive'
                draggable={false}
              />
            ) : (
              <Carousel imageURLs={imageURLs} />
            ))}
        </div>
        <br />
        {link && (
          <a href={link} target='_blank' className='flex flex-nowrap gap-3'>
            <span className='font-medium uppercase underline'>
              See the project
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </a>
        )}
      </div>
    </>
  );
};

export default Post;
