import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
<h1 className="text-xl text-blue-700 font-bold ">A Dating Site for Nerds</h1>

<Button 
  size='lg'
  as={Link}
  href="/members"
  color='primary' 
  variant='bordered' 
  startContent={<FaRegSmile size={20}/>}
>
  Click Me!
</Button>
    </div>
  );
}
