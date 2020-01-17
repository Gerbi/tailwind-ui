<template>
  <!-- eslint-disable max-len -->
  <div class="h-screen flex">
    <div :class="sidebarOpen ? 'translate-x-0 ease-out transition-medium' : '-translate-x-full ease-in transition-medium'"
      class="fixed z-30 inset-y-0 left-0 w-64 px-4 py-4 bg-gray-800 border-r overflow-hidden lg:static lg:inset-auto lg:translate-x-0">
      <div class="-mx-3 pl-3 pr-1 flex items-center justify-between">
        <span>
          <svg class="h-8 w-8 fill-current text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 705">
            <path d="M.2 705v-14c0-45.9 0-91.8-.1-137.7 0-3.2 1-5 3.7-6.6 54.9-33.4 109.7-66.9 164.6-100.3 44.8-27.3 89.6-54.7 134.4-82 48.6-29.6 97.1-59.3 145.6-88.9.3-.2.7-.3 1.6-.6v17c0 44.9 0 89.7.1 134.6 0 3-.9 4.7-3.5 6.3-66.9 40.8-133.7 81.7-200.6 122.5-69.8 42.5-139.6 85.1-209.4 127.6C24.7 690.2 12.8 697.4.2 705zM.2 0c12.8 7.8 25 15.3 37.3 22.8 47.2 28.8 94.4 57.6 141.5 86.4 46.9 28.6 93.8 57.3 140.8 85.9 3.3 2 3 2.9-.1 4.7-40.3 24.5-80.6 49.1-120.8 73.8-2.5 1.5-4.2 1.5-6.6 0C129.7 235.3 66.9 197 4.1 158.8 1.1 157 0 155 0 151.5.2 102.9.2 54.4.2 5.8.1 4.1.2 2.4.2 0z">
            </path>
          </svg>
        </span>
        <button @click="sidebarOpen = false" class="text-gray-100 lg:hidden">
          <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
      <div class="-mx-4 mt-4 pb-2 border-b border-gray-700">
        <button class="inline-flex items-center w-full px-6 py-1 hover:bg-blue-900">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewbox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
          <span class="ml-2 text-sm font-medium text-gray-200 leading-none"
          >Home</span
          >
        </button>
        <button class="inline-flex items-center w-full px-6 py-1 hover:bg-blue-900">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewbox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
          <span class="ml-2 text-sm font-medium text-gray-200 leading-none">My Tasks</span>
        </button>
        <button class="inline-flex items-center w-full px-6 py-1 hover:bg-blue-900">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewbox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
          <span class="ml-2 text-sm font-medium text-gray-200 leading-none">Inbox</span>
        </button>
        <button class="inline-flex items-center w-full px-6 py-1 hover:bg-blue-900">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewbox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
          <span class="ml-2 text-sm font-medium text-gray-200 leading-none">Portafolios</span>
        </button>
      </div>
      <nav class="mt-8 -mx-4 flex-shrink-0 flex flex-col">
        <div class="flex-1 min-h-0 overflow-y-auto">
          <ul class="pt-1 pb-3 px-3">
            <li>
              <a href="#" class="block p-5 bg-white rounded-md shadow">
              <div class="flex justify-between"><p
                class="text-sm font-medium leading-snug text-gray-900"> Provide documentation on
                integrations </p><span><img alt=""
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=144&amp;h=144&amp;q=80"
                                            class="h-6 w-6 rounded-full"></span>
              </div>
              <div class="mt-2 flex justify-between items-baseline">
                <div class="text-sm text-gray-600">
                  <time datetime="2019-09-14">Sep 12</time>
                </div>
                <div></div>
              </div>
            </a>
            </li>
            <li class="mt-3"><a href="#" class="block p-5 bg-white rounded-md shadow">
              <div class="flex justify-between"><p
                class="text-sm font-medium leading-snug text-gray-900"> Design shopping cart
                dropdown </p><span><img alt=""
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=144&amp;h=144&amp;q=80"
                                        class="h-6 w-6 rounded-full"></span></div>
              <div class="mt-2 flex justify-between items-baseline">
                <div class="text-sm text-gray-600">
                  <time datetime="2019-09-14">Sep 9</time>
                </div>
                <div><span
                  class="px-2 py-1 leading-tight inline-flex items-center bg-purple-100 rounded"><svg
                  fill="currentColor" viewbox="0 0 8 8" class="h-2 w-2 text-purple-500"><circle
                  cx="4" cy="4" r="3"></circle></svg><span
                  class="ml-2 text-sm font-medium text-purple-900">Design</span></span></div>
              </div>
            </a></li>
            <li class="mt-3"><a href="#" class="block p-5 bg-white rounded-md shadow">
              <div class="flex justify-between"><p
                class="text-sm font-medium leading-snug text-gray-900"> Add discount code to
                checkout page </p><span><img alt=""
                                             src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=144&amp;h=144&amp;q=80"
                                             class="h-6 w-6 rounded-full"></span></div>
              <div class="mt-2 flex justify-between items-baseline">
                <div class="text-sm text-gray-600">
                  <time datetime="2019-09-14">Sep 14</time>
                </div>
                <div><span
                  class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"><svg
                  fill="currentColor" viewbox="0 0 8 8" class="h-2 w-2 text-teal-500"><circle cx="4"
                                                                                              cy="4"
                                                                                              r="3"></circle></svg><span
                  class="ml-2 text-sm font-medium text-teal-900">Feature Request</span></span></div>
              </div>
            </a></li>
            <li class="mt-3"><a href="#" class="block p-5 bg-white rounded-md shadow">
              <div class="flex justify-between"><p
                class="text-sm font-medium leading-snug text-gray-900"> Provide documentation on
                integrations </p><span><img alt=""
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=144&amp;h=144&amp;q=80"
                                            class="h-6 w-6 rounded-full"></span></div>
              <div class="mt-2 flex justify-between items-baseline">
                <div class="text-sm text-gray-600">
                  <time datetime="2019-09-14">Sep 12</time>
                </div>
                <div></div>
              </div>
            </a></li>
            <li class="mt-3"><a href="#" class="block p-5 bg-white rounded-md shadow">
              <div class="flex justify-between"><p
                class="text-sm font-medium leading-snug text-gray-900"> Design shopping cart
                dropdown </p><span><img alt=""
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=144&amp;h=144&amp;q=80"
                                        class="h-6 w-6 rounded-full"></span></div>
              <div class="mt-2 flex justify-between items-baseline">
                <div class="text-sm text-gray-600">
                  <time datetime="2019-09-14">Sep 9</time>
                </div>
                <div><span
                  class="px-2 py-1 leading-tight inline-flex items-center bg-purple-100 rounded"><svg
                  fill="currentColor" viewbox="0 0 8 8" class="h-2 w-2 text-purple-500"><circle
                  cx="4" cy="4" r="3"></circle></svg><span
                  class="ml-2 text-sm font-medium text-purple-900">Design</span></span></div>
              </div>
            </a></li>
            <li class="mt-3"><a href="#" class="block p-5 bg-white rounded-md shadow">
              <div class="flex justify-between"><p
                class="text-sm font-medium leading-snug text-gray-900"> Add discount code to
                checkout page </p><span><img alt=""
                                             src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=144&amp;h=144&amp;q=80"
                                             class="h-6 w-6 rounded-full"></span></div>
              <div class="mt-2 flex justify-between items-baseline">
                <div class="text-sm text-gray-600">
                  <time datetime="2019-09-14">Sep 14</time>
                </div>
                <div><span
                  class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"><svg
                  fill="currentColor" viewbox="0 0 8 8" class="h-2 w-2 text-teal-500"><circle cx="4"
                                                                                              cy="4"
                                                                                              r="3"></circle></svg><span
                  class="ml-2 text-sm font-medium text-teal-900">Feature Request</span></span></div>
              </div>
            </a></li>
            <li class="mt-3"><a href="#" class="block p-5 bg-white rounded-md shadow">
              <div class="flex justify-between"><p
                class="text-sm font-medium leading-snug text-gray-900"> Provide documentation on
                integrations </p><span><img alt=""
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=144&amp;h=144&amp;q=80"
                                            class="h-6 w-6 rounded-full"></span></div>
              <div class="mt-2 flex justify-between items-baseline">
                <div class="text-sm text-gray-600">
                  <time datetime="2019-09-14">Sep 12</time>
                </div>
                <div></div>
              </div>
            </a></li>
          </ul>
        </div>
      </nav>
    </div>
