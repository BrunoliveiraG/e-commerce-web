import React from 'react';
import Logo from '../Logo';
import styles from '../../../styles/LateralMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const LateralMenu: React.FC = () => {
  return(
    <div className={styles.background}>
      <Logo />

      <div className={styles.list}>
        <Link href="/Admin">
          <a>
            <FontAwesomeIcon icon={faSignal} color="var(--color-gray-light)" className="mr-3" />
            Initial Panel
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Users/List">
          <a>
            <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="mr-3" />
            Users
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Products/List">
          <a>
            <FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="mr-3" />
            Products
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Categories/List">
          <a>
            <FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="mr-3" />
            Categories
            <hr />
          </a>
        </Link>

        <Link href="/Admin/SystemRequirements/List">
          <a>
            <FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="mr-3" />
            System Requirements
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Coupons/List">
          <a>
            <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="mr-3" />
            Coupons
            <hr />
          </a>
        </Link>

        <Link href="/Admin/#">
          <a>
            <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="mr-3" />
            Finances
            <hr />
          </a>
        </Link>

        <Link href="/Admin/#">
          <a>
            <FontAwesomeIcon icon={faSignOutAlt} color="var(--color-gray-light)" className="mr-3" />
            Exit
            <hr />
          </a>
        </Link>
      </div>
    </div>

  )
}

export default LateralMenu;