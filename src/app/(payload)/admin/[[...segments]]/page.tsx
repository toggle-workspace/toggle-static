import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import payloadConfig from '@payload-config'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config: Promise.resolve(payloadConfig as any), params, searchParams })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config: Promise.resolve(payloadConfig as any), importMap, params, searchParams })

export default Page
