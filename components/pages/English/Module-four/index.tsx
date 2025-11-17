import { chapterFour, chapterFourData } from "@/utils/cover";

import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import Cover from "../../cover";
import ContentPage from "../../contents-page";

const ModuleFour = () => {
  return (
    <>
      <Cover
        title={"MODULE 4"}
        characterTitle={"Important Stakeholders in Career Counseling"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"CONTENTS"}
        title={"TITLE "}
        pageNo={"PAGE NO."}
        tableOfContents={chapterFour}
       projectName={"Mission Margdarshan"}
      />
      <Introduction />
      <ImportantStakeholders />
      <RoleOfStudents />
      <RoleOfStudentsSubChapter />
      <ParentsInfluence />
      <ParentsSubFirstChapter />
      <ParentsSubSecondChapter />
      <ParentsSubThreeChapter />
      <TeachersKeyStakeholders />
      <InfluencingCareerChoices />
      <InfluencingSecondSubChapter />
      <InfluencingThreeSubChapter />
      <InfluencingFourSubChapter />
      <Conclusion />
    </>
  );
};
export default ModuleFour;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Introduction"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.1 Introduction
        </h1>
        <div className="pt-4">
          {chapterFourData?.introduction?.map((item, i) => (
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

export const ImportantStakeholders = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Important Stakeholders in Career Counseling"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.2 Important Stakeholders in Career Counseling
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Career counseling involves a collaborative effort from various
          stakeholders, each contributing to students&apos; career choices and
          decision-making process. These stakeholders contribute to shaping the
          career trajectories of students and impact the decision-making
          process. These stakeholders include students, parents, peers,
          teachers, etc. Each stakeholder contributes in unique ways, offering
          support, advice, and sometimes even pressure through expectations.
          Understanding the significance of these stakeholders is essential for
          effective career counseling, as it helps students navigate through the
          different perspectives they encounter. By recognizing these
          influences, students can make more informed decisions that align with
          their personal goals and aspirations.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          It is important to explore the role of each stakeholder in shaping a
          student&apos;s career journey, as their guidance and perspectives can
          either support or challenge the student’s decision-making process.
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterFourData?.importantStakeholders?.hading}
          </p>
          {/* {chapterFourData?.importantStakeholders?.importantPoints?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-2 ml-1">
                <li className="flex items-start gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {i + 1}.
                  </p>
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )} */}
          <ol className="list-decimal ml-4">
            {chapterFourData?.importantStakeholders?.importantPoints.map(
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
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Having briefly understood the role of each stakeholder, we will now
            proceed to an in-depth understanding of how multiple factors
            influence students and parents in their decision-making process.
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"Mission Margdarshan"} />
    </div>
  );
};

export const RoleOfStudents = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Role of Students in Career Choices and Career Decision-making"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.3 Role of Students in Career Choices and Career Decision-making
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          While discussing the key stakeholders, we identified students as the
          central figures in any career counseling process. They play the most
          important role in making career choices and decisions, as these
          decisions will ultimately shape their future careers. Students need to
          remain focused and open to the ideas and guidance from others, but in
          the end, the responsibility to choose the career lies with them, after
          carefully weighing all options and their pros and cons.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          A critical factor that influences career choices is the student&apos;s
          age, specifically the period of adolescence. Let’s explore more about
          the adolescence period. We will also look at a theoretical framework
          to better understand adolescence as a stage of human development. This
          will help explain how this developmental phase influences
          students&apos; career choices and decision-making, particularly in the
          context of identity formation.
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-4">
          Age: Period of Adolescence
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          Adolescence is a critical phase of development that greatly impacts a
          student’s life, especially their career choices and decisions. During
          this period, typically from around the age of 10 to 19, individuals
          undergo various physical, emotional, cognitive, and social changes
          that shape their attitudes, beliefs, and aspirations. In this phase,
          individuals begin to develop a sense of self-identity, which
          significantly affects their life choices. These changes also play a
          key role in shaping how students approach their career decisions.
          Adolescence is a transformative phase bridging childhood and
          adulthood, a period of remarkable growth, self-discovery, and
          exploration. One of its key aspects is its influence on an
          individual&apos;s career choices and decisions. The complex
          relationship between identity development during this period and
          career decision-making is well-explained by psychological theories,
          such as James Marcia&apos;s Identity Development Theory.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let’s understand the theory and its role in detail:
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.3.1 James Marcia’s Theory of Identity Development:
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In a person’s life, adolescence is a phase of confusion and
          experimentation regarding identity and choosing the right path
          forward. Based on this, James Marcia proposed the theory of Identity
          statutes of psychological identity development, where he stated that
          individuals explore and commit to different identities based on their
          preferences and alignment to self. Identity development begins when
          individuals look up to role models who provide them with ideas about
          who they might become. As this development continues, adolescents are
          expected to make decisions and commit to certain options, all within
          the limits of their social environment. In some cases, if enough
          options for explorations are not provided or are limited, an
          individual might fail to commit or commit too quickly without
          considering other possibilities.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Based on the level of exploration and commitment to options, the
          theory introduces four distinct identity statuses:
          <span className="font-bold">
            Identity Diffusion, Identity Foreclosure, Identity Moratorium, and
            Identity Achievement.
          </span>
          In this context, &quot;status&quot; refers to a particular stage of
          identity development, reflecting where an individual stands in terms
          of exploration and commitment, especially related to their career and
          life choices. These statuses highlight the dynamics between
          self-discovery, external influences, and commitment, especially within
          the context of career choices and decision-making. Let us now look
          into these statuses, one by one -
        </p>
      </div>
      <Footer pageNumber={4} title={"Mission Margdarshan"} />
    </div>
  );
};
export const RoleOfStudentsSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "Role of Students in Career Choices and Career Decision-making"
          }
          className="min-w-fit"
        />

        <div className="pt-4">
          {/* {chapterFourData?.roleOfStudentsSubChapter?.map((item, i) => (
            <ul key={`content-point-${i}`} className="pb-2 ml-1">
              <li className="flex items-start gap-1">
                <p className="text-xs font-bold text-black-gray-100">
                  {i + 1}.
                </p>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.title} &nbsp;
                  {item?.value?.map((data, index) => (
                    <span key={`value-${index}`} className="font-normal">
                      {data}
                    </span>
                  ))}
                </p>
              </li>
            </ul>
          ))} */}

          <ol className="list-decimal ml-4">
            {chapterFourData?.roleOfStudentsSubChapter.map((item, i) => {
              return (
                <>
                  <li
                    key={i}
                    className="text-xs font-bold text-black-gray-100 pt-1"
                  >
                    {item?.title} &nbsp;
                    {item?.value?.map((data, index) => (
                      <span key={`value-${index}`} className="font-normal">
                        {data}
                      </span>
                    ))}
                  </li>
                </>
              );
            })}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In the above sections, we have covered an important theory regarding
            the adolescent stage of human development. This theory provides
            valuable insights into how career choices are approached and
            highlights the close connection between identity formation and
            adolescents&apos; decision-making processes. It offers a solid
            framework for understanding the interplay between identity
            development and career choices.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            So far we have understood adolescence as a stage of development, the
            concept of Identity formation, and its impact on the career
            decision-making process. Let us see in the next section, Parents and
            their influence on the student’s career choices and decision-making,
            as they directly impact it.
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ParentsInfluence = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Parents and their Influence on Career Choice and Decision"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.4 Parents and their Influence on Career Choice and Decision
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Parents play a key role in shaping their children&apos;s lives,
          especially in adolescence and in making career choices. Their
          influence goes beyond simple advice; they often act as role models,
          offering support and encouragement during this important time. They
          help students navigate the challenges of identity formation and
          decision-making by sharing their own experiences and values. As
          students consider their goals and explore different career paths,
          parental involvement can significantly affect their confidence and
          direction.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          To better understand parental influence, we need to explore three key
          aspects: parenting styles, parental expectations, and the level of
          exposure parents provide in life. Let us understand these one by one.
        </p>
      </div>
      <Footer pageNumber={6} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ParentsSubFirstChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-2">
        <Header
          title={"Parents and their Influence on Career Choice and Decision"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.4.1 Parenting Styles
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Parenting styles refer to the different ways in which parents raise
          their children, influencing their behavior and development.
          Psychologist Diana Baumrind introduced this concept in the 1960s,
          categorizing them into four distinct styles based on how responsive
          parents are to their children&apos;s needs and feelings and how
          demanding they are in setting expectations and rules for behavior.
          Understanding these styles can help us see how parents interact with
          their children and how these interactions influence the child&apos;s
          behavior, overall development, and psychological well-being. Let us
          understand each style of parenting -
        </p>

        <div className="pt-2">
          {chapterFourData?.parentsInfluence.category.map(
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
                      <ul
                        key={`subcategory-${j}`}
                        className="pt-2 list-disc ml-6"
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
            )
          )}
          <p className="text-xs font-normal text-black-gray-100">
            Being able to identify the style of parenting involved, might help
            you choose the right approach during the career counseling process.
            However, it is important to note that these parenting styles exist
            on a spectrum, and individual parents might exhibit different styles
            in different situations. Moreover, culture, personal beliefs, and
            context can influence parenting choices.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            Each parenting style influences how a child grows and experiences
            the world. It can either limit or expand the opportunities the child
            has to learn new things. This, in turn, affects their awareness of
            different career options. The authoritative style is generally
            associated with the most positive outcomes for children, promoting a
            healthy balance of independence and respect for boundaries.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Having understood the different parenting styles and how they impact
            students, we will now understand the role of parental expectations
            on career choices and decision-making.
          </p>
        </div>

        <div className="pt-4"></div>
      </div>
      <Footer pageNumber={7} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ParentsSubSecondChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-2">
        <Header
          title={"Parents and their Influence on Career Choice and Decision"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.4.2 Parental Expectations
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          India is rich in culture and here the role of parents in shaping the
          future of their children is profound. Parental expectations play a
          pivotal role in the career choices of students, often reflecting
          deeply ingrained societal values and aspirations. This influence,
          while driven by good intentions, presents a complex interplay of
          motivations, pressures, and consequences that shape the educational
          and professional paths of young individuals.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In India, family bonds are very important, and decisions regarding
          education and careers are often made together. Parents have high
          expectations for their children&apos;s success to secure their futures
          and uphold family honor. Certain professions, such as medicine,
          engineering, and civil services, are often seen as more prestigious
          and financially rewarding. As a result, these careers tend to
          influence students&apos; choices significantly. However, parental
          expectations can have both positive and negative effects. Let&apos;s
          explore each of these aspects.
        </p>

        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterFourData?.parentsSubSecondChapter?.positive?.hading}
          </p>
          {/* {chapterFourData?.parentsSubSecondChapter?.positive?.positivePoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-2 ml-1">
                <li className="flex items-start gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {i + 1}.
                  </p>
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )} */}
          <ol className="list-decimal ml-4">
            {chapterFourData?.parentsSubSecondChapter?.positive?.positivePoint.map(
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
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Despite the positive intent, the strong influence of parental
            expectations can sometimes impact student’s career choices
            negatively.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xs font-bold text-black-gray-100">
            {chapterFourData?.parentsSubSecondChapter?.negative?.hading}
          </p>
          {/* {chapterFourData?.parentsSubSecondChapter?.negative?.negativePoint?.map(
            (item, i) => (
              <ul key={`content-point-${i}`} className="pb-2 ml-1">
                <li className="flex items-start gap-1">
                  <p className="text-xs font-bold text-black-gray-100">
                    {i + 1}.
                  </p>
                  <p className="text-xs font-bold text-black-gray-100">
                    {item?.title} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                  </p>
                </li>
              </ul>
            )
          )} */}
          <ol className="list-decimal ml-4">
            {chapterFourData?.parentsSubSecondChapter?.negative?.negativePoint.map(
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
          <p className="text-xs font-normal text-black-gray-100">
            Finding a balance between respecting parental aspirations and giving
            students the freedom to explore their interests is a challenging
            task that requires extra effort from the career counselor. It is
            essential to assist both parents and students in reaching a
            compromise that allows them to achieve their goals and aspirations
            together.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Another aspect that majorly influences students&apos; choices is the
            level of exposure parents have. Let us see how.
          </p>
        </div>
      </div>
      <Footer pageNumber={8} title={"Mission Margdarshan"} />
    </div>
  );
};

export const ParentsSubThreeChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-2">
        <Header
          title={"Parents and their Influence on Career Choice and Decision"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.4.3 Parental Exposure
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The initial guidance a child receives, especially regarding their
          career choices, typically comes from their parents. It is thus
          important for parents to have the relevant information to be able to
          provide the right guidance and support to their child. This knowledge
          enables them to provide informed guidance and support, helping their
          child make choices that align with their interests and abilities while
          also considering the demands of the job market. If parents have
          limited information and knowledge, they will unintentionally limit
          their children’s options and direct them towards fields only they are
          aware of. On the contrary, when parents are more aware of different
          career options, they will be able to guide with a broader perspective.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Parental influence and awareness of current career trends play a key
          role in shaping their child&apos;s career choices. How parents view
          their child&apos;s skills and future prospects can impact job
          decisions. It&apos;s essential to assess parents&apos; level of
          awareness about diverse career options, especially in non-traditional
          fields, and provide them with the necessary information when needed.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let us look at an example of the same -
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">Example: </span> Priya, is a 12th-grade
          student who has always been interested in pursuing a career in
          photography. However, her parents are not familiar with the field.
          They come from a traditional background and believe that a stable and
          conventional career path will ensure a secure future for their child.
          During a career counseling session, the counselor asks Priya about her
          interests and aspirations. Priya enthusiastically expresses her
          passion for photography but mentions her parents’ concerns and lack of
          understanding about the industry.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The counselor then involves Priya’s parents and arranges a meeting to
          address their concerns and provide them with the required information
          about the field. The counselor provides them with resources that show
          them the opportunities and growth prospects in photography. He also
          shares success stories and highlights the growing demand for
          photographers in various industries. The parents explore these
          resources, gradually realizing the potential benefits and fulfillment
          in supporting Priya&apos;s passion.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          With more awareness and information, Priya’s parents begin to realize
          the value of supporting their daughter&apos;s passion for photography.
          They discover that pursuing a nonconventional career choice like
          photography can lead to fulfilling and rewarding opportunities if one
          is passionate, skilled, and dedicated. With the counselor&apos;s
          guidance and their newfound knowledge, Priya&apos;s parents have
          become more open-minded about their child&apos;s career aspirations.
          They also engage in open and supportive discussions with Priya,
          encouraging her to explore photography courses, workshops, and
          internships to nurture her skills.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The above example shows the importance of involving parents in the
          career counseling process. It also helps to understand the parental
          role and how they can be guided to support their children by providing
          them with the right information and resources.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Now that we have explored the major stakeholders and their influence
          on career choices, let’s move on to understanding the role of the
          third key stakeholder: teachers.
        </p>
      </div>
      <Footer pageNumber={9} title={"Mission Margdarshan"} />
    </div>
  );
};

export const TeachersKeyStakeholders = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"Teachers as Key Stakeholders"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          4.5 Teachers as Key Stakeholders
        </h1>

        {chapterFourData?.teachersKeyStakeholders?.map((item) => {
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
      <Footer pageNumber={10} title={"Mission Margdarshan"} />
    </div>
  );
};

export const InfluencingCareerChoices = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Other Factors Influencing Career Choices"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.6 Other Factors Influencing Career Choices
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          In addition to key stakeholders like parents and teachers, several
          other factors can significantly influence students&apos; career
          choices. Understanding these factors is essential for providing
          well-rounded guidance and support to help students make informed
          decisions about their futures. These factors may not always direct the
          course of one’s career but might subtly impact the decision-making
          process by exerting influence. We will now explore these factors in
          detail.
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.6.1 Socioeconomic Background
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Have you ever wondered why success in higher education is closely
          related to a student&apos;s socioeconomic background? It is because
          families with higher socioeconomic status can better support and
          maintain their children&apos;s careers by giving them access to
          knowledge and resources for career planning and decision-making.
          Though this might not always be true, even students from lower
          socio-economic backgrounds excel in their careers with the right
          guidance and support. However, those cannot be considered the norm as
          meeting the necessities of life itself becomes a big concern for
          people with low socio-economic conditions. Proper guidance can play an
          important role in helping students from lower socioeconomic
          backgrounds perform at par with others.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Here is an example to depict how the socioeconomic background of a
          student plays an important role in deciding a career path:
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">Example: </span> Ravi and Sanket are
          friends studying in the same class. Sanket comes from a middle-class
          family in Pune and his father is an office clerk. Ravi on the other
          hand comes from an affluent family. They both share a passion for
          pursuing a career in medicine to help others. However, their
          situations differ significantly. Ravi’s parents support his ambition
          and are ready to provide the financial backing necessary for his
          education. In contrast, Sanket comes from a family with limited
          financial resources, which constrains his ability to pursue higher
          education. His family expects him to start working early to contribute
          to their income.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The high costs associated with medical education—including tuition
          fees, textbooks, and entrance exam preparation—add to the challenge.
          Sanket also lacks access to proper guidance and mentorship in his
          community, making it difficult to navigate the medical field
          effectively. Without resources such as career counseling services or
          specialized coaching institutes, he may feel overwhelmed and uncertain
          about his path.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Moreover, due to financial constraints, Sanket might have to
          prioritize supporting his family over pursuing his long-term dream of
          becoming a doctor. This situation exemplifies how socioeconomic
          background significantly influences career decision-making, presenting
          challenges related to affordability, access to resources, and the
          opportunity to pursue higher education in medicine. Understanding
          these factors is crucial when providing guidance during career
          counseling, as they can profoundly impact a student&apos;s choices and
          aspirations.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Hopefully, now you clearly understand how important this factor is and
          why you need to consider it when guiding someone during career
          counseling. We will now move on to another important aspect: the
          cultural background of a student!
        </p>
      </div>
      <Footer pageNumber={11} title={"Mission Margdarshan"} />
    </div>
  );
};

