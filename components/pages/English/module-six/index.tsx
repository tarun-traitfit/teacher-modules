import Header from "@/components/header";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Footer from "@/components/footer";
import { chapterSix, chapterSixData } from "@/utils/cover";
import React from "react";

const ModuleSix = () => {
  return (
    <>
      <Cover
        title={"MODULE 6"}
        characterTitle={"Phases of Career Counseling"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
       projectName={"Mission Margdarshan"}
        tableOfContents={chapterSix}
      />
      <Introduction />
      <PlanningCareer />
      <PhasesOfCareerCounsel />
      <PhasesOfSubPoint />
      <RapportBuilding />
      <InformationGathering />
      <InformationSubChapter />
      <DecisionMakingPhase />
      <DecisionMakingSecondSubChapter />
      <DecisionMakingSubChapterThree />
      <ActionPlanningPhase />
      <ActionSubChapter />
      <PreparationForCareer />
      <Conclusion />
    </>
  );
};
export default ModuleSix;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Introduction"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.1 Introduction
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In the previous module, we explored the essential skills required for
          effective career counseling. We identified four major skill set
          categories—Rapport-building, Communication, Interpersonal, and
          Decision-making skills—and discussed practical tips to develop and
          apply them effectively in counseling sessions. These skills form the
          foundation for meaningful and impactful career counseling, helping you
          guide students with confidence and clarity.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Building on that understanding, this module introduces the Phases of
          Career Counseling, breaking down the process into structured steps to
          make career counseling more organized and effective. We will begin by
          discussing the importan
        </p>
        <div>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterSixData?.introduction.hading}
          </p>
          {chapterSixData?.introduction.introductionPoint.map((item, index) => (
            <ul key={index} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.title} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            By mastering these phases, you’ll be equipped to provide
            personalized and impactful guidance, ensuring that students receive
            the support they need to make informed and confident career choices.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Let’s begin by exploring the significance of planning in career
            counseling in the next section.
          </p>
        </div>
      </div>
      <Footer pageNumber={2} title={"Mission Margdarshan"} />
    </div>
  );
};
export const PlanningCareer = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Planning in Career Counseling"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.2 Planning in Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In Module 3, &quot;Introduction to Career Counseling,&quot; we briefly
          explored the career counseling process, highlighting its importance in
          guiding individuals toward fulfilling career paths. As we move on to
          learn about the Phases of Career Counseling, it becomes clear that
          effective planning is an essential part of this process. Proper
          planning helps counselors and students understand what to expect
          during their sessions, allowing for a more focused approach to the
          student&apos;s needs and goals. It also builds trust and enables open
          communication.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In career counseling, ‘planning’ refers to setting goals and
          identifying the steps needed to achieve those goals. As we learned
          earlier, there are three important steps in career counseling:
          assessing students&apos; needs and competencies, mapping those
          competencies to suitable career options, and communicating the
          rationale behind this mapping to stakeholders.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Effective planning involves several key components:
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (i) Understanding the student and their environment
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (ii) Identifying the best career option for them based on reliable and
          valid data
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (iii) Setting goals related to the identified career option
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (iv) Making a detailed and comprehensive plan that includes the steps
          to achieve the set goals
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          These components can be effectively addressed through a phase-wise
          approach to counseling, which involves breaking down the process into
          distinct, manageable stages, each with specific objectives and tasks.
          This method ensures that all critical elements of career counseling
          are covered thoroughly and systematically, leading to a more organized
          and effective experience for counselors and students.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Planning and a phase-wise approach are inherently linked in career
          counseling, as both emphasize structuring the process to achieve
          successful outcomes. By incorporating planning across phases -&nbsp;
          <span className="font-bold">
            Rapport Building, Information Gathering, Decision Making, and Action
            Planning -
          </span>
          &nbsp; counselors can systematically address the student’s needs,
          identify suitable career options, and create a clear roadmap for
          success. This synergy results in a more organized and supportive
          counseling experience, empowering students to make informed and
          confident career decisions.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Before we explore these 4 phases in detail, let’s first understand why
          planning is important in providing effective career counseling.
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.2.1 Significance of Planning in Career Counseling
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Planning plays a crucial role in ensuring that career counseling
          sessions are effective and focused on the student’s needs. A
          well-structured plan helps counselors guide students through each
          phase smoothly, ensuring no important details are overlooked. By
          having a clear structure and focusing on all the necessary aspects of
          a student&apos;s life, counselors can guide them through each phase
          smoothly, making the process more efficient and meaningful.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSixData?.planningCareer?.hading}
          </p>

          <ul className="list-disc ml-4">
            {chapterSixData.planningCareer?.planningCareerPoint.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-1"
                >
                  {item?.value}
                </li>
              )
            )}
          </ul>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now that we understand why planning is so important in career
            counseling let’s explore each phase of the process in detail.
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};
export const PhasesOfCareerCounsel = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Planning in Career Counseling"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.3 Phases of Career Counseling in Brief
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The phase-wise approach to career counseling involves breaking down
          the counseling process into distinct stages, each focusing on specific
          objectives and tasks. This structured approach allows counselors to
          systematically address the various components of career counseling,
          making it easier to navigate the complexities of the process.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          It is essential to highlight two key factors in this approach. First,
          the phases serve as a general framework, which can vary depending on
          an individual&apos;s counseling needs. In some cases, all stages may
          be addressed in one comprehensive session, while in others, they can
          be divided into multiple sessions over several days. This flexibility
          allows counselors to adapt their methods according to their individual
          style and the resources available.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Second, the career counseling process can range from a single session
          to multiple sessions, depending on the complexity of the case and the
          time required for effective counseling. While some cases might
          necessitate a longer engagement, this manual will primarily focus on
          the single-session counseling process. It is crucial for the counselor
          to assess and determine whether the entire process can be completed in
          one session or if it requires additional time based on the specific
          circumstances involved. Let’s move on to a brief discussion of the
          different phases.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career Counseling is an integrative approach that requires analyzing
          students&apos; core competencies from different vantage points. The
          process utilizes tools like assessments, interviews, and discussions
          to generate ideas and viewpoints and arrive at final choices. During
          this process, a lot of activities take place, and it can get
          overwhelming for the counselor, students, and parents.
        </p>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};
