import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ArrowUpRightIcon, LinkIcon } from 'lucide-react'
import { GitHubIcon } from './icons/github'
import type { ProjectProps } from '@/types'
import { motion } from 'framer-motion'

export function ProjectCard({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className='flex flex-col gap-8'>
      {projects.map(({ title, description, tags, image, video, link }, idx) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx, duration: 0.6, ease: 'easeOut' }}
        >
          <Card className='group flex flex-col border border-white/20 shadow-lg w-full max-w-4xl mx-auto rounded-2xl glass hover:shadow-2xl hover:-translate-y-1 hover:border-purple-400/40 transition-all duration-300'>
            <CardHeader className='flex flex-col space-y-2 p-6 pb-2'>
              <CardTitle className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2'>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {link.preview ? (
                      <a
                        href={link.preview}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center group gap-2 transition-all duration-300 hover:scale-[1.03] hover:underline underline-offset-4'
                      >
                        <span className="group-hover:text-purple-400 transition-colors">{title}</span>
                        <ArrowUpRightIcon className='size-5 text-purple-400/70 group-hover:text-purple-400' />
                      </a>
                    ) : (
                      link.github && (
                        <a
                          href={link.github}
                          target='_blank'
                          rel='noreferrer'
                          className='inline-flex items-center group gap-2 hover:underline underline-offset-4'
                        >
                          <span className="group-hover:text-purple-400 transition-colors">{title}</span>
                          <ArrowUpRightIcon className='size-5 text-purple-400/70 group-hover:text-purple-400' />
                        </a>
                      )
                    )}
                  </TooltipTrigger>
                  <TooltipContent className='p-1' side='bottom'>
                    {image ? (
                      <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-400/10 to-pink-400/0">
                        <Image
                          className='object-cover w-full h-40'
                          width={400}
                          height={160}
                          src={image}
                          alt={title}
                          loading='lazy'
                        />
                      </div>
                    ) : (
                      video && (
                        <video
                          className='rounded-xl object-cover w-full h-40 shadow-lg bg-gradient-to-br from-purple-400/10 to-pink-400/0'
                          width={400}
                          height={160}
                          muted
                          autoPlay
                          loop
                        >
                          <source src={video} type='video/webm' />
                        </video>
                      )
                    )}
                  </TooltipContent>
                </Tooltip>
              </CardTitle>

              <CardDescription className='font-mono text-white/70 text-base mt-1'>
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent className='flex flex-col space-y-6 p-6 pt-0'>
              <div className='flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <Badge
                    className='px-3 py-1 gap-1 rounded-full shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-purple-400/10 cursor-pointer border border-purple-400/20 bg-white/10 text-purple-400 font-semibold text-xs'
                    variant='secondary'
                    key={tag.name}
                  >
                    <tag.icon className='size-4' />
                    <span>{tag.name}</span>
                  </Badge>
                ))}
              </div>

              <div className='flex gap-x-3'>
                {link.preview && (
                  <Button
                    variant='default'
                    size={null}
                    className='px-4 py-2 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:scale-105 hover:shadow-lg hover:from-purple-500 hover:to-pink-500 font-semibold flex items-center gap-2'
                    asChild
                  >
                    <a
                      href={link.preview}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-2'
                    >
                      <LinkIcon className='size-4' />
                      <span>Preview</span>
                    </a>
                  </Button>
                )}
                {link.github && (
                  <Button
                    variant='default'
                    size={null}
                    className='px-4 py-2 rounded-lg shadow-md transition-all duration-300 bg-white/10 text-white hover:scale-105 hover:shadow-lg hover:bg-white/20 font-semibold flex items-center gap-2 border border-white/20'
                    asChild
                  >
                    <a
                      href={link.github}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-2'
                    >
                      <GitHubIcon className='size-4' />
                      <span>GitHub</span>
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
