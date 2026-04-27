import Header from "@/components/header";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Footer from "@/components/footer";
import { chapterSeven, chapterSevenData } from "@/utils/cover";
import React from "react";

const ModuleSeven = () => {
  return (
    <>
      <Cover
        title={"MODULE 7"}
        characterTitle={
          "Holistic Career Guidance: Approach, Assessment, and Application"
        }
        className="max-w-[580px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
       projectName={"Mission Margdarshan"}
        tableOfContents={chapterSeven}
      />
      <Introduction />
      <UnderstandingHolistic />
      <UnderstandingSubchapterTwo />
      <UnderstandingSubchapterThree />
      <HolisticAssessment />
      <HolisticSubChapterTwo />
      <HolisticThreeSubChapter />
      <HolisticFourSubChapter />
      <HolisticFiveSubChapter />
      <Personality />
      <StudySkills />
      <StudySkillsPoints />
      <HealthHabits />
      <GeneralDetails />
      <EffectiveTailored />
      <Conclusion />
    </>
  );
};
export default ModuleSeven;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Introduction"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.1 Introduction
        </h1>

        <div>
          {chapterSevenData?.introduction.map((item, index) => (
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
export const UnderstandingHolistic = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Understanding the Holistic Approach to Career Counseling"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.2 Understanding the Holistic Approach to Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          At the beginning of this training program, we explored how the concept
          of a career has evolved in the 21st century and how changes in the
          career landscape are driving the career choices of the students. In
          this diverse and complex career scenario, helping students make
          informed choices requires more than simply matching them to fields
          based on grades or test scores. A holistic approach to career
          counseling is particularly effective in this regard, as it takes into
          consideration other important aspects of the student’s lives. This
          approach acknowledges that an individual’s unique blend of skills,
          interests, personality, values, and background is crucial in
          determining the most suitable career path.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career choice is one of the most significant events in an individual’s
          life, influencing long-term professional success and personal
          fulfillment. It is common knowledge that people who choose their
          careers based on their unique skills and interests report much better
          levels of job satisfaction and are more effective at work. For
          students, receiving comprehensive career guidance builds confidence in
          their decision-making abilities. Conversely, those who do not receive
          sufficient support may feel pressured to choose careers that do not
          truly align with their interests or potential.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          By adopting a holistic approach, career counselors can guide students
          toward career paths that resonate with who they are and who they
          aspire to become. This approach connects students to opportunities
          where they can thrive both personally and professionally, promoting
          long-term fulfillment and success. When it comes to choosing a career,
          it is important to take a holistic approach that considers a range of
          factors beyond just skills or interests. Let’s understand in detail
          about this holistic approach to career counseling are some key aspects
          of it:
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.2.1 What Does a Holistic Approach to Career Choice Mean?
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Imagine a student standing at a crossroads, with each path leading to
          a different career opportunity. As a career counselor, your role is to
          help them understand that choosing the right direction goes beyond
          simply picking a profession; it requires a comprehensive understanding
          of who they are as individuals. A holistic approach to career choice
          involves considering various aspects of a student’s life, including
          their unique abilities, interests, personality traits, and background,
          rather than solely focusing on grades or test scores.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          When making career decisions, it&apos;s essential to look at every
          piece of the puzzle. A fulfilling career should provide more than just
          a paycheck; it should bring joy and a sense of purpose. It&apos;s
          important for students to find a career that resonates with what
          interests them and something they will excel at.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In Module 4: Important Stakeholders in Career Counseling, we explored
          how factors like socio-economic background, parental expectations, and
          cultural influences shape students&apos; career choices. For instance,
          a student from an affluent family may feel empowered to pursue their
          passions, while a student from a middle-class background might feel
          pressured to select a path that offers financial stability.
          Recognizing these differences aligns with a holistic approach, as it
          considers the important parameters of a student’s life.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Additionally, key factors like a student&apos;s skills, interests,
          personality traits, values, lifestyle preferences, and external
          conditions, such as the job market, should also be factored into
          career guidance. By understanding how these factors interact, career
          counselors can better support students in making informed decisions
          that align with their true selves and aspirations.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Ultimately, adopting a holistic approach enables career counselors to
          help students make suitable career choices that reflect their values
          and aspirations. This thoughtful process empowers students to pursue
          career paths that not only meet their goals but also align with who
          they are as individuals, supporting their overall well-being and
          future success. Now that we have understood what a holistic approach
          to career counseling is, let’s understand why it is important in
          career counseling.
        </p>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};
export const UnderstandingSubchapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Understanding the Holistic Approach to Career Counseling"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.2.2 Why Holistic Approach to Career Guidance is Crucial?
        </h1>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSevenData?.understandingHolistic?.hading}
          </p>

          {chapterSevenData.understandingHolistic?.understandingPoints.map(
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
          <p className="text-xs font-normal text-black-gray-100">
            Now that we’ve understood what a holistic approach to career
            counseling entails and why it’s essential, let’s explore how it can
            be practically implemented through a case study.
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};

export const UnderstandingSubchapterThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Understanding the Holistic Approach to Career Counseling"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.2.3 How to Bring a Holistic Approach to Career Guidance?
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In the modules we&apos;ve covered so far, we&apos;ve highlighted the
          importance of considering various aspects of a student&apos;s life to
          help them select the most suitable career path. By integrating factors
          such as academic performance, competencies, interests, values,
          socio-economic background, parental influence, etc, counselors can
          offer comprehensive guidance tailored to each individual’s unique
          circumstances. Let&apos;s explore this concept further through a case
          study that illustrates how a career counselor can effectively apply a
          holistic approach.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career choice is one of the most significant events in an individual’s
          life, influencing long-term professional success and personal
          fulfillment. It is common knowledge that people who choose their
          careers based on their unique skills and interests report much better
          levels of job satisfaction and are more effective at work. For
          students, receiving comprehensive career guidance builds confidence in
          their decision-making abilities. Conversely, those who do not receive
          sufficient support may feel pressured to choose careers that do not
          truly align with their interests or potential.
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Case Study that explores holistic approach to career counseling:
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          <span className="font-bold">Background:</span>
          &nbsp; Arjun is a 10th-grade student who has shown a keen interest in
          technology, particularly in programming and computer science.
          Academically he is just about average. He feels uncertain about his
          future career path and is overwhelmed by the various options available
          to him. Additionally, Arjun comes from a middle-class family, which
          adds to his concern about financial constraints.
        </p>

        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          After administering the Career Guidance Test, the counselor gathers
          valuable insights into Arjun&apos;s profile. The assessment evaluates
          various dimensions, including abilities, career interests, and
          personality traits. Arjun exhibits strong analytical skills and a high
          level of curiosity, along with moderate scores indicating that he is
          organized but may struggle with assertiveness in group settings. The
          test also assesses competency skills such as time management and
          motivation, revealing that Arjun has room for improvement in managing
          his study habits. His interpersonal skills, particularly
          communication, show potential but also highlight areas for growth.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          As Arjun’s teacher, the counselor had previously observed his
          performance in class, noting his enthusiasm for computer-related
          projects and his willingness to help peers with technology. This
          academic insight, combined with the test results, painted a
          comprehensive picture of Arjun&apos;s strengths and areas for growth.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          By integrating the insights from the assessment with his academic
          background, the career counselor engages with Arjun and his parents to
          discuss potential career paths. They begin by exploring Arjun’s
          aspirations, delving into various careers in technology that align
          with his interests, such as software development and information
          technology. Through these conversations, the counselor discovers that
          Arjun values integrity, collaboration, and a desire to help others.
          This understanding suggests that Arjun might be particularly drawn to
          careers that have a positive social impact, such as developing
          educational technology tools or working with non-profits.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          The counselor introduces Arjun to diverse options within the
          technology field, including software development and IT support roles.
          Acknowledging the financial constraints faced by Arjun and his family,
          they discuss potential scholarships, and financial aid options, and
          explore vocational training programs that offer certifications in
          programming. These pathways can lead to employment opportunities that
          alleviate the burden of higher education costs. Additionally, the
          counselor provides information about affordable online resources where
          Arjun can enhance his programming skills while still in school. To
          further support Arjun’s development, the counselor encourages him to
          participate in coding boot camps and internships, emphasizing the
          importance of practical experience in building both confidence and
          skills. To address Arjun’s communication skills, the counselor
          suggests he join a local coding club, allowing him to collaborate with
          peers and practice articulating his ideas in a supportive environment.
          The counselor also schedules regular check-ins with Arjun to monitor
          his progress, discussing the outcomes of his internship experiences,
          any new interests that arise, and strategies to improve his time
          management and study habits. Additionally, the counselor reinforces
          Arjun’s strengths, helping him build self-esteem and stay focused on
          his goals.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Through this case study, we see how the career counselor employed a
          holistic approach by integrating insights from the Career Guidance
          Test, academic performance, and stakeholder involvement. By assessing
          Arjun&apos;s abilities, interests, personality traits, and
          socio-economic background, the counselor was able to provide tailored
          guidance that addressed his unique circumstances. This comprehensive
          support not only helped Arjun select the right career path but also
          fostered his personal growth and confidence, ensuring he was better
          equipped to navigate future challenges.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          So far, we&apos;ve learned about the holistic approach used in career
          counseling. Now, let&apos;s understand an important assessment tool
          that helps counselors get valuable insights about students: the Career
          Guidance Test. In the next part of this module, we’ll explore this
          assessment in detail and see how it supports effective career
          guidance.
        </p>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};

export const HolisticAssessment = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3 Career Guidance Tool – A Holistic Assessment of Student
          Competencies
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Assessment tools play a crucial role in career counseling by providing
          objective, data-driven insights into a student’s strengths, interests,
          and potential career pathways. Tools like the Career Guidance Test
          allow counselors to go beyond surface-level interests and gain a
          holistic understanding of a student’s abilities, interests and
          personality traits. This in-depth perspective empowers counselors to
          offer guidance that aligns with each student’s unique aspirations,
          while also grounding recommendations in their inherent competencies
          and preferences.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          As part of this project, students in your schools will be taking
          WhizQiz’s Career Guidance Test, which will form the foundation of the
          career counseling process. Based on the comprehensive report generated
          by the test, you will be able to provide students with tailored
          advice, ensuring they are supported in making informed career choices.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let’s now explore this assessment in detail to see how it supports
          data-driven and personalized career guidance.
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.1. Introduction to the Career Guidance Test
        </h1>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSevenData?.introductionCareerGuidance?.hading}
          </p>

          <ol className="list-decimal ml-6 py-2">
            {chapterSevenData.introductionCareerGuidance?.introductionCareerPoints.map(
              (item, i) => (
                <li key={i} className="text-xs font-bold text-black-gray-100">
                  {item}
                </li>
              )
            )}
          </ol>
          <p className="text-xs font-normal text-black-gray-100">
            This holistic evaluation ensures that career counselors have a
            comprehensive understanding of the student, beyond just academic
            performance.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            By scientifically assessing these dimensions, the WhizQiz Career
            Guidance Test offers deeper insights into a student’s unique
            strengths, aspirations, and areas for growth. A key feature of this
            test is its ability to provide personalized career recommendations
            based on a combination of the student’s top abilities, primary
            interests, and dominant personality traits. This approach ensures
            that the career paths suggested are not only aligned with the
            student’s intrinsic motivations and competencies but also support
            their long-term life goals, promoting both personal satisfaction and
            professional success.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            The Career Guidance Test’s comprehensive nature equips counselors
            with valuable insights, enabling them to offer well-rounded,
            informed guidance. This helps students discover careers that are not
            only achievable but also fulfilling, supporting their long-term
            growth and success. In the next sections, we will dive deeper into
            the specific competencies assessed in the test and explore how each
            one contributes to shaping a student’s career journey.
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};