export const PhasesOfSubPoint = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Planning in Career Counseling"} className="min-w-fit" />

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSixData?.phasesOfCareerCounsel?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterSixData.phasesOfCareerCounsel?.phasesOfCareerCounselPoint.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-bold text-black-gray-100 pt-1"
                >
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                  </p>
                  <div>
                    {item?.value?.map((item, i) => (
                      <p
                        key={i}
                        className="text-xs font-normal text-black-gray-100"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </li>
              )
            )}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            By following these phases and utilizing a phase-wise approach, you
            can gain a deeper understanding of students and their needs, address
            any conflicts that may arise, guide them toward suitable career
            options, and create an effective action plan. This structured
            process will ensure that you provide meaningful career counseling
            that considers each student&apos;s unique aspirations and potential
            pathways.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Next, we will explore each phase in detail to gain a deeper
            understanding. We&apos;ll begin with the first phase: Rapport
            Building.
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};

export const RapportBuilding = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Rapport Building Phase"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.4 Rapport Building Phase
        </h1>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSixData?.rapportBuilding?.hading}
          </p>

          {chapterSixData.rapportBuilding?.rapportBuildingPoint.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li>
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title}
                    <span className="font-normal">{item?.value}</span>
                  </p>
                  <p className="text-xs font-normal italic text-black-gray-100">
                    {item?.note}
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Any counseling session must establish clear communication, which
            relies on building a trusting relationship and providing a safe
            environment. Students should feel comfortable sharing their
            thoughts, feelings, and opinions without hesitation.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Building rapport is the first step in this process. The term
            &quot;rapport&quot; refers to creating a positive and trusting
            relationship between the counselor and the student. This
            relationship fosters a comfortable atmosphere where students can
            explore their career aspirations, challenges, and opportunities. The
            rapport-building phase lays the foundation for effective counseling.
            Through discussion-based conversations, counselors work to establish
            trust and connection with the student, promoting open and honest
            dialogue.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In the previous module on Skills Required for Career Counseling, we
            explored how to build rapport with students and create a safe
            environment for them to share their aspirations, emotions, and
            challenges. Now, we’ll take a look at some key points to keep in
            mind during the rapport-building phase:
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            1. Rapport building is &nbsp;
            <span className="font-bold">more of an art than a science</span>
            &nbsp; and would require a unique approach with each candidate.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            2. Rapport building takes time, and &nbsp;
            <span className="font-bold">it may take more than one session</span>
            &nbsp; to get the student to open up. The counselor should be
            patient and try to establish trust and confidence by using different
            approaches. If one approach fails, the counselor should switch to
            another.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            3. The best way to initiate a conversation that can build rapport is
            to &nbsp;
            <span className="font-bold">
              start by finding common ground with the student.
            </span>
            The pace and content of the conversation should match the
            student&apos;s understanding capacity.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            4. Once the students start to talk, it is important to &nbsp;
            <span className="font-bold">
              listen carefully without interruptions.
            </span>
            The feeling of being heard is a great starting point. Students, at
            times, have nobody to whom they can share their thoughts without
            getting judged or advised.
          </p>
          <div className="pt-4">
            <p className="text-xs font-normal text-black-gray-100 ">
              {chapterSixData?.rapportBuilding?.severalReasons}
            </p>
            {chapterSixData?.rapportBuilding?.severalReasonsPoint?.map(
              (item, i) => (
                <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                  <li>
                    <p className="text-xs font-bold text-black-gray-100">
                      <span className="font-normal">{item?.value}</span>
                    </p>
                  </li>
                </ul>
              )
            )}
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              After understanding the rapport-building phase, let’s move on to
              the next phase: Information Gathering.
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};

