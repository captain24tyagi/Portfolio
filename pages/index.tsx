import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Workexperience from '../components/Workexperience'
import { Experience, Page, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperience'
import { fetchPage } from '../utils/fetchPage'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  page: Page;
  experiences: Experience[];
  socials: Social[];
  skills: Skill[];
  projects: Project[];
}

export default function Home({ page, socials, experiences, skills, projects }: Props) {
  return (
    <div className='h-screen overflow-y-scroll overflow-x-hidden z-0 bg-black text-white
   snap-y snap-mandatory scrollbar scrollbar-track-black/20 scrollbar-thumb-[#93C5FD]'>
      <Head>
        <title>Sarthak Tyagi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials}/>

      <section id='profile' className='snap-start'>
        <Profile page={page} />
      </section>

      <section id='about' className='snap-center'>
        <About page={page} />
      </section>

      <section id='workexperience' className='snap-center'>
        <Workexperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-center'>
        <Contact page={page} />
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const page: Page = await fetchPage();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return{
    props: {
      page,
      experiences,
      skills,
      socials,
      projects,
    },

    revalidate: 10,

  }
}