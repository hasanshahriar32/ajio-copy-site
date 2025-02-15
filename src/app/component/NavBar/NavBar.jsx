"use client"
import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { AuthContext } from '@/app/share/AuthProvider'


const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

const lists = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Men',
        url: '/pages/men'
    },
    {
        id: 3,
        title: 'women',
        url: '/pages/women'
    },
    {
        id: 4,
        title: 'register',
        url: '/pages/register'
    },
    {
        id: 5,
        title: 'login',
        url: '/pages/login'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
    };

    return (
        <Disclosure as="nav" className="bg-black z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className='uppercase text-5xl text-white font-bold mr-10'> ajio</h1>

                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">


                                        {lists.map(list => <Link key={list.id} href={list.url}

                                            className={classNames(
                                                list.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )}
                                            aria-current={list.current ? 'page' : undefined}
                                        >{list?.title}</Link>)}


                                        {
                                            user?.email && <button
                                                onClick={handleLogOut}
                                                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"

                                            >
                                                <span
                                                    className="absolute inset-0 border border-red-600 group-active:border-red-500"
                                                ></span>
                                                <span
                                                    className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                                >
                                                    log out
                                                </span>
                                            </button>
                                        }


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </>
            )}
        </Disclosure>
    )
}