export const InformationGathering = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={" Information Gathering"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.5 Information Gathering
        </h1>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSixData?.informationGathering?.hading}
          </p>

          {chapterSixData.informationGathering?.informationGatheringPoint.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li>
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title}
                    <span className="font-normal">{item?.value}</span>
                  </p>
                  <p className="text-xs font-normal italic text-black-gray-100">
                    {item?.note}
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            A career counseling session cannot be based solely on a few
            elements, such as students&apos; interests or parents&apos;
            expectations. At times, students may not be completely honest about
            their interests or may not completely understand what they really
            like. It is your duty as a career counselor to gather information
            regarding both the obvious and subtle aspects of their lives to
            provide ethical, appropriate, and effective counseling.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            This is exactly what the second phase of the career counseling
            process focuses on. Once the student is ready to share their
            thoughts and ideas with you following the rapport-building phase,
            it’s important for you to guide the conversation toward their career
            skillfully. As they become more comfortable sharing details with
            you, it’s your responsibility to collect all the relevant
            information needed to provide them with proper guidance for their
            career choices.
          </p>
          <p className="text-xs font-bold text-black-gray-100 pt-4">
            This step involves collecting relevant information about the
            student, such as their educational background, career aspirations,
            interests, skills, values, and personality traits. The information
            gathered during this step serves as the foundation for developing a
            personalized and effective counseling plan.
          </p>
          <p className="text-xs font-bold text-black-gray-100 pt-4">
            There are several reasons why the information-gathering phase is one
            of the most crucial steps in career counseling. The key reasons are:
          </p>

          <p className="text-xs font-normal text-black-gray-100 pt-1">
            1.It involves &nbsp;
            <span className="font-bold">more of an art than a science</span>
            &nbsp; about the student, their background, and any factors
            influencing their career decisions. Without this thorough
            understanding, the guidance provided may not be accurate or
            relevant, as it would overlook key aspects of the student’s life.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            2. Information gathering ensures that the career counseling process
            is based on &nbsp;
            <span className="font-bold">it may take more than one session</span>
            &nbsp; This phase emphasizes a &apos;holistic&apos; approach,
            considering all influences on the student&apos;s career, allowing
            for guidance that is thorough, evidence-based, and tailored to their
            needs.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            3. This phase also helps in strengthening the rapport between the
            counselor and the student. By showing a commitment to understanding
            the student&apos;s unique situation and providing personalized
            guidance, the counselor fosters trust and encourages a more open and
            supportive relationship.
          </p>
          <p className="text-xs font-bold text-black-gray-100 pt-1">
            Now, let&apos;s understand the various ways to collect the required
            information.
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};