export const HolisticSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.2 Competency Models Assessed in Career Guidance Test
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The Career Guidance Test evaluates various key dimensions of a
          student’s profile, such as their abilities, interests, personality
          traits, and study skills and habits. To gain a comprehensive
          understanding of these factors, the test incorporates several
          competency models that provide deeper insights into each student’s
          unique strengths and potential areas for development.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          As teachers training to become career counselors, understanding these
          competency models is essential. By familiarizing yourselves with the
          traits assessed in the Career Guidance Test, you will be better
          equipped to interpret the results and provide personalized guidance to
          students. This deeper understanding empowers you to make more informed
          decisions, helping students align their strengths with the right
          career paths.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Furthermore, this understanding enhances your ability to communicate
          the test results clearly to both students and parents, addressing any
          questions or concerns and ensuring they fully grasp the findings. By
          correlating these competencies with the broader context of the
          student&apos;s academic progress, personal growth, and aspirations,
          you can offer a more integrated and holistic approach to career
          counseling. This will not only help you provide more meaningful career
          advice but also support students in making informed decisions about
          their future with greater confidence.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Now, let’s take a closer look at the competency models used in the
          test, starting with a detailed understanding of the abilities assessed
          in this model. By exploring these abilities, you will gain valuable
          insights into how a student’s natural strengths can guide them toward
          suitable career paths.
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.2.1 Abilities:
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In career counseling, understanding a student&apos;s abilities is
          essential to helping them find a career path that plays to their
          natural strengths. Abilities refer to a person’s natural or developed
          skills, talents, and capacities that enable them to effectively
          perform specific tasks and activities. These abilities can be innate
          or developed through experience and practice, and they play a key role
          in determining how well a student will excel in various career paths.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The &nbsp;
          <span className="font-bold">
            American Psychological Association (APA)
          </span>
          &nbsp; defines abilities as “existing competence or skill to perform a
          specific physical or mental act.” In simpler terms, abilities
          represent a person&apos;s capacity to successfully carry out a
          particular task or job.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-3">
          The career guidance test assesses candidates&apos; 7 abilities.
          Let&apos;s understand each of them one by one along with the examples.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          1.&nbsp;<span className="font-bold">English Verbal Ability</span>&nbsp; refers
          to the cognitive skill that enables an individual to understand,
          interpret, and use language effectively. In this assessment, it
          focuses on evaluating comprehension and the ability to manipulate
          language in written form, such as recognizing word meanings, sentence
          structure, and context.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with strong English Verbal Ability are likely to excel in fields like
          Creative Writing, Journalism, Teaching, and Communications, where
          reading comprehension and effective use of language are key.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          2.&nbsp;<span className="font-bold">Numerical Ability</span>
          &nbsp;refers to the skill and aptitude needed to work with numbers
          accurately and efficiently. It involves performing mathematical
          operations like addition, subtraction, multiplication, and division.
          This ability goes beyond mere calculation and involves a deeper
          understanding of numerical relationships, patterns, and strategies.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with strong numerical ability are likely to excel in fields
          such as Finance, Accounting, Banking, and Data Analysis, where working
          with numbers, interpreting data, and solving quantitative problems is
          essential.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          3.&nbsp;<span className="font-bold">Reasoning Ability</span>
          &nbsp;refers to the cognitive skill that enables individuals to
          analyze, evaluate, and process information logically and
          systematically. It involves applying various forms of thinking, such
          as deductive, inductive, and critical reasoning, to understand complex
          situations, solve problems, and make informed decisions. This ability
          plays a crucial role in tasks that require identifying patterns,
          drawing conclusions, and recognizing relationships between different
          sets of information.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with strong reasoning ability are likely to excel in fields
          that require problem-solving, critical thinking, and strategic
          planning, such as Research, Management, Software Development, Legal
          Profession, etc.
        </p>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};

