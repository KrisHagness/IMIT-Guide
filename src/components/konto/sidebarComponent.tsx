"use client";

import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaHouseChimney, FaTicket, FaNewspaper, FaCircleInfo, FaHeadset, FaCircleQuestion, FaFilePen, FaUser, FaRegPenToSquare, FaPenToSquare, FaQuestion } from "react-icons/fa6";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const mainRoutes = [
  { path: "/", name: "Hjem", icon: <FaHome />  },
  
  
  {path:"/#faq", name:"FAQ", icon:<FaQuestion/>},
  {path:"/konto/hjelp", name:"Hjelp", icon:<FaHeadset/>},
  {
    path: "/dashboard",
    name: "Dashboard",
    requiredPermissions: ["admin:perms"],
    icon: <MdAdminPanelSettings />,
  },

];


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading, getPermissions } =
    useKindeBrowserClient();
  const { permissions } = getPermissions();
  const ref = useRef<HTMLElement | null>(null);
//   useOnClickOutside(ref, () => setIsOpen(false));

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.24,
        staggerChildren: 0.19,
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  return (
    <motion.div
    variants={container} initial="hidden" animate="visible">

        <aside
        ref={ref}
        className='h-full min-w-[300px] bg-zinc-900 text-white/50  transform transition-transform duration-200'>
      <ul className="PC hidden h-full md:flex  text-center  flex-col py-5 gap-2 ">
        {mainRoutes.map(({ path, name, icon, requiredPermissions }) => {
          if (
            !requiredPermissions ||
            requiredPermissions.every((p) => permissions?.includes(p))
          ) {
            return (
              <motion.div key={path} className="flex justify-center items-center"
              variants={item}>
                <Link
                
                className={`py-3 px-5 text-center flex justify-start items-center pr-6 text-lg
                   hover:bg-gray-800 rounded-md w-[90%]
                  hover:scale-105 transition duration-200`}
                  href={path}
                >
                    <div className="flex justify-start text-center items-center ">
                        <div className="mx-1">{icon}</div>
                        <div>{name}</div>
                    </div>
                  
                </Link>
              </motion.div>
            );
          }
        })}

        <motion.div className="mt-auto"
        variants={item}>
          {
            isLoading && !(pathname === "/") && (
              <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white/50 mx-auto my-2"></div>
            )
          }

          {user?.picture && (
            <Image
              src={user?.picture}
              alt="Profile picture"
              width={50}
              height={50}
              className="rounded-full mx-auto my-2"
            />
          )}

          {user && !user.picture && (
            <div className="h-9 w-9 rounded-full mx-auto my-2 bg-zinc-800 text-xs flex justify-center items-center">
              {user?.given_name?.[0]}
            </div>
          )}
          {user?.given_name && user?.family_name ? (
  <p className="text-center text-xs mb-1">
    Logget inn som: {user?.given_name} {user?.family_name}
  </p>
) :  (
  <p className="text-center text-xs mb-1">
    Logget inn som: 
  </p>
)}

          {user?.email && (
            <p className="text-center text-xs mb-3 ">
              E-post: {user?.email}
            </p>
          )}

            <div className="flex justify-center items-center text-center">
            {isAuthenticated && (
                <LogoutLink
                className={`py-3 px-5 text-center  hover:bg-gray-800 rounded-md w-[90%] transition flex justify-center items-center`}
                >
                <FiLogOut className="mx-1"/>

                Logg ut
                </LogoutLink>
            )}
            </div>


        </motion.div>
      </ul>


    

    </aside>
    </motion.div>
    
  );
}