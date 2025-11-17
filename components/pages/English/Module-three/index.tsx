import { chapterThree, chapterThreeData } from "@/utils/cover";

import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import Cover from "../../cover";
import ContentPage from "../../contents-page";

const ModuleThree = () => {
  return (
    <>
      <Cover
        title={"MODULE 3"}
        characterTitle={"Introduction to Career Counseling"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
        tableOfContents={chapterThree}
       projectName={"Mission Margdarshan"}
      />
      <Introduction />
      <CareerCounseling />
      <AimsAndObjectives />
      <PossibleIndecision />
      <PossibleIndecisionSub />
      <ImportanceStudents />
      <UnderstandingProcess />
      <DualityCareerCounselor />
      <SecondSubChapterDuality />
      <ThreeSubChapterDuality />
      <Conclusion />
    </>
  );
};
export default ModuleThree;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Introduction"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.1 Introduction
        </h1>
        <div className="pt-4">
          {chapterThreeData?.introduction?.map((item, i) => (
            <p key={i} className="text-xs font-normal text-black-gray-100 pb-2">
              {item}
            </p>
          ))}
        </div>
      </div>
      <Footer pageNumber={2} title={"Mission Margdarshan"} />
    </div>
  );
};

export const CareerCounseling = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"What is Career Counseling?"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.2 What is Career Counseling?
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          What exactly does one mean by the words “Career Counseling”? How does
          it impact our decisions about future vocations and other professional
          engagements? Is it a one-time activity, or do we require career
          counseling at various stages of our careers? These and many other
          important questions about career counseling are addressed in this
          module.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let&apos;s break down the two words that form the concept of career
          counseling. <span className="font-bold">A career </span> refers to a
          job or profession that someone takes up for a long period and has
          opportunities to grow and progress. It’s the work to which someone
          dedicates their time and effort over a significant part of their life.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          <span className="font-bold"> Counseling</span> is about sharing and
          exchanging thoughts and ideas with someone to understand a situation
          better and work toward a solution. It’s a conversation focused on a
          specific topic, where opinions are shared to help better understand
          the problem and reach a desired outcome.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Now that we’ve understood both terms let’s understand what career
          counseling is. It is the process of guiding individuals to make
          informed career choices. It involves discussing interests, skills, and
          opportunities to help someone select a profession that aligns with
          their goals and strengths. In essence, it’s about providing support to
          help individuals choose a fulfilling career path.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Having understood the conceptual meaning of career counseling through
          the above definitions, we will explore its aims and objectives in the
          next section.
        </p>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};