export const HolisticThreeSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          4.&nbsp;<span className="font-bold">Spatial Ability</span>&nbsp;
          refers to the cognitive skill that enables individuals to understand,
          interpret, and manipulate visual and spatial information effectively.
          It involves the mental capacity to visualize, transform, and interact
          with objects and shapes in a three-dimensional space. This ability is
          particularly important in tasks that require the understanding of
          spatial relationships, shapes, and how they relate to each other in a
          given space.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with strong spatial ability are likely to excel in fields
          that involve design, visualization, and spatial planning, such as
          Architecture, Civil Engineering, Aviation, and Animation.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          5.&nbsp;<span className="font-bold">Mechanical Ability</span>
          &nbsp;refers to the skills and knowledge required to understand and
          work with various mechanical systems, tools, and processes. It
          involves having a fundamental understanding of basic mechanical
          principles, such as motion, force, electricity, and magnetism, which
          are essential for understanding how machines and devices function.
          This ability helps individuals apply mechanical concepts to solve
          problems and operate tools and systems effectively.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with strong mechanical ability are likely to excel in fields
          such as Robotics, Machine Learning, Material Design, Space Research,
          and Missile Technology, where knowledge of mechanical principles is
          important for problem-solving and innovation.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          6.&nbsp; <span className="font-bold">Closure Ability</span>
          &nbsp;refers to the skill of perceiving and understanding a complete
          visual or conceptual pattern, even when parts of the information are
          missing or incomplete. It involves the ability to fill in the gaps and
          recognize objects or patterns as a whole, even if some details are
          absent. This ability is connected to the way our minds naturally
          &quot;close&quot; or complete unfinished shapes or ideas, helping us
          make sense of incomplete information.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with strong closure ability are likely to excel in fields
          such as Investigation, Research, Data Analysis, Predictive Modeling,
          and Fashion design, where the ability to see patterns and make sense
          of incomplete information is crucial for problem-solving and
          innovation.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          7.&nbsp; <span className="font-bold">Clerical Ability </span>
          &nbsp;refers to the skill of noticing details quickly and accurately,
          especially when identifying similarities and differences in letters,
          numbers, or symbols. This skill is helpful for tasks that need careful
          attention and quick decisions, like working with number or letter
          combinations and organizing information accurately.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with strong clerical ability are likely to excel in fields
          such as Administrative Roles, Data Entry, Retail, and Legal
          Assistance, where quick decision-making and precision are crucial for
          handling tasks efficiently and effectively.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          These abilities play a pivotal role in determining a student&apos;s
          strengths and potential career paths By understanding them, career
          counselors can offer more targeted and actionable advice, helping
          students focus on their strengths and identify areas for improvement.
          This personalized approach ensures that students choose career paths
          aligned with their strengths while helping them develop skills and
          competencies essential for future success.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Now that we have explored the various abilities assessed in this test,
          let’s move on to examining career interests. We will take a closer
          look at each of them to understand how they influence career choices.
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.2.2 Career Interests
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career interests reflect the activities or fields that individuals
          naturally enjoy and excel in. Shaped by personal strengths,
          inclinations, and external influences like family and society, these
          interests guide people toward careers that align with their passions.
          Identifying and understanding one&apos;s career interests is crucial
          for ensuring long-term job satisfaction and professional fulfillment.
          By aligning career choices with personal interests, individuals are
          more likely to find work that feels meaningful and rewarding.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          In career counseling, assessing career interests helps counselors
          recommend paths that resonate with a student&apos;s inclinations,
          ensuring they pursue careers where they can thrive. The Career
          Guidance Test is designed to help students explore their interests,
          empowering them to make informed decisions about their future. By
          matching career options with their unique inclinations, students can
          increase their chances of success and fulfillment.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Now, let’s take a closer look at the 8 career interests measured in
          this test, and understand how they can influence career choices:
        </p>
      </div>
      <Footer pageNumber={8} title={"Mission Margdarshan"} />
    </div>
  );
};