export const InfluencingSecondSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Other Factors Influencing Career Choices"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.6.2 Cultural Background
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          The choices we make in life, including our career decisions, are
          influenced by the society we live in and how we were brought up. These
          choices depend a lot on our culture and our experiences in our family
          and immediate community.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Cultural background plays a significant role in shaping career choices
          for students. The values, beliefs, and traditions of a culture can
          influence how individuals perceive various professions and the paths
          deemed acceptable or prestigious within their community. For instance,
          in some cultures, certain careers, such as medicine, engineering, or
          law, are highly regarded, leading students to pursue these fields even
          if their personal interests lie elsewhere. Cultural expectations may
          also dictate family involvement in career decisions, where parents’
          wishes and societal norms strongly guide students toward specific
          occupations. Additionally, cultural factors can impact access to
          information and resources, such as mentorship and networking
          opportunities, which are crucial for making informed career choices.
          Overall, understanding a student’s cultural background is essential
          for career counselors, as it can provide insight into their
          motivations, aspirations
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Let us have a look at the following example for detailed
          understanding:
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">Example: </span> Priya, a high school
          student comes from a family of doctors. Their family history dates
          back generations as traditional healers. Priya on the other hand has a
          deep passion for filmmaking and photography. While her family values
          careers like medicine to uphold their legacy, Priya&apos;s love for
          art clashes with her family&apos;s practical beliefs. This leaves
          Priya torn between her artistic aspirations and the cultural
          expectations of her family.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Due to the cultural expectations and traditional mindset of her
          family, pursuing a career in the creative arts is not encouraged or
          considered the right option. Priya&apos;s family believes that careers
          in creative fields may not provide financial stability or social
          recognition, which are highly valued in their cultural context. They
          have concerns about the practicality and long-term prospects of a
          career in the creative arts.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          This example illustrates how cultural background can significantly
          influence a student&apos;s career choices, often creating a tension
          between personal passions and familial expectations. Understanding
          these dynamics is crucial for career counselors as they guide students
          in navigating their aspirations while considering the cultural values
          that shape their decisions.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Up Next, we will discuss the role of Peer influence on career choices.
        </p>
      </div>
      <Footer pageNumber={12} title={"Mission Margdarshan"} />
    </div>
  );
};