export const AimsAndObjectives = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Aims and Objectives of Career Counseling"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.3 Aims and Objectives of Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career counseling is a structured and systematic process designed to
          guide individuals in making informed career choices. It is driven by
          clear aims and objectives, ensuring the counselor and the student work
          toward well-defined goals. This enhances the effectiveness of the
          counseling process and provides the right direction for the student’s
          career path.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterThreeData?.aimsAndObjectives?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterThreeData?.aimsAndObjectives?.aimsPoints.map((item, i) => {
              return (
                <>
                  <li
                    key={i}
                    className="text-xs font-bold text-black-gray-100 pt-1"
                  >
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </li>
                </>
              );
            })}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            These aims and objectives create a framework that helps individuals
            understand their abilities and make informed career choices, leading
            to a personalized and effective career counseling experience.
            Understanding these objectives also clarifies the scope of career
            counseling, ensuring that counselors focus on relevant areas in
            guiding students.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In this section, we examined the aims and objectives of career
            counseling, which play a vital role in guiding students through
            their career decisions. A clear understanding of these goals
            enhances a counselor&apos;s ability to provide effective support.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In the next section, we look at some common challenges that can
            arise during the career decision-making process. This process is
            complex and influenced by multiple stakeholders, such as parents,
            peers, and teachers, and various factors like socioeconomic status,
            cultural influences, and parents&apos; educational backgrounds.
            Thus, career counselors need to identify the potential causes of
            indecision or poor choices. Let’s explore the possible causes of
            indecision or making wrong career choices.
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};
export const PossibleIndecision = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Possible Causes of Indecision or Making Wrong Choices"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.4 Possible Causes of Indecision or Making Wrong Choices
        </h1>

        <div>
          {chapterThreeData?.possibleIndecision?.content.map(
            (contentItem, contentIndex) => {
              return (
                <React.Fragment key={`section-content-${contentIndex}`}>
                  {typeof contentItem === "string" ? (
                    <p
                      className="text-xs font-normal text-black-gray-100 pt-4"
                      key={`string-content-${contentIndex}`}
                    >
                      {contentItem}
                    </p>
                  ) : (
                    <div key={`object-content-${contentIndex}`}>
                      <h3 className="text-xs font-normal text-black-gray-100 pt-4">
                        {contentItem.header}
                      </h3>
                      {/* category */}
                      {contentItem.category.map((categoryData, i: number) => (
                        <div key={`category-${i}`}>
                          <ul key={`content-point-${i}`} className="pb-4 ml-1">
                            <li className="flex items-start gap-1">
                              <p className="text-xs font-bold text-black-gray-100">
                                {i + 1}.
                              </p>
                              <p className="text-xs font-bold text-black-gray-100">
                                {categoryData?.key} :
                                <span className="font-normal">
                                  {categoryData?.value.description}
                                </span>
                              </p>
                            </li>
                            {/* sun Category */}
                            {categoryData.value.subCategory.map(
                              (subCategoryData, j: number) => (
                                <ul
                                  key={`subcategory-${j}`}
                                  className="pt-4 list-disc ml-6"
                                >
                                  <li>
                                    <p className="text-xs font-bold text-black-gray-100">
                                      {subCategoryData?.key} :
                                      {subCategoryData?.value.map((data) => (
                                        <p
                                          key={data}
                                          className="text-xs font-normal text-black-gray-100"
                                        >
                                          {data}
                                        </p>
                                      ))}
                                    </p>
                                  </li>
                                </ul>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            }
          )}
        </div>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};

export const PossibleIndecisionSub = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Possible Causes of Indecision or Making Wrong Choices"}
          className="min-w-fit"
        />

        <div className="pt-5">
          {chapterThreeData?.possibleIndecisionSub.category.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pb-4 ml-1">
                  <li className="flex items-start gap-1">
                    <p className="text-xs font-bold text-black-gray-100">
                      {i + 2}.
                    </p>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.key} :
                      <span className="font-normal">
                        {categoryData?.value.description}
                      </span>
                    </p>
                  </li>
                  {categoryData.value.subCategory.map(
                    (subCategoryData, j: number) => (
                      <ul
                        key={`subcategory-${j}`}
                        className="pt-4 list-disc ml-6"
                      >
                        <li>
                          <p className="text-xs font-bold text-black-gray-100">
                            {subCategoryData?.key}
                            {subCategoryData?.value.map((data) => (
                              <span
                                key={data}
                                className="text-xs font-normal text-black-gray-100"
                              >
                                {data}
                              </span>
                            ))}
                          </p>
                        </li>
                      </ul>
                    )
                  )}
                </ul>
              </div>
            )
          )}

          <p className="text-xs font-normal text-black-gray-100">
            Now that we have identified the possible reasons for indecision and
            poor choices and the significance of having the right information
            and guidance, the next section will explore the importance of career
            guidance in students&apos; lives and how it facilitates better and
            more informed career decisions.
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ImportanceStudents = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Importance of Career Guidance for Students"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.5 Importance of Career Guidance for Students
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career counseling assists students in exploring various career paths,
          understanding their relevance, and assessing their interests and
          strengths. Research consistently shows that students who receive
          career guidance are more likely to achieve their career goals.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterThreeData?.importanceStudents?.hading}
          </p>
          {chapterThreeData?.importanceStudents?.importancePoints?.map(
            (item) => (
              <ul key={item?.title} className="list-disc ml-6">
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
            Overall, career counseling is vital as it supports students in
            selecting paths that align with their interests, abilities, and
            personality. It also helps them recognize their strengths and
            weaknesses while identifying areas for improvement. A skilled career
            counselor can create a realistic action plan based on students&apos;
            capabilities, ensuring they are well-prepared for future endeavors.
          </p>
          <p className="text-xs font-normal text-black-gray-100">
            In the previous section, we examined instances of indecision in
            career choices and highlighted the importance of career guidance for
            students. Now that we have a clear understanding of career
            counseling let&apos;s briefly learn about the process.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Learning about this process is important to understanding the
            students&apos; needs and taking a personalized approach to their
            concerns, thus enhancing the effectiveness of the career guidance
            process. Let’s explore this further.
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};
export const UnderstandingProcess = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Understanding the Career Counseling Process"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.6 Understanding the Career Counseling Process
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Understanding the career counseling process is essential for helping
          students navigate their career paths effectively. By understanding the
          various important steps, we can better support students in making
          informed career decisions.
        </p>

        <div>
          <div className="pt-4">
            <p className="text-xs font-bold text-black-gray-100">
              {chapterThreeData?.understandingProcess?.hading}
            </p>

            <ol className="list-decimal ml-4">
              {chapterThreeData?.understandingProcess?.point.map((item, i) => {
                return (
                  <>
                    <li
                      key={i}
                      className="text-xs font-normal text-black-gray-100 pt-1"
                    >
                      {item}
                    </li>
                  </>
                );
              })}
            </ol>
          </div>

          <div className="pt-4">
            <p className="text-xs font-normal text-black-gray-100">
              {
                chapterThreeData?.understandingProcess?.understandingPoints
                  ?.hading
              }
            </p>

            <ol className="list-decimal ml-4">
              {chapterThreeData?.understandingProcess?.understandingPoints?.processPoints.map(
                (item, i) => {
                  return (
                    <>
                      <li
                        key={i}
                        className="text-xs font-bold text-black-gray-100 pt-1"
                      >
                        {item?.title} &nbsp;
                        <span className="font-normal">{item?.value}</span>
                      </li>
                    </>
                  );
                }
              )}
            </ol>
            <p className="text-xs font-normal text-black-gray-100 pt-1">
              The success of the counseling process depends on the
              counselor&apos;s ability to clearly explain how a student&apos;s
              competencies relate to various career paths. If this connection is
              not communicated effectively, students and other stakeholders,
              such as parents and teachers, may feel confused, leading to poor
              decision-making.
            </p>
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              The processes given above, along with the three essential steps,
              form the core of an effective career counseling process. In
              upcoming modules, we will explore these concepts more thoroughly
              to gain a more comprehensive understanding, but for now, we are
              limiting them to the essentials to facilitate a better
              understanding.
            </p>
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              Now that we have learned briefly about the fundamentals of career
              counseling and its process., In the next section, we will cover
              important information to help you take on the dual role of teacher
              and career counselor for your students.
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={8} title={"Mission Margdarshan"} />
    </div>
  );
};

export const DualityCareerCounselor = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Duality of Roles Involved as a Teacher Career Counselor"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.7 Duality of Roles Involved as a Teacher and Career Counselor
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Teachers who embrace the dual roles of teachers and career counselors
          provide valuable support to their students, serving as a primary
          source of guidance for those exploring their career options. This
          combination is essential, as it enables teachers to help students make
          informed decisions about their futures, equipping them with the tools
          and knowledge necessary for effective career planning.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          By integrating these roles, teachers gain a holistic understanding of
          each student, considering their academic strengths, personal
          interests, and aspirations. This insight allows for tailored advice
          and support, fostering well-rounded development and guiding students
          toward fulfilling career paths.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In this section, we will first explore the roles of teachers and
          career counselors separately, followed by an exploration of the key
          benefits of having one individual fulfill both roles simultaneously.
        </p>

        <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
          3.7.1 Role as a Teacher
        </h1>
        <p className="text-xs font-normal text-black-gray-100">
          Teachers usually have access to unique insights about their students
          that are often not accessible to others. By observing students in
          various situations, they develop a comprehensive understanding of
          their strengths, interests, and capabilities. This firsthand knowledge
          gives teachers a significant advantage in the career counseling
          process, enabling them to consider multiple aspects of a student’s
          life and effectively guide them toward suitable career paths.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterThreeData?.dualityCareerCounselor?.hading}
          </p>
          {chapterThreeData?.dualityCareerCounselor?.subContent?.map((item) => (
            <ul key={item?.key} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.key} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            Combining the information through these sources can help teachers
            guide students in a personalized way, addressing their issues that
            might be different from their peers. All this information can add
            value to the decision-making process while considering the career
            options for the child. Teachers already understand the academic
            potential, personality characteristics, learning abilities,
            aspirations, and interest areas. This varied information serves as
            the backbone of the process of analyzing their actual competencies
            and interests. Once the initial information is gathered as teachers,
            the role of the career counselor begins, where the competencies need
            to be mapped to the opportunities.
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"Mission Margdarshan"} />
    </div>
  );
};

export const SecondSubChapterDuality = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Duality of Roles Involved as a Teacher Career Counselor"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
          3.7.2 Role as a Career Counselor
        </h1>

        <div className="">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterThreeData?.dualityCareerCounselor?.secondSubChapterHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterThreeData?.dualityCareerCounselor?.secondSubChapterContent.map(
              (item, i) => {
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
              }
            )}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            Having explored the individual roles of teachers and career
            counselors, let&apos;s understand the benefits of integrating these
            two roles. For instance, a teacher who understands a student’s
            academic strengths and personal interests can provide tailored
            career guidance, helping the student choose a subject that aligns
            with their future aspirations. This fosters informed decision-making
            and supports students in achieving their career goals.
          </p>
        </div>
      </div>
      <Footer pageNumber={10} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ThreeSubChapterDuality = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Duality of Roles Involved as a Teacher Career Counselor"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
          3.7.3 Benefits of Dual role as a teacher and as a career counselor:
        </h1>

        <div className="">
          {chapterThreeData?.dualityCareerCounselor?.threeSubChapterPointe?.map(
            (item, i) => (
              <p key={i} className="text-xs font-normal text-black-gray-100">
                {item}
              </p>
            )
          )}
        </div>
      </div>
      <Footer pageNumber={11} title={"Mission Margdarshan"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Conclusion"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          3.8 Conclusion
        </h1>

        {chapterThreeData?.conclusion?.map((item) => {
          return (
            <p key={item} className="text-xs font-normal text-black-gray-100">
              {item}
            </p>
          );
        })}
      </div>
      <Footer pageNumber={12} title={"Mission Margdarshan"} />
    </div>
  );
};
