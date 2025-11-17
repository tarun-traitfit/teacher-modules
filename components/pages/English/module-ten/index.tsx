import Header from "@/components/header";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Footer from "@/components/footer";
import { chapterTen, chapterTenData } from "@/utils/cover";
import React from "react";
import Link from "next/link";

const ModuleTen = () => {
  return (
    <>
      <Cover
        title={"MODULE 10"}
        characterTitle={"Ethical Guidelines"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
       projectName={"Mission Margdarshan"}
        tableOfContents={chapterTen}
      />
      <Introduction />
      <EthicsCareer />
      <EthicalGuidelines />
      <Confidentiality />
      <ConfidentialityItsLimits />
      <NonDiscrimination />
      <ConflictOfInterest />
      <CulturalSensitivity />
      <PracticalAspects />
      <Countertransference />
      <SexualOffenses />
      <POCSOAct />
      <DosAndDonts />
      <Conclusion />
    </>
  );
};
export default ModuleTen;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Introduction"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.1 Introduction
        </h1>

        <div>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Welcome to the final module of the training program: &nbsp;
            <span className="font-bold">
              Ethical Guidelines in Career Counseling.
            </span>
            &nbsp; Congratulations on reaching this stage of the course.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In the previous modules, we covered various aspects of career
            counseling, including assessment tools, conflict resolution, and
            providing personalized guidance to students. Now, we turn our focus
            to a crucial element that shapes the counseling process— &nbsp;
            <span className="font-bold">Ethics</span>
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In this module, we will delve into the ethical principles that form
            the foundation of effective and responsible career counseling. The
            focus will be on understanding how ethics play a crucial role in the
            counseling process.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            We will begin by discussing the basics of ethics and their
            importance in career counseling. Following this, we will explore
            essential ethical considerations, including &nbsp;
            <span className="font-bold">
              Confidentiality, Non-discrimination, Conflict of interest,
            </span>
            &nbsp; and&nbsp;
            <span className="font-bold">Cultural sensitivity.</span>
            &nbsp;We will also cover the practical aspects of&nbsp;
            <span className="font-bold">Transference</span>
            &nbsp;and&nbsp;
            <span className="font-bold">Countertransference</span>
            &nbsp;during counseling sessions.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Additionally, we will examine the &nbsp;
            <span className="font-bold">
              Protection of Children from Sexual Offenses Act,
            </span>
            &nbsp;highlighting its relevance to career counseling.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Finally, the module will provide a set of &nbsp;
            <span className="font-bold">Dos and Don’ts</span>
            &nbsp;to guide you in adhering to ethical standards while working
            with students.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            By the end of this module, you will have a solid understanding of
            how to incorporate ethical guidelines into your career counseling
            practice, ensuring your sessions are both effective and responsible.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Let’s get started with understanding the basics and significance of
            ethics in career counseling.
          </p>
        </div>
      </div>
      <Footer pageNumber={2} title={"Mission Margdarshan"} />
    </div>
  );
};
export const EthicsCareer = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Ethics in Career Counseling"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.2 Ethics in Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In the recent decade, there has been an exponential growth in the
          demand for Career counseling in India. More and more individuals seek
          career counseling sessions each year to find their dream careers. To
          make the career counseling process efficient and effective, students
          must be guided in the right direction based on what is good for them
          and not other reasons. It is crucial to understand that career
          counseling should provide accurate and unbiased advice. This makes it
          essential for counselors to uphold professional integrity and ethics
          throughout the sessions.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Hence, it becomes very important to discuss the concepts related to
          professional integrity and ethics that must be maintained during these
          sessions.
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
          In India, various professional bodies, such as the National Career
          Service (NCS), the National Council of Educational Research and
          Training (NCERT), the International Association of Career Advisors
          (IACA), and the Career Development Association of India (CDAI), guide
          the ethical principles of career counseling. These organizations
          provide guidelines and codes of conduct for career counselors, which
          outline the ethical standards they are expected to uphold in their
          practice.
        </p>
        <div className="pt-6">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterTenData?.ethicsCareer?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.ethicsCareer.ethicsCareerPoints.map((item, i) => (
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
            The above ethical considerations help career counselors provide
            students with unbiased, effective, and high-quality advice.
            Counselors must uphold these standards in their practice to maintain
            their students&apos; trust and confidence and contribute to the
            growth and development of the field.
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};
export const EthicalGuidelines = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            " Why is it important to follow Ethical Guidelines in Career Counseling?"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.3 Why is it important to follow Ethical Guidelines in Career
          Counseling?
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Ethics play a crucial role in career counseling because they ensure
          that counselors provide reliable and unbiased advice to their
          students, maintain professional integrity, and avoid any harm or
          potential harm to students.
        </p>

        <div className="pt-6">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterTenData?.ethicalGuidelines?.heading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.ethicalGuidelines.ethicalGuidelinesPoints.map(
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
            As discussed above, following ethics in Career Counseling helps
            career counselors maintain professional standards, build trust and
            credibility with students, and contribute to the positive
            development of the profession.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In the next section, we will discuss in detail the ethical
            considerations that were discussed at the beginning of the module.
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};
export const Confidentiality = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Confidentiality and Privacy"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.4 Confidentiality and Privacy
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In Career Counseling, confidentiality establishes an environment where
          the student can discuss difficult topics with the confidence that the
          counselor won&apos;t misuse or repeat the information communicated
          elsewhere than the counseling room. Confidentiality sets counseling
          apart from other relationships, as the career counselor is ethically
          and professionally obligated to keep any information shared private,
          maintaining confidentiality within specific ethical boundaries. Before
          beginning counseling sessions with a counselor, the counselor should
          clearly explain to the students that the interactions between them and
          the counselor will remain between them unless it becomes absolutely
          necessary to disclose it under certain circumstances.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Maintaining confidentiality and privacy helps make career counseling
          sessions more effective. Let’s look at the varied purposes it serves
          in the counseling process.
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.4.1 Purpose of Confidentiality and Privacy in Career Counseling
        </h1>
        <div className="pt-6">
          {chapterTenData.confidentiality.map((item, i) => (
            <ul key={`content-point-${i}`} className="pb-2 list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.title} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Confidentiality and privacy are critical components of career
            counseling that can help create a safe and supportive environment
            between career counselors and students. This helps build trust and
            rapport, ensuring the best career advice is given to the students.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now, let’s look at scenarios in which confidentiality needs to be
            balanced with other concerns that might arise due to the information
            shared or observations made by the counselor during the counseling
            sessions.
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};
export const ConfidentialityItsLimits = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Confidentiality and Privacy"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.4.2 Confidentiality and Its Limits: Balancing Privacy and
          Protection
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          While confidentiality and privacy are essential aspects of career
          counseling, there are a few limitations that should be considered.
          Career counselors may need to break confidentiality in certain
          circumstances to protect their students&apos; or others&apos; safety
          and well-being. Here are some examples of situations where a career
          counselor may need to break confidentiality:
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Here are some examples:
        </p>

        <div>
          {chapterTenData.confidentialityLimitsPoint.map((item, i) => (
            <ul key={`content-point-${i}`} className="pb-2 list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.title} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal italic text-black-gray-100">
            <span className="font-bold"> Note:</span>&nbsp; Students may not
            fully understand the limitations of confidentiality and privacy in
            career counseling. The counselor must communicate these boundaries
            and limitations to the student and obtain the student&apos;s
            informed consent to participate in counseling.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            When a career counselor breaks confidentiality, it should be done to
            prioritize students&apos; safety and well-being while respecting
            their privacy. The counselor must protect the student’s information
            and privacy while keeping in line with the country&apos;s existing
            ethical and legal framework.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now, in the next section, let us understand the second ethical
            consideration in detail.
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};
export const NonDiscrimination = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Non-Discrimination"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.5 Non-Discrimination
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Non-discrimination plays a crucial part in career counseling. It helps
          to ensure that all students have equal access to career counseling
          services and opportunities regardless of their ethnic, cultural, and
          socio-economic background, identity, or personal characteristics.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Here are some examples:
        </p>
        <div>
          <p className="text-xs font-normal text-black-gray-100">
            {chapterTenData?.nonDiscrimination?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.nonDiscrimination.nonDiscriminationPoints.map(
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
            By promoting non-discrimination and prioritizing these principles,
            career counselors can ensure that all students seeking career
            counseling have equal access to the services and resources needed to
            make informed decisions about their career paths.
          </p>
        </div>

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Practical tips to avoid Discrimination:
        </p>
        <div>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            {chapterTenData?.nonDiscrimination?.practicalTipsHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.nonDiscrimination.practicalTipsPoints.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-1"
                >
                  {item}
                </li>
              )
            )}
          </ol>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now, in the next section, let us understand the third ethical
            consideration in detail.
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};
export const ConflictOfInterest = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Conflict of Interest"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.6 Conflict of Interest
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Conflict of Interest may interfere with the counselor’s ability to
          provide unbiased and objective counseling to their students. It can
          arise in various situations in career counseling, such as when a
          counselor has a financial interest in a particular career path or
          industry or a personal relationship with a student.
        </p>

        <div>
          <p className="text-xs font-normal text-black-gray-100">
            {chapterTenData?.conflictOfInterest?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.conflictOfInterest.conflictOfInterestPoints.map(
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

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Practical tips to avoid Conflict of Interest:
        </p>
        <div>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            {chapterTenData?.conflictOfInterest?.practicalTipsHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.conflictOfInterest.practicalTipsPoints.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-1"
                >
                  {item}
                </li>
              )
            )}
          </ol>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Conflict of interest can significantly impact the effectiveness and
            ethicality of career counseling. By recognizing and addressing
            potential conflicts of interest, career counselors can ensure that
            they provide objective and unbiased advice to their students.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now, in the next section, let us understand the fourth ethical
            consideration in detail.
          </p>
        </div>
      </div>
      <Footer pageNumber={8} title={"Mission Margdarshan"} />
    </div>
  );
};
export const CulturalSensitivity = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Cultural Sensitivity"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.7 Cultural Sensitivity
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Cultural Sensitivity plays an important role in career counseling. It
          involves being aware and respectful of students&apos; diverse cultural
          backgrounds, beliefs, and values. This helps career counselors
          navigate the unique challenges that students might face due to their
          cultural backgrounds. The counselor should try to identify
          opportunities and career paths that align with the student’s values
          and cultural identities.
        </p>

        <div>
          <p className="text-xs font-normal text-black-gray-100">
            {chapterTenData?.culturalSensitivity?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.culturalSensitivity.culturalSensitivityPoints.map(
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
            By promoting cultural sensitivity in their counseling sessions,
            career counselors can help students identify career paths that align
            with their values and cultural identities and ensure they can
            achieve their career goals.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            So far, we have discussed the ethical considerations of career
            counseling in detail. Now, let’s move to the next section to examine
            the practical aspects that need to be considered during career
            counseling.
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"Mission Margdarshan"} />
    </div>
  );
};
export const PracticalAspects = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Practical Aspects to be Considered During Career Counseling"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.8 Practical Aspects to be Considered During Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The two important practical aspects that a career counselor should
          consider during career counseling are Transference and
          Countertransference. In career counseling, transference and
          countertransference are crucial concepts because they can
          significantly impact the counselor-student relationship and the
          effectiveness of the counseling process.
        </p>

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Concept of Transference:{" "}
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Transference occurs when students unconsciously project their feelings
          and attitudes from past relationships onto the counselor. For example,
          a student might view the counselor as a parental figure, which can
          influence how they interact and respond during sessions.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Transference is critical in career counseling, as it influences the
          counseling relationship and the student’s self-exploration. Counselors
          who recognize and address transference can facilitate deeper
          understanding and positive change in their students&apos; career
          journeys by addressing students&apos; unresolved issues and navigating
          these feelings appropriately.
        </p>

        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterTenData?.practicalAspects?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.practicalAspects.practicalAspectsPoints.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-1"
                >
                  {item}
                </li>
              )
            )}
          </ol>
        </div>
        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Let us now understand this through the following scenario/case study:
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          Varada is a student from Mumbai who is studying in 10th grade. She was
          a bit nervous when she went for career counseling at school.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          The session started well, and the counselor was initially able to make
          her comfortable. However, when the counselor started to explain what
          was expected of her to prepare well for the 10th board exam, she
          started to become tense. The counselor was quick to catch on to the
          uneasiness, and as the session moved forward, he noticed that she had
          become more restless and was unable to answer questions properly. When
          the counselor asked about her parents&apos; opinion regarding her
          choices, she became more defensive and guarded. It seemed to the
          counselor that she was trying to listen and obey everything he
          suggested and was trying to win the counselor&apos;s approval.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          During their conversation, Varada revealed that her dad had high
          expectations from her about her academic performance and the career
          choice she&apos;d make. He wanted her to pursue a well-respected
          traditional career as a doctor, just like her elder sister. They
          constantly compared her to her sister, who is now excelling in her
          career and working as a surgeon at a prestigious hospital in Mumbai.
          Varada often felt inadequate and overwhelmed by the pressure to
          replicate her sibling&apos;s success.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          A skilled counselor will notice this and understand that this might be
          happening due to transference. The emotional baggage and pressure
          Varada was carrying manifested as a deep-seated fear of failure and
          not getting approval from authority figures. Because of this, she was
          trying to get praised by her counselor, and subconsciously, she was
          trying to get validation and appreciation, which her parents lacked to
          give her.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Varada subconsciously transferred the emotions, feelings, and
          attitudes associated with her relationship with her dad to the
          counselor. Her counselor unintentionally became a symbolic stand-in
          for her parents&apos; expectations and judgments. This is a classic
          example of transference in a career counseling session.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Here, understanding and recognizing these dynamics helped the
          counselor address Varada&apos;s underlying emotional issues in such
          cases. The counselor could guide her to explore her aspirations and
          interests rather than conform to external expectations, which can
          ultimately support her in making a more informed career choice.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Now, let’s move to another important concept.
        </p>
      </div>
      <Footer pageNumber={10} title={"Mission Margdarshan"} />
    </div>
  );
};
export const Countertransference = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Practical Aspects to be Considered During Career Counseling"}
          className="min-w-fit"
        />

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Concept of Countertransference
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Countertransference occurs when a counselor projects their emotional
          reactions and feelings onto a student during career counseling. These
          reactions may arise due to the counselor&apos;s past experiences,
          biases, and unresolved issues and can influence how they perceive or
          interact with the student. In career counseling, this significantly
          impacts the counselor’s relationship with the student and the
          effectiveness of the guidance provided.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          For example, a counselor might find similarities between a student’s
          situation & struggles and his own childhood experiences. This might
          cause the counselor to lose objectivity, which can influence how they
          interact and respond during sessions.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Countertransference can impact career counseling in various ways. It
          can cause counselors to misinterpret students&apos; needs by viewing
          them through personal biases and emotions. This may compromise their
          neutrality, leading to biased advice. As a result, students could feel
          misunderstood or burdened, affecting their trust and openness during
          counseling.
        </p>

        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterTenData?.countertransference?.hading}
          </p>

          {chapterTenData.countertransference.countertransferencePoints.map(
            (item, i) => (
              <ul key={i} className="list-disc ml-4">
                <li className="text-xs font-normal text-black-gray-100 pt-1">
                  {item}
                </li>
              </ul>
            )
          )}
        </div>
        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Let us now understand this through the following scenario/case study:
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Aaryan, an 8th-grade student from a small town in Haryana, went for a
          counseling session. During the session, he shared that he aspires to
          be a famous musician. He appeared enthusiastic about discussing his
          future career possibilities. The counselor liked Aaryan&apos;s
          positive energy and began supporting his decision without paying much
          attention to other important factors to consider when making a career
          decision.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          The counselor felt triggered when his parents joined the session and
          said they wanted their son to pursue a more financially stable and
          well-reputed career. She started defending Aaryan&apos;s aspirations
          even though that was a bit unrealistic, considering he is just in 8th
          std and has not yet explored other career options. The counselor
          became biased when guiding the student, and she did not consider a
          holistic approach.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          In this case, the way the counselor behaved is a classic example of
          countertransference. Her actions during the session were the result of
          her own experience as a child. As an adolescent, she wanted to become
          an actor, but her parents did not allow her to take that path. She had
          to give up on her dream due to family pressure to pursue a more
          &quot;stable&quot; career. When she saw the same happening with
          Aaryan, she felt as if it was happening to her. The emotional reaction
          made her take Aaryan’s side and argue with the parents who were taking
          his side.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          This is a classic example of countertransference, where the emotional
          reaction comes from the counselor’s own past experiences as a child
          and causes the counselor to lose focus.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          In the previous two sections, we have understood two important
          concepts that can affect the counseling process if not addressed
          properly. Now, let’s move to the next piece of information that is
          important for you to know as a counselor.
        </p>
      </div>
      <Footer pageNumber={11} title={"Mission Margdarshan"} />
    </div>
  );
};

