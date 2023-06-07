import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import NavBar from "@/components/navbar";
import MobileNavBar from "@/components/mobile-navbar";

import { cn } from "@/lib/utils";
import Showcase from "@/components/showcase"
import { getRepo } from "@/lib/github";

const getRepos = async () => {
  const urls: URL[] = [
    new URL('https://api.github.com/repos/jborg2/jborg-website-v2'),
  ]
  const reposData = await Promise.all(urls.map((url: URL): Promise<any> => getRepo(url)))
  return reposData
}

export default async function Home() {
  const gitHubData = await getRepos()
  // console.log(gitHubData)

  return (
    <>
      <div className='block sm:hidden fixed top-0'>
        <MobileNavBar />
      </div>
      <Hero />
      {/* <Hero2/> */}
      <div
        className='hidden sm:flex items-center justify-center w-full'        
      >
        <NavBar />
      </div>
      <div className={cn(
        "bg-gradient-to-b",
        "from-transparent via-zinc-100/50 to-zinc-100",
        "dark:from-transparent dark:via-neutral-800/50 dark:to-neutral-800",
        "min-h-screen",
        "flex flex-col",
        "pt-24",
      )}>
        <div className='mx-auto w-full scroll-m-0'>
          {/* <Posts posts={allPosts as Post[]} /> */}
          <Showcase />
        </div>
      </div>
    </>
  );
}