export const InformationSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={" Information Gathering"} className="min-w-fit" />

        <div>
          {chapterSixData?.informationSubChapter?.content.map(
            (contentItem, contentIndex) => {
              return (
                <React.Fragment key={`section-content-${contentIndex}`}>
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
                              {categoryData?.key}
                              <span className="font-normal">
                                {categoryData?.value.description}
                              </span>
                            </p>
                          </li>
                          {/* sun Category */}
                          {categoryData.value.subCategory?.map(
                            (subCategoryData, j: number) => (
                              <ul
                                key={`subcategory-${j}`}
                                className="pt-1 list-disc ml-6"
                              >
                                <li>
                                  <p className="text-xs font-bold text-black-gray-100">
                                    {subCategoryData?.key}
                                    <span className="text-xs font-normal text-black-gray-100">
                                      {subCategoryData?.value}
                                    </span>
                                  </p>
                                </li>
                              </ul>
                            )
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              );
            }
          )}
        </div>

        <div className="">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSixData.informationSubPoint?.hading}
          </p>

          {chapterSixData.informationSubPoint.point?.map(
            (subCategoryData, j: number) => (
              <ul key={`subcategory-${j}`} className="list-disc ml-6">
                <li>
                  <p className="text-xs font-normal text-black-gray-100">
                    {subCategoryData?.value}
                  </p>
                </li>
              </ul>
            )
          )}

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            <span className="font-bold">
              4. Parents as an informative source
            </span>
            &nbsp; : Involving parents in career counseling sessions or
            conducting separate sessions with them greatly enhances the process.
            Parental input can significantly influence their child&apos;s career
            path and success. In cases where students may be unclear about their
            aspirations or interests, parents can offer valuable insights into
            their child’s life.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            Parents can share information about their family, cultural, and
            socio-economic backgrounds, which can have an impact on their
            child&apos;s career choices. This context helps counselors
            understand suitable career fields for the student. Additionally,
            parents can provide details about their child’s academic
            performance, strengths, interests, and hobbies, helping counselors
            identify potential career opportunities that align with the child’s
            competencies..
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            Parents can also offer insights into their child&apos;s personality
            traits, motivations, habits, and values, which are crucial for
            determining the best-fit career paths. They can discuss both
            short-term and long-term goals, clarifying the student’s
            expectations from the counseling sessions. Although parents serve as
            a rich information resource, they may have their own biases and
            expectations regarding their child&apos;s career choices. It is
            essential for parents to challenge these biases and create a more
            inclusive and supportive environment that fosters creativity and
            individual growth. By supporting their child&apos;s aspirations and
            potential, parents can help them achieve their career goals.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Having gathered comprehensive information about all relevant aspects
            of a student’s life, you can provide informed and appropriate
            guidance. The more you understand the student, the better you can
            tailor your approach to help them navigate a fulfilling career path.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Once you have obtained all the essential information, you can
            transition to the next phase of the career counseling process: the
            decision-making phase. Let’s explore this next phase in detail.
          </p>
        </div>
      </div>
      <Footer pageNumber={8} title={"Mission Margdarshan"} />
    </div>
  );
};
export const DecisionMakingPhase = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Decision-Making Phase"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.6 Decision-Making Phase
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          As a career counselor, once you have gathered all the necessary
          information, it&apos;s time to sit down with the student to analyze it
          and choose the best career option. This is the ‘decision-making’ phase
          of the career counseling process, where the counselor aids students in
          exploring reliable and valid choices for their career development.
        </p>
        <div className="pt-4">
          {chapterSixData.decisionMakingPhase?.decisionMakingPoint.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li>
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title}
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
        </div>
        <p className="text-xs font-normal italic text-black-gray-100 pt-1">
          (Note: Most counseling processes conclude at this phase, where
          students make a final choice based on the information provided. )
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          It’s essential to understand that, despite being called the
          ‘decision-making’ phase, your role as a counselor is to act as a
          facilitator rather than making decisions for the student. Your job is
          to guide them through a collaborative process, providing the correct
          guidance and alternatives while respecting their autonomy.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          This phase involves a systematic approach that addresses all the
          questions and concerns a student may have about selecting a career. At
          each step, you should provide opportunities for the student to
          synthesize information from various perspectives. By sharing
          alternative viewpoints, you help the student gain a holistic
          understanding, enabling them to consider all important factors in
          making their final choice.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          With relevant information collected from assessments, discussions with
          students, and conversations with parents and teachers, you now have
          insights into the student&apos;s abilities, interests, personalities,
          and other characteristics. Based on this understanding, your task is
          to help identify career options that are rewarding, satisfying, and
          growth-oriented for the students.
        </p>
        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterSixData?.decisionMakingPhase?.decisionSignificantHading}
          </p>

          {chapterSixData.decisionMakingPhase?.decisionSignificantPoint.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li>
                  <p className="text-xs font-normal text-black-gray-100">
                    {item?.value}
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Having established the significance of the decision-making phase,
            it’s essential to recognize the challenges that can arise during
            this process. Addressing these challenges effectively is crucial to
            ensure students make informed and supportive career choices.
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"Mission Margdarshan"} />
    </div>
  );
};
export const DecisionMakingSecondSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Decision-Making Phase"} className="min-w-fit" />

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Challenges faced in this phase:
        </p>

        <p className="text-xs font-normal italic text-black-gray-100 pt-4">
          Job roles and career opportunities are becoming increasingly complex,
          each with specific requirements regarding educational qualifications,
          skill sets, personality traits, and soft skills.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-4">
          The core activity of this phase of the counseling process is to match
          the above-mentioned set of information, one regarding the requirements
          of each career option and the other about the student&apos;s abilities
          and competencies. Based on the match, the idea is to arrive at about
          two to three career options and then develop a comprehensive action
          plan for the student to explore these options in detail.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-4">
          However, this task is more complex than it seems, as numerous factors
          and stakeholders influence career options in our country, leading to
          various scenarios that need to be addressed during this phase. As
          decision-making unfolds, several key challenges may arise,
          necessitating a targeted approach to resolve them.
        </p>
        <div className="pt-4">
          <ol className="list-decimal ml-4">
            {chapterSixData.decisionMakingPhase?.decisionArisePoint.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-bold text-black-gray-100 pt-1"
                >
                  {item?.title} &nbsp;
                  {item?.value.map((item) => (
                    <ul key={item} className="list-disc ml-6">
                      <li className="text-xs font-normal text-black-gray-100 pt-1">
                        {item}
                      </li>
                    </ul>
                  ))}
                </li>
              )
            )}
          </ol>
        </div>
        <p className="text-xs font-normal italic text-black-gray-100 pt-4">
          Counselors should address these challenges through detailed
          discussions based on the information gathered in the earlier phase,
          ensuring that the student&apos;s interests and values are prioritized.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Based on the presenting issues, the counselor must determine suitable
          solutions for the student. However, decision-making is inherently
          subjective, as each student may have unique needs and goals. The
          counselor should be mindful of any limitations before formulating
          strategies or activities to tackle these challenges. While the
          counselor&apos;s role is facilitative, leveraging the right skills and
          communication styles can often help overcome most obstacles.
        </p>
      </div>
      <Footer pageNumber={10} title={"Mission Margdarshan"} />
    </div>
  );
};
export const DecisionMakingSubChapterThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Decision-Making Phase"} className="min-w-fit" />

        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterSixData?.decisionMakingPhase?.importantPointsHeading}
          </p>

          {chapterSixData.decisionMakingPhase?.importantPoints.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li
                  key={i}
                  className="text-xs font-bold text-black-gray-100 pt-1"
                >
                  {item?.title} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </li>
              </ul>
            )
          )}
        </div>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          To sum up, the decision-making phase of career counseling is a
          comprehensive process designed to guide students toward informed
          career choices. It starts with a thorough evaluation of the
          student&apos;s background, including their interests, academic
          performance, and personal aspirations. Counselors then present a range
          of relevant career options tailored to the student&apos;s strengths
          and goals. making their final choice.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Moreover, this phase takes into account crucial factors such as the
          evolving educational system, emerging career trends, and, in some
          cases, parental expectations. By integrating these elements,
          counselors help students make well-rounded and strategic decisions
          that align with their individual ambitions and the changing
          professional landscape. This holistic approach ensures that career
          choices are both practical and fulfilling, setting students up for
          future success.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Now, let&apos;s understand the final phase of the career counseling
          process: Action Planning.
        </p>
      </div>
      <Footer pageNumber={11} title={"Mission Margdarshan"} />
    </div>
  );
};
export const ActionPlanningPhase = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Action Planning Phase"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.7 Action Planning Phase
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Once the student has been presented with the best alternatives and
          informed about all relevant details gathered through conversations and
          observations, the next phase involves preparing action plans for the
          student to follow to achieve success in their chosen career field.
          This phase extends the exploratory phase of career counseling,
          allowing students to delve deeper into their chosen paths. However,
          it’s important to note that this exploratory element may not be
          necessary for every student, as some may already have a clear
          understanding of their goals and the steps required to reach them.
        </p>

        <div className="pt-4">
          {chapterSixData.actionPlanningPhase?.actionPoint.map((item, i) => (
            <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.title}
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
        </div>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          During this phase, career counselors assist students in understanding
          the necessary steps to reach their goals and identifying potential
          obstacles they may encounter along the way. Counselors guide students
          in engaging with short courses, internships, and industry experts to
          gain a clearer understanding of their potential fields. They help
          students create a structured roadmap that outlines specific actions
          they need to take, the resources they may require, and timelines for
          achieving their objectives.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Additionally, the final phase involves deciding on suitable career
          paths, providing awareness about the selected options, and offering
          information on relevant colleges and courses. Counselors prepare
          students for eligibility criteria related to their chosen
          institutions, help eliminate obstacles in the career development
          process, and assist with the admissions procedures. Once a decision is
          reached, goal setting becomes essential, and counselors help students
          define clear objectives and milestones to guide their journey.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          By focusing on these actionable steps, the action planning phase
          empowers students with the knowledge and strategies they need to
          navigate their career paths effectively. It prepares them for the
          realities of their chosen career paths while ensuring a smooth
          conclusion to the career counseling process.
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Importance of the Phase of Making Action Plans
        </p>
        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100 ">
            {chapterSixData.actionPlanningPhase?.phaseCrucialHading}
          </p>
          {chapterSixData.actionPlanningPhase?.phaseCrucialPoint.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li>
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title}
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
        </div>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          As previously discussed, after a student finalizes their career
          choice, the Action Planning phase acts as an opportunity for further
          exploration, enabling students to enhance their knowledge and gain
          essential insights into their selected paths. Career counselors are
          instrumental in this stage, guiding students to participate in short
          courses, internships, and consultations with industry professionals.
          This phase not only focuses on solidifying career choices but also
          involves setting clear objectives and milestones to navigate the
          journey ahead.
        </p>
      </div>
      <Footer pageNumber={12} title={"Mission Margdarshan"} />
    </div>
  );
};
export const ActionSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Action Planning Phase"} className="min-w-fit" />

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            {chapterSixData.actionPlanningPhase?.essentialHading}
          </p>
          {chapterSixData.actionPlanningPhase?.essentialPoints.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li>
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title}
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
        </div>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          By integrating these considerations, the Action Planning phase
          empowers students with the knowledge and resources needed to make
          informed decisions and effectively pursue their career aspirations.
          This phase often concludes with students feeling more confident in
          their chosen career paths. Now that we have explored all the phases in
          detail let’s transition to the final section of the module: Preparing
          for Career Counseling Sessions.
        </p>
      </div>
      <Footer pageNumber={13} title={"Mission Margdarshan"} />
    </div>
  );
};