export const InfluencingThreeSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Other Factors Influencing Career Choices"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.6.3 Peer Influence
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Peer influence is when friends or groups affect how a person acts,
          thinks, and makes choices. This is especially important during
          adolescence when people are figuring out who they are and can be more
          easily swayed by what others think. Peer influence can affect a person
          in either positive or negative ways, depending on the company. Let us
          have a look at both aspects:
        </p>
        <div className="pt-5">
          {chapterFourData?.influencingThreeSubChapter.influencingKey.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pb-4 ml-1">
                  <li className="flex items-start gap-1">
                    <p className="text-xs font-bold text-black-gray-100">
                      {i + 1}.
                    </p>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.key}
                    </p>
                  </li>
                  {categoryData.value.map((subCategoryData, j: number) => (
                    <ul
                      key={`subcategory-${j}`}
                      className="pt-4 list-disc ml-6"
                    >
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
                </ul>
              </div>
            )
          )}

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In the above cases, we saw how peer influence can impact a person’s
            career decision-making process. Where in the first case, a student
            feels inspired to pick a career path in technology because of his
            friends. The second case shows how Tara felt overwhelmed due to her
            peers and wanted to give up her passion for music and take a stable
            career path like her friends.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Next, we will discuss the impact of Gender on career choices.
          </p>
        </div>
      </div>
      <Footer pageNumber={13} title={"Mission Margdarshan"} />
    </div>
  );
};

