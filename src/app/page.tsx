import { auth, signOut } from "@/auth";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-xl text-blue-700 font-bold ">
        A Dating Site for Nerds
      </h1>

      <h3 className="text-2xl font-semibold"> User Session Data:</h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}>
              
            <Button
            type='submit'
              size="lg"
              color="primary"
              variant="bordered"
              startContent={<FaRegSmile size={20} />}
            >
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <div>Not signed in</div>
      )}
    </div>
  );
}