export const HolisticFourSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          1.&nbsp;<span className="font-bold">Science Interest</span>&nbsp;
          refers to a natural curiosity and enthusiasm for observing,
          understanding, and applying scientific principles to the physical and
          natural world. It involves a combination of theoretical understanding
          and practical application of scientific concepts to solve problems and
          explore new ideas. People with a high science interest enjoy
          conducting experiments, analyzing data, and applying their knowledge
          to real-world situations.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with a high Science Interest may pursue careers in fields
          such as Medicine and Healthcare, Pharmaceuticals, Biomedical
          Engineering, Environmental Science, Data Analysis, Astronomy, Chemical
          Engineering, Forensics, Biotechnology, Marine Biology, Information
          Technology, Geology, and Earth Sciences, among others.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          2.&nbsp;<span className="font-bold">Creative Arts Interest</span>
          &nbsp;refers to an individual’s natural inclination towards activities
          that allow them to use their imagination and express themselves in
          unique ways. People with this interest enjoy engaging in creative
          processes such as drawing, painting, acting, music, design, and more.
          They have a strong appreciation for beauty and artistic expression,
          often finding joy in creating and exploring various artistic forms.
          This interest highlights a passion for self-expression, creativity,
          and exploring different artistic mediums.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with a high Creative Arts Interest may pursue careers in
          fields such as Visual Arts, Performing Arts, Writing and Literature,
          Film and Media Production, Fashion Design, Product Design, Graphic
          Design, Illustration, Art Therapy, Theatre Production, Museum
          Curation, Creative Writing, Animation and Game Design, Music
          Production, Creative Direction, and Photography, among others.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          3.&nbsp;
          <span className="font-bold">Business & Economic Interest</span>
          &nbsp;refers to a natural curiosity about how money, businesses, and
          economic systems operate. People with this interest are drawn to
          understanding how businesses function, manage finances, and make
          strategic decisions. It involves a passion for learning about money
          management, entrepreneurship, and the broader economic landscape.
          Individuals with business and economic interests are often interested
          in areas such as business operations, investments, and financial
          markets. This interest reflects an inclination toward understanding
          money, making informed financial decisions, and exploring
          entrepreneurial opportunities.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with strong closure ability are likely to excel in fields
          such as Investigation, Research, Data Analysis, Predictive Modeling,
          and Fashion design, where the ability to see patterns and make sense
          of incomplete information is crucial for problem-solving and
          innovation.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          4.&nbsp;{" "}
          <span className="font-bold">Realistic & Technical Interest </span>
          &nbsp;refers to an individual&apos;s natural inclination towards
          engaging with hands-on activities and practical problem-solving,
          particularly in fields involving tools, machinery, technology, and
          physical processes. This includes interest in using both manual
          dexterity and intellectual understanding to complete the tasks such as
          assembling, fixing, programming, or designing. Individuals with this
          interest are often attracted to careers that require applying
          technical skills, understanding principles, and working with tangible
          materials in practical settings.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with high Realistic & Technical Interest may pursue careers
          in fields such as Civil Engineering, Construction, Automobile
          Manufacturing, Culinary Arts, Landscaping, Carpentry, Woodworking,
          Healthcare, Hospitality Management, and more.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          5.&nbsp; <span className="font-bold">Agriculture and Environmental Interest </span>
          &nbsp;refers to an individual&apos;s natural inclination toward
          working with plants, animals, and natural resources. This interest
          includes activities such as crop cultivation, livestock management,
          and the implementation of innovative agricultural practices. It also
          emphasizes environmental conservation and sustainable resource
          management. People with this interest are often drawn to careers that
          contribute to food production, sustainability, and environmental
          stewardship, and may pursue work in farming, animal husbandry,
          forestry, and ecological conservation.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with high Agriculture and Environmental Interest may pursue careers in fields
          like Agricultural Science, Agribusiness Management, Agricultural
          Engineering, Agronomy, Livestock Management, Food Science,
          Environmental Conservation, Rural Development, Agricultural Education,
          Horticulture, Aquaculture, Sustainability, Food Security, Food
          Technology, and Gardening.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          6.&nbsp;{" "}
          <span className="font-bold">
            Social Sciences & Humanities Interest{" "}
          </span>
          &nbsp; refers to an individual&apos;s natural inclination toward
          understanding human behavior, societal structures, culture, and
          history. This interest includes exploring how people interact within
          societies, how cultures evolve, and the impact of historical events
          and philosophical ideas on human development. People with a Social
          Sciences & Humanities Interest are drawn to careers that allow them to
          delve into human relationships, cultural dynamics, and societal
          issues. It often leads to a passion for understanding the complexities
          of human nature and the forces that shape social and political
          systems.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with high Social Sciences & Humanities Interest may pursue
          careers in fields like Psychology, Sociology, Economics, Political
          Science, Anthropology, Social Work, Counseling and Therapy,
          International Relations, Education, Human Resources, Public Health,
          Community Development, Public Administration, Environmental
          Sustainability, and Social Policy Analysis.
        </p>
      </div>
      <Footer pageNumber={9} title={"Mission Margdarshan"} />
    </div>
  );
};

