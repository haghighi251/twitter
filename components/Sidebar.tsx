import SidebarRow from "./SidebarRow";
import {
    HashtagIcon,
    HomeIcon,
    BellIcon,
    BookmarkIcon,
    MailIcon, CollectionIcon, UserIcon, DotsCircleHorizontalIcon
} from "@heroicons/react/outline";


export const Sidebar = () => {
    return (
        <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
        <img className='m-3 h-10 w-10' src='/images/logo-twitter-icon.png' alt='Twitter' />
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={MailIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={CollectionIcon} title="Lists" />
            <SidebarRow Icon={UserIcon} title="SignIn" />

            <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
        </div>
    )
}

export default Sidebar;
