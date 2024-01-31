import React from 'react';
import { Link } from 'react-router-dom';

//? ICONS
import { HomeIcon, HeartIcon, UserIcon, ChatIcon, SearchIcon} from '@heroicons/react/solid';

// STYLES
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <nav>
        <ul className={styles.sidebarList}>
          <li>
            <Link to="/home">
            <HomeIcon className="w-6 h-6 m-0" />
            </Link>
          </li>
          <li>
            <Link to="/explore">
            <SearchIcon className="w-6 h-6 " />
            </Link>
          </li>
          <li>
            <Link to="/notifications">
                <HeartIcon className="w-6 h-6 " />
            </Link>
          </li>
          <li>
            <Link to="/messages">
                <ChatIcon className="w-6 h-6 "/>
            </Link>
          </li>
          <li>
            <Link to="/profile">
                <UserIcon className="w-6 h-6 "/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;