"use client";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  MenuItemStylesParams,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { CSSObject } from "@emotion/react";
import React, { useState, useRef } from "react";
import { IoStatsChart } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { TfiHome } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuListTodo } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import "@/styles/sidebar.scss";
import { Tooltip, TooltipPortal } from "../toolbarPortal/toolbar-portal";

interface MenuItemStyles {
  root?: ElementStyles;
  button?: ElementStyles;
  label?: ElementStyles;
  prefix?: ElementStyles;
  suffix?: ElementStyles;
  icon?: ElementStyles;
  subMenuContent?: ElementStyles;
  SubMenuExpandIcon?: ElementStyles;
}

type ElementStyles =
  | CSSObject
  | ((params: MenuItemStylesParams) => CSSObject | undefined);

const ResponsiveNavbar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const getTodaysDay = () => {
    const today = new Date();
    return today.getDate();
  };
  const [tooltip, setTooltip] = useState({
    show: false,
    text: "",
    position: { x: 0, y: 0 },
  });
  const menuItemRefs = useRef({});

  const createRef = (itemName) => {
    if (!menuItemRefs.current[itemName]) {
      menuItemRefs.current[itemName] = React.createRef();
    }
    return menuItemRefs.current[itemName];
  };

  const showTooltip = (itemName) => {
    if (collapsed && menuItemRefs.current[itemName].current) {
      const rect =
        menuItemRefs.current[itemName].current.getBoundingClientRect();
      setTooltip({
        show: true,
        text: itemName,
        position: { x: rect.right, y: rect.top + window.scrollY }, // Adjust for scrolling
      });
    }
  };

  const hideTooltip = () => setTooltip({ ...tooltip, show: false });
  return (
    <>
      <div className="sidebar flex h-screen">
        <Sidebar
          className={collapsed ? "sidebar-collapsed" : "sidebar-expanded"}
          collapsed={collapsed}
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "transparent",
              padding: "70px 2px",
            },
          }}
        >
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                if (level === 0 || level === 1)
                  return {
                    "&:hover": {
                      backgroundColor: "rgb(217, 98, 43) !important",
                      borderRadius: "0.5rem",
                      span: {
                        className: "underline-animation",
                        color: "  !important",
                      },
                      ["." + menuClasses.icon]: {
                        svg: {
                          backgroundColor: "rgb(217, 98, 43) !important",
                        },
                      },
                    },
                  };
              },
            }}
          >
            <MenuItem
              ref={createRef("Home")}
              onMouseEnter={() => showTooltip("Home")}
              onMouseLeave={hideTooltip}
              icon={
                <TfiHome className="h-5 w-5 hover:bg-accent hover:text-accent-foreground" />
              }
              active
            >
              <span className="underline-animation w-auto">Home</span>
              {tooltip.show && tooltip.text === "Home" && (
                <TooltipPortal position={tooltip.position}>
                  <Tooltip text="Home" />
                </TooltipPortal>
              )}
            </MenuItem>
            <MenuItem
              ref={createRef("Today")}
              onMouseEnter={() => showTooltip("Today")}
              onMouseLeave={hideTooltip}
              icon={
                <>
                  <FaRegCalendar className="h-5 w-5 hover:bg-accent hover:text-accent-foreground" />
                  <span className="ml-2 calendar absolute">
                    {getTodaysDay()}
                  </span>
                  {tooltip.show && tooltip.text === "Today" && (
                    <TooltipPortal position={tooltip.position}>
                      <Tooltip text="Today" />
                    </TooltipPortal>
                  )}
                </>
              }
              active
            >
              <span className="underline-animation w-auto">Today</span>
            </MenuItem>
            <MenuItem
              ref={createRef("Todo")}
              onMouseEnter={() => showTooltip("Todo")}
              onMouseLeave={hideTooltip}
              icon={
                <LuListTodo className="h-5 w-5 hover:bg-accent hover:text-accent-foreground" />
              }
              active
            >
              <span className="underline-animation w-auto">Todo</span>
              {tooltip.show && tooltip.text === "Todo" && (
                <TooltipPortal position={tooltip.position}>
                  <Tooltip text="Todo" />
                </TooltipPortal>
              )}
            </MenuItem>
            <MenuItem
              ref={createRef("Pillars of life")}
              onMouseEnter={() => showTooltip("Pillars of life")}
              onMouseLeave={hideTooltip}
              icon={
                <IoStatsChart className="h-5 w-5 hover:bg-accent hover:text-accent-foreground" />
              }
              active
            >
              <span className="underline-animation w-auto">
                Pillars of life
              </span>
              {tooltip.show && tooltip.text === "Pillars of life" && (
                <TooltipPortal position={tooltip.position}>
                  <Tooltip text="Pillars of life" />
                </TooltipPortal>
              )}
            </MenuItem>
          </Menu>
          <div
            className={`absolute left-6 top-4 flex w-full items-center  justify-start transition-none`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
            >
              <RxHamburgerMenu className="h-5 w-5 " />
            </Button>
            <Avatar
              className={`w-7 h-7 ml-4 mr-2 ${collapsed ? "hidden" : "block "}`}
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className={`${collapsed ? "hidden" : "block "}`}>@Art</span>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
