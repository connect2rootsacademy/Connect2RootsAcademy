import { Link } from 'react-router-dom';
import rajeevranjan from '../../assets/rajeevranjan.jpg';

const members = [
  {
    name: 'Rajeev Ranjan',
    role: 'Founder - CEO',
    avatar: rajeevranjan,
    link: '#',
  },
  {
    name: 'Rajeev Ranjan',
    role: 'Founder - CEO',
    avatar: rajeevranjan,
    link: '#',
  },
  {
    name: 'Rajeev Ranjan',
    role: 'Founder - CEO',
    avatar: rajeevranjan,
    link: '#',
  },
];

export default function OurTeam() {
  return (
    <section className="bg-gray-50 -mt-30 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl  px-6">
        {/* <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
                Our Dream
              </span>{' '}
              Team
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              A passionate group of thinkers, creators, and educators working
              together to make learning more inspiring and accessible. Each
              member brings unique skills, creativity, and dedication to
              building a platform that empowers learners to grow and achieve
              their dreams. Together, we strive to redefine education through
              innovation, collaboration, and a shared vision for a brighter
              future.
            </p>
          </div>
        </div> */}
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      to={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {' '}
                      Linkedin &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
