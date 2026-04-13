"use client";
import { useState } from "react";
import { Menu } from "antd";
import { IoMdHome } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { PiBooksFill } from "react-icons/pi";
import { IoPersonAdd } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FaGift } from "react-icons/fa6";
import { Button, Modal } from 'antd';
import Image from 'next/image'
import Link from 'next/link';

const items = [
  {
    key: "1",
    icon: <IoMdHome />,
    label: "Dashboard",
    children: [
      {
        key: "11",
        icon: <MdLibraryAddCheck />,
        label: <Link href="/attendance">Attendance</Link>,
      },
      {
        key: "12",
        icon: <FaGift />,
        label: <Link href="/leaves">Leaves</Link>,
      },
    ],
  },

  {
    key: "2",
    icon: <IoPersonAdd />,
    label: "Manager",
    children: [
      {
        key: "21",
        icon: <IoSchool />,
        label: <Link href="/manager-students">Students</Link>,
      },
      {
        key: "22",
        icon: <MdLibraryAddCheck />,
        label: <Link href="/manager-attendence">Attendance</Link>,
      },
      {
        key: "23",
        icon: <FaGift />,
        label: <Link href="/manager-leaves">Leaves</Link>,
      },
      {
        key: "24",
        icon: <LuCalendarDays />,
        label: <Link href="/manager-holiday">Holidays</Link>,
      },
      {
        key: "25",
        icon: <IoSchool />,
        label: <Link href="/teacher">Teachers</Link>,
      },
      {
        key: "26",
        icon: <PiBooksFill />,
        label: <Link href="/course">Course</Link>,
      },
    ],
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);

const App = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex(
          (key) => levelKeys[key] === levelKeys[currentOpenKey]
        );
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };


  return (
    <>
      <div className="sidebar">
        <div className="sidebar_img">
          <Image
            className="logo_siderbar_desk"
            src="/assets/image/Logo1.png"
            width={200}
            height={60}
            alt="Logo"
            priority
          />
        </div>

        {/* Mobile Logo */}
        <Image
          className="logo_siderbar_mob"
          src="/assets/image/fav.png"
          width={70}
          height={70}
          alt="Logo Mobile"
        />

        {/* Sidebar Menu */}
        <div className="sidebar_item">
          <Menu
            mode="inline"
            defaultSelectedKeys={[]}
            openKeys={stateOpenKeys}
            onOpenChange={onOpenChange}
            style={{ width: 200, background: "transparent", border: "none" }}
            items={items}
          />
        </div>
      </div>
    </>
  );
};

export default App; 
