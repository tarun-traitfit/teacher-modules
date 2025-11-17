import { chapterTwo, chapterTwoData } from "@/utils/cover";
import Cover from "../../cover";
import ContentPage from "../../contents-page";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ModuleTwo = () => {
  return (
    <>
      <Cover
        title={"MODULE 2"}
        characterTitle={"Macro Level Changes in the Education Sector"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
        tableOfContents={chapterTwo}
       projectName={"Mission Margdarshan"}
      />
      <Introduction />
      <UnderstandingCentury />
      <UnderstandingNEF />
      <UnderstandingSubNEF />
      <ImportantCareerCounseling />
      <CaseStudyTwo />
      <CaseStudyThree />
      <Conclusion />
    </>
  );
};
export default ModuleTwo;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Introduction"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.1 Introduction
        </h1>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            Welcome to module 2: Macro Level Changes in the Education Sector.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-3">
            We got an overview of the Teacher Training Program in the previous
            module. In this module, we will explore major shifts in the
            education system and how they are transforming career landscapes for
            students.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-3">
            We will begin by examining how the concept of a career has evolved
            in the 21st century, moving beyond traditional career paths. We’ll
            also discuss the National Education Policy (NEP) and its role in
            transforming the education system and expanding career opportunities
            in India. By the end of this module, you will gain insights into how
            these changes impact students&apos; career decisions and how you, as
            a career counselor, can help them navigate this evolving landscape.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-3">
            Let’s start by understanding the concept of Career in the 21st
            Century.
          </p>
        </div>
      </div>
      <Footer pageNumber={2} title={"Mission Margdarshan"} />
    </div>
  );
};

export const UnderstandingCentury = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={" Understanding the Concept of Career in the 21st Century"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.2 Understanding the Concept of Career in the 21st Century
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In the 21st century, the concept of a career has evolved
          significantly, driven by rapid technological advancements,
          globalization, and changing societal values. Careers today are no
          longer linear or confined to traditional paths; they encompass a
          diverse range of opportunities that prioritize skills, adaptability,
          and lifelong learning. Individuals are increasingly encouraged to
          explore multidisciplinary fields, engage in continuous professional
          development, and embrace entrepreneurial mindsets. This shift
          highlights the importance of being flexible and open to change as the
          job market continuously adapts to new trends and demands. As a result,
          a successful career in the 21st century is characterized by not only
          technical expertise but also soft skills such as communication,
          collaboration, and creativity, enabling individuals to thrive in an
          interconnected and dynamic world.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-3">
          The traditional nine-to-five job is becoming less common. Today, many
          people work as freelancers, take on short-term contracts, or do
          project-based work. This gives individuals more freedom to choose jobs
          that match their skills and interests, but it also means they need to
          focus on learning new skills and being entrepreneurial. This shift
          reflects the changing demands of modern careers, offering more
          flexibility than traditional jobs. People now build careers by gaining
          different experiences, all of which help them grow both personally and
          professionally.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterTwoData?.understandingCentury?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTwoData?.understandingCentury?.content.map((item, i) => {
              return (
                <>
                  <li
                    key={i}
                    className="text-xs font-bold text-black-gray-100 pt-1"
                  >
                    {item?.key} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </li>
                </>
              );
            })}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            To conclude, we can say that in this era of change and
            transformation, the changing concept of a career carries the essence
            of adaptation and reinvention. It highlights the importance of
            continuous skill development, adaptability, and the ability to
            navigate through uncertainties. A successful career is no longer
            linked to a specific job title but is defined by an
            individual&apos;s capacity to thrive in an ever-changing
            environment. The dawn of the 21st century has put forward a new age
            of careers, where embracing change and embracing the power of skills
            stand as the game changers.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Recognizing these evolving changes, the National Education Policy
            (NEP) was introduced to reshape the educational landscape in India,
            making it more aligned with the needs of the modern workforce. By
            promoting a holistic and multidisciplinary approach, the NEP aims to
            equip students with the necessary skills and knowledge to navigate
            this complex career environment. It encourages the integration of
            vocational training, competency-based learning, and technology in
            education, fostering an adaptable and innovative mindset among
            students. This alignment between the NEP and contemporary career
            concepts ensures that students are better prepared to meet the
            challenges and opportunities of the 21st-century job market.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now, let’s explore the NEP in detail and discuss the key changes it
            has brought to the education system.
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};

