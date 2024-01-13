import React from 'react'
import Docs from '@/components/mdx/content/docs/Content.mdx'
const page = () => {
  return (
    <div className='prose dark:prose-invert min-h-[80vh] screen-width  mt-7'  >
        <Docs />
    </div>
  )
}

export default page