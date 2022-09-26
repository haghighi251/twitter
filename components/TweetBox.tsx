import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon
} from "@heroicons/react/outline";
import {useState} from "react";

export const TweetBox = () => {

    const [input, setInput] = useState<string>('');

    return (
        <div className='flex space-x-2 p-5'>

            <img src='/images/user.png' className='w-14 h-14 object-cover rounded-full' />

            <div className='flex flex-1 item-center pl-2'>
                <form className='flex flex-1 flex-col'>
                    <input type='text' value={input}
                           onChange={(e)=>{
                               setInput(e.target.value)
                           }}
                           placeholder="What's Happening?" className='h-24 w-full text-xl outline-none placeholder:text-xl'/>

                    <div className='flex items-center'>
                        <div className='flex flex-1 space-x-2 text-twitter'>

                            {/* Icons */}
                            <PhotographIcon className='w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                            <SearchCircleIcon className='w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                            <EmojiHappyIcon className='w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                            <CalendarIcon className='w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-125' />
                            <LocationMarkerIcon className='w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-125' />
                        </div>

                        <button disabled={!input} className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>Tweet</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default TweetBox;
