import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

interface propsContent {
  children: any,
  url?: string,
  icon?: string
}

function FooterLink(props: propsContent): JSX.Element {
  return (
    <a className="mx-6 hover:text-nav-text-active" href={props.url ? props.url : "#"} rel="noreferrer" target="_blank">
      {props.children}
    </a>
  )
}

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#030303] text-center p-4 absolute bottom-0 h-24 w-full flex flex-col print:hidden">
      <div className="text-white flex flex-row">
        <span className="flex-grow" />
        <FooterLink url="https://github.com"><SiGithub title={"Github"} size={"1.75em"} /></FooterLink>
        <FooterLink><SiLinkedin title={"Linkedin"} size={"1.75em"} /></FooterLink>
        <FooterLink><IoMdMail title={"Send me an email"} size={"1.75em"} /></FooterLink>
        <span className="flex-grow" />
      </div>
      <div className="flex-grow" />
      <div className="flex flex-row">
        <span className="flex-grow" />
        <span className="text-white">&copy;&nbsp;2022</span>
        <span className="flex-grow" />
      </div>
    </footer>
  );
}
