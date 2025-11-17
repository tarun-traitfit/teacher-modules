import Header from "@/components/header";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Footer from "@/components/footer";
import { chapterNight, chapterNightData } from "@/utils/cover";
import React from "react";

const ModuleNight = () => {
  return (
    <>
      <Cover
        title={"MODULE 9"}
        characterTitle={"Conflict Resolution in Career Counseling"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
       projectName={"Mission Margdarshan"}
        tableOfContents={chapterNight}
      />
      <Introduction />
      <ConflictResolution />

      <SignificanceConflict />
      <TypesOfConflict />
      <ScenariosResolution />
      <ScenariosResolutionSubChapter />
      <ScenariosSubChapterTwo />
      <TechniquesDuring />
      <Conclusion />
    </>
  );
};
export default ModuleNight;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Introduction"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.1 Introduction
        </h1>

        <div>
          {chapterNightData?.introduction.map((item, index) => (
            <p
              key={index}
              className="text-xs font-normal text-black-gray-100 pt-4"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <Footer pageNumber={2} title={"Mission Margdarshan"} />
    </div>
  );
};
export const ConflictResolution = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Conflict Resolution in Career Counseling"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.2 Conflict Resolution in Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Through this module, we will explore various conflicts that may arise
          while assisting students in deciding on a suitable pathway and how, as
          a career counselor, you can deal with these conflicts to resolve them.
          We will also explore various conflict scenarios in career counseling
          and learn strategies and techniques to address and resolve these
          conflicts effectively.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let’s first start by understanding the concept of conflict. Conflicts
          are part of life. They can arise whenever there is a difference of
          opinion about anything. Conflicts are not bad or good per se; they are
          just a part of the natural process. They occur in natural surroundings
          and sociological settings created by humans. Labeling conflicts as bad
          or something to avoid is where we make mistakes while trying to
          resolve them. Conflicts should be perceived as opportunities rather
          than challenges. Approaching conflicts with this mindset would make us
          see them as possible sources of improvements and rectifications rather
          than just problems to solve. When we adopt this mindset, conflict
          resolution feels much more feasible.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In this module, we will discuss conflicts that may arise in scenarios
          during the Career Counseling Process. In previous modules, we learned
          about the various stakeholders influencing the career decision-making
          process and the factors unique to every individual on which the
          decision depends. Due to the multiple stakeholders&apos; presence in
          the process, conflicts or disagreements are bound to happen.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Conflicts can arise in multiple ways during a career counseling
          process. A few scenarios have been detailed below to give you an
          insight into the various reasons for these conflicts.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          One of the most commonly encountered conflict scenarios is between
          parents and their children. It may arise due to a misalignment between
          parent’s expectations and students’ career choices. Another scenario
          can be when there is a disagreement between a student’s interests in a
          particular career and the demands imposed upon them by other factors
          such as societal pressure, conforming with societal norms,
          restrictions imposed due to socio-economic conditions, etc.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          One of the main reasons behind these conflicts can be a lack of
          exposure in parents and students to various job possibilities,
          resulting in misunderstandings or limited viewpoints. Hence, it
          becomes crucial to resolve these conflicts in order to help students
          make informed decisions regarding their careers.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Conflict resolution is crucial during a career counseling session. It
          deals with the challenges and difficulties that may have developed
          while making decisions about one&apos;s career. It is a process that
          offers a cordial solution to the problems raised. Career counselors
          must have conflict-resolution skills to resolve issues and create
          opportunities for students and parents to expand their perspectives.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let us now understand why conflict resolution is one of the crucial
          elements in career counseling.
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.2.1 Significance of Conflict Resolution in Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Through this module, we will explore various conflicts that may arise
          while assisting students in deciding on a suitable pathway and how, as
          a career counselor, you can deal with these conflicts to resolve them.
          We will also explore various conflict scenarios in career counseling
          and learn strategies and techniques to address and resolve these
          conflicts effectively.
        </p>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};

export const SignificanceConflict = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Conflict Resolution in Career Counseling"}
          className="min-w-fit"
        />

        <div className="pt-4">
          <ol className="list-decimal ml-4">
            {chapterNightData.significanceConflict.map((item, i) => (
              <li
                key={i}
                className="text-xs font-bold text-black-gray-100 pt-1"
              >
                {item?.title} &nbsp;
                <span className="font-normal">{item?.value}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            Now that we have understood the importance of conflict resolution in
            career counseling let’s explore the role of career counselors in
            addressing and resolving conflicts.
          </p>
        </div>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.2.2 Role of Career Counselors in Managing Conflicts
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career counselors provide the correct information & resources and act
          as mediators in resolving issues arising during career counseling.
          They assist the students and other stakeholders in navigating problems
          and developing solutions by encouraging open communication and
          understanding. Here are some ways in which you can aid in resolving
          conflicts as a career counselor.
        </p>
        <div className="pt-4">
          <ol className="list-decimal ml-4">
            {chapterNightData.roleManagingPoint.map((item, i) => (
              <li
                key={i}
                className="text-xs font-bold text-black-gray-100 pt-1"
              >
                {item?.title} &nbsp;
                <span className="font-normal">{item?.value}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            So far, we have understood the significant role of career counselors
            in creating a medium for all stakeholders involved in a conflict to
            understand each other’s perspectives better and resolve the
            conflicts effectively. Let’s move on to understand the different
            types of conflicts that occur while making career decisions.
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};
export const TypesOfConflict = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Types of Conflict in Career Counseling"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.3 Types of Conflict in Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Conflicts in career decisions can arise for various reasons and in
          different forms. Whether it&apos;s an internal struggle, such as
          indecision or self-doubt, or an external conflict involving
          disagreements or misunderstandings, each type requires to be handled
          differently. Understanding the underlying reasons for each conflict is
          important to resolve them, for which a tailored approach is required.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The complexity of choosing a career can be overwhelming for students,
          especially with multiple factors and stakeholders involved in the
          process. In such situations, the career counselor&apos;s
          responsibility lies in understanding the nature and type of conflict
          to find an effective solution. By first identifying and categorizing
          the conflict, counselors can uncover the underlying causes and develop
          tailored strategies to resolve them effectively during a session.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In the context of career counseling, conflict can be categorized into
          the following 3 types:
        </p>
        <div className="pt-4">
          <ol className="list-decimal ml-4">
            {chapterNightData.typesOfConflict?.typesOfConflictPoint.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-bold text-black-gray-100 pt-1"
                >
                  {item?.title} &nbsp;
                </li>
              )
            )}
          </ol>
          <p className="text-xs font-normal text-black-gray-100">
            Let’s understand these conflicts one by one.
          </p>

          <ol className="list-decimal ml-4 pt-4">
            {chapterNightData.typesOfConflict?.typesOfConflictPoint.map(
              (item, i) => (
                <li key={i}>
                  <p className="text-xs font-bold text-black-gray-100 pt-1">
                    {item?.title} :
                  </p>
                  <div>
                    {item.value?.map((data) => (
                      <p
                        key={data}
                        className="text-xs font-normal text-black-gray-100 pt-1"
                      >
                        {data}
                      </p>
                    ))}
                  </div>
                </li>
              )
            )}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            In this section, we have covered the three major types of conflict.
            It is important to understand that by identifying the types of
            conflict during career counseling, the counselor can understand how
            to resolve it effectively. Now that we have learned about the types
            of conflict that may arise during career counseling, finding
            solutions to the underlying cause would become easy
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            In the next session, we will discuss some case scenarios in detail
            to help you gain more clarity on the topic.
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};
export const ScenariosResolution = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Types of Conflict in Career Counseling"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.3.1 Case Studies and Scenarios of Conflict Resolution
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          As a career counselor, it&apos;s important to recognize the different
          types of conflicts that can occur during career counseling. Being
          skilled at identifying these conflicts will enable you to understand
          better how to resolve them and support your students effectively.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          <span className="font-bold">
            Identifying various conflict scenarios during career counseling
          </span>
          &nbsp; Conflict scenarios can arise for various reasons. We will look
          at the various examples of the types of conflicts that we saw in the
          previous section and the variations within those types.
        </p>

        <div className="pt-4">
          {chapterNightData?.scenariosResolutionPoint.scenariosResolution.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <p className="text-xs font-bold text-black-gray-100">
                  {categoryData?.key}
                </p>
                {categoryData.value.map((subCategoryData, j: number) => (
                  <ul key={`subcategory-${j}`} className="list-disc ml-6">
                    <li>
                      <p className="text-xs font-bold text-black-gray-100">
                        {subCategoryData?.title}
                        <span className="text-xs font-normal text-black-gray-100">
                          {subCategoryData?.value}
                        </span>
                      </p>
                    </li>
                  </ul>
                ))}
              </div>
            )
          )}
        </div>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};
