import { useState, useEffect, useRef } from 'react';

interface PageObject {
  name: string,
  path: string
}

interface PageKey {
  [key: string]: PageObject
}

interface propsContent {
  children: string,
  id: number,
  active?: boolean,
  url?: string,
  external?: boolean
}

interface pageProps {
  currentPage?: string
}

const pages: PageKey = {
  'home': {
    name: 'Home',
    path: './'
  },
  'portfolio': {
    name: 'Portfolio',
    path: './portfolio'
  },
  'resume': {
    name: 'Resume',
    path: './resume'
  },
  'about': {
    name: 'About',
    path: './about'
  }
};

/* The navigation bar */
export default function NavBar(props: any): JSX.Element {
  const currentNav = useRef('');
  const firstNav = useRef(true);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    if (firstNav.current) firstNav.current = false;
  }, [])

  props.page ? currentNav.current = props.page : '';

  const NavButton = (props: propsContent): JSX.Element => {
    const buttonConfig = `px-4 py-3
    focus:bg-nav-active focus:text-nav-text-active
    hover:bg-nav-active hover:text-nav-text-active
    font-nav-sans uppercase`;
    const buttonHighlight = ' sm:underline sm:underline-offset-8 sm:decoration-4 sm:decoration-sky-500 bg-sky-900 sm:bg-inherit'


    if (props.active) {
      return (
        <a
          id={`pg_` + props.children}
          className={buttonConfig + buttonHighlight}
          href={props.url ? props.url : "#"}
          target={props.external ? "_blank" : "_self"}
          key={props.id ? props.id : 0}
          rel="noreferrer"
        >
          {props.children}
        </a>
      )
    }
    return (
      <a
        id={`pg_` + props.children}
        className={buttonConfig}
        href={props.url ? props.url : "#"}
        target={props.external ? "_blank" : "_self"}
        key={props.id ? props.id : 0}
        rel="noreferrer"
      >
        {props.children}
      </a>
    )
  }

  return (
    <div>
      <nav id="navbarMain" className="w-full h-12 bg-nav-native/75 backdrop-blur-sm sm:flex sm:flex-row fixed z-[500] text-white">
        <div id="hamburger" className={`${menuState ? 'bg-sky-900/75' : ''}
        px-4 py-3 w-fit
        focus:bg-nav-active focus:text-nav-text-active
        hover:sm:bg-nav-active hover:sm:text-nav-text-active
        font-nav-sans uppercase font-semibold bg-nav-native
        sm:hidden select-none`} onClick={() => { setMenuState(!menuState) }}>
          MENU
        </div>
        <div id="navbarSeparatorLeft" className="hidden sm:inline sm:grow h-12" />
        <div className={(menuState ? "visible" : "invisible") + " flex flex-col select-none z-[500] bg-nav-native sm:bg-transparent sm:overflow-hidden sm:flex-row sm:visible"}>
          {Object.keys(pages).map((e, i) => {
            if (currentNav.current === e) {
              return <NavButton url={pages[e].path} id={i} key={i} active>{pages[e].name}</NavButton>
            }
            return <NavButton url={pages[e].path} id={i} key={i}>{pages[e].name}</NavButton>
          })}
        </div>
        <div id="navbarSeparatorRight" className="sm:grow h-12" />
      </nav>
      <div id="" className="pt-12" /> {/* Padding */}
      <div id="mobileUnfocusClose" className={(menuState ? 'fixed h-full w-full bg-black/50 backdrop-blur z-499 sm:hidden' : 'hidden')} onClick={() => { setMenuState(false) }} />
    </div>
  );
}
