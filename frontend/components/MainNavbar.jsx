import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function CustomNavbar({ first, second, third }) {
  return (
    <Navbar className="bg-background_complement w-full border-b-1 border-navbar_button_selected">
      <NavbarBrand className="-ml-3.5">
        <p className="font-bold text-inherit">JotGenius</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className={first ? "text-navbar_button_selected font-bold" : "text-navbar_button_secondary"} href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/library" className={second ? "text-navbar_button_selected font-bold" : "text-navbar_button_secondary"}>
            Library
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="blue" href="#" className={third ? "text-navbar_button_selected font-bold" : "text-navbar_button_secondary"}>
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end" className="-mr-3.5">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
