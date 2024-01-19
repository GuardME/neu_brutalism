import Image from 'next/image'
import HeroSection from './home/heroSection'
import Post from "./home/Post"
import CalloutSection from './home/calloutsection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <Post />
      </div>
      <CalloutSection />
    </>
  )
}
