"use client";
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

import { cn } from '@/lib/utils';
import { FaRegFileCode, FaHandsHelping } from 'react-icons/fa';
import { MdElectricalServices } from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";

interface ComponentInfo {
  title: string;
  icon: JSX.Element;
  href: string;
  description: string;
}

const components: ComponentInfo[] = [
  {
    title: 'Utvikling',
    icon: <FaRegFileCode />,
    href: '/utvikling',
    description: 'Her finner du informasjon, tips og veiledning om utvikling-delen av IT faget.',
  },
  {
    title: 'Brukerstøtte',
    icon: <FaHandsHelping />, 
    href: '/brukerstotte',
    description: 'Her finner du informasjon, tips og veiledning om Brukerstøtte faget.',
  },
  {
    title: 'Drift',
    icon: <MdElectricalServices />, 
    href: '/drift',
    description: 'Her finner du informasjon, tips og veiledning om Drift faget.',
  },
];

const ListItem: React.FC<ComponentInfo> = ({ title, icon, href, description }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className={cn(
          'flex items-center justify-start select-none space-x-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
        )}
      >
        <div className="text-2xl">{icon}</div> 
        <div className="flex-grow">
          <div className="text-sm font-bold leading-none mb-[0.1rem]">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{description}</p>
        </div>
      </a>
    </NavigationMenuLink>
  </li>
);

const NavigationMenuDemo: React.FC = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger><p className='text-gray-300 hover:text-gray-50 mr-1 text-lg font-medium'>Guides</p> </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[240px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[350px] ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                icon={component.icon}
                href={component.href}
                description={component.description}
              />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export default NavigationMenuDemo;
