import React from 'react';

import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibaryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playLists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibaryMusicIcon} title="Your Libary" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playLists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
