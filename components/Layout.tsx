import Head from 'next/head';
import Link from 'next/link';

export default function Layout({children, title= '', showMenu = true}) {

  const menuItems = [
    { name: 'login', route: '/'},
    { name: 'dashboard', route: '/dashboard'},
  ];

  function setNavigation() {
    return (
      <nav className="flex flex-row space-x-4 bg-primary bg-gray-800 pt-1 pb-1">
        {
          menuItems.map(({name, route}, i) => {
            return (
              <Link href={route} key={i}>
                <button className="w-50 bg-indigo-100 p-3 hover:-rotate-90">
                  {name}
                </button>
              </Link>
            )
          })
        }
      </nav>
    )
  }

  return (
    <div>
      <Head>
        <title>Tester {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        showMenu ? setNavigation() : null
      }



      <div className='m-1'>
        {children}
      </div>

    </div>
  )
}
