import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserOne from '../../images/user/user-01.png';
import User from '../../model/user';
import { fetchUserData1, logout } from '../../network/user_services';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  const trigger = useRef<HTMLAnchorElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData1();
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    // Call the logout function to clear the localStorage
    logout();
    // Redirect to the login page after logging out
    window.location.href = '/login';
  };

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        dropdown.current && 
        !dropdown.current.contains(event.target as Node) &&
        !trigger.current?.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (dropdownOpen && event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {userData?.username}
          </span>
          <span className="block text-xs">{userData?.role}</span>
        </span>
        <span className="h-12 w-12 rounded-full">
          <img src={userData?.profilePicture} alt="profile" />
        </span>
        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      <div
        ref={dropdown}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path for My Profile */}
              </svg>
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path for My Billing */}
              </svg>
              My Billing
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path for Sign Out */}
              </svg>
              <button onClick={handleLogout} className="text-left text-sm font-medium px-6 py-7.5 dark:text-white duration-300 ease-in-out hover:text-primary lg:text-base">
                Sign Out
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownUser;
