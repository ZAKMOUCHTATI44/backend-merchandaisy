import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import account from "../../../images/icons/person_FILL0.svg"
import { Link } from '@inertiajs/inertia-react'

const DropDown = ({user}) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

      console.log(user.is_admin)

  return (
    <Menu as="div" className="relative mx-5">
        <div>
            <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={account}
                alt=""
              />
            </Menu.Button>
        </div>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-2/4 left-2/4 -translate-x-2/4 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Mes commandes
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Mes calculs
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Mes codes promos
                    </a>
                  )}
                </Menu.Item>
                {user.is_admin == 1 && (
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="/dashboard"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                        Admin panel
                        </a>
                    )}
                    </Menu.Item>
                )}
                <Menu.Item>
                  {({ active }) => (
                     <Link
                     href={route('logout')}
                     method="post"
                     as="button"
                     className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-start')}
                     >
                      Se déconnecter
                    </Link>
                  )}
                </Menu.Item>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}

export default DropDown
