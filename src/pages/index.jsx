import SliderSizes from "@/components/Slider";
import Logo from "@/components/Svgs/Logo";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
// import Play from '@/components/Svgs/PlayIcon';
import VarModal from "@/components/Modal";
import RadioModels from "@/components/Radio";
import BasicsIcon from "@/components/Svgs/Basics";
import BountyIcon from "@/components/Svgs/Bounty";
import CameraIcon from "@/components/Svgs/Camera";
import ChatIcon from "@/components/Svgs/ChatIcon";
import CollectionIcon from "@/components/Svgs/CollectionIcon";
import CommunityIcon from "@/components/Svgs/Community";
import CreateIcon from "@/components/Svgs/CreateIcon";
import FluxIcon from "@/components/Svgs/Flux";
import HomeIcon from "@/components/Svgs/HomeIcon";
import LearnIcon from "@/components/Svgs/Learn";
import MessageIcon from "@/components/Svgs/Message";
import DoublePlayIcon from "@/components/Svgs/Play";
import SettingsIcon from "@/components/Svgs/Settings";
import { useFieldArray, useForm } from "react-hook-form";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Chat", href: "#", icon: ChatIcon, current: false },
  { name: "Create", href: "#", icon: CreateIcon, current: false },
  { name: "Community", href: "#", icon: CommunityIcon, current: false },
  { name: "Collections", href: "#", icon: CollectionIcon, current: false },
  { name: "Bounty", href: "#", icon: BountyIcon, current: false },
  { name: "Learn", href: "#", icon: LearnIcon, current: false },
  { name: "Flux", href: "#", icon: FluxIcon, current: false },
];