export const HolisticFiveSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          7.&nbsp;<span className="font-bold">Home Science Interest</span>&nbsp;
          refers to an individual’s natural inclination toward creating a
          well-organized, comfortable, and healthy living environment. This
          interest involves the study and practical application of skills that
          enhance personal and family well-being, such as nutrition, household
          management, and child development. It combines practical skills with
          creativity, teaching individuals how to organize daily tasks
          effectively, make nutritious meals, maintain a harmonious home
          environment, and even engage in home design or textile work. People
          with a Home Science Interest are often drawn to careers that focus on
          fostering health, comfort, and aesthetics within homes and
          communities.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with high Home Science Interest may pursue careers in fields
          like Diet and Nutrition Science, Healthcare, Child Development, Public
          Health Education, Clothing and Textile Design, Interior Design,
          Culinary Arts, Hospitality Management, Home Economics, and Consumer
          Advocacy.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          8.&nbsp;<span className="font-bold">Physical & Sports Interest</span>
          &nbsp;refers to a strong inclination toward activities that involve
          physical fitness, athletic skills, and active sports engagement.
          Individuals with this interest generally feel energized by physical
          activities, enjoy developing sports-related skills, and thrive in
          competitive and collaborative settings. This interest aligns with
          careers emphasizing physical activity, whether in professional
          athletics, coaching, sports management, or supportive roles
          contributing to the sports industry. It often includes a passion for
          team dynamics, personal fitness, and the larger sports ecosystem.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Students with a high interest in Physical & Sports may pursue careers
          in fields like Professional Athletics, Sports Coaching, Physical
          Education, Sports Management, Sports Marketing, Sports Journalism,
          Sports Psychology, Sports Nutrition, Fitness Training, Sports
          Medicine, Sports Event Management, and Sports Equipment Design and
          Manufacturing.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Exploring an individual’s interests offers counselors valuable
          insights into potential career paths, helping confirm whether a
          student&apos;s stated interests align with their natural inclinations,
          motivations, and areas of fulfillment. By understanding career
          interests, counselors can better assess if the student’s career
          aspirations truly match their passions and strengths, as discussed in
          the counseling session.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Next, we will be exploring Personality Competencies, which play a
          crucial role in shaping individual approaches to work, relationships,
          and learning.
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.2.3 Personality
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Personality refers to the unique and lasting patterns of thoughts,
          feelings, and behaviors that characterize an individual. Psychologists
          define personality as the consistent set of traits and characteristics
          that make a person who they are, influencing how they respond to
          different situations and interact with others. These traits shape
          every aspect of life, impacting relationships, personal growth, and
          professional success.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          The Career Guidance Assessment evaluates personality through five key
          dimensions based on the well-established Big Five Personality Model,
          offering a framework to understand distinct traits that play a
          significant role in career decisions. For career counselors, these
          personality insights serve as a powerful tool for guiding students
          toward paths that align with their unique characteristics.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          By assessing traits such as openness, conscientiousness, and
          Extroversion, counselors can confirm or refine career suggestions to
          fit each student’s natural inclinations and interpersonal style. This
          plays a key role in the holistic approach to career guidance,
          contributing to a deeper understanding of a student’s strengths,
          preferences, and potential challenges. By considering personality
          traits, counselors can offer more personalized career advice that
          aligns with a student&apos;s natural tendencies, helping them make
          more informed, authentic career choices and navigate professional
          challenges with greater self-awareness.
        </p>
      </div>
      <Footer pageNumber={10} title={"Mission Margdarshan"} />
    </div>
  );
};