export const InfluencingFourSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"Other Factors Influencing Career Choices"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          4.6.4 Gender Roles
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Another factor that affects career choices is gender. Gender roles,
          which are based on stereotypes and discrimination, influence how
          students choose their careers. These roles set expectations for how
          people should act based on their gender, which can limit their job
          opportunities. The mix of gender roles, stereotypes, and
          discrimination creates a complicated situation that can greatly impact
          students&apos; career paths.
        </p>
        <div>
          <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
            4.6.5 Stereotypes
          </h1>
          <p className="text-xs font-normal text-black-gray-100">
            Gender stereotypes are preconceived notions about the roles,
            behaviors, and capabilities of individuals based on their gender. As
            a result, these stereotypes often portray men as assertive,
            rational, and suited to leadership positions, and women as
            nurturing, empathetic, and more suited to caring for others. When
            students internalize these stereotypes, they might feel pressured to
            conform to these norms when choosing a career. For instance, a young
            woman might be discouraged from pursuing a career in engineering due
            to the prevailing stereotype that it is a male-dominated field.
          </p>

          <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
            4.6.6 Discrimination
          </h1>
          <p className="text-xs font-normal text-black-gray-100">
            Gender-based discrimination further has an impact on career choices.
            Discrimination manifests in various ways, such as unequal pay,
            limited promotion opportunities, and a lack of representation in
            certain fields. For example, a young man might face backlash if he
            expresses an interest in pursuing a career traditionally associated
            with women, such as nursing.
          </p>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            These stereotypes and discriminatory attitudes often discourage
            students from pursuing careers they are passionate about, leading
            them to opt for paths deemed more socially acceptable based on their
            gender. This issue is particularly prevalent in rural areas, where
            traditional norms may be more rigid, but it can also be observed in
            developed societies, where certain careers may still carry
            gender-specific biases that influence students&apos; choices.
          </p>
          <p className="text-xs font-normal text-black-gray-100">
            Next, we will discuss the impact of Visual and Social Media.
          </p>
        </div>
        <div>
          <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
            4.6.7 Visual and Social Media
          </h1>
          <p className="text-xs font-normal text-black-gray-100">
            In the digital age, the influence of visual and social media on the
            career choices of students in India has become undeniable. Visual
            platforms such as Instagram, YouTube, and TikTok, along with social
            media giants like Facebook and LinkedIn, have transformed the way
            students perceive and pursue their future careers. These platforms
            wield the power to shape aspirations, highlight trends, showcase
            success stories, and connect individuals to a global array of
            possibilities, thereby significantly impacting the trajectory of
            career decisions.
          </p>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Social media plays a significant role in shaping students&apos;
            career choices. It provides a platform for exposure to various
            careers, role models, and success stories that can inspire students.
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            Additionally, social media facilitates peer discussions, allowing
            students to share experiences and advice about career paths.
            However, it can also create pressure to conform to certain ideals or
            trends, potentially leading to superficial decision-making. Overall,
            while social media can broaden horizons and provide valuable
            information, students need to approach it thoughtfully to make
            informed career choices.
          </p>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            In summary, the factors influencing students&apos; career choices
            are diverse and interconnected. Socioeconomic background, cultural
            norms, gender expectations, and the other factors that we learned
            about all play vital roles in shaping aspirations and opportunities.
            By recognizing and understanding these influences, career counselors
            can better support students in navigating their career paths. It
            will help them provide effective guidance and tailor their support
            to meet each student&apos;s unique needs.
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
          4.7 Conclusion
        </h1>

        {chapterFourData?.conclusion?.map((item) => {
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
      <Footer pageNumber={15} title={"Mission Margdarshan"} />
    </div>
  );
};
