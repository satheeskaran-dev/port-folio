"use client";
import { FC, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA: { title: string; id: string; content: JSX.Element }[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row gap-8">
        <ul className="list-disc pl-2 text-sm ">
          <li>ReactJs</li>
          <li>NextJs</li>
          <li>Material UI</li>
          <li>Redux</li>
          <li>RTK Query</li>
          <li>JavaScript</li>
        </ul>
        <ul className="list-disc pl-2 text-sm">
          <li>TypeScript</li>
          <li>Java</li>
          <li>NodeJs</li>
          <li>NestJs</li>
          <li>ExpressJs</li>
          <li>Mongo DB</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-sm">
        <li>Higher National Diploma in IT (ATI SriLanka)</li>
        <li>Bsc Software Engineering (London metropolitan university)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 text-sm">
        <li>2 years of experience in Frontend development</li>
        <li>1 Year of experience in FullStack development (MERN Stack)</li>
      </ul>
    ),
  },
];

const AboutSection: FC = () => {
  const [tab, setTab] = useState(TAB_DATA[0].id);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => startTransition(() => setTab(id));

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 sm:py-16 px-4 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About Me"
          className="rounded-lg h-[500px]"
          width={500}
          height={600}
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a dynamic Frontend Developer with 2 years of hands-on experience,
            I specialize in crafting seamless web applications using React JS.
            My expertise lies in translating precise UI designs into functional
            and visually appealing user interfaces. I take pride in staying
            ahead of the curve by consistently integrating the latest package
            versions to ensure optimal performance and security in my projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map(({ id, title, content }) => (
              <TabButton
                key={id}
                name={title}
                active={tab === id}
                selectTab={() => handleTabChange(id)}
              />
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find(({ id }: { id: string }) => id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
