import Link from "next/link";
import React from "react"; 
import menu_data from "./menu-data";
import { useSession } from "next-auth/react"


const NavMenu = () => {
  
  
  return (
    <>
      <ul>
        {menu_data.map((item) => (
          <li key={item.id} className="has-dropdown">
            <Link href={item.link}>{item.title}</Link>
            {item.has_dropdown && 
              <ul className="submenu">
                {item.sub_menus?.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>            
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