export const ScenariosResolutionSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Types of Conflict in Career Counseling"}
          className="min-w-fit"
        />
        <div className="pt-6">
          {chapterNightData?.scenariosResolutionPoint.scenariosResolutionSub.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <p className="text-xs font-bold text-black-gray-100">
                  {categoryData?.key}
                </p>
                {categoryData.value.map((subCategoryData, j: number) => (
                  <ul key={`subcategory-${j}`} className="list-disc ml-6">
                    <li>
                      <p className="text-xs font-bold text-black-gray-100">
                        {subCategoryData?.title}
                        <span className="text-xs font-normal text-black-gray-100">
                          {subCategoryData?.value}
                        </span>
                      </p>
                    </li>
                  </ul>
                ))}
              </div>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            So far, we have explored different types of conflicts and examined
            them through various examples. After identifying a conflict, the
            next crucial step is learning how to resolve it effectively. Let’s
            learn about it in detail with the help of a case.
          </p>
        </div>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.3.2 Understanding how to deal with Conflicting situations in Career
          counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          To help you understand how to handle conflicts that arise during
          career counseling, we have selected one of the most common scenarios
          encountered in counseling sessions. We will explore it in detail and
          discuss the approach you can take as a career counselor to manage such
          situations effectively.
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          Scenario:
          <span className="italic">
            When the student has difficulty believing in their abilities and is
            reluctant to pursue a career path, fearing stiff competition. This
            is an example of intrapersonal conflict.
          </span>
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Scenarios like this are quite common to find in counseling settings.
          Given the competition in the country for entry into prestigious
          colleges and universities, students can feel uncertain about their
          capabilities. One of the primary reasons for the students to show such
          uncertainty is the lack of the right information, lack of awareness,
          or lack of access to quality education for pursuing a particular
          career. Institutes these days market themselves, creating the fear
          that if the students do not follow their course or material, then
          getting into the prestigious colleges would be very difficult, thus
          leading to uncertainty in a student regarding his abilities and
          interests.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Students find themself bombarded by such information and struggle to
          find the right guidance. In such a situation, the career counselor
          must provide students with the right information and resources to help
          them understand their true potential and abilities.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          To help you manage conflicts effectively as a career counselor, we
          have provided some general guidelines for your reference. These need
          not be strictly followed in the same order but have been mentioned to
          give you a ready framework.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2 ml-2">
          a. Identify the reason for the uncertainty. Uncertainty can result
          from a lack of correct information about what is expected, a lack of
          self-confidence, or a lack of motivation to put in the required
          effort. So, the first thing to do is to understand the reason for the
          uncertainty.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2 ml-2">
          b. The counselor should then decide on the next course of action based
          on the following inputs to address the underlying causes once
          identified.
        </p>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ScenariosSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Types of Conflict in Career Counseling"}
          className="min-w-fit"
        />
        <p className="text-xs font-normal text-black-gray-100 pt-8">
          For instance, if the uncertainty is due to a lack of information, the
          counselor should guide the student toward reliable sources and inform
          them about the relevant courses or institutes. They can provide
          students with information about agencies like NCERT, CBSE, NSDC,
          AICTE, NTA, and UGC that maintain an online repository with accurate
          course information, syllabi, and eligibility criteria. These resources
          can help students make informed decisions about their career paths.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          If the student is uncertain whether the career option is the best fit
          for him, it may lead to confusion. In these situations, the counselor
          may recommend that the student complete a short course, internship, or
          apprenticeship in the field to gain a better understanding of what to
          expect in the workplace. Nowadays, this is more relevant because the
          National Education Policy has been updated to provide opportunities
          for students to participate in internships and encourages businesses
          to offer these experiences.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          A combination of strategies can address this concern. We are providing
          a few for your reference.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          a) The counselor should begin by reminding the students of their
          strengths based on the assessment reports.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          b) Then, they can analyze the academic data and use the students&apos;
          achievements to reinforce their confidence.
        </p>{" "}
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          c) They can arrange for the student to talk to someone who has cracked
          the competition in the past.
        </p>{" "}
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          d) They can encourage students to read interviews of successful
          candidates and highlight the similarities between those candidates and
          the student.
        </p>{" "}
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          e) They can arrange a meeting with experts in that field for the
          student, using their network or encouraging students to reach out to
          them.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          f) They can arrange internships for the students to help them gain a
          deeper understanding of what to expect in the workplace and motivate
          them to work hard.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Most counseling processes conclude at this phase, during which
          students make a final choice based on the provided information or are
          suggested to conduct thorough research to make an informed decision.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2 ml-2">
          We have covered the key guidelines that can help if you face a similar
          situation while counseling. It is important to understand that every
          scenario is different and has different underlying reasons for lack of
          self-confidence. The counselor&apos;s role is to probe for the
          underlying reasons and address the issues collaboratively.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2 ml-2">
          Now that we have learned how to handle conflicts during sessions, the
          next section will cover the techniques you can use for effective
          conflict management.
        </p>
      </div>
      <Footer pageNumber={8} title={"Mission Margdarshan"} />
    </div>
  );
};
export const TechniquesDuring = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Techniques to be used during Career Counseling"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.4 Techniques to be used during Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Now, we will discuss a few techniques that will help you in stressful
          or conflicting situations that arise during career counseling
          sessions. In such situations, the environment can get tense or heated
          up, and the counseling process might not move forward in the right
          direction.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          These techniques are useful during career counseling sessions to
          address possible disagreements. They help the counselor create a space
          for introspection and reflection when the situation gets tense and
          chaotic.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterNightData.techniquesDuring?.techniquesDuringHading}
          </p>
          <ol className="list-decimal ml-4">
            {chapterNightData.techniquesDuring?.techniquesDuringPoint.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-bold text-black-gray-100 pt-1"
                >
                  {item?.title} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </li>
              )
            )}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            Resolving a conflict requires patience, active involvement, and a
            willingness to find a solution. By employing these strategies, a
            career counselor can maintain effective communication and good
            morale throughout the session.
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"Mission Margdarshan"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Conclusion"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          9.5 Conclusion
        </h1>

        <div className="pt-4">
          {chapterNightData.conclusion.map((item, i) => (
            <p key={i} className="text-xs font-normal text-black-gray-100 pt-1">
              {item}
            </p>
          ))}
        </div>
      </div>
      <Footer pageNumber={10} title={"Mission Margdarshan"} />
    </div>
  );
};