export const UnderstandingNEF = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Understanding the NEP"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.3 Understanding the NEP
        </h1>
        <p className="text-base font-normal text-primary py-4">
          2.3.1 What is NEP?
        </p>
        <div className="pt-4">
          {chapterTwoData?.understandingNEF?.content?.map((item, i) => (
            <p key={i} className="text-xs font-normal text-black-gray-100 pb-2">
              {item}
            </p>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now, let’s explore the key changes introduced by the NEP that are
            transforming the education system and how these shifts impact the
            career opportunities available for students.
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};
export const UnderstandingSubNEF = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Understanding the NEP"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.3.2 Key changes brought in by NEP in the Education System:
        </h1>

        <div className="pt-4">
          <ol className="list-decimal ml-4">
            {chapterTwoData?.understandingNEF?.subContent.map((item, i) => {
              return (
                <>
                  <li
                    key={i}
                    className="text-xs font-bold text-black-gray-100 pt-1"
                  >
                    {item?.key} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </li>
                </>
              );
            })}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Additionally, the introduction of the Academic Bank of Credits (ABC)
            supports this flexibility by allowing students to store and transfer
            their academic credits. This system enables students to pause their
            studies without losing progress, making it easier for them to adapt
            their education to their evolving career goals. By understanding
            these changes, career counselors can assist students in navigating
            their educational journeys, empowering them to make informed
            decisions about when to enter the workforce or shift their focus
            based on their aspirations.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now that we have explored the key changes brought about by the NEP
            and how they are transforming the educational framework, let’s look
            into their impact on the evolving career landscape. Understanding
            these shifts will help us recognize the new opportunities available
            to students in a rapidly changing job market.
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ImportantCareerCounseling = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Important Role of NEP in Career Counseling"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.4 Important Role of NEP in Career Counseling
        </h1>

        <div className="pt-4">
          {chapterTwoData?.importantCareerCounseling?.content?.map((item) => (
            <p
              key={item}
              className="text-xs font-normal text-black-gray-100 pt-2"
            >
              {item}
            </p>
          ))}
        </div>

        <div>
          <p className="text-base font-bold text-black-gray-100 pt-4">
            Case Study 1 :
          </p>
          <div className="pt-3">
            <p className="text-xs font-normal text-black-gray-100">
              {chapterTwoData?.importantCareerCounseling?.caseStudy?.hading}
            </p>
            {chapterTwoData?.importantCareerCounseling?.caseStudy?.caseContent?.map(
              (item, i) => (
                <p
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-2"
                >
                  {item}
                </p>
              )
            )}
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              By outlining these flexible options, the counselor helps Anushka
              confidently explore her interests without being restricted by
              traditional subject combinations that previously limited her to
              specific streams or career paths while ensuring she builds a
              strong set of skills for the future.
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CaseStudyTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Important Role of NEP in Career Counseling"}
          className="min-w-fit"
        />

        <div>
          <p className="text-base font-bold text-black-gray-100 pt-8">
            Case Study 2 :
          </p>
          <div className="pt-4">
            <p className="text-xs font-bold text-black-gray-100">
              {chapterTwoData?.importantCareerCounseling?.CaseStudyTwo?.hading}
            </p>
            {chapterTwoData?.importantCareerCounseling?.CaseStudyTwo?.caseContent?.map(
              (item, i) => (
                <p
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-2"
                >
                  {item}
                </p>
              )
            )}
          </div>

          <div className="pt-4">
            <p className="text-xs font-normal text-black-gray-100">
              {
                chapterTwoData?.importantCareerCounseling?.CaseStudyTwo
                  ?.caseStudyHading
              }
            </p>
            {chapterTwoData?.importantCareerCounseling?.CaseStudyTwo?.caseStudyPoint?.map(
              (item, i) => (
                <ul key={i} className="list-disc ml-6">
                  <li>
                    <p className="text-xs font-bold text-black-gray-100">
                      {item?.title} &nbsp;
                      <span className="font-normal">{item?.value}</span>
                    </p>
                  </li>
                </ul>
              )
            )}
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              By presenting these options, the counselor helps Ajay build a
              strong skill set tailored to his immediate employment needs while
              keeping the door open for future learning and career advancement.
              This guidance empowers him to take charge of his future, knowing
              he has a practical path toward a stable job that aligns with his
              aspirations while allowing him to continue growing and improving
              his skills over time.
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};

export const CaseStudyThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Important Role of NEP in Career Counseling"}
          className="min-w-fit"
        />

        <div>
          <p className="text-base font-bold text-black-gray-100 pt-8">
            Case Study 3:
          </p>
          <div className="pt-4">
            <p className="text-xs font-bold text-black-gray-100">
              {
                chapterTwoData?.importantCareerCounseling?.caseStudyThree
                  ?.hading
              }
            </p>
            {chapterTwoData?.importantCareerCounseling?.caseStudyThree?.caseContent?.map(
              (item, i) => (
                <p
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-2"
                >
                  {item}
                </p>
              )
            )}
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              All the case studies that we explored highlighted the
              transformative role of the National Education Policy (NEP) in
              shaping students&apos; career paths. By emphasizing flexible
              learning options, vocational training, and the integration of
              technology, the NEP enables students to pursue diverse pathways
              tailored to their unique needs. These case studies will help you
              navigate similar situations while career counseling to provide the
              right guidance to the students. The role of the counselor in this
              process is crucial because a lot of changes are happening in the
              education sector, and they need to keep themselves updated with
              these changes. This will help them guide students in exploring
              opportunities that align with their skills & aspirations and are
              in line with the current career and job trends. Counselors provide
              essential resources, connect students with relevant programs, and
              help them build confidence to transition into the workforce.
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={8} title={"Mission Margdarshan"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Conclusion"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.5 Conclusion
        </h1>

        <p className="text-xs font-normal text-black-gray-100 py-4">
          In this module, we explored the major changes in the education sector,
          specifically focusing on how the National Education Policy (NEP) is
          shaping the future of education and career opportunities in India. We
          began by discussing the evolution of the concept of a career in the
          21st century, highlighting the importance of adaptability, continuous
          learning, and acquiring diverse skills to remain competitive in the
          evolving job market and the modern workforce. We then delved into the
          NEP, which promotes holistic education, multidisciplinary learning,
          and vocational training, ensuring students are better prepared for the
          modern workforce. We also learned about the key reforms introduced by
          the NEP, like flexible learning options and the integration of
          technology, which ensure students acquire relevant skills for today’s
          job market. These changes also emphasize the growing role of career
          counselors in guiding students to make informed decisions about their
          career paths.
        </p>

        <p className="text-xs font-normal text-black-gray-100">
          As a career counselor, your role is critical in helping students
          understand these shifts in the education system and how to take
          advantage of new opportunities for career growth. By staying informed
          about the NEP and its impact, you will be better equipped to assist
          students in making informed career choices.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Overall this module has provided you with essential insights into the
          changing educational landscape and the significant role you will play
          in supporting students’ career development in this new era.
        </p>
      </div>
      <Footer pageNumber={9} title={"Mission Margdarshan"} />
    </div>
  );
};
