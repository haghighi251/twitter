import { SearchIcon} from "@heroicons/react/outline";
import {TwitterTimelineEmbed} from "react-twitter-embed";

export const Widgets = () => {
    return (
        <div className='col-span-2 mt-2 hidden px-2 lg:inline'>
            <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mb-5'>
                {/* Search */}
                <SearchIcon className='w-5 h-5 text-gray-400 ' />
                <input type='text' placeholder='Search Twitter'
                       className='flex-1 outline-none bg-transparent'/>
            </div>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="AmirHaghighi17"
                options={{height: 1000}}
            />
        </div>
    )
}

export default Widgets;
