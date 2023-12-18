import { BiSolidMessageRounded } from "react-icons/bi"

const handleClick = () => {console.log("do somthing")};
const messageIconSize = 36

export default function headerMobile(){
  <>
    <BiSolidMessageRounded
      size={messageIconSize}
      onClick={handleClick}
      style={{ color: 'green', }}
    />
  </>
}