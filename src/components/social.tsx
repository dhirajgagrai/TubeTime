import Link from "next/link"
import Image from "next/image"
import { ReactElement } from "react"

import { Separator } from "./ui/separator"

const Social = (): ReactElement => (
  <div className="flex items-center mb-7 text-sm">
    <Link className="flex items-center underline hover:decoration-sky-500" href="https://github.com/dhirajgagrai/TubeTime" target="_blank">
      <Image className="mr-2" src="/github.png" alt="GitHub logo" width={20} height={20} />repo link
    </Link>
    <Separator className="h-5 bg-gray-400 mx-2" orientation="vertical" />
    <p>
      made by <Link className="underline hover:decoration-sky-500" href="https://gagrai.com" target="_blank">dhirajgagrai</Link>
    </p>
  </div>
)

export default Social
