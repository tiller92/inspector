import { ImMenu } from "react-icons/im";
import Link from 'next/link'
const handleClick = () => {console.log("do somthing")};
const messageIconSize = 36

export function HeaderMobile():JSX.Element {
  return (
    <>
      <div className="flex justify-between">
          <Link href='/'  className="text-2xl m-2 font-sans"> 
              Hoobler Inspections
          </Link>
          <ImMenu
            className="m-2"
            size={messageIconSize}
            onClick={handleClick}
            color={'black'} 
          />
      </div>
    </>
  )
}