export const PreparationForCareer = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Preparation for Career Counseling Sessions"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.8 Preparation for Career Counseling Sessions
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Proper preparation is essential for ensuring that career counseling
          sessions are productive and tailored to meet each student&apos;s
          unique needs. In this section, we will provide practical tips for you
          as career counselors to prepare effectively for these counseling
          sessions, particularly within the context of this project, where
          students will complete a Career Guidance Test before the session.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Preparation begins with a thorough understanding of the student&apos;s
          background and the results of the Career Guidance Test they have
          taken. By carefully analyzing the report, career counselors can gain
          valuable insights into the student’s strengths, potential areas for
          improvement, and recommended career paths. This level of preparation
          not only enhances the effectiveness of the sessions but also helps
          build rapport between counselors and students, fostering an
          environment of trust and open communication.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Being well-prepared allows counselors to anticipate the questions and
          concerns that students may have, ensuring that the discussion remains
          focused and relevant. Additionally, it empowers counselors to offer
          tailored advice and resources, guiding students toward informed career
          decisions that align with their interests and abilities. Ultimately,
          effective preparation lays the foundation for a successful counseling
          experience, paving the way for students to explore their future career
          options confidently. By taking the time to prepare, counselors can
          create a supportive and impactful environment that fosters student
          growth and success.{" "}
        </p>

        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterSixData?.preparation?.hading}
          </p>

          {chapterSixData.preparation?.preparationPoint.map((item, i) => (
            <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.title}
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            By following these steps, career counselors can ensure they are
            well-prepared to assist students in making informed decisions about
            their career paths, ultimately fostering a supportive and productive
            counseling experience.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Through this, we understand that effective preparation is a critical
            component of successful career counseling sessions. By thoroughly
            understanding each student’s background and test results, you can
            provide personalized guidance that aligns with their interests and
            strengths. This thoughtful approach not only enhances the quality of
            the counseling experience but also empowers students to make
            informed decisions about their futures. Ultimately, when you invest
            time in preparation, you can contribute significantly to the
            development of confident, well-informed individuals ready to
            navigate their career paths.
          </p>
        </div>
      </div>
      <Footer pageNumber={14} title={"Mission Margdarshan"} />
    </div>
  );
};

