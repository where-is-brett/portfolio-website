import Image from 'next/image'
import Carousel from '../Carousel'

interface PostProps {
    title: string,
    body: string,
    imageURLs?: string[],
    link: string | undefined
}

const Post = ({
    title,
    body,
    imageURLs,
    link
}: PostProps) => {

    const paragraphs: string[] = body.split('\n\n');

    return (
        <>
            <div className="border-2 border-border p-6 space-y-4 w-full bg-bg-secondary text-lg md:text-xl">
                <h1 className="text-xl md:text-2xl text font-bold capitalize font-raleway">
                    {title}
                </h1>
                {paragraphs.map((paragraph: string, key: number) =>
                    <p key={key}>{paragraph}</p>
                )}
                <div className='w-full'>
                    {imageURLs && (
                        imageURLs.length === 1 ?
                            <Image src={imageURLs[0]} alt={title} width={0} height={0} layout="responsive" />
                            : <Carousel imageURLs={imageURLs} />
                    )}
                </div>
                <br />
                {link &&
                    <a href={link} target='_blank' className='flex flex-nowrap gap-3'>
                        <span className='underline uppercase font-raleway font-medium'>See the project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                }
            </div>

        </>
    )
}

export default Post;