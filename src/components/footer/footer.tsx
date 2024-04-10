import React from 'react';

const navigation = {
  main: [
    { name: 'Hjem', href: '/' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Utvikling', href: '/utvikling' },
    { name: 'Brukerstøtte', href: '/brukerstotte' },
    { name: 'Drift', href: '/drift' },
    { name: 'Dashboard', href: '/dashboard' },

  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-gray-50 hover:scale110">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024, KHagness.com All rights reserved.
        </p>
      </div>
    </footer>
  );
}