export const Personality = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />
        <div className="pt-5">
          {chapterSevenData?.introductionCareerGuidance.personalityPointData.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pb-2 ml-1">
                  <li className="flex items-start gap-1">
                    <p className="text-xs font-bold text-black-gray-100">
                      {i + 1}.
                    </p>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.key}&nbsp;
                      <span className="font-normal">
                        {categoryData?.value.description}
                      </span>
                    </p>
                  </li>
                  {/* sun Category */}
                  {categoryData.value.subCategory.map(
                    (subCategoryData, j: number) => (
                      <ul key={`subcategory-${j}`} className="pt-2  ml-5">
                        <li>
                          <p className="text-xs font-bold text-black-gray-100">
                            {subCategoryData?.key}&nbsp;
                            <span className="font-normal">
                              {subCategoryData?.value}
                            </span>
                          </p>
                        </li>
                      </ul>
                    )
                  )}
                </ul>
              </div>
            )
          )}

          <p className="text-xs font-normal text-black-gray-100 pt-2">
            We have taken you through the personality dimensions that are
            assessed in the career guidance assessment. Personality plays a very
            important role and affects every aspect of one’s life including
            career. After undertaking the personality dimension let’s take up
            the section on study skills and habits.
          </p>
        </div>
      </div>
      <Footer pageNumber={11} title={"Mission Margdarshan"} />
    </div>
  );
};