<!--    Main-->
    <div class="flex-1 min-w-0 flex flex-col bg-white">
      <div class="flex-shrink-0 sm:border-b-2 sm:border-gray-200">
        <header>
          <div>
            <div class="border-b-2 pt-2 border-gray-200">
              <div class="flex justify-between items-center px-4 sm:px-6">

                <div class="flex-1 min-w-0 flex">
                  <button class="inline-flex mt-1 h-12 w-12 items-center justify-center bg-purple-500 rounded-lg">
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                  <div class="ml-3">
                    <div class="text-lg font-semibold text-gray-800">
                      Name Project
                    </div>
                    <div class="flex justify-start items-end">
                      <div class="md:flex">
                        <div class="flex -mb-px mr-5">
                          <a href="#" class="no-underline text-sm text-white font-semibold md:text-blue-600 flex items-center pt-2 pb-2 border-b-2 border-blue-600">
                            List
                          </a>
                        </div>
                        <div class="flex -mb-px mr-5">
                          <a href="#" class="no-underline text-sm text-gray-700 font-semibold opacity-50 md:text-gray-700 md:opacity-100 flex items-center pt-2 pb-2 border-b border-transparent hover:opacity-100 md:hover:border-gray-700">
                            Board
                          </a>
                        </div>
                        <div class="flex -mb-px mr-5">
                          <a href="#" class="no-underline text-sm text-gray-700 font-semibold opacity-50 md:text-gray-700 md:opacity-100 flex items-center pt-2 pb-2 border-b border-transparent hover:opacity-100 md:hover:border-gray-700">
                            Timeline
                          </a>
                        </div>
                        <div class="flex -mb-px mr-5">
                          <a href="#" class="no-underline text-sm text-gray-700 font-semibold opacity-50 md:text-gray-700 md:opacity-100 flex items-center pt-2 pb-2 border-b border-transparent hover:opacity-100 md:hover:border-gray-700">
                            Calendar
                          </a>
                        </div>
                        <div class="flex -mb-px mr-5">
                          <a href="#" class="no-underline text-sm text-gray-700 font-semibold opacity-50 md:text-gray-700 md:opacity-100 flex items-center pt-2 pb-2 border-b border-transparent hover:opacity-100 md:hover:border-gray-700">
                            Progress
                          </a>
                        </div>
                        <div class="flex -mb-px">
                          <a href="#" class="no-underline text-sm text-gray-700 font-semibold opacity-50 md:text-gray-700 md:opacity-100 flex items-center pt-2 pb-2 border-b border-transparent hover:opacity-100 md:hover:border-gray-700">
                            More...
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    @click="sidebarOpen = true"
                    class="text-gray-600 lg:hidden"
                  >
                    <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M4 6h16M4 12h16M4 18h7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div class="ml-6 flex-shrink-0 flex items-center">
                  <div class="mt-1 mr-6 flex items-center sm:mt-0 sm:ml-6">
                  <span class="rounded-full border-2 border-white">
                    <img
                      alt=""
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                    />
                  </span>
                    <span class="-ml-2 rounded-full border-2 border-white">
                  <img
                    alt=""
                    class="h-6 w-6 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                  />
                </span>
                    <span class="-ml-2 rounded-full border-2 border-white">
                  <img
                    alt=""
                    class="h-6 w-6 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                  />
                </span>
                    <span class="-ml-2 rounded-full border-2 border-white">
                  <img
                    alt=""
                    class="h-6 w-6 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                  />
                </span>
                  </div>
                  <div class="flex-shrink-1 ml-3 relative w-40 lg:ml-0">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg
                      class="h-5 w-5 text-gray-500"
                      fill="none"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </span>
                    <input
                      class="block w-full rounded-full bg-gray-200 pl-10 pr-4 py-2 text-xs text-gray-700 placeholder-gray-600"
                    />
                  </div>
                  <button class="ml-3 flex items-center p-0 bg-teal-500 rounded-full">
                    <svg class="h-6 w-6 text-white" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                  <button class="mx-3 flex items-center p-0 bg-white rounded-full border border-gray-500">
                    <svg class="h-6 w-6 text-gray-600" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                  <button class="bg-yellow-500 px-4 py-1 rounded-lg">
                    <span class="text-sm font-normal text-white leading-none">Upgrade</span>
                  </button>
                  <button class="ml-6">
                    <img
                      alt="Your profile image"
                      class="h-9 w-9 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class="px-4 sm:px-6">
              <div class="flex items-center justify-between py-2">
                <div class="sm:flex sm:items-center">
                  <button class="flex items-center px-2 text-xs font-normal text-gray-600 bg-transparent border rounded-l-lg hover:bg-gray-300">
                    <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                    <span class="ml-1">Fields</span>
                  </button>
                  <button class="flex items-center px-1 text-xs font-medium text-gray-600 bg-transparent border rounded-r-lg hover:bg-gray-300">
                    <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <!--    Buttons          -->
                <div class="flex">
                  <button class="ml-2 flex items-center pl-2 pr-4 py-1 text-xs font-medium text-gray-600 bg-transparent rounded-md hover:bg-gray-300">
                    <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                    <span class="ml-1">Incomplete tasks</span>
                  </button>
                  <button class="ml-2 flex items-center pl-2 pr-4 py-1 text-xs font-medium text-gray-600 bg-transparent rounded-md hover:bg-gray-300">
                    <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                    <span class="ml-1">Filter</span>
                  </button>
                  <button class="ml-2 flex items-center pl-2 pr-4 py-1 text-xs font-medium text-gray-600 bg-transparent rounded-md hover:bg-gray-300">
                    <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                    <span class="ml-1">Sort</span>
                  </button>
                  <button class="ml-2 flex items-center pl-2 pr-4 py-1 text-xs font-medium text-gray-600 bg-transparent rounded-md hover:bg-gray-300">
                    <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                    <span class="ml-1">Rules</span>
                  </button>
                  <button class="ml-2 flex items-center pl-2 pr-4 py-1 text-xs font-medium text-gray-600 bg-transparent rounded-md hover:bg-gray-300">
                    <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24">
                      <path
                        d="M12 7v10m5-5H7"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                    <span class="ml-1">Fields</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="px-4 sm:px-6">
              <div class="border-t">
                <div>
                  <div class="flex  justify-between SpreadsheetGridHeader-taskNameHeadingBorder" role="columnheader">
                    <div class="SpreadsheetGridHeader-taskNameHeading">Task name</div>
                    <a id="lui_53" class="IconButton IconButton--enabled IconButton--small SpreadsheetGridHeader-menuButton" tabindex="0" role="button" aria-disabled="false" aria-pressed="false">
                      <svg class="h-6 w-6" focusable="false" viewBox="0 0 32 32">
                        <path d="M25.9,12.9c-0.5-0.6-1.5-0.7-2.1-0.2L16,19.1l-7.8-6.4c-0.6-0.5-1.6-0.4-2.1,0.2c-0.5,0.6-0.4,1.6,0.2,2.1l8.8,7.2  c0.2,0.2,0.6,0.3,0.9,0.3s0.7-0.1,0.9-0.3l8.8-7.2C26.3,14.5,26.4,13.5,25.9,12.9z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="flex px-4 p-1 border-t border-b bg-gray-200 sm:hidden">
            <button
              class="inline-flex items-center justify-center w-1/2 px-2 py-1 rounded"
            >
              <svg
                class="h-6 w-6 text-gray-600"
                fill="none"
                viewbox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="currentColor"
                />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-600 leading-none"
              >List</span
              >
            </button>
            <button
              class="inline-flex items-center justify-center w-1/2 px-2 py-1 bg-white rounded shadow"
            >
              <svg
                class="h-6 w-6 text-gray-600"
                fill="none"
                viewbox="0 0 24 24"
              >
                <path
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  stroke-width="2"
                  stroke="currentColor"
                />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-900 leading-none"
              >Board</span
              >
            </button>
          </div>
        </header>
      </div>
      <div class="flex-1 overflow-auto">
        <main class="p-3 h-full inline-flex overflow-hidden">
          <div class="flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md">
            <h3
              class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700"
            >
              Backlog
            </h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="pt-1 pb-3 px-3">
                <li>
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Design shopping cart dropdown
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-purple-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-purple-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-purple-900"
                        >Design</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Add discount code to checkout page
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-teal-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-teal-900"
                        >Feature Request</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="ml-3 flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md"
          >
            <h3
              class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700"
            >
              In Progress
            </h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="pt-1 pb-3 px-3">
                <li>
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Add discount code to checkout page
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-teal-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-teal-900"
                        >Feature Request</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="ml-3 flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md"
          >
            <h3
              class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700"
            >
              Ready for Review
            </h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="pt-1 pb-3 px-3">
                <li>
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Design shopping cart dropdown
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-purple-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-purple-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-purple-900"
                        >Design</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Add discount code to checkout page
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-teal-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-teal-900"
                        >Feature Request</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Design shopping cart dropdown
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-purple-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-purple-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-purple-900"
                        >Design</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Add discount code to checkout page
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-teal-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-teal-900"
                        >Feature Request</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="ml-3 flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md"
          >
            <h3
              class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700"
            >
              Done
            </h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="pt-1 pb-3 px-3">
                <li>
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Design shopping cart dropdown
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-purple-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-purple-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-purple-900"
                        >Design</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Add discount code to checkout page
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-teal-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-teal-900"
                        >Feature Request</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Design shopping cart dropdown
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-purple-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-purple-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-purple-900"
                        >Design</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Add discount code to checkout page
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                      <span
                        class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                      >
                        <svg
                          class="h-2 w-2 text-teal-500"
                          fill="currentColor"
                          viewbox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span class="ml-2 text-sm font-medium text-teal-900"
                        >Feature Request</span
                        >
                      </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p class="text-sm font-medium leading-snug text-gray-900">
                        Provide documentation on integrations
                      </p>
                      <span>
                      <img
                        alt=""
                        class="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      />
                    </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      sidebarOpen: false,
    };
  },
};
</script>
