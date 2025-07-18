import { Suspense } from 'react'
import { Loader } from '@/components/ui/loader'
import { Projects } from '@/components/projects'

export default function ProjectsPage() {
  return (
    <main className='flex flex-col flex-1 w-full'>
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
    </main>
  )
}
