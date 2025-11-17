import { chapterOne, chapterOneData } from "@/utils/cover";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Cover from "../../cover";
import ContentPage from "../../contents-page";

const ModuleOne = () => {
  return (
    <>
      <Cover
        title={"MODULE 1"}
        characterTitle={"Program Orientation"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
        tableOfContents={chapterOne}
       projectName={"Mission Margdarshan"}
      />
      <Introduction />
      <ObjectiveProgram />
      <OverviewProgram />
      <FeaturesProgram />
      <CertifiedCareerCounselor />
      <Conclusion />
    </>
  );
};
export default ModuleOne;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Welcome Note!"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.1 Welcome Note!
        </h1>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            A warm welcome to all the aspiring career counselors of Madhya
            Pradesh! It is an honor to be part of this transformative initiative
            to train dedicated school teachers like you as certified career
            counselors and provide you with the tools and knowledge required to
            help students make informed career decisions. As teachers, you
            already play a critical role in shaping students’ academic paths,
            and now, this program will extend your impact into helping students
            explore and make choices about their future careers.
          </p>
          <p className="text-xs font-bold text-black-gray-100 pt-3">
            &quot;Don&apos;t limit a child to your own learning, for she was
            born in another time.&quot;
          </p>
          <p className="text-xs font-bold text-black-gray-100 text-right">
            – Rabindranath Tagore
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-3">
            This quote reminds us that the world is constantly changing,
            especially in the fields of technology, education, and employment.
            As a career counselor, you will help students prepare for a future
            that may look very different from today. The advent of artificial
            intelligence, automation, and new industries is reshaping how we
            view careers. Your guidance will empower students to make confident,
            informed decisions about their future paths.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-3">
            The <span className="font-bold"> Teacher Training Program </span> is
            your gateway to becoming an essential resource for your students. It
            will provide you with the knowledge, tools, and skills to guide them
            effectively, enabling them to make career decisions that align with
            their potential. Now, before moving ahead, let’s first understand
            the objectives of this program.
          </p>
        </div>
      </div>
      <Footer pageNumber={2} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ObjectiveProgram = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Objectives of the Program"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.2 Objectives of the Program
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The Teacher Training Program is part of an initiative implemented by
          the School Education Department of the Government of Madhya Pradesh.
          The primary objective of this program is to enhance educational
          outcomes by focusing on foundational learning, effective assessment
          systems, and guiding students through the important transition from
          school to higher education or employment.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterOneData?.objectivesProgram?.hading}
          </p>
          {chapterOneData?.objectivesProgram?.ProgramKey?.map((item, index) => (
            <ul key={index} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.key} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            This program seeks to make government schools in Madhya Pradesh
            self-sufficient in providing quality career guidance, ensuring that
            students have the support they need to make informed decisions about
            their future.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Having understood the key objectives of the program, let&apos;s now
            explore its structure, designed to effectively guide you.
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};

export const OverviewProgram = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Overview of the Training Program"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.3 Overview of the Training Program
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The training program is designed to cater specifically to
          schoolteachers. It is structured in a way that ensures flexibility and
          ease of learning while allowing you to engage with the content at your
          own pace. It combines engaging &nbsp;
          <span className="font-bold"> LMS videos </span>&nbsp; and&nbsp;
          <span className="font-bold"> downloadable PDF content,</span>&nbsp;
          enabling flexible and effective learning.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterOneData?.overviewProgram?.hading}
          </p>
          <ol className="list-decimal ml-4">
            {chapterOneData?.overviewProgram?.ProgramKey.map((item, i) => {
              return (
                <>
                  <li
                    key={i}
                    className="text-xs font-bold text-black-gray-100 pt-1"
                  >
                    {item?.key} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                    <p className="text-xs font-normal italic text-black-gray-100">
                      {item?.note}
                    </p>
                  </li>
                </>
              );
            })}
          </ol>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            These modules are designed to provide you with the essential
            knowledge and skills needed to excel as a career counselor. Let’s
            now delve into the features of this transformative program.
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};
export const FeaturesProgram = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Features of the Program"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.4 Features of the Program
        </h1>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterOneData?.featuresProgram?.hading}
          </p>
          {chapterOneData?.featuresProgram?.ProgramKey?.map((item) => (
            <ul key={item?.key} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.key} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now that you’ve gained an understanding of the training program,
            let’s explore your role in this process.
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};

export const CertifiedCareerCounselor = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Your Role as a Certified Career Counselor"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.5 Your Role as a Certified Career Counselor
        </h1>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterOneData?.certifiedCareerCounselor?.hading}
          </p>
          {chapterOneData?.certifiedCareerCounselor?.ProgramKey?.map((item) => (
            <ul key={item?.key} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.key} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
        </div>
        <div>
          <p className="text-sm font-normal text-primary py-4">
            {chapterOneData?.certifiedCareerCounselor?.subChapter?.hading}
          </p>
          {chapterOneData?.certifiedCareerCounselor?.subChapter?.subChapterKey?.map(
            (item, index) => (
              <ul key={index} className="list-disc ml-6">
                <li>
                  <p className="text-xs font-normal text-black-gray-100">
                    {item}
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100">
            This program is more than just an opportunity to become a certified
            career counselor – it’s a chance for you to redefine your role as an
            educator. As a certified career counselor, you will be uniquely
            positioned to provide lifelong guidance to your students, opening
            doors to fulfilling careers, meaningful opportunities, and personal
            success.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            By participating in this training, you are taking a proactive step
            towards professional development, staying ahead of educational
            trends, and enriching your students&apos; lives. As you help shape
            the futures of countless students, you will also enhance your own
            career and make a lasting impact on your community.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            It’s time to embrace this new responsibility, sharpen your skills,
            and make a difference – not only in the classroom but also in the
            careers and futures of your students.
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};

export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Conclusion"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.6 Conclusion
        </h1>

        <p className="text-xs font-normal text-black-gray-100 py-4">
          By becoming a certified career counselor, you are playing a crucial
          role in shaping the future of the students in your schools. This
          program provides you with the tools, knowledge, and resources needed
          to guide students in making informed career decisions that will serve
          them for years to come. As you embark on this journey, you are not
          only transforming the lives of students but also contributing to the
          development of a more skilled and educated future workforce. Together,
          we can make a lasting impact!
        </p>

        <p className="text-xs font-normal text-black-gray-100">
          We wish you the best of luck as you begin this exciting journey toward
          becoming a certified career counselor. Through this initiative, we
          will ensure that every student receives the guidance they need to
          succeed in an ever-evolving world.
        </p>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};