export const StudySkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-6 tracking-[1.5px]">
          7.3.2.4 Study Skills & Habits
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Study skills and habits play a vital role in shaping a student’s
          academic journey and overall success. These behaviors and techniques
          determine how effectively students learn, retain, and apply knowledge,
          and they have a significant impact on both educational outcomes and
          career performance.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Understanding a student’s study skills and habits provides career
          counselors with valuable insight into their capacity to perform in
          academic and other areas which are important for their growth. These
          insights allow counselors to assess how students approach their goals,
          manage academic stress, and maintain a consistent study routine. For
          instance, students who consistently prepare for exams, maintain
          regular study habits, and handle academic pressure well are likely to
          demonstrate the same resilience and focus in their careers. Counselors
          can use this information to tailor their advice and support, helping
          students develop areas that require improvement—whether it’s enhancing
          time management, boosting intrinsic motivation, or refining
          communication and collaboration skills.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          In career guidance assessments, these skills and habits are divided
          into four main categories: Competency Skills, Interpersonal Skills,
          Study Skills, and Health Habits, each of which is further divided into
          specific competencies.
        </p>

        <div>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Let’s understand each of these in detail:
          </p>
          {chapterSevenData?.introductionCareerGuidance.studySkillsPoints.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="ml-1">
                  <li className="flex items-start gap-1">
                    <p className="text-xs font-bold text-black-gray-100">
                      {i + 1}.
                    </p>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.key}&nbsp;
                      <span className="font-normal">
                        {categoryData?.value.description}
                      </span>
                    </p>
                  </li>
                  {/* sun Category */}
                  {categoryData.value.subCategory.map(
                    (subCategoryData, j: number) => (
                      <ul key={`subcategory-${j}`} className="list-disc ml-5">
                        <li>
                          <p className="text-xs font-bold text-black-gray-100">
                            {subCategoryData?.key}&nbsp;
                            <span className="font-normal">
                              {subCategoryData?.value}
                            </span>
                          </p>
                        </li>
                      </ul>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      <Footer pageNumber={12} title={"Mission Margdarshan"} />
    </div>
  );
};

export const StudySkillsPoints = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          3 .<span className="font-bold">Study Skills: </span> &nbsp; Study
          skills are essential practices and strategies that support students in
          understanding, retaining, and applying knowledge effectively. They
          include a range of methods, such as note-taking, exam preparation, and
          maintaining a positive learning attitude, all of which contribute to
          improved academic performance. By cultivating these skills, students
          not only gain a stronger grasp on their academic work but also develop
          the resilience and adaptability needed to meet future career
          challenges and achieve long-term success. There are 6 competencies
          assessed under this category: Note-taking, Learning Attitude, Exam
          Preparation, Exam Writing, Regular Studies, and Academic Stress.
        </p>
        <div className="pt-4">
          {chapterSevenData?.introductionCareerGuidance.studySkillsSubPoints.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pt-1 ml-1">
                  <li className="flex items-start gap-1">
                    <p className="text-xs font-bold text-black-gray-100">
                      {i + 1}.
                    </p>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.key}&nbsp;
                      <span className="font-normal">{categoryData?.value}</span>
                    </p>
                  </li>
                </ul>
              </div>
            )
          )}
        </div>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Together, these study skills provide students with a strong toolkit
          for approaching academic tasks with confidence, persistence, and a
          balanced mindset. To deal with the stress, students may break down
          their tasks into smaller, manageable steps, take regular breaks, and
          practice relaxation techniques.
        </p>
      </div>
      <Footer pageNumber={13} title={"Mission Margdarshan"} />
    </div>
  );
};
export const HealthHabits = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          4 .<span className="font-bold">Health Habits: </span> &nbsp; Health
          habits refer to the consistent behaviors and routines individuals
          adopt to maintain and enhance their physical, mental, and emotional
          well-being. These habits encompass a wide range of practices,
          including mindful eating, regular physical activity, stress
          management, proper sleep, and maintaining hygiene. By cultivating
          positive health habits, students can improve their focus, energy
          levels, and emotional resilience, which directly contribute to their
          academic performance and personal development. In the long term, these
          habits support overall vitality and well-being, helping students
          succeed not just academically, but also in their personal and
          professional lives. The 5 competencies assessed under this category
          are Mindful Eating, Maintaining a Sleep Schedule, Stress Management,
          Physical Activity, and Hygiene.
        </p>
        <div className="pt-4">
          {chapterSevenData?.introductionCareerGuidance.healthHabits.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pt-1 ml-1">
                  <li className="flex items-start gap-1">
                    <p className="text-xs font-bold text-black-gray-100">
                      {i + 1}.
                    </p>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.title}&nbsp;
                      <span className="font-normal">{categoryData?.value}</span>
                    </p>
                  </li>
                </ul>
              </div>
            )
          )}
        </div>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          In this section, we’ve explored the four key categories of Study
          Skills and Habits: Competency Skills, Communication Skills, Study
          Skills, and Health Habits. Each of these areas plays a critical role
          in a student’s academic growth and paves the way for future
          professional endeavors. By understanding these insights, career
          counselors can gain a clearer picture of a student’s strengths and
          areas for improvement. This helps tailor guidance and support to help
          students develop the necessary skills for success, both in their
          studies and future careers. These insights allow counselors to provide
          personalized advice on managing tasks, improving communication,
          refining study methods, and maintaining overall well-being, leading to
          more informed career decisions and sustainable growth.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Now, let’s take a look at the technical details of the Career Guidance
          Test for a clearer understanding. This section will provide insights
          into the structure of the assessment, its duration, scoring system,
          etc. Understanding these details will enable career counselors to
          interpret the results more effectively, offer personalized guidance,
          and help students make well-informed career decisions.
        </p>
      </div>
      <Footer pageNumber={14} title={"Mission Margdarshan"} />
    </div>
  );
};