export const SexualOffenses = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"The Protection of Children from Sexual Offenses Act"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.9 The Protection of Children from Sexual Offenses Act
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          During career counseling, particularly when working with students, it
          is essential to prioritize their safety and well-being. As a career
          counselor, it is important for you to understand the legal frameworks
          related to dealing with minors. Counselors must be aware of the
          ethical and legal responsibilities of dealing with minors during
          career counseling sessions. One such critical legal framework that
          counselors must be familiar with is the Protection of Children from
          Sexual Offences (POCSO) Act. It establishes vital safeguards against
          abuse and exploitation.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let’s cover the important pointers of this act to get a better
          understanding.
        </p>

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          What is the POCSO Act?
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          The POCSO Act, or the Protection of Children from Sexual Offenses Act,
          is a law in India that was enacted in 2012 to protect children from
          sexual abuse and exploitation. The act defines a child as any person
          under the age of 18 years and aims to provide a safe and secure
          environment for them to grow and develop.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          According to the POCSO Act, aggravated sexual assault and aggravated
          penetrative sexual assault are both criminal offenses, as are any type
          of sexual abuse or assault involving children, including the use or
          storage of pornographic material involving children.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          The POCSO Act also stands out for being gender-neutral, acknowledging
          that boys can also become victims of sexual assault. From reporting
          and documenting evidence to investigating and putting offenders on
          trial, the POCSO Act has made an effort to be child-friendly.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          Incorporating the POCSO Act into a career counseling session can be
          important in ensuring the safety and well-being of the student or
          young person being counseled.
        </p>
        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterTenData?.sexualOffenses?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.sexualOffenses.sexualOffensesPoints.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-1"
                >
                  {item}
                </li>
              )
            )}
          </ol>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Let’s understand why it is important for counselors to know about
            this act through a case study.
          </p>
        </div>
      </div>
      <Footer pageNumber={12} title={"Mission Margdarshan"} />
    </div>
  );
};
export const POCSOAct = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"The Protection of Children from Sexual Offenses Act"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.9.1 Case study to understand the POCSO Act
        </h1>
        <p className="text-xs font-normal italic text-black-gray-100 pt-4">
          In this scenario, A is a career counselor, and B is a student. B came
          to a career counselor (A) for guidance on pursuing a medical career.
          They started discussing the career path, but while discussing her
          studies, the counselor realized that B was uncomfortable, losing focus
          and feeling restless. So, he asked her about the reason behind it. A
          noticed that B seemed hesitant and uncomfortable.
        </p>

        <p className="text-xs font-normal italic text-black-gray-100 pt-4">
          A starts to suspect that B may be going through something serious. A
          remembers that as a career counselor in a school, he must follow
          strict guidelines to ensure the safety and well-being of children. So,
          he decides to ask her some questions to find out if there is anything
          that she needs help with.
        </p>

        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          He starts by asking the student if anything is bothering her or making
          her feel uncomfortable. B initially hesitates, but after some
          reassurance from the counselor, she eventually opens up and says that
          she has been sexually harassed by one of the staff members in school.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          Now, the counselor realizes that this is a serious issue and that he,
          as a career counselor, is not the right person to handle such a
          situation. At this point, he realizes that the problem is outside his
          expertise as a career counselor. However, he is also aware of his
          obligation and duty under the POCSO Act to report such matters to the
          right authorities.
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          After hearing the student out, he assures her she has done the right
          thing by speaking up. Then he explains to her that since this is a
          serious matter and under the law, he is obligated and duty-bound to
          protect her interests. For this, he would need to report the matter to
          the correct authorities so that she gets the right attention from a
          counselor trained to deal with such scenarios and to ensure that
          strict legal action is taken against the offender.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          <span className="font-bold">
            As we have seen in the scenario as career counselors when faced with
            such a situation, one needs to be aware of legal obligations and, at
            the same time, be mindful of their limitations as career counselors
            and NOT step into the domain of psychologists, social workers, or
            NGO counselors by trying to counsel the student on your own.
          </span>
          As it is mandatory for the career counselor under POCSO to inform the
          concerned authority of this situation, the counselor should report the
          matter to the concerned authorities while ensuring the student&apos;s
          best interest.
        </p>
        <div>
          <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
            10.9.2 Where to report a case of POCSO?
          </h1>
          <p className="text-xs font-bold text-black-gray-100 pt-4">
            {chapterTenData?.pocsoAct?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.pocsoAct?.pocsoActPoints.map((item, i) => {
              return (
                <li
                  key={i}
                  className="text-xs font-normal text-black-gray-100 pt-1"
                >
                  {item} &nbsp;
                  {i !== 0 && ( // Ensure the link is not shown for the first item
                    <Link
                      href="https://shebox.wcd.gov.in/"
                      target="_blank"
                      className="font-bold"
                    >
                      https://shebox.wcd.gov.in/
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In this module, we have discussed the importance of ethical
            guidelines and legal frameworks like the POCSO Act in career
            counseling. In the next section, we will provide a quick reference
            on the dos and don’ts of following these ethical guidelines during
            career counseling.
          </p>
        </div>
      </div>
      <Footer pageNumber={13} title={"Mission Margdarshan"} />
    </div>
  );
};

export const DosAndDonts = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Dos and Don’ts while following ethical guidelines during career counseling"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.10 Dos and Don’ts while following ethical guidelines during career
          counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          This section will give you a snapshot of the dos and don’ts that the
          career counselor should remember during career counseling.
        </p>

        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterTenData?.dosAndDonts?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.dosAndDonts?.dosPoints.map((item, i) => (
              <li
                key={i}
                className="text-xs font-bold text-black-gray-100 pt-1"
              >
                {item?.title} &nbsp;
                <span className="font-normal">{item?.value}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs font-bold text-black-gray-100 pt-4">
            {chapterTenData?.dosAndDonts?.dontsHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterTenData.dosAndDonts?.dontsPoints.map((item, i) => (
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
            Following the above-mentioned Dos and Don’ts are essential in career
            counseling to ensure students&apos; well-being. By following clear
            dos and don’ts, counselors can create a safe, supportive, and
            unbiased environment that fosters informed decision-making and
            protects students&apos; interests. Upholding these ethical standards
            builds credibility and trust and ensures that counselors responsibly
            guide students toward their future careers.
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
          10.11 Conclusion
        </h1>

        <div>
          {chapterTenData.conclusion.map((item, i) => (
            <p key={i} className="text-xs font-normal text-black-gray-100 pt-4">
              {item}
            </p>
          ))}
        </div>
      </div>
      <Footer pageNumber={15} title={"Mission Margdarshan"} />
    </div>
  );
};
