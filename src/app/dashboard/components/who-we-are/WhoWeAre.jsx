import thumbnail from '../../../../assets/images/Thumbnail.jpg';
import { IoIosPlayCircle } from "react-icons/io";
import YouTubeVideo from './YoutubeVideo';
const WhoWeAre = () => {
    const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores laboriosam. In consectetur dolores non magni fuga? Dolorem quidem facere quibusdam molestias dolorum consequuntur. Nesciunt perspiciatis tenetur voluptatibus possimus ipsum
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis molestias culpa quis, at adipisci repudiandae. Voluptatibus, dignissimos adipisci tempore et veniam ab, placeat expedita deserunt aut quia, tempora possimus nisi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt dolorum qui corrupti praesentium repellendus placeat reprehenderit perferendis consequatur earum nihil, officiis minima suscipit, cumque magnam. Quisquam, aliquid. Quis, reiciendis!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores laboriosam. In consectetur dolores non magni fuga? Dolorem quidem facere quibusdam molestias dolorum consequuntur. Nesciunt perspiciatis tenetur voluptatibus possimus ipsum`;

    return (
        <div className="px-16 grid grid-cols-7 gap-16 items-center my-32">
            <div className="flex items-center justify-end col-span-2 ">
                <h2 className="text-9xl font-bold text-end text-primary leading-30">
                    Who <br /> We <br /> Are
                </h2>
            </div>

            <YouTubeVideo videoId="dQw4w9WgXcQ" thumbnail={thumbnail} />

            <div className="col-span-2">
                <p className="text-sm text-primary leading-relaxed">
                    {text.slice(0, 700)}...
                </p>
                <button className='font-bold text-primary mt-2 hover:underline text-2xl cursor-pointer'>
                    READ MORE
                </button>
            </div>
        </div>
    );
};

export default WhoWeAre;
