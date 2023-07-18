import Link from "next/link"
import { Button } from "../ui/button"


const Navigation = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Project",
        path: "/project",
    },
    {
        name: "Resume",
        path: "/Resume",
    },
    {
        name: "Contact",
        path: "/contact",
    },


]

export default function CenterMenu() {
    return (
        <div className="flex gap-x-2 ">
            {Navigation.map((item, index) => {

                return (
                    <>
                        <Link href={item.path} key={index} >
                            <Button variant='ghost' > {item.name} </Button>
                        </Link>
                    </>
                )
            })
            }
        </div>
    )
}
