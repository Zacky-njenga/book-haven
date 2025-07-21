"use client"

import { useState, MouseEvent } from 'react';
import {
    Menu,
    MenuItem,
} from '@mui/material';
// Add this to your imports if not already present
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Image from "next/image";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { BOOK_CATEGORIES, BookCategory } from '@/constants/bookCategories';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CountryFlag from "@/components/CountryFlag";


interface MenuItems {
    label: string;
    href: string;
}

interface Category {
    label: string;
    href: string;
    icon?: string;
    description?: string;
}

const categories: Record<string, Category[]> = {
    featured: [
        {
            label: 'What to Read',
            href: '/',
            icon: 'book',
            description: 'Curated reading lists'
        },
        // ...
    ],
    books: [
        {
            label: 'Arts & Architecture',
            href: '/',
            icon: 'palette'
        },
        // ...
    ]
};



export default function NavBar() {
    // ... other code ...

    const menuItems: MenuItems[] = [
        ...Object.values(BOOK_CATEGORIES).flat().map(category => ({
            label: category,
            href: '/'
        }))
    ];
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Add these state variables alongside your existing ones
    const [accountAnchorEl, setAccountAnchorEl] = useState<null | HTMLElement>(null);
    const accountOpen = Boolean(accountAnchorEl);

    // Add this handler function
    const handleAccountClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAccountAnchorEl(event.currentTarget);
    };

    const handleAccountClose = () => {
        setAccountAnchorEl(null);
    };

    // Updated return statement
    return (
        <div className="bg-white h-15 text-black">
            <div className="flex items-center justify-between h-full px-4"> {/* Restored justify-between */}
                {/* Left section with logo, categories, and search */}
                <div className="flex items-center gap-4">
                    <div className="relative w-[200px] h-[50px]">
                        <Image
                            src="/bookhavenlogo.png"
                            alt="logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div
                        onClick={handleClick}
                        className="cursor-pointer hover:text-gray-600 font-medium "
                    >
                        Categories <KeyboardArrowDownRoundedIcon

                    />
                    </div>
                    <div className="relative flex items-center ml-[10px]">
                        <div className="absolute left-3 text-gray-500">
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by Title, Author or ISBN"
                            className="pl-12 pr-4 py-2 w-[600px] border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    {/* Account dropdown section - moved back outside the left section */}
                    <div onClick={handleAccountClick} className="relative cursor-pointer hover:text-gray-600 ml-[300px]">
                        <AccountCircleRoundedIcon className="font-medium"/>
                        Account
                        <ArrowDropDownOutlinedIcon className="font-small"/>
                    </div>

                </div>


                <div className="flex items-center">
                    <CountryFlag/>
                    {/* Other content */}
                </div>
                <div
                    className=" transform -translate-x-[150px]"
                >
                    <ShoppingCartOutlinedIcon className="font-large"/>

                </div>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {Object.values(BOOK_CATEGORIES).flat().map((category, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        <Link href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                            {category}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
            {/* Account Menu */}

                <Menu
                    anchorEl={accountAnchorEl}
                    open={accountOpen}
                    onClose={handleAccountClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {/* First group */}
                    <MenuItem
                        component={Link}
                        href="/signin"
                        onClick={handleAccountClose}
                        className="hover:bg-gray-100"
                    >
                        Create Account
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        href="/signin"
                        onClick={handleAccountClose}
                        className="hover:bg-gray-100"
                    >
                        Sign In
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        href="/order-status"
                        onClick={handleAccountClose}
                        className="hover:bg-gray-100"
                    >
                        Order Status
                    </MenuItem>

                    {/* Divider */}
                    <Divider sx={{ my: 1, borderColor: 'rgba(0, 0, 0, 0.12)' }} />

                    {/* Second group */}
                    <MenuItem
                        component={Link}
                        href="/rewards"
                        onClick={handleAccountClose}
                        className="hover:bg-gray-100"
                    >
                        Rewards
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        href="/wishlist"
                        onClick={handleAccountClose}
                        className="hover:bg-gray-100"
                    >
                        My Wishlist
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        href="/account"
                        onClick={handleAccountClose}
                        className="hover:bg-gray-100"
                    />

                </Menu>





        </div>
    );
}