export const GeneralDetails = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Career Guidance Tool – A Holistic Assessment of Student Competencies"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.3. General Details on the Career Guidance Test
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The Career Guidance Test (CGT) is a comprehensive assessment designed
          to help students explore their strengths and align them with potential
          career paths. It measures four key areas: abilities, career interests,
          personality, and study skills and habits.
        </p>
        <div className="pt-4">
          {chapterSevenData?.introductionCareerGuidance.generalDetailsPoints.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pt-1 list-disc ml-1">
                  <li>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.title}&nbsp;
                      <span className="font-normal">{categoryData?.value}</span>
                    </p>
                  </li>
                </ul>
              </div>
            )
          )}
        </div>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          This structured approach ensures that the Career Guidance Test is
          comprehensive, accessible, and efficient for all students. For career
          counselors, understanding the test’s design and format helps them
          interpret the results effectively. By assessing abilities, interests,
          personality, and study habits, the test offers a well-rounded view of
          the student’s strengths and areas for growth. This information allows
          counselors to provide tailored career advice, helping students make
          informed decisions about their future educational and professional
          paths. The clear and concise structure also ensures that counselors
          can quickly identify key insights, facilitating focused and meaningful
          career guidance.
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.4 Offerings of the Career Guidance Test Report
        </h1>

        <div className="pt-4">
          {chapterSevenData?.introductionCareerGuidance.recommendations.map(
            (categoryData, i: number) => (
              <ul key={`content-point-${i}`} className="pt-1 list-disc ml-1">
                <li>
                  <p className="text-xs font-bold text-black-gray-100">
                    {categoryData?.title}&nbsp;
                    <span className="font-normal">{categoryData?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
        </div>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          The Career Guidance Test provides a detailed, holistic report designed
          to give students and career counselors clear insights into the
          student’s Abilities, interests, personality traits, and study habits.
          This comprehensive report ensures that each student receives
          personalized guidance based on a thorough assessment, offering
          well-rounded recommendations for their career and academic growth. By
          focusing on multiple aspects of the student’s profile, the report
          allows for tailored career advice, supporting students in making
          informed decisions about their future.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          By integrating assessments of the student’s abilities, interests,
          personality traits, and study habits, the report takes a holistic
          approach to career guidance. This ensures that the advice provided is
          personalized, actionable, and well-rounded, giving students the best
          possible path to success. The Career Guidance Test helps career
          counselors offer targeted and informed guidance, ensuring students
          receive tailored advice that supports both their academic journey and
          career aspirations.
        </p>
      </div>
      <Footer pageNumber={15} title={"Mission Margdarshan"} />
    </div>
  );
};

export const EffectiveTailored = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Effective and Tailored Career Guidance through Career Guidance Test Report"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.4 Effective and Tailored Career Guidance through Career Guidance
          Test Report
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The Career Guidance Test (CGT) report offers a deep, holistic look
          into a student’s unique profile by assessing their abilities, career
          interests, and personality traits. By capturing these essential
          elements, the report paints a complete picture of the student’s
          strengths, preferences, and natural inclinations, leading to three
          thoughtfully curated career recommendations. These recommendations are
          based on the student’s top abilities, dominant career interests, and
          core personality traits, ensuring they align with the student’s
          potential, aspirations, and working style.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          As a career counselor, your role goes beyond interpreting individual
          scores; it&apos;s about connecting insights across the CGT report to
          understand each student&apos;s unique profile.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          By analyzing all aspects of a student&apos;s profile holistically and
          recognizing the correlations between various traits and skills,
          counselors can gain a comprehensive understanding of their strengths,
          challenges, and potential areas for growth. This enables counselors to
          offer tailored strategies that maximize students&apos; strengths and
          promote academic success, providing more personalized and effective
          guidance to support their overall development.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          While abilities, interests, and personality traits form the basis for
          career selection, the report also includes insights into a student’s
          study skills and habits. Though study skills don’t directly influence
          career recommendations, they provide valuable guidance to counselors.
          Understanding a student’s strengths and weaknesses in areas like time
          management, organization, and focus can help counselors offer tailored
          strategies that support not only career path selection but also
          academic success. These insights are crucial for ensuring the student
          develops effective study habits, which contribute to ongoing growth
          and achievement, both academically and in their chosen career.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          <span className="font-bold"> Example: </span> Consider a student whose
          Career Guidance Test report shows high reasoning and numerical
          abilities, a strong interest in business and commerce, and a high
          score in conscientiousness. Based on this, the report might recommend
          careers such as Data Analyst, Financial Analyst, or Investment Banker.
          These paths are more likely aligned with the student’s analytical
          skills, quantitative strengths, and meticulous nature, all of which
          suit careers requiring structured problem-solving and attention to
          detail
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Furthermore, if this student has areas where they could further
          develop certain skills – like time management or academic stress – the
          counselor can use tips from the CGT report to help them build these
          competencies. For example, if there are areas where the student could
          strengthen their skills, the counselor might suggest creating
          structured study schedules or setting achievable goals. These
          strategies help the student build effective habits and skills that
          support both academic and professional success.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          With this complete understanding of abilities, interests, personality
          traits, and study skills & habits, the CGT report offers a
          well-rounded framework for career counseling. This approach allows
          counselors to offer tailored, actionable recommendations that support
          both career selection and academic growth, helping students build a
          strong foundation for future success.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          In some cases, students might feel that certain parts of their Career
          Guidance Test (CGT) report don’t completely match their
          self-perception or career interests. Discrepancies can arise, for
          instance, if a student scores high in certain abilities but shows
          lower scores in related skills or habits.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            {chapterSevenData?.effectiveTailored.hading}
          </p>
          {chapterSevenData?.effectiveTailored.effectiveTailoredPoint.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pt-1 list-disc ml-1">
                  <li>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.title}&nbsp;
                      <span className="font-normal">{categoryData?.value}</span>
                    </p>
                  </li>
                </ul>
              </div>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            By combining thoughtful reflection, flexible options, and targeted
            support, counselors can deliver personalized guidance that aligns
            with each student’s unique strengths and aspirations. This approach
            not only enhances the accuracy of career recommendations but also
            empowers students to pursue their paths with greater confidence and
            preparedness for success.
          </p>
        </div>
      </div>
      <Footer pageNumber={16} title={"Mission Margdarshan"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Conclusion"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          7.5 Conclusion
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In this module, we have explored the importance of a &nbsp;
          <span className="font-bold">holistic approach</span>&nbsp; to career
          counseling and how it plays a significant role in helping students
          make informed career decisions. The&nbsp;
          <span className="font-bold"> Career Guidance Test (CGT) </span>&nbsp;
          serves as a key tool in this approach, providing a comprehensive
          assessment of a student’s abilities, interests, personality, and study
          skills & habits. Following are the key competencies that we covered:
        </p>
        <div className="pt-4">
          <ol className="list-decimal ml-4">
            {chapterSevenData.conclusion.map((item, i) => (
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
            The CGT integrates all these dimensions, providing personalized
            insights that go beyond simple career recommendations. It offers a
            holistic view of the student, taking into account not just their
            academic performance, but their strengths, interests, and personal
            traits.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            By using the insights gained from the CGT report, you, as a career
            counselor, can guide students toward careers that align with their
            unique abilities and aspirations. This approach not only helps
            students make informed decisions about their future but also fosters
            their personal growth and development.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In short, this module has provided you with the knowledge and tools
            needed to offer tailored and effective career guidance to your
            students.
          </p>
        </div>
      </div>
      <Footer pageNumber={17} title={"Mission Margdarshan"} />
    </div>
  );
};
