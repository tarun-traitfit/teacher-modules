import { chapterFive, chapterFiveData } from "@/utils/cover";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Header from "@/components/header";
import Footer from "@/components/footer";
import skillRequired from "@/public/Images/skill-required.png";
import Image from "next/image";

const ModuleFive = () => {
  return (
    <>
      <Cover
        title={"MODULE 5"}
        characterTitle={"Skills Required for Career Counseling"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
       projectName={"Mission Margdarshan"}
        tableOfContents={chapterFive}
      />
      <Introduction />
      <SkillsCareerCounseling />
      <SkillsCareerSubChapterTwo />
      <RapportBuildingSkills />
      <RapportBuildingSubChapterTwo />
      <CommunicationSkills />
      <CommunicationSkillsSubChapterTwo />
      <CommunicationSkillsSubChapterThree />
      <CommunicationSkillsSubChapterFour />
      <InterpersonalSkills />
      <InterpersonalSubChapterOne />
      <InterpersonalSubChapterTwo />
      <CriticalThinkingSkills />
      <CriticalSubChapterOne />
      <CriticalSubChapterTwo />
      <CriticalSubChapterThree />
      <Conclusion />
    </>
  );
};

export default ModuleFive;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Introduction"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.1 Introduction
        </h1>
        <div className="pt-4">
          {chapterFiveData?.introduction?.map((item, i) => (
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
export const SkillsCareerCounseling = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Skills in Career Counseling"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.2 Skills in Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          As teachers, you already possess a range of skills—such as
          communication, empathy, and problem-solving—that are essential in your
          everyday interactions with students. However, when transitioning to
          the role of a career counselor, these skills take on a different
          significance. In career counseling, the focus shifts to guiding
          students in making informed decisions about their future careers.
          Career counselors need to understand the student&apos;s strengths and
          interests and have the ability to help them move through the complex
          world of career options.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In this module, we will explore how these foundational skills—skills
          you may already be familiar with as a teacher—are applied specifically
          in career counseling. By refining and expanding these skills, you will
          be better equipped to provide the support and guidance students need
          as they make important career choices. But before diving into this,
          let’s understand the concept of skills first.
        </p>
        <div>
          <h2 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
            5.2.1 Understanding Skills
          </h2>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            What is meant by skill? – The term “skill” can be defined as the
            aptitude or proficiency to effectively and efficiently utilize one’s
            knowledge and expertise in the execution or performance of a
            particular task or activity. It encompasses the ability to do
            something with precision and accuracy acquired through training,
            experience, or practice. In essence, skill refers to the knowledge,
            competencies, and abilities necessary to carry out operational tasks
            successfully. In the context of career counseling, skills refer to
            the abilities and competencies that enable counselors to effectively
            guide and support individuals in their career decisions.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Career counselors require a blend of cognitive, social, emotional,
            and other skills to relate to and support students throughout the
            counseling process effectively. While some of these skills may come
            more naturally to certain individuals, others might feel less
            familiar or accessible. However, the key is that these skills can be
            developed through dedication, effort, and practice. As a counselor
            or teacher, even if you feel you lack a particular skill, you can
            acquire the abilities needed to improve your effectiveness with
            focus and perseverance. By continually refining these skills, you
            will be better equipped to guide your students or clients in making
            informed career choices and providing the support they need.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In short, skills are the foundation of effective career counseling.
            By developing a well-rounded skill set, counselors can enhance their
            ability to support students in navigating career paths and achieving
            their goals. Continuous improvement and practice are essential for
            success in this role.
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};
export const SkillsCareerSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Skills in Career Counseling"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.2.2 Skills Required for Career Counseling{" "}
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Creating a supportive and open environment is crucial for effective
          career counseling. A career counselor should be able to facilitate
          communication and develop a deeper understanding of the student’s
          aspirations, competencies, and available resources. Helping the
          students choose the right career path requires a good mapping of
          competencies, aspirations, and availability of resources given the
          student’s socio-economic background and support system. This would
          require the counselor to wear different hats, like a friend, guide,
          subject-matter expert, problem solver, etc., at various stages of the
          counseling process. This flexibility requires the counselor to master
          various skills and deploy them as needed to address each
          student&apos;s unique needs.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          We’ve organized the essential skills into four key categories for easy
          understanding. It’s necessary to note that this categorization is for
          clarity; the skills do not follow a specific order and may be applied
          as and when needed. These categories share a common foundation, and
          organizing them this way can help you identify which skills to utilize
          at various stages of the career counseling process. Let’s now explore
          these important skills in more detail.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterFiveData?.skillsCareerSubChapterTwo?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterFiveData.skillsCareerSubChapterTwo?.skillsCareerPoint.map(
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

          <div className="pt-4">
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              Here’s an overview of the skills included in this module,
              organized into their respective categories, which are displayed
              below:
            </p>
            <Image
              src={skillRequired}
              alt="skill-required"
              width={794}
              height={150}
              className="pt-4"
            />
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              Now, let’s explore each skill set in detail.
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};
export const RapportBuildingSkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Rapport Building Skills"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.3 Rapport Building Skills
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Rapport building is an essential skill in career counseling. It
          facilitates effective communication and understanding between the
          counselor and the student. It involves establishing a trusting and
          supportive relationship that allows open dialogue without hesitation
          and bias. When rapport is strong, counselors and students can openly
          discuss their ideas and perspectives, even when they disagree, without
          compromising respect.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          As a teacher, you may already have established rapport with your
          students, given the trust and respect teachers generally command. For
          instance, students often respond better to a teacher’s guidance than
          parents, illustrating the significance of your role as a trusted
          figure. However, even with this pre-existing relationship, enhancing
          your understanding of students beyond academics is crucial to
          facilitate effective counseling. Let’s take a look at the key
          components of Rapport Building
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-6 tracking-[1.5px]">
          5.3.1 Creating a Safe Space:
        </h1>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterFiveData?.rapportBuildingSkills?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterFiveData.rapportBuildingSkills?.rapportBuildingPoint.map(
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
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            As a career counselor, when you establish a trusting relationship
            with students, ensure they know that their information will remain
            confidential, that you will be non-judgmental about their feelings
            and choices, and that you will be genuine throughout the counseling
            process. This creates a safe space for students to open up,
            ultimately building strong rapport and facilitating effective career
            counseling.
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};
export const RapportBuildingSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Rapport Building Skills"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.3.2 Finding Common Ground
        </h1>

        <div className="pt-6">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterFiveData?.rapportSubChapterTwo?.hading}
          </p>

          {chapterFiveData?.rapportSubChapterTwo?.rapportSubChapterPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-2 list-disc ml-6">
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
            In summary, when students recognize that you understand their
            cultural background, show genuine interest in their experiences, and
            relate to their challenges, they are more likely to open up to you.
            This openness fosters a trusting environment, leading to more
            effective career counseling.
          </p>
        </div>
        <div className="pt-6">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterFiveData?.rapportSubChapterTwo?.rapportSubChapterTwoHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterFiveData.rapportSubChapterTwo.rapportSubChapterTwoPoint.map(
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

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            By applying these techniques, you deepen your connection with the
            students and ensure they respect and trust you in your dual role as
            a teacher and career counselor.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Once you&apos;ve established a good rapport with the student,
            it&apos;s time to move the counseling session forward. The next
            crucial skill set that will enhance your interactions and make the
            counseling process more effective is &nbsp;
            <span className="font-bold"> Communication Skills.</span>
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CommunicationSkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Communication Skills"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.4 Communication Skills
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Effective communication is essential for fostering a productive
          relationship with students in career counseling. This involves four
          key skills: verbal communication, nonverbal communication, active
          listening, and asking the right questions. Verbal communication
          encompasses the spoken words and tone used to express thoughts and
          feelings, while nonverbal communication includes body language,
          gestures, and facial expressions that accompany these words.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Together, these elements form a vital foundation for effective career
          counseling. Mastering verbal communication enables clear articulation
          of questions and insights, fostering open discussions about
          students&apos; aspirations. Meanwhile, being attuned to nonverbal cues
          helps gauge students&apos; comfort levels and emotions, allowing you
          to adapt your approach to their needs. Active listening ensures that
          you fully comprehend students&apos; perspectives while asking the
          right questions, encouraging deeper reflection. This creates a
          supportive environment where students feel understood and empowered to
          explore their career options. Let’s understand each key skill in
          detail.
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-6 tracking-[1.5px]">
          5.4.1 Verbal communication
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Verbal communication means using spoken language to convey messages,
          ideas, thoughts, and feelings. It includes not just the words chosen
          but also the tone, pace, volume, and clarity of speech. As a career
          counselor, you need to understand the type of voice, tone, pace, and
          words and denote the thinking process or mood. For instance, a student
          speaking in a very low voice, with very little energy, and using very
          few words to explain or share something would most likely not be
          comfortable sharing the information. This is when you concentrate more
          on rapport building and then shift to the information-gathering phase
          with the help of skillful verbal communication. In a career Counseling
          context, effective verbal communication is crucial for building trust,
          understanding clients, and providing support.
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterFiveData?.communicationSkills?.hading}
          </p>

          {chapterFiveData?.communicationSkills?.communicationSkillsPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
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
            Now that we’ve explored verbal communication let&apos;s understand
            how non-verbal communication plays a crucial role in conveying
            emotions and attitudes.
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CommunicationSkillsSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Communication Skills"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.4.2 Non Verbal Communication
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Non-verbal communication conveys messages without words, utilizing
          body language, facial expressions, eye contact, gestures, posture, and
          other physical cues to express emotions and intentions. Observing
          subtle details about the situation and the individual enhances
          understanding of their true feelings, complementing spoken
          communication.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            {chapterFiveData?.communicationSkillsSubChapterTwo?.hading}
          </p>

          {chapterFiveData?.communicationSkillsSubChapterTwo?.skillsPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li className=" gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now that we’ve explored verbal communication let&apos;s understand
            how non-verbal communication plays a crucial role in conveying
            emotions and attitudes.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            {chapterFiveData?.communicationSkillsSubChapterTwo?.subHeading}
          </p>

          {chapterFiveData?.communicationSkillsSubChapterTwo?.SubSkillsPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li className=" gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Having discussed nonverbal communication, let&apos;s now discuss
            active listening in detail, a crucial skill for truly understanding
            students&apos; perspectives.
          </p>
        </div>
      </div>
      <Footer pageNumber={8} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CommunicationSkillsSubChapterThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Communication Skills"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.4.3 Active Listening
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          You might have heard the phrase, ‘Communication is not only about
          talking actively but also about listening actively.’ Active listening
          is a vital communication skill in career counseling, emphasizing that
          communication involves speaking and fully understanding what someone
          is saying. This enhances communication and builds relationships
          through respect, empathy, and understanding. It goes beyond hearing
          words; it requires paying attention to the speaker’s tone, body
          language, and emotions.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In career counseling, active listening is important as it keeps the
          conversation smooth. It involves listening attentively, avoiding
          distractions or interruptions, understanding the student’s
          perspective, identifying the underlying issues that the student might
          be facing, and encouraging students to reflect on their thoughts.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {
              chapterFiveData?.communicationSkillsSubChapterTwo
                ?.activeListeningHading
            }
          </p>

          {chapterFiveData?.communicationSkillsSubChapterTwo?.activeListeningPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li className=" gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            After actively listening to students and stakeholders, the next step
            is to ask the right questions to clarify their thoughts and gather
            useful details, allowing for more effective guidance. Let’s
            understand this in more detail.
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CommunicationSkillsSubChapterFour = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Communication Skills"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.4.4 Asking the Right Questions
        </h1>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            {
              chapterFiveData?.communicationSkillsSubChapterTwo
                ?.askingQuestionsHading
            }
          </p>

          <ol className="list-decimal ml-4">
            {chapterFiveData.communicationSkillsSubChapterTwo?.askingQuestionsPoint.map(
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
        </div>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            {
              chapterFiveData?.communicationSkillsSubChapterTwo
                ?.regardingQuestionsHading
            }
          </p>

          {chapterFiveData?.communicationSkillsSubChapterTwo?.regardingQuestionsPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
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
            In conclusion, effective communication skills—verbal communication,
            non-verbal cues, active listening, and asking the right
            questions—are essential for career counselors. These skills enable
            counselors to connect with students, uncover their aspirations, and
            guide them toward informed career choices. By applying the tips and
            techniques we&apos;ve discussed, you can create a supportive
            environment for students that encourages self-discovery and growth.
            Moreover, honing these communication skills lays the groundwork for
            vital interpersonal skills like empathy, self-awareness, and a
            positive attitude, which are crucial for building strong
            relationships with students.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Let&apos;s understand these interpersonal skills in detail to
            discover how they can make your counseling more effective.{" "}
          </p>
        </div>
      </div>
      <Footer pageNumber={10} title={"Mission Margdarshan"} />
    </div>
  );
};
export const InterpersonalSkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Interpersonal Skills"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.5 Interpersonal Skills
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Interpersonal skills are used in a social setting to interact with
          individuals. While they may seem similar to communication skills,
          there’s a distinction: communication skills focus on exchanging
          information, whereas interpersonal skills emphasize developing and
          maintaining connections, regardless of whether a conversation is
          taking place. These skills involve understanding and reciprocating a
          person&apos;s emotions, energy, and perspectives, going beyond mere
          information exchange.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Strong interpersonal skills are vital for career counselors to
          recognize and respond to students&apos; feelings, motivations, and
          viewpoints. Key interpersonal skills include &nbsp;
          <span className="font-bold"> empathy, self-awareness,</span> &nbsp;
          and &nbsp;<span className="font-bold">a positive attitude.</span>
          &nbsp; By fostering cooperation and collaboration through these
          skills, counselors can enhance their relationships with students,
          leading to more meaningful guidance and support throughout career
          exploration.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let&apos;s shed light on each of these key interpersonal skills to
          understand them in detail.
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-6 pb-4 tracking-[1.5px]">
          5.5.1 Empathy
        </h1>

        <p className="text-xs font-normal text-black-gray-100">
          Empathy is the ability to understand and share another person&apos;s
          feelings. It involves two key aspects: comprehending the
          individual&apos;s emotions and resonating with those feelings. A
          common phrase that encapsulates this concept is “putting oneself in
          the shoes of another.” This means genuinely feeling what the other
          person is experiencing by understanding their situation.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In career counseling, students often navigate a complex web of
          expectations from family, peers, and their own aspirations, which can
          create significant pressure. Deciding a career path can be
          overwhelming, especially as they juggle academic demands and personal
          goals. As career counselors, it is essential to recognize
          students&apos; unique challenges. By practicing empathy, you can truly
          understand their feelings of uncertainty and stress. Your role
          involves guiding them through these difficulties with compassion and
          insight. By building an empathetic connection, you help students feel
          acknowledged and supported and empower them to make informed career
          choices that align with their passions and strengths. This approach
          fosters trust, allowing students to open up about their concerns and
          aspirations, ultimately leading to more effective counseling outcomes.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterFiveData?.interpersonal?.empathyHading}
          </p>

          {chapterFiveData?.interpersonal?.empathyPoint?.map((item, i) => (
            <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
              <li className=" gap-1">
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.title} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now, let’s explore the next interpersonal skill, which is
            Self-Awareness.
          </p>
        </div>
      </div>
      <Footer pageNumber={11} title={"Mission Margdarshan"} />
    </div>
  );
};
export const InterpersonalSubChapterOne = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Interpersonal Skills"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.5.2 Self Awareness
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          As we develop empathy for our students, it’s equally important to
          cultivate self-awareness, enabling us to recognize our feelings,
          biases, and reactions in counseling. Self-awareness is the ability to
          understand and acknowledge our thoughts, feelings, values, and
          behaviors, both internally and externally. It can be divided into two
          categories: &nbsp;
          <span className="font-bold"> internal self-awareness, </span>
          &nbsp;which involves recognizing how our values, beliefs, passions,
          and aspirations fit into our environment and affect our reactions,
          and&nbsp;
          <span className="font-bold"> external self-awareness</span>&nbsp;,
          which is understanding how others perceive us based on those same
          factors. Developing self-awareness helps career counselors navigate
          the complexities of their roles, allowing them to connect better with
          their students and enhance the overall counseling experience.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In career counseling, self-awareness is essential as it enables
          counselors to recognize their biases and assumptions about various
          careers, students&apos; concerns, their relationships with parents,
          backgrounds, etc., ensuring a more objective approach without
          projecting these biases onto students. It also allows counselors to
          establish healthy boundaries by identifying their emotional triggers
          and limitations, fostering productive professional relationships.
          Additionally, it enhances empathy, enabling counselors to connect
          deeply with students’ emotions and perspectives.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          It is also important to encourage students to practice self-awareness.
          Counselors can facilitate self-reflection and help them gain insights
          into their career aspirations. This helps create a safe environment,
          maintain boundaries, and conduct meaningful counseling sessions.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterFiveData?.interpersonal?.selfAwarenessHading}
          </p>

          {chapterFiveData?.interpersonal?.selfAwarenessPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li className=" gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Let’s now understand more about the third interpersonal skill,
            Positive Attitude.
          </p>
        </div>
      </div>
      <Footer pageNumber={12} title={"Mission Margdarshan"} />
    </div>
  );
};
export const InterpersonalSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Interpersonal Skills"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.5.3 Positive Attitude
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          A positive attitude is a mental and emotional state characterized by
          optimism, hopefulness, and confidence. This mindset is vital for
          career counselors and students, as it influences how they approach
          challenges and seize opportunities in life. For career counselors,
          cultivating a positive attitude is essential for their well-being and
          inspiring students to develop a similar outlook.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          When career counselors exhibit a positive attitude, they set the tone
          for their interactions with students. This encourages students to view
          themselves positively and engage constructively with their career
          paths. This can lead to enhanced self-perception and greater
          resilience in the face of setbacks. Conversely, when students feel
          supported and valued by their counselors, they are more likely to
          adopt an optimistic mindset, which can significantly influence their
          career aspirations and overall success.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career counselors can help build a strong foundation for personal
          growth and achievement by fostering a positive attitude in themselves
          and their students. This enables both parties to navigate their
          journeys with confidence and hope.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterFiveData?.interpersonal?.positiveAttitudeHading}
          </p>

          {chapterFiveData?.interpersonal?.positiveAttitudePoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li className=" gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In conclusion, developing strong interpersonal skills, including
            empathy, self-awareness, and a positive attitude, is essential for
            career counselors. These skills enable counselors to connect deeply
            with their students, fostering an environment of trust and support.
            Counselors can understand and relate to their students&apos;
            experiences by practicing empathy creating a safe space for open
            communication. Self-awareness helps counselors recognize their
            biases and emotional triggers, ensuring they provide objective and
            effective guidance. Lastly, maintaining a positive attitude empowers
            counselors and inspires students to adopt a similar outlook,
            enhancing their confidence and motivation in navigating their career
            paths. These interpersonal skills lay the foundation for meaningful
            counseling relationships that can significantly impact
            students&apos; personal and professional growth.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            It is equally important for counselors to cultivate critical
            thinking skills, such as analytical skills, problem-solving, and
            planning skills. These abilities complement interpersonal skills by
            enabling counselors to assess situations effectively, devise
            practical solutions, and develop actionable plans for their
            students’ career development. Let’s explore these critical thinking
            skills in detail.
          </p>
        </div>
      </div>
      <Footer pageNumber={13} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CriticalThinkingSkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Critical Thinking Skills"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.6 Critical Thinking Skills
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Critical thinking skills are essential for logically evaluating
          information, establishing relationships between different data points,
          and connecting them in a structured manner to reach informed
          conclusions. These skills involve analyzing complex problems, making
          decisions, and applying logic to the available data. For career
          counselors, mastering critical thinking is crucial, especially during
          the decision-making phase when synthesizing various information about
          a student&apos;s strengths, interests, and aspirations.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In career counseling, critical thinking enables counselors to
          effectively assess students&apos; unique circumstances and identify
          the most suitable career paths for them. By employing analytical
          skills, counselors can evaluate each student&apos;s capabilities and
          potential challenges, allowing for tailored guidance that meets their
          individual needs. Problem-solving skills are invaluable when
          developing creative strategies to overcome obstacles students may
          encounter while planning skills assist in outlining clear, actionable
          steps toward achieving career goals.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Overall, critical thinking skills facilitate a comprehensive
          understanding of students&apos; situations, empowering counselors to
          provide personalized and effective support as they navigate the
          complexities of their career choices and transitions.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let’s understand each of these skills under critical thinking in
          detail:
        </p>
      </div>
      <Footer pageNumber={14} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CriticalSubChapterOne = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Critical Thinking Skills"} />

        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.6.1 Analytical Skills
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Analytical skills refer to the ability to systematically evaluate
          information, identify patterns, and draw meaningful conclusions from
          data. These skills are essential for career counselors, as they allow
          for a deeper understanding of students&apos; unique profiles and
          facilitate effective guidance in their career planning.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In career counseling, analytical skills prove particularly important
          when interpreting reports of Career Guidance Assessment. By analyzing
          these reports, counselors can gain valuable insights into
          students&apos; competencies, interests, and personality traits. This
          analysis helps map the right careers that align with each
          student&apos;s strengths and aspirations. Moreover, strong analytical
          skills enable counselors to identify trends and correlations within
          data, allowing for more informed decision-making.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          To enhance analytical skills, counselors can employ techniques such as
          breaking down complex problems into smaller, manageable parts, using
          visual aids like charts and graphs, etc.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterFiveData?.criticalThinking?.criticalThinkingHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterFiveData.criticalThinking?.criticalThinkingPoint.map(
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
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterFiveData?.criticalThinking?.regardingAnalyticalHading}
          </p>

          {chapterFiveData?.criticalThinking?.regardingAnalyticalPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li className=" gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Another essential skill under critical thinking is
            <span className="font-bold"> Problem-Solving Skills</span>, which
            we&apos;ll explore now.
          </p>
        </div>
      </div>
      <Footer pageNumber={15} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CriticalSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Critical Thinking Skills"} />

        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.6.2 Problem Solving Skill
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Problem-solving skills are critical in providing effective career
          counseling, enabling counselors to help students navigate challenges,
          resolve conflicts, and make informed decisions about their futures.
          This skill involves systematically identifying, analyzing, and
          addressing obstacles to reach practical solutions. For career
          counselors, mastering problem-solving is key to guiding students
          through various challenges, such as unclear career paths, unrealistic
          expectations, or uncertainties about their strengths. These skills are
          invaluable in addressing mismatches between a student&apos;s
          aspirations and abilities, resolving confusion about career choices,
          or helping students reconcile personal interests with external
          pressures.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          By applying problem-solving techniques, counselors can provide
          clarity, assist students in developing realistic action plans, and
          empower them to pursue their goals confidently. Whether interpreting
          assessment reports, mapping abilities and interests, or managing
          conflicts between career aspirations and realities, problem-solving is
          essential for creating structured, informed, personalized career
          pathways. Problem-solving is a structured approach that helps career
          counselors guide students through challenges and conflicts in their
          career development.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let&apos;s explore the key steps involved in effective
          problem-solving:
        </p>

        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterFiveData?.criticalThinking?.problemSolvingHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterFiveData.criticalThinking?.problemSolvingPoint.map(
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
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterFiveData?.criticalThinking?.regardingProblemHading}
          </p>

          {chapterFiveData?.criticalThinking?.regardingProblemPoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
                <li className=" gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Lastly, let&apos;s explore one of the most crucial critical thinking
            skills: Planning Skills.
          </p>
        </div>
      </div>
      <Footer pageNumber={16} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CriticalSubChapterThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Critical Thinking Skills"} />

        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.6.3 Planning Skill
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Planning skills are essential in career counseling as they empower
          counselors and students to set clear objectives and create a
          structured roadmap for achieving career goals. These skills facilitate
          an organized approach to the counseling process, allowing counselors
          to guide students more effectively. By mastering planning, counselors
          can assist students in breaking down large career aspirations into
          smaller, manageable tasks, making progress more attainable and less
          overwhelming. Effective planning helps students gain clarity on their
          career paths, understand the steps they need to take, and build
          confidence in their decision-making abilities.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Moreover, planning skills enhance the overall effectiveness of the
          counseling experience by ensuring that each session is purposeful and
          aligned with the student’s needs and goals. They enable counselors to
          tailor their approach, anticipate potential challenges, and create
          contingency plans, fostering a proactive counseling environment. By
          establishing a clear framework, planning also helps maintain student
          engagement and motivation throughout the career development journey.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          This foundational skill is important for individual sessions and
          crucial for the entire counseling process, which we will explore
          further in the next module.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterFiveData?.criticalThinking?.planningHading}
          </p>

          {chapterFiveData?.criticalThinking?.planningPoint?.map((item, i) => (
            <ul key={`content-point-${i}`} className="pb-1 list-disc ml-6">
              <li className=" gap-1">
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.title} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-bold text-black-gray-100">
            {chapterFiveData?.criticalThinking?.regardingPlanningHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterFiveData.criticalThinking?.regardingPlanningPoint.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-no text-black-gray-100 pt-1"
                >
                  {item?.title} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </li>
              )
            )}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In conclusion, critical thinking skills encompass analytical,
            problem-solving, and planning skills are vital in effective career
            counseling. By leveraging these skills, counselors can help students
            navigate challenges, set achievable goals, and develop actionable
            plans tailored to their aspirations. Analytical skills enhance the
            counselor&apos;s ability to evaluate information critically,
            recognize patterns, and make informed decisions. These skills
            promote clear communication and logical analysis, empowering
            counselors and students to approach career choices thoughtfully.
            Ultimately, honing these critical thinking skills leads to a more
            structured and effective counseling process, fostering positive
            outcomes and enabling students to pursue their career paths
            confidently.
          </p>
        </div>
      </div>
      <Footer pageNumber={17} title={"Mission Margdarshan"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Conclusion"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.7 Conclusion
        </h1>

        {chapterFiveData?.conclusion?.map((item) => {
          return (
            <p
              key={item}
              className="text-xs font-normal text-black-gray-100 pt-2"
            >
              {item}
            </p>
          );
        })}
      </div>
      <Footer pageNumber={18} title={"Mission Margdarshan"} />
    </div>
  );
};
