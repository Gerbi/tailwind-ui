<template>
  <!-- eslint-disable max-len -->
  <div class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
    <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
      <section class="bg-overdark xl:w-72">
        <form class="xl:block xl:h-full xl:flex xl:flex-col xl:content-start xl:justify-between">
          <div class="lg:flex xl:block xl:overflow-y-auto">
            <div class="lg:w-1/3 xl:w-full ">
              <div class="border-b border-gray-900">
                <div class="flex flex-col items-center justify-center py-10">
                  <router-link to="/dashboard">
                    <img class="h-16 w-16 object-cover rounded-full" src="../assets/img/perfil-750.jpg" alt="">
                  </router-link>
                  <div>
                    <p class="text-white text-2xl font-semibold mt-6 text-center">Michelle</p>
                    <p class="text-gray-600 mt-1 text-center">@mike</p>
                  </div>
                </div>
              </div>
              <div class="my-10 mx-12">
                <div class="flex items-center text-gray-500 hover:text-white py-4">
                  <i class="fa fa-desktop mr-4"></i>
                  <p>Overview</p>
                </div>
                <div class="flex items-center text-gray-500 hover:text-white py-4">
                  <i class="fa fa-mobile mr-4"></i>
                  <p>My Devices</p>
                </div>
                <div class="flex items-center text-gray-500 hover:text-white py-4">
                  <i class="fa fa-ruler-vertical mr-4"></i>
                  <p>Speficications</p>
                </div>
                <div class="flex items-center text-gray-500 hover:text-white py-4">
                  <i class="fa fa-chart-line mr-4"></i>
                  <p>Performance</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center px-8 py-10 sm:text-right bg-overdark">
            <button type="button" class="transition duration-500 ease-in-out block w-full sm:w-auto xl:w-full sm:inline-block hover:bg-tgtblue bg-tgtblue transform hover:-translate-y-1 hover:scale-110 font-semibold text-xs text-white px-4 py-2 rounded-lg">Find My Device</button>
          </div>
        </form>
      </section>

      <div class="flex-1 min-w-0 flex flex-1 flex-col bg-sbase">
        <div class="flex-1 overflow-hidden">
          <div class="mx-12 my-6">
            <div class="-mx-2">
              <button class="transition duration-500 ease-in-out mx-2 px-5 py-3 rounded-lg bg-overdark hover:bg-overlight transform hover:-translate-y-1 hover:scale-110 text-xs text-white font-normal leading-none">All Devices</button>
              <button class="transition duration-500 ease-in-out mx-2 px-5 py-3 rounded-lg bg-overdark hover:bg-overlight transform hover:-translate-y-1 hover:scale-110 text-xs text-white font-normal leading-none">Mac Book Air</button>
              <button class="transition duration-500 ease-in-out mx-2 px-5 py-3 rounded-lg bg-overdark hover:bg-overlight transform hover:-translate-y-1 hover:scale-110 text-xs text-white font-normal leading-none">iPhone 7</button>
              <button class="transition duration-500 ease-in-out mx-2 px-5 py-3 rounded-lg bg-overdark hover:bg-overlight transform hover:-translate-y-1 hover:scale-110 text-xs text-white font-normal leading-none">iPad</button>
              <button class="transition duration-500 ease-in-out mx-2 px-5 py-3 rounded-lg bg-surface hover:bg-overlight transform hover:-translate-y-1 hover:scale-110  text-xs text-white font-normal leading-none">Add Device</button>
            </div>
            <div class="lg:flex lg:flex-wrap text-white mt-4 -mx-2">
              <div class="lg:w-1/4 px-3 pb-4 text-white">
                <div class="bg-overdark p-5 rounded-lg" style="height: 140px;">
                  <div class="flex flex-wrap">
                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 class="text-gray-500 uppercase font-bold text-xs">
                        Load
                      </h5>
                      <span class="font-semibold text-xl text-gray-400">
                          41,5%
                        </span>
                    </div>
                    <div class="relative w-auto pl-4 flex-initial">
                      <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-overlight">
                        <i class="fas fa-location-arrow"></i>
                      </div>
                    </div>
                  </div>
                  <p class="text-sm text-gray-500 mt-6">
                      <span class="text-orange-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 1.10%
                      </span>
                    <span class="whitespace-no-wrap">
                        Since yesterday
                      </span>
                  </p>
                </div>
              </div>
              <div class="lg:w-1/4 px-3 pb-4 text-white">
                <div class="bg-overdark p-5 rounded-lg" style="height: 140px;">
                  <div class="flex flex-wrap">
                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 class="text-gray-500 uppercase font-bold text-xs">
                        Memory
                      </h5>
                      <span class="font-semibold text-xl text-gray-400">
                          55 GB
                        </span>
                    </div>
                    <div class="relative w-auto pl-4 flex-initial">
                      <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-overlight">
                        <i class="fas fa-database"></i>
                      </div>
                    </div>
                  </div>
                  <p class="text-sm text-gray-500 mt-6">
                      <span class="text-green-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                    <span class="whitespace-no-wrap">
                        Since last month
                      </span>
                  </p>
                </div>
              </div>
              <div class="lg:w-1/4 px-3 pb-4 text-white">
                <div class="bg-overdark p-5 rounded-lg" style="height: 140px">
                  <div class="flex flex-wrap">
                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 class="text-gray-500 uppercase font-bold text-xs">
                        Battery
                      </h5>
                      <span class="font-semibold text-xl text-gray-400">
                          60 %
                        </span>
                    </div>
                    <div class="relative w-auto pl-4 flex-initial">
                      <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-overlight">
                        <i class="fas fa-battery-full"></i>
                      </div>
                    </div>
                  </div>
                  <p class="text-sm text-gray-500 mt-6">
                      <span class="text-red-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                    <span class="whitespace-no-wrap">
                        Since last week
                      </span>
                  </p>
                </div>
              </div>
              <div class="lg:w-1/4 px-3 pb-4 text-white">
                <div class="bg-overdark p-5 rounded-lg" style="height: 140px">
                  <div class="flex flex-wrap">
                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 class="text-gray-500 uppercase font-bold text-xs">
                        Network
                      </h5>
                      <p class="font-semibold text-xl text-gray-400">
                          924 <span class="text-xs font-semibold text-gray-600">bytes</span>
                        </p>
                    </div>
                    <div class="relative w-auto pl-4 flex-initial">
                      <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-overlight">
                        <i class="fab text-2xl fa-battle-net"></i>
                      </div>
                    </div>
                  </div>
                  <p class="text-sm text-gray-500 mt-6">
                      <span class="text-orange-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 1.10%
                      </span>
                    <span class="whitespace-no-wrap">
                        Since yesterday
                      </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:flex lg:flex-wrap -mx-2">
              <div class="lg:w-2/3 px-3 pb-4 text-white">
                <div class="relative flex flex-col min-w-0 break-words bg-overdark w-full rounded" style="height: 400px;">
                  <div class="rounded-t mb-0 px-4 py-4 border-0">
                    <div class="flex flex-wrap items-center">
                      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                        <p class="font-semibold text-sm text-gray-600">
                          Specifications
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="block w-full overflow-x-auto">
                    <!-- Projects table -->
                    <table class="items-center w-full bg-transparent border-collapse">
                      <tbody>
                      <tr>
                        <th class="border-t-0 px-8 py-3 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap text-left">
                          Display
                        </th>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          13.3-inch IPS
                        </td>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          <div class="flex items-center">
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z"/>
                            </svg>
                          </div>
                        </td>
                        <td class="flex justify-end border-t-0 px-8 py-5 align-middle border-l-0 text-xs whitespace-no-wrap">
                          <svg class="h-5 w-5 text-white fill-current text-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <th class="border-t-0 px-8 py-3 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap text-left">
                          Processor
                        </th>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          Intel Core i6
                        </td>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          <div class="flex items-center">
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z"/>
                            </svg>
                          </div>
                        </td>
                        <td class="flex justify-end border-t-0 px-8 py-5 align-middle border-l-0 text-xs whitespace-no-wrap">
                          <svg class="h-5 w-5 text-white fill-current text-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <th class="border-t-0 px-8 py-3 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap text-left">
                          Graphics
                        </th>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          Intel UHD Graphics 725
                        </td>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          <div class="flex items-center">
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z"/>
                            </svg>
                          </div>
                        </td>
                        <td class="flex justify-end border-t-0 px-8 py-5 align-middle border-l-0 text-xs whitespace-no-wrap">
                          <svg class="h-5 w-5 text-white fill-current text-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <th class="border-t-0 px-8 py-3 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap text-left">
                          Memory
                        </th>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          8 GB LPDDR3
                        </td>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          <div class="flex items-center">
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z"/>
                            </svg>
                          </div>
                        </td>
                        <td class="flex justify-end border-t-0 px-8 py-5 align-middle border-l-0 text-xs whitespace-no-wrap">
                          <svg class="h-5 w-5 text-white fill-current text-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <th class="border-t-0 px-8 py-3 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap text-left">
                          Storage
                        </th>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          512 GB
                        </td>
                        <td class="border-t-0 px-8 py-5 align-middle border-l-0 border-t-0 text-xs whitespace-no-wrap">
                          <div class="flex items-center">
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z"/>
                            </svg>
                            <svg class="h-3 w-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z"/>
                            </svg>
                          </div>
                        </td>
                        <td class="flex justify-end border-t-0 px-8 py-5 align-middle border-l-0 text-xs whitespace-no-wrap">
                          <svg class="h-5 w-5 text-white fill-current text-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                          </svg>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 px-3 pb-4 text-white">
                <div class="bg-overdark px-8 pt-12 rounded-lg shadow-df" style="height: 400px">
                  <div class="flex items-center justify-center">
                    <svg class="h-32 w-32 fill-current text-tgblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9 11.73a2 2 0 1 1 2 0V20H9v-8.27zm5.24 2.51l-1.41-1.41A3.99 3.99 0 0 0 10 6a4 4 0 0 0-2.83 6.83l-1.41 1.41a6 6 0 1 1 8.49 0zm2.83 2.83l-1.41-1.41a8 8 0 1 0-11.31 0l-1.42 1.41a10 10 0 1 1 14.14 0z"/>
                    </svg>
                  </div>
                  <div class="text-gray-600 text-xs mt-10">Most Used</div>
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-sm mt-6">Chrome</div>
                    <div class="text-gray-600 text-sm mt-6">26%</div>
                  </div>
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-sm mt-6">Safari</div>
                    <div class="text-gray-600 text-sm mt-6">34%</div>
                  </div>
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-sm mt-6">Firefox</div>
                    <div class="text-gray-600 text-sm mt-6">40%</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:flex lg:flex-wrap -mx-2">
              <div class="w-full px-3 text-white">
                <div class="bg-overdark flex items-center justify-between px-8 rounded-lg shadow-df" style="height: 100px">
                  <div class="w-full">
                    <a href="#" class="text-white text-xl font-normal">Did you find this helpful?</a>
                    <div class="text-gray-700 text-sm">Please let us know what think of our services.</div>
                  </div>
                  <div class="w-full flex justify-between">
                    <button class="transition duration-500 ease-in-out h-12 w-12 bg-emo hover:bg-emoh transform hover:-translate-y-1 hover:scale-110 mx-4 flex items-center justify-center rounded-full p-2 focus:outline-none">
                      <span>😞</span>
                    </button>
                    <button class="transition duration-500 ease-in-out h-12 w-12 bg-emo hover:bg-emoh transform hover:-translate-y-1 hover:scale-110 mx-4 flex items-center justify-center rounded-full p-2 focus:outline-none">
                      <span>😕</span>
                    </button>
                    <button class="transition duration-500 ease-in-out h-12 w-12 bg-emo hover:bg-emoh transform hover:-translate-y-1 hover:scale-110 mx-4 flex items-center justify-center rounded-full p-2 focus:outline-none">
                      <span>😐</span>
                    </button>
                    <button class="transition duration-500 ease-in-out h-12 w-12 bg-emo hover:bg-emoh transform hover:-translate-y-1 hover:scale-110 mx-4 flex items-center justify-center rounded-full p-2 focus:outline-none">
                      <span>😊</span>
                    </button>
                    <button class="transition duration-500 ease-in-out h-12 w-12 bg-emo hover:bg-emoh transform hover:-translate-y-1 hover:scale-110 mx-4 flex items-center justify-center rounded-full p-2 focus:outline-none">
                      <span>😁</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dash01',
};
</script>

<style scoped>

</style>
