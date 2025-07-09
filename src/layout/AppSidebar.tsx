"use client";
import React, { useState  } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
} from "../icons/index";
import logoImg from "../../public/images/logo_img.jpg";

const jschampsSubItems = [
  { name: "Home", path: "/jschamps-home" },
  { name: "About", path: "/jschamps-about" },
  { name: "How It Works", path: "/jschamps-how-it-works" },
  { name: "Training", path: "/jschamps-training" },
  { name: "Contact Us", path: "/jschamps-contact-us" },
];

const trueopsSubItems = [
  { name: "Home", path: "/trueops-home" },
  { name: "About", path: "/trueops-about" },
  { name: "Services", path: "/trueops-services" },
  { name: "Training", path: "/trueops-training" },
  { name: "Contact Us", path: "/trueops-contact-us" },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const [cmsOpen, setCmsOpen] = useState(false);
  const [openSite, setOpenSite] = useState<"jschamps" | "trueops" | null>(null);

  const isActive = (path: string) => pathname === path;

  const handleSiteToggle = (site: "jschamps" | "trueops") => {
    setOpenSite((prev) => (prev === site ? null : site));
  };

  const renderSubMenu = (items: { name: string; path: string }[]) => (
    <ul className="mt-2 ml-6 space-y-1">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.path}
            className={`menu-dropdown-item ${
              isActive(item.path)
                ? "menu-dropdown-item-active"
                : "menu-dropdown-item-inactive"
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"} 
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image className="dark:hidden" src={logoImg} alt="Logo" width={150} height={40} />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image src="/images/logo/logo-icon.svg" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? "Menu" : <HorizontaLDots />}
              </h2>

              {/* CMS Dropdown */}
              <ul className="flex flex-col gap-2">
                <li>
                  <button
                    onClick={() => setCmsOpen((prev) => !prev)}
                    className={`menu-item group ${
                      cmsOpen ? "menu-item-active" : "menu-item-inactive"
                    }`}
                  >
                    <span className="menu-item-icon-inactive"><GridIcon /></span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <>
                        <span className="menu-item-text">CMS</span>
                        <ChevronDownIcon
                          className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                            cmsOpen ? "rotate-180 text-brand-500" : ""
                          }`}
                        />
                      </>
                    )}
                  </button>
                </li>

                {cmsOpen && (
                  <ul className="ml-4 flex flex-col gap-2">
                    {/* JSChamps */}
                    <li>
                      <button
                        onClick={() => handleSiteToggle("jschamps")}
                        className={`menu-item group ${
                          openSite === "jschamps" ? "menu-item-active" : "menu-item-inactive"
                        }`}
                      >
                        <span className="menu-item-icon-inactive">{/* dot or empty */}</span>
                        {(isExpanded || isHovered || isMobileOpen) && (
                          <>
                            <span className="menu-item-text">JSChamps</span>
                            <ChevronDownIcon
                              className={`ml-auto w-4 h-4 transition-transform duration-200 ${
                                openSite === "jschamps" ? "rotate-180 text-brand-500" : ""
                              }`}
                            />
                          </>
                        )}
                      </button>
                      {openSite === "jschamps" && renderSubMenu(jschampsSubItems)}
                    </li>

                    {/* TrueOps */}
                    <li>
                      <button
                        onClick={() => handleSiteToggle("trueops")}
                        className={`menu-item group ${
                          openSite === "trueops" ? "menu-item-active" : "menu-item-inactive"
                        }`}
                      >
                        <span className="menu-item-icon-inactive">{/* dot or empty */}</span>
                        {(isExpanded || isHovered || isMobileOpen) && (
                          <>
                            <span className="menu-item-text">TrueOps</span>
                            <ChevronDownIcon
                              className={`ml-auto w-4 h-4 transition-transform duration-200 ${
                                openSite === "trueops" ? "rotate-180 text-brand-500" : ""
                              }`}
                            />
                          </>
                        )}
                      </button>
                      {openSite === "trueops" && renderSubMenu(trueopsSubItems)}
                    </li>
                  </ul>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