const tabs = [
  { name: "Prompt", href: "#", icon: SettingsIcon, current: true },
  { name: "Basics", href: "#", icon: BasicsIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const { register, control } = useForm({
    defaultValues: {
      variables: [{ name: "", text: true, select: false }],
    },
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "variables",
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tabIndex, setTabindex] = useState(0);
  const [context, setContext] = useState([
    {
      context_inp: "",
    },
  ]);

  const [variables, setVariables] = useState([
    {
      id: uuidv4(),
      inp: "",
    },
  ]);

  function addInpu() {
    setVariables([
      ...variables,
      {
        id: uuidv4(),
        inp: "",
      },
    ]);
  }

  function addContextInpu() {
    setContext([
      ...context,
      {
        context_inp: "",
      },
    ]);
  }

  function deleteRecord(id) {
    const updatedVariables = variables.filter((item) => item.id !== id);
    setVariables(updatedVariables);
  }
  function handleClickSelect(id, index) {
    update(index, { name: "", select: true, text: false });
  }
  function handleClickText(id, index) {
    console.log("handleClickText");
    update(index, { name: "", select: false, text: true });
    console.log(fields);
  }

  React.useEffect(() => {
    console.log(fields);
  });

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <Logo />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="-mx-2 flex-1 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:text-white hover:bg-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <item.icon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="fixed inset-y-0 left-0 z-50 block w-20 overflow-y-auto bg-[#2E3033] lg:pb-4">
          <img
            className={"absolute top-0 z-10 right-0"}
            src="/images/Bar.png"
            alt=""
          />

          <div className="flex h-16 shrink-0 items-center justify-center">
            <Logo />
          </div>
          <nav className="mt-[70px] z-20 relative">
            <ul
              role="list"
              className="flex flex-col pl-2.5 items-center space-y-3"
            >
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="w-20 flex items-center justify-center "
                >
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "linear-bg text-white"
                        : "text-gray-400 hover:text-white hover-linear-bg",
                      "group  rounded-xl px-2 py-2.5  w-[54px] flex items-center justify-center  text-sm leading-6 font-semibold"
                    )}
                  >
                    {/* <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" /> */}
                    <div className=" flex gap-y-1 items-center justify-center  flex-col">
                      <item.icon />
                      <span className="text-[10px] leading-none inline-block flex-none font-normal">
                        {item.name}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute flex items-center justify-center w-full  h-24 bottom-0">
            <DoublePlayIcon />
          </div>
        </div>

        <div className="lg:pl-20"></div>

        <aside className="fixed bottom-0 left-20 top-0 hidden border-r border-gray-700  w-72 overflow-y-auto bg-primary  px-2 py-4 sm:px-3 lg:px-4 xl:block">
          <div className="title-div ">
            <div className="flex gap-4">
              <div className="bg-[#9F9F9F] rounded-xl px-3 py-3 inline-flex">
                <CameraIcon />
              </div>
              <h1 className="text-md text-white font-semibold">
                Language Translation Assistant
              </h1>
            </div>
            <a
              href="#"
              className=" gap-2 mt-2 ml-16  items-center inline-flex px-8 justify-center rounded-full py-2 bg-white/20"
            >
              <ChatIcon />
              <h1 className="text-md  font-semibold text-white/70">Chatbot</h1>
            </a>
          </div>

          {/* all tabs */}
          <div className=" mt-6">
            <div className="">
              <ul
                role="list"
                className="flex flex-col pl-2.5 items-center space-y-3"
              >
                {tabs.map((item, index) => (
                  <li
                    key={item.name}
                    className="w-full  flex  "
                    onClick={() => setTabindex(index)}
                  >
                    <a
                      href={item.href}
                      className={classNames(
                        index === tabIndex
                          ? "linear-bg text-white"
                          : "text-gray-400 hover:text-white hover-linear-bg",
                        "group  rounded-xl px-2 py-2.5  w-full flex items-center  text-sm leading-6 font-semibold"
                      )}
                    >
                      {/* <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" /> */}
                      <div className=" flex items-center py-0.5 gap-4">
                        <item.icon />
                        <span className="text-sm leading-none inline-block flex-none font-normal">
                          {item.name}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              {/* <Link href="/blog/hello-world">Blog Post</Link> */}
            </div>
          </div>
        </aside>

        {/*  main body  */}

        <div className="xl:ml-[368px] h-52 xl:hidden ml-4 pl-20 xl:pl-6 px-6 pt-3 bg-primary">
          <aside className=" w-full bg-priamry bottom-0 left-20 top-0    border-gray-700  overflow-y-auto bg-primary  px-2 py-4 sm:px-3 lg:px-4 xl:block">
            <div className="title-div ">
              <div className="flex gap-4">
                <div className="bg-[#9F9F9F] rounded-xl px-3 py-3 inline-flex">
                  <CameraIcon />
                </div>
                <h1 className="text-md text-white font-semibold">
                  Language Translation Assistant
                </h1>
              </div>
              <a
                href="#"
                className=" gap-2 mt-2 ml-16  items-center inline-flex px-8 justify-center rounded-full py-2 bg-white/20"
              >
                <ChatIcon />
                <h1 className="text-md  font-semibold text-white/70">
                  Chatbot
                </h1>
              </a>
            </div>

            {/* all tabs */}
            <div className=" mt-6">
              <div className="">
                <ul role="list" className="flex  pl-2.5 items-center gap-4 ">
                  {tabs.map((item, index) => (
                    <li
                      key={item.name}
                      className="w-full inline-flex items-center gap-4   "
                      onClick={() => setTabindex(index)}
                    >
                      <a
                        href={item.href}
                        className={classNames(
                          index === tabIndex
                            ? "linear-bg text-white"
                            : "text-gray-400 hover:text-white hover-linear-bg",
                          "group  rounded-xl px-2 py-2.5  w-full flex items-center  text-sm leading-6 font-semibold"
                        )}
                      >
                        {/* <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" /> */}
                        <div className=" flex items-center py-0.5 gap-4">
                          <item.icon />
                          <span className="text-sm leading-none inline-block flex-none font-normal">
                            {item.name}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* <Link href="/blog/hello-world">Blog Post</Link> */}
              </div>
            </div>
          </aside>
        </div>

        <div className="xl:ml-[368px] ml-4 pl-20 xl:pl-6 px-6 pt-6  h-screen relative  screen-height bg-primary">
          <div className="h-90 w-full left-0 absolute top-0">
            <img
              src="/images/city.png"
              className="object-cover w-full"
              alt=""
            />
          </div>

          {tabIndex === 0 ? (
            <div className="z-50   relative h-full flex items-center  gap-6 ">
              <div
                className="col-span-1  px-8 pt-14 rounded-xl w-[40%] lg:block hidden  max-h-full overflow-auto"
                style={{
                  background: "rgba(26, 27, 30, 0.85)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium leading-6 text-white/80"
                  >
                    Prompt
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={6}
                      name="comment"
                      id="comment"
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-1.5  shadow-sm text-sm focus:outline-none px-4"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium leading-6 text-gray-100"
                    >
                      Variables
                    </label>
                    <button
                      onClick={() => append({ name: "hello" })}
                      htmlFor="comment"
                      className="flex items-center text-sm font-medium leading-6 text-gray-100"
                    >
                      Add
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-2">
                    <div
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0   shadow-sm text-sm focus:outline-none "
                      defaultValue={""}
                    >
                      <div className="">
                        <div className=" flow-root">
                          <div className=" overflow-x-auto ">
                            <div className="inline-block w-full align-middle ">
                              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                  <thead className="bg-transparent">
                                    <tr>
                                      <th
                                        scope="col"
                                        className="py-3.5 text-center text-xs font-semibold text-gray-100/80 sm:pl-6"
                                      >
                                        Option
                                      </th>
                                      <th
                                        scope="col"
                                        className="  py-3.5 text-center text-xs font-semibold text-gray-100/80"
                                      >
                                        variable name
                                      </th>
                                      <th
                                        scope="col"
                                        className="  py-3.5 text-center text-xs font-semibold text-gray-100/80"
                                      >
                                        example input
                                      </th>
                                      <th
                                        scope="col"
                                        className="  py-3.5 text-center text-xs font-semibold text-gray-100"
                                      ></th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-200 bg-transparent">
                                    {fields.map((item, index) => (
                                      <tr key={item.id}>
                                        <td className="whitespace-nowrap   text-sm font-medium text-gray-100 sm:pl-6">
                                          <div className="w-full relative py-1.5 bg-transparent border border-gray-600 px-2 rounded-xl  justify-center gap-4 flex items-center">
                                            <div className="w-2/4 flex items-center justify-center">
                                              Text
                                            </div>
                                            <div
                                              className="w-2/4 text-white/80 flex text-xs items-center justify-center"
                                              onClick={() =>
                                                handleClickSelect(
                                                  item.id,
                                                  index
                                                )
                                              }
                                            >
                                              Select
                                            </div>
                                            <div
                                              className="absolute top-0 h-full w-2/4 text-xs left-0 linear-bg rounded-xl flex items-center justify-center"
                                              onClick={() =>
                                                handleClickText(item.id, index)
                                              }
                                            >
                                              Text
                                            </div>
                                          </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                                          {item?.select ? (
                                            <input
                                              type="text"
                                              className="py-1.5  border border-gray-600 pl-2 rounded-xl bg-transparent"
                                              {...register(
                                                `variable.${item}.name`
                                              )}
                                            />
                                          ) : (
                                            <h1>Select is here</h1>
                                          )}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                                          ali
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 cursor-pointer"
                                            onClick={() => remove(index)}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                          </svg>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="comment"
                        className="block text-sm font-medium leading-6 text-gray-100"
                      >
                        Context
                      </label>
                      <button
                        onClick={() => addContextInpu()}
                        htmlFor="comment"
                        className="flex items-center text-sm font-medium leading-6 text-gray-100"
                      >
                        Add
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </button>
                    </div>

                    {context.map((item) => (
                      <div className="mt-2" key={item}>
                        <input
                          type="text"
                          placeholder="You can import datasets as context"
                          className="w-full text-white focus:outline-none text-sm px-2 bg-white/[15%] py-3 rounded-md"
                          name=""
                          id=""
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium leading-6 text-gray-100"
                    >
                      Configuration Settings
                    </label>

                    <RadioModels />
                  </div>

                  <div className="mt-6 mb-2">
                    <h2 className="text-sm font-medium leading-6 text-white/80">
                      Temprature
                    </h2>

                    <SliderSizes />
                  </div>

                  <div className="pb-4">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium leading-6 text-white/80"
                    >
                      system message
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-1.5  shadow-sm text-sm focus:outline-none px-4"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 relative rounded-xl w-full lg:w-[60%] overflow-hidden  h-full">
                <div
                  className="max-h-[100%] text-white overflow-y-scroll h-full pb-24 px-20 pt-24 w-full z-50 left-0 bg-white -top-16 absolute"
                  style={{
                    background: "rgba(26, 27, 30, 0.85)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <div
                    className="relative rounded-lg text-sm bg-white/[15%] mb-4 px-4 py-2"
                    style={{ backdropFilter: "blur(2px)" }}
                  >
                    cumque, nihil repellat, tempora saepe. Porro veniam cum
                    corrupti consequuntur dolore?
                    <img
                      className="absolute top-0 -right-12"
                      src="/images/user_2.png"
                    />
                  </div>

                  <div
                    className="relative rounded-lg mb-4 text-sm bg-white/[15%] px-4 py-2"
                    style={{ backdropFilter: "blur(2px)" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, delectus quaerat quia placeat consequuntur sint sunt
                    odit iste minima cumque, nihil repellat, tempora saepe.
                    Porro veniam cum corrupti consequuntur dolore?
                    <img
                      className="absolute top-0 -left-12"
                      src="/images/gpt.png"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 py-4 left-0 w-full px-12 right-0 gap-4 flex items-center">
                  <input className="w-full px-3 py-2 rounded-full" />
                  <button className="bg-white py-2 gap-2 rounded-full px-4 flex items-center">
                    Send <MessageIcon />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="z-50  relative h-full flex items-center  gap-8 ">
              <form
                className="  pr-8 pl-44 pt-8 relative rounded-xl w-[100%]  h-full"
                style={{
                  background: "rgba(26, 27, 30, 0.85)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <img
                  src="/images/cisa.png"
                  className="absolute left-12"
                  alt=""
                />
                <div>
                  <label
                    htmlFor="comment"
                    className="block
													text-base font-medium leading-6 text-gray-100"
                  >
                    Name of Prompt
                  </label>
                  <div className="mt-4">
                    <input
                      placeholder="JesusGPT"
                      type="text"
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-3  shadow-sm text-sm focus:outline-none px-4"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="comment"
                    className="block
													text-base font-medium leading-6 text-gray-100"
                  >
                    Description
                  </label>
                  <div className="mt-4">
                    <textarea
                      placeholder="For Example: Generate personalized emails like a pro"
                      name=""
                      id=""
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-2  shadow-sm text-sm focus:outline-none px-4"
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="comment"
                    className="block
                    text-base font-medium leading-6 text-gray-100"
                  >
                    Tags
                  </label>
                  <div className="mt-4">
                    <input
                      placeholder="Search for Tags..."
                      type="text"
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-3  shadow-sm text-sm focus:outline-none px-4"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="comment"
                    className="block
													text-base font-medium leading-6 text-gray-100"
                  >
                    Bounty
                  </label>
                  <div className="mt-4">
                    <input
                      placeholder="Individual Prompt"
                      type="text"
                      className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-3  shadow-sm text-sm focus:outline-none px-4"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-8 mt-6 py-2 bg-white rounded-full"
                >
                  Save
                </button>
              </form>
            </div>
          )}
        </div>
        <VarModal className="max-w-5xl">
          <div
            className="col-span-1  px-8 pt-14 rounded-xl w-full block   max-h-full overflow-auto"
            style={{
              background: "rgba(26, 27, 30, 0.85)",
              backdropFilter: "blur(2px)",
            }}
          >
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-white/80"
              >
                Prompt
              </label>
              <div className="mt-2">
                <textarea
                  rows={6}
                  name="comment"
                  id="comment"
                  className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-1.5  shadow-sm text-sm focus:outline-none px-4"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Variables
                </label>
                <button
                  onClick={() => addInpu()}
                  htmlFor="comment"
                  className="flex items-center text-sm font-medium leading-6 text-gray-100"
                >
                  Add
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-2">
                <div
                  className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0   shadow-sm text-sm focus:outline-none "
                  defaultValue={""}
                >
                  <div className="">
                    <div className=" flow-root">
                      <div className=" overflow-x-auto ">
                        <div className="inline-block w-full align-middle ">
                          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                              <thead className="bg-transparent">
                                <tr>
                                  <th
                                    scope="col"
                                    className="py-3.5 text-center text-xs font-semibold text-gray-100/80 sm:pl-6"
                                  >
                                    Option
                                  </th>
                                  <th
                                    scope="col"
                                    className="  py-3.5 text-center text-xs font-semibold text-gray-100/80"
                                  >
                                    variable name
                                  </th>
                                  <th
                                    scope="col"
                                    className="  py-3.5 text-center text-xs font-semibold text-gray-100/80"
                                  >
                                    example input
                                  </th>
                                  <th
                                    scope="col"
                                    className="  py-3.5 text-center text-xs font-semibold text-gray-100"
                                  ></th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 bg-transparent">
                                {variables.map((inp) => (
                                  <tr key={inp.inp}>
                                    <td className="whitespace-nowrap   text-sm font-medium text-gray-100 sm:pl-6">
                                      <div className="w-full relative py-1.5 bg-transparent border border-gray-600 px-2 rounded-xl  justify-center gap-4 flex items-center">
                                        <div className="w-2/4 flex items-center justify-center">
                                          Text
                                        </div>
                                        <div className="w-2/4 text-white/80 flex text-xs items-center justify-center">
                                          Select
                                        </div>
                                        <div className="absolute top-0 h-full w-2/4 text-xs left-0 linear-bg rounded-xl flex items-center justify-center">
                                          Text
                                        </div>
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                                      <input
                                        type="text"
                                        className="py-1.5  border border-gray-600 pl-2 rounded-xl bg-transparent"
                                        value={inp.inp}
                                        name=""
                                        id=""
                                      />
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                                      ali
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 cursor-pointer"
                                        onClick={() => deleteRecord(inp.id)}
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                      </svg>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium leading-6 text-gray-100"
                  >
                    Context
                  </label>
                  <button
                    onClick={() => addContextInpu()}
                    htmlFor="comment"
                    className="flex items-center text-sm font-medium leading-6 text-gray-100"
                  >
                    Add
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </button>
                </div>

                {context.map((item) => (
                  <div className="mt-2" key={item}>
                    <input
                      type="text"
                      placeholder="You can import datasets as context"
                      className="w-full text-white focus:outline-none text-sm px-2 bg-white/[15%] py-3 rounded-md"
                      name=""
                      id=""
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Configuration Settings
                </label>

                <RadioModels />
              </div>

              <div className="mt-6 mb-2">
                <h2 className="text-sm font-medium leading-6 text-white/80">
                  Temprature
                </h2>

                <SliderSizes />
              </div>

              <div className="pb-4">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium leading-6 text-white/80"
                >
                  system message
                </label>
                <div className="mt-2">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="block w-full text-white  bg-[#FFFFFF]/[15%] rounded-md border-0 py-1.5  shadow-sm text-sm focus:outline-none px-4"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </VarModal>
      </div>
    </>
  );
}
