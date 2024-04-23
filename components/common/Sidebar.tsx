import { useRouter } from "next/router";
import { FC, } from "react";
import React from 'react';
import TokenIcon from "../icons/TokenIcon";
import MarketIcon from "../icons/MarketIcon";
import Link from "next/link";
import FlaskIcon from "../icons/FlaskIcon";
import ManageIcon from "../icons/ManageIcon";
import { useMyContext } from '../../contexts/Maincontext';
import VirusIcon from "../icons/VirusIcon";
import SenderIcon from "../icons/SenderIcon";
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { TwStyle } from 'twin.macro';
import ManagerIcon from "../icons/ManagerIcon";

export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    css?: TwStyle[] | undefined;
}
const HeaderLink = ({
    href,
    isActive,
    title,
    icon,
}: LinkProps & {
    href: string;
    isActive: boolean;
    title: string;
    description: string;
    icon: React.ReactNode;
    external?: boolean;
    isExpanded?: boolean;
}) => {
    const router = useRouter();
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault(); // Prevent default behavior
        event.stopPropagation(); // Prevent event propagation
        router.push(href); // Redirect to the specified href on click
    };

    return (
        <div
            className={`flex justify-start text-white/50 duration-300 ease-in-out hover:text-white fill-current font-extralight px-6 border-b-2 border-transparent transition-height cursor-pointer 
            ${isActive && `!text-[#baf775] duration-300 ease-in-out`}`}
            onClick={handleClick}
        >
            <div className="flex justify-start items-center gap-4">
                <div className={`w-10 h-10 bg-[#343536]  border-[#ffffff] flex items-center justify-center transition-all duration-300 ease-in-out  rounded-xl`}>
                    {icon}
                </div>
                <div className={`flex flex-col transition-opacity ease-in-out`}>
                    <span className="text-sm font-normal whitespace-nowrap">{title}</span>
                </div>
            </div>
        </div>
    );
};


const Sidebar: FC = () => {
    const router = useRouter();
    type FilterLink = (link: LinkProps) => boolean;

    const links = [
        {
            href: '/mintinglab/create',
            isActive: router.pathname === '/mintinglab/create',
            title: 'V1 Token Creation',
            description: 'Mint SPL Tokens',
            icon: <TokenIcon />,
        },

        {
            href: '/mintinglab/disperse',
            isActive: router.pathname === '/mintinglab/disperse',
            title: 'Disperse Tokens',
            description: 'Distribution of SPL Tokens',
            icon: <SenderIcon />,
        },
        {
            href: '/market/create',
            isActive: router.pathname === '/market/create',
            title: 'Market Creation',
            description: 'Openbook Market Creation',
            icon: <MarketIcon />,
        },
        {
            href: '/mintinglab/tokenmanager',
            isActive: router.pathname === '/mintinglab/tokenmanager',
            title: 'Authority Manager',
            description: 'Manage SPL Tokens',
            icon: <ManagerIcon />,
        },

        {
            href: '/liquidity/add',
            isActive: router.pathname === '/liquidity/add',
            title: 'Add Liquidity',
            description: 'Add liquidity to a market',
            icon: <FlaskIcon />,
        },
        // {
        //     href: '/liquidity/swap',
        //     isActive: router.pathname === '/liquidity/swap',
        //     title: 'Token Manager',
        //     description: 'Swap tokens',
        //     icon: <TokenIcon />,
        // },
        {
            href: '/liquidity/manage',
            isActive: router.pathname === '/liquidity/manage',
            title: 'Manage Liquidity',
            description: 'Handle liquidity on Raydium',
            icon: <ManageIcon />,
        },
    ];

    // Filter links based on the current route
    const filterLinks: FilterLink = (link) => {
        if (router.pathname === '/mintinglab/create' || router.pathname === '/mintinglab/tokenmanager' || router.pathname === '/mintinglab/disperse' || router.pathname === '/market/create') {
            return link.href === '/mintinglab/create' || link.href === '/mintinglab/disperse' || link.href === '/market/create' || link.href === '/mintinglab/tokenmanager';
        } else if (router.pathname === '/liquidity/add' || router.pathname === '/liquidity/manage' || router.pathname === '/liquidity/swap') {
            return link.href === '/liquidity/add' || link.href === '/liquidity/manage' || link.href === '/liquidity/swap';
        }
        return false;
    };

    const filteredLinks = links.filter(filterLinks);
    const showAllPortfolios = router.pathname.includes('/liquidity/');
    const { isProfilesActive, setisProfilesActive } = useMyContext();


    return (
        <>
            <div className="h-screen">
                <div className="flex  justify-start gap-2 items-start w-full max-w-[220px] py-8 flex-col">
                    {showAllPortfolios && (
                        <div className="mx-6 mb-2 py-1 px-2 w-full max-w-[200px] rounded-3xl flex justify-start items-center  text-white/50 hover:text-white fill-current font-extralight   border-b-2 border-transparent transition-height duration-200 ease-in-out cursor-pointer bg-[#1a1a1a] gap-3" onClick={() => setisProfilesActive(!isProfilesActive)}>
                            <div className="bg-[#333333] px-3 py-3  rounded-full">
                                <VirusIcon color="#37db9c" /></div>
                            <div className="flex flex-col">
                                <p className="font-bold text-white/80 ">Wallets</p>
                            </div>
                            <div className="font-bold">
                                {'➤'}
                            </div>
                        </div>
                    )}


                    <div className="flex  flex-col gap-2 h-full p-2">
                        {filteredLinks.map((link, index) => (
                            <HeaderLink
                                key={index}
                                href={link.href}
                                isActive={link.isActive}
                                title={link.title}
                                description={link.description}
                                icon={link.icon}
                            />
                        ))}
                    </div>

                </div>
            </div>
            {/* } */}

        </>
    );
};

export default Sidebar;