export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Conclusion"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          6.9 Conclusion
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In this module, we explored the &nbsp;
          <span className="font-bold"> phases of career counseling </span>
          ,&nbsp; starting with the importance of &nbsp;
          <span className="font-bold">planning </span>&nbsp; in career
          counseling. A structured approach ensures that every session is
          purposeful, organized, and impactful for both the counselor and the
          student.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSixData?.conclusion?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterSixData.conclusion?.conclusingPoint.map((item, i) => (
              <li
                key={i}
                className="text-xs font-bold text-black-gray-100 pt-1"
              >
                {item?.title} &nbsp;
                <span className="font-normal">{item?.value}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            We also discussed the importance of &nbsp;
            <span className="font-bold"> preparation </span>&nbsp;before each
            counseling session, including reviewing student information and
            coming up with relevant questions to ensure the session runs
            smoothly.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            By following these phases, you can offer well-structured, organized,
            and tailored support to students, helping them navigate each step of
            their career journey.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In conclusion, these phases offer a systematic framework that leads
            students from confusion to clarity, transforming their aspirations
            into concrete, actionable goals. Adopting this approach will enable
            you to create meaningful and empowering counseling experiences for
            your students.
          </p>
        </div>
      </div>
      <Footer pageNumber={15} title={"Mission Margdarshan"} />
    </div>
  );
};
