import { ReactNode } from "react";
import Link from "next/link";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const sizeMap = {
  small: " text-sm",
  navlink: "2xl:text-base xl:text-sm text-xs",
  base: " text-sm 2xl:text-base",
  large: " text-sm  2xl:text-lg",
  xl: " text-base md:text-xl",
  xxl: " text-xl xl:text-2xl",
  "3xl": " text-xl md:text-2xl xl:text-3xl",
};
const colorMap = {
  dark: "text-grayishblue",
  light: "text-white",
};

type MasterAnchorProps = {
  size?: keyof typeof sizeMap;
  text: string;
  href?: string;
  target?: "_self" | "_blank";
  className?: string;
  status?: boolean;
};

export function Anchor({
  href,
  children,
  className =' ',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <Link className={className} href={href}>
        {children}
      </Link>
    </>
  );
}

export function TextAnchor({
    text,
    target,
    href,
    color = "dark",
    size = "base",
    className,
    ...rest
  }: MasterAnchorProps & { color?: "dark" | "light" }) {
    const sizeClass: string = sizeMap[size];
    const colorClass: string = colorMap[color];
    return (
      <Link
        target={target}
        href={href ?? "/"} 
        {...rest}
        className={`${sizeClass} ${colorClass} ${className} text-opacity-80 hover:text-opacity-100 focus:outline-none 
                    focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all font-be-vietnam-pro-light`}
      >
        {text}
       
      </Link>
    );
  }



  export function TextNavAnchor({
    text,
    target,
    href,
    color = "dark",
    size = "base",
    className,
    status,
    ...rest
   
  }: MasterAnchorProps & { color?: "dark" | "light" }) {
    const sizeClass: string = sizeMap[size];
    const colorClass: string = colorMap[color];
    return (
     
      <Link
        target={target}
        href={href ?? "/"} 
        {...rest}
        className={`${sizeClass} ${colorClass} ${className} group relative flex flex-row gap-1 justify-center items-center `}
      >

        {/* <span className="absolute -left-1 w-0 h-0 group-hover:w-2 group-hover:h-2 group-hover:rounded group-hover:bg-pink"></span> */}
        <div className="group-hover:text-black">
           {text}   
        </div>
          
        <div>
          {status ?(
              <GoChevronUp/>
            ):(<GoChevronDown/>) }
          </div>
      </Link>
     
     
    );
  }


  export function TextMobileNavAnchor({
    text,
    target,
    href,
    color = "dark",
    status,
    className,
    ...rest
   
  }: MasterAnchorProps & { color?: "dark" | "light" }) {
  
    const colorClass: string = colorMap[color];
    return (
     
            <Link
        target={target}
        href={href ?? "/"} 
        {...rest}
        className={`text-lg ${colorClass} ${className}  no-underline  flex flex-row gap-1 justify-between  text-opacity-80 hover:text-opacity-100 
                     focus:text-opacity-100  `}
      >
        {text} 
        <div>
          {status ?(
            <GoChevronUp/>
          ):(<GoChevronDown/>) }
         
        </div>
      </Link>
     
     
    );
  }


