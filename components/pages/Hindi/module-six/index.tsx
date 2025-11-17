import Header from "@/components/header";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Footer from "@/components/footer";
import React from "react";
import { chapterSix, chapterSixData } from "@/utils/cover-Hindi";

const ModuleSix = () => {
  return (
    <>
      <Cover
        title={"मॉड्यूल 6"}
        characterTitle={"करियर काउंसलिंग की प्रक्रिया के चरण"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"कंटेन्ट"}
        title={"सूची "}
        pageNo={"पृष्ठ क्र."}
        projectName={"मिशन मार्गदर्शन"}
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
        <Header title={"परिचय"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.1 परिचय
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          पिछले मॉड्यूल में , हमने प्रभावी करियर परामर्श के लिए आवश्यक कौशलों की
          खोज की और उन्हें समझा । हमने चार प्रमुख कौशल समूह श्रेणियों की पहचान
          की- संबंध निर्माण ,संचार ,पारस्परिक और निर्णय लेने के कौशल – और
          परामर्श सत्रों में उन्हें प्रभावी तरीके से विकसित करने और लागू करने के
          लिए व्यावहारिक युक्तियों पर चर्चा की । ये कौशल सार्थक और प्रभावशाली
          करियर परामर्श की नींव रखते हैं , जिससे आपको छात्रों को आत्मविश्वास और
          स्पष्टता के साथ मार्गदर्शन करने में मदद मिलती है ।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          उस समझ के आधार पर , यह मॉड्यूल करियर परामर्श के चरणों का परिचय देता है
          , इस प्रक्रिया को संबंधित चरणों में जोड़ता है , ताकि करियर परामर्श को
          अधिक व्यवस्थित और प्रभावी बनाया जा सके ।
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
            इन चरणों में महारत हासिल करके , आप व्यक्तिगत और प्रभावशाली
            मार्गदर्शन प्रदान करने के लिए तैयार होंगे , यह तय करते हुए , कि
            छात्रों को सही और आत्मविश्वास से भरा जाए , ताकि करियर पर्याय बनाने
            के लिए आवश्यक समर्थन प्राप्त हो ।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            इन चरणों का पालन करके, आप छात्रों को अच्छी तरह से संरचित , संगठित और
            अनुरूप सहायता प्रदान कर सकते हैं , जिससे उन्हें अपने करियर की यात्रा
            के प्रत्येक चरण को नेविगेट करने में मदद मिल सके ।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            <span className="font-bold">निष्कर्ष में ,</span> &nbsp; ये चरण एक
            व्यवस्थित रूपरेखा प्रदान करते हैं जो छात्रों को भ्रम से स्पष्टता की
            ओर ले जाता है , उनकी आकांक्षाओं को ठोस , कार्रवाई योग्य लक्ष्यों में
            बदल देता है । इस दृष्टिकोण को अपनाने से आप अपने छात्रों के लिए
            सार्थक और सशक्त परामर्श अनुभव बनाने में सक्षम होंगे । में नियोजन के
            महत्व की खोजकर के शुरू करें ।
          </p>
        </div>
      </div>
      <Footer pageNumber={2} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const PlanningCareer = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श हेतु योजना निर्माण (planning) करना"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.2 करियर परामर्श हेतु योजना निर्माण (planning) करना
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          “करियर परामर्श का परिचय” एवं करियर काउंसलिंग की प्रक्रिया को संक्षिप्त
          रूप से समझा है, जो लोगों को उनके करियर मार्ग की दिशा में मार्गदर्शन
          करने में एक महत्वपूर्ण भूमिका निभाता है। अब, जब हम करियर परामर्श के
          चरणों के बारे में और आगे जान रहे हैं, तो यह स्पष्ट हो ही रहा है कि इस
          प्रक्रिया (process) में सक्षम योजना का निर्माण करना एक आवश्यक हिस्सा
          भी है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          सही दिशा में योजना का निर्माण करने से परामर्शदाता और विद्यार्थी दोनों
          को ही समझने में मदद मिलेगी। और साथ ही सत्रों (sessions) के दौरान जिन
          अपेक्षाओं की जरुरत है वो भी समझ में आएगी। योजना निर्माण करने से
          विद्यार्थी की जरूरतें और लक्ष्य (goal) के प्रति केंद्रित दृष्टिकोण
          अपनाने में मदद मिलेगी। इस प्रक्रिया (process) से हम विद्यार्थियों का
          भरोसा विकसित कर सकते है और संवाद (communication) को और खुला और
          विश्वसनीय बना सकते है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श में ‘योजना निर्माण’ (planning) का अर्थ उन लक्ष्यों
          (goals) को निश्चित करने के साथ ही, उन्हें प्राप्त करने के लिए आवश्यक
          उपायों की सही पहचान करना भी है। जैसे कि हमने पहले समझा है, करियर
          काउंसलिंग में तीन महत्वपूर्ण चरण (phases) होते हैं : एक विद्यार्थियों
          की जरूरतों और क्षमताओं का आकलन करना, दूसरा उन क्षमताओं को उचित करियर
          पर्यायों से जोड़ना और तीसरा इन जोडे हुए पर्यांयों के पीछे के कारणों को
          संबंधित भागीदारों (stakeholders) याने विद्यार्थियों तक पहुँचाना।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          सक्षम योजना निर्माण (planning) में कई मुख्य घटक शामिल होते हैं:
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (i) विद्यार्थी और उनके आसपास के वातावरण को समझना।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (ii) विश्वसनीय और वैध डेटा के आधार पर उनके लिए सर्वोत्तम करियर विकल्प
          की पहचान करना।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (iii) पहचाने गए करियर विकल्प से संबंधित लक्ष्यों को निर्धारित करना।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (iv) लक्ष्यों (goals) को प्राप्त करने के लिए एक विस्तृत और संपूर्ण
          योजना का निर्माण, जिसमें आवश्यक कदम शामिल होते है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इन घटकों को काउंसलिंग में चरणों के माध्यम से प्रभावी रूप से समझाया जा
          सकता है। जिसमें इस काउंसलिंग की प्रक्रिया को अलग-अलग और नियंत्रित
          चरणों में विभाजित करते हैं, जिनमें से प्रत्येक चरणों के अपने विशिष्ट
          उद्देश्यों के साथ ही विशिष्ट कार्य भी होते हैं। इस प्रक्रिया से हम यह
          निश्चित कर सकते हैं कि करियर काउंसलिंग के सभी महत्वपूर्ण तत्व
          व्यवस्थित और पूर्ण रूप से आ सके। जिससे परामर्शदाता और विद्यार्थी दोनों
          के लिए अधिक संगठित और प्रभावी अनुभव मिलता है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श में योजना निर्माण और चरणों के रूप आपस में जुड़े हुए होते
          हैं, क्योंकि दोनों ही सफल परिणाम प्राप्त करने के लिए किसी प्रक्रिया को
          विकसित करने पर जोर देते हैं। अलग-अलग चरण-&nbsp;
          <span className="font-bold">
            संबंध निर्माण (rapport building), जानकारी एकत्रित करना (information
            gathering), निर्णय लेना (decision making) और कार्य योजना (action
            planning) करना -
          </span>
          &nbsp; इनमें योजना निर्माण को शामिल कर परामर्शदाता विद्यार्थी की
          आवश्यकताओं को व्यवस्थित रूप से स्पष्ट कर सकते हैं, उचित करियर विकल्पों
          की पहचान कर सकते हैं और सफलता के लिए एक स्पष्ट रोडमैप बना सकते हैं। इस
          तालमेल से एक ओर अधिक संगठित और सहायक काउंसलिंग अनुभव मिलता है, जो
          छात्रों को जानकारीयुक्त और आत्मविश्वासपूर्ण करियर निर्णय लेने के लिए
          सशक्त बनाता है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          इन चार चरणों को विस्तार से समझने से पहले, आइए पहले यह समझें कि प्रभावी
          करियर परामर्श प्रदान करने में योजना निर्माण क्यों महत्वपूर्ण है।
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-6 tracking-[1.5px]">
          6.2.1 करियर परामर्श में योजना निर्माण का महत्व:
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          योजना निर्माण स्पष्ट रूप से निश्चित करने में महत्वपूर्ण भूमिका निभाता
          है। जब यह कि करियर परामर्श सत्र प्रभावी होने के साथ और विद्यार्थी की
          आवश्यकताओं पर ही केंद्रित हों। एक अच्छा योजना निर्माण परामर्शदाताओं को
          प्रत्येक चरण के माध्यम से विद्यार्थियो को आसान तरीके से मार्गदर्शन
          करने में मदद करता है, जिससे कोई महत्वपूर्ण विवरण छूटने न पाए। एक
          स्पष्ट संरचना होने से विद्यार्थी के जीवन के सभी आवश्यक पहलुओं पर ध्यान
          केंद्रित होता है और परामर्शदाता प्रत्येक चरण में उन्हें सरलता से
          मार्गदर्शन भी दे सकते हैं, जिससे यह प्रक्रिया अधिक प्रभावी और सार्थक
          बनती है।
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
            अब, हम ये समझ चुके हैं कि करियर परामर्श में योजना निर्माण क्यों इतना
            महत्वपूर्ण है, तो आइए इस प्रक्रिया के प्रत्येक चरण को विस्तार से
            समझते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const PhasesOfCareerCounsel = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श के चरण (Phases) संक्षेप में"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.3 करियर परामर्श के चरण (Phases) संक्षेप में
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श को चरणबद्ध दृष्टिकोण में काउंसलिंग प्रक्रिया को अलग-अलग
          चरणों में विभाजित किया गया है। जिनमें से प्रत्येक चरण किसी विशेष
          उद्देश्य और कार्य पर ध्यान केंद्रित करता है। इस विकसित दृष्टिकोण से
          परामर्शदाता करियर परामर्श के अलग-अलग घटकों को व्यवस्थित रूप से समझ
          सकते हैं, जिससे प्रक्रिया की जटिलताओं को आसानी से नियंत्रित किया जा
          सकता है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस दृष्टिकोण में दो प्रमुख तत्त्वों पर ध्यान देना आवश्यक है। पहला, ये
          की चरण एक सामान्य रूपरेखा के रूप में कार्य करते हैं, जो किसी व्यक्ति
          की परामर्श आवश्यकताओं के अनुसार भिन्न हो सकते हैं। कुछ मामलों में, सभी
          चरणों को एक व्यापक सत्र में कवर किया जा सकता है, या अन्य परामर्श
          अनुसार उन सत्रों को कई दिनों में विभाजित भी किया जा सकता है। यह
          लचीलापन परामर्शदाताओं को उनकी व्यक्तिगत शैली और उपलब्ध संसाधनों के
          अनुसार अपने नियमों को अपनी परिस्थिति अनुसार अपनाने की अनुमति देता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस दृष्टिकोण में दो प्रमुख तत्त्वों पर ध्यान देना आवश्यक है। पहला, ये
          की चरण एक सामान्य रूपरेखा के रूप में कार्य करते हैं, जो किसी व्यक्ति
          की परामर्श आवश्यकताओं के अनुसार भिन्न हो सकते हैं। कुछ मामलों में, सभी
          चरणों को एक व्यापक सत्र में कवर किया जा सकता है, या अन्य परामर्श
          अनुसार उन सत्रों को कई दिनों में विभाजित भी किया जा सकता है। यह
          लचीलापन परामर्शदाताओं को उनकी व्यक्तिगत शैली और उपलब्ध संसाधनों के
          अनुसार अपने नियमों को अपनी परिस्थिति अनुसार अपनाने की अनुमति देता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          आइए अब विभिन्न चरणों पर संक्षेप में चर्चा करते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस दृष्टिकोण में दो प्रमुख तत्त्वों पर ध्यान देना आवश्यक है। पहला, ये
          की चरण एक सामान्य रूपरेखा के रूप में कार्य करते हैं, जो किसी व्यक्ति
          की परामर्श आवश्यकताओं के अनुसार भिन्न हो सकते हैं। कुछ मामलों में, सभी
          चरणों को एक व्यापक सत्र में कवर किया जा सकता है, या अन्य परामर्श
          अनुसार उन सत्रों को कई दिनों में विभाजित भी किया जा सकता है। यह
          लचीलापन परामर्शदाताओं को उनकी व्यक्तिगत शैली और उपलब्ध संसाधनों के
          अनुसार अपने नियमों को अपनी परिस्थिति अनुसार अपनाने की अनुमति देता है।
        </p>
      </div>
      <Footer pageNumber={4} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const PhasesOfSubPoint = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श के चरण (Phases) संक्षेप में"}
          className="min-w-fit"
        />

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterSixData?.phasesOfCareerCounsel?.hading}
          </p>

          <ol className="list-decimal ml-4 pt-2">
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
            इन चरणों का पालन करके और एक चरणवार दृष्टिकोण (phase-wise approach)
            का उपयोग करके, आप विद्यार्थियों और उनकी आवश्यकताओं को गहराई से समझ
            सकते हैं, उत्पन्न होने वाले किसी भी संघर्ष को हल कर सकते हैं। उन्हें
            योग्य करियर विकल्पों की ओर मार्गदर्शन कर सकते हैं और एक सक्षम कार्य
            योजना निर्माण बना सकते हैं। यह विकसित प्रक्रिया सुनिश्चित करेगी कि
            आप प्रत्येक विद्यार्थी की विशिष्ट आकांक्षाओं और संभव होने वाले करियर
            मार्गों को ध्यान में रखते हुए सार्थक करियर परामर्श प्रदान कर सकें।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            आगे, हम प्रत्येक चरण का विस्तार से अध्ययन करेंगे। चलिए, पहले चरण से
            शुरू करते हैं, जो है संबंध निर्माण।
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const RapportBuilding = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"चरण 1 - संबंध निर्माण (Rapport Building)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.4 चरण 1 - संबंध निर्माण (Rapport Building)
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
                  <p className="text-xs font-normal text-black-gray-100">
                    {item?.note}
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            किसी भी काउंसलिंग सत्र में स्पष्ट संवाद होना आवश्यक है, जो एक
            भरोसेमंद संबंध बनाने और सुरक्षित वातावरण देने में आधारित है।
            विद्यार्थियों को यह महसूस होना चाहिए कि वे बिना किसी संकोच के अपने
            विचारों, भावनाओं और राय को साझा कर सकते हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            संबंध बनाना (rapport building) इस प्रक्रिया का पहला कदम है।
            “रैपोर्ट&quot; शब्द का अर्थ है कि परामर्शदाता और विद्यार्थी के बीच
            एक सकारात्मक और भरोसेमंद संबंध बनाना। यह संबंध एक ऐसा माहौल बनाता है
            जहाँ विद्यार्थी अपने करियर के लक्ष्यों, चुनौतियों और अवसरों की खोज
            कर सकते हैं। संबंध निर्माण (rapport building) चरण प्रभावी परामर्श की
            नींव रखता है। चर्चा पर पर आधारित संवादों के माध्यम से, परामर्शदाता
            विद्यार्थी के साथ विश्वास और संबंध स्थापित करने की कोशिश करते हैं,
            जिससे खुली और ईमानदार बातचीत को बढ़ावा मिलता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            करियर परामर्श के लिए आवश्यक कौशलों के पिछले मॉड्यूल में हमने यह सीखा
            कि विद्यार्थियों के साथ संबंध निर्माण कैसे किया जाए और उन्हें अपने
            सपनों, भावनाओं और चुनौतियों को साझा करने के लिए सुरक्षित माहौल कैसे
            प्रदान किया जाए।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अब, संबंध निर्माण (rapport building) चरण के दौरान ध्यान में रखने के
            लिए कुछ मुख्य घटकों पर विचार करें:
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            1. संबंध निर्माण एक कला है न कि विज्ञान और इसके लिए प्रत्येक
            विद्यार्थी को अलग नजरियें से देखने की आवश्यकता होती है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            2. संबंध निर्माण में समय लगता है और विद्यार्थी को खुलकर बात करने के
            लिए एक से अधिक सत्र की आवश्यकता हो सकती है। परामर्शदाता को धैर्य
            रखना चाहिए और अलग-अलग नजरियें का उपयोग करके विश्वास और आत्मविश्वास
            स्थापित करने की कोशिश करनी चाहिए। यदि एक नजरिया असफल होता है, तो
            परामर्शदाता को दूसरे नजरियें की ओर बढ़ना चाहिए।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            3. संबंध निर्माण के लिए बातचीत शुरू करने का सबसे अच्छा तरीका है कि
            विद्यार्थी के साथ सामान्य रुचियों को खोजकर शुरू किया जाए। बातचीत की
            गति और जरूरी साधन विद्यार्थी की समझ की क्षमता अनुसार होने चाहिए।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            4. जब विद्यार्थी बोलना शुरू करें, तो बिना किसी रुकावट के ध्यान से
            सुनना महत्वपूर्ण होता है। सुने जाने का एहसास एक शानदार शुरुआत है। कई
            बार विद्यार्थियों के पास ऐसा कोई नहीं होता जिससे वे बिना किसी निर्णय
            या सलाह के अपने विचार साझा कर सकें।
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
              संबंध निर्माण (rapport building) चरण को समझने के बाद, अब हम अगले
              चरण जानकारी संग्रहित करना की ओर बढ़ते हैं:
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={6} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const InformationGathering = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"चरण 2 - जानकारी एकत्रित करना (Information Gathering)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.5 चरण 2 - जानकारी एकत्रित करना (Information Gathering)
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
                  <p className="text-xs font-normal text-black-gray-100">
                    {item?.note}
                  </p>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            एक करियर परामर्श सत्र केवल कुछ तत्वों, जैसे कि विद्यार्थियों की
            रुचियों या अभिभावकों की अपेक्षाओं पर आधारित नहीं हो सकता। कई बार
            विद्यार्थी अपनी रुचियों के बारे में पूरी तरह से ईमानदार नहीं होते या
            उन्हें वास्तव में क्या पसंद है, इसका पूरी तरह से अंदाजा नहीं होता।
            एक करियर परामर्शदाता के रूप में, यह आपकी जिम्मेदारी है कि आप उनके
            जीवन के स्पष्ट (obvious) और सूक्ष्म (subtle) दोनों पहलुओं के बारे
            में जानकारी एकत्र करें, ताकि आप उन्हें नैतिक, उपयुक्त और प्रभावी
            परामर्श कर सकें। यही करियर परामर्श प्रक्रिया के दूसरे चरण का मुख्य
            उद्देश्य है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            संबंध निर्माण (Rapport building) चरण के बाद जब विद्यार्थी अपने विचार
            और विचारधारा आपके साथ साझा करने के लिए तैयार हो जाते हैं, तो यह
            महत्वपूर्ण है कि आप बातचीत को उनके करियर की दिशा में कुशलता से
            मार्गदर्शन करना प्रारंभ करें । जैसे ही विद्यार्थी आपके साथ उनके
            विचार और उनकी भावनाओं को साझा करने के लिए अधिक सहज हो जाते हैं तब
            आपकी जिम्मेदारी बनती है कि करियर पर्यायों के लिए उन्हें योग्य
            मार्गदर्शन दे। इसलिए परामर्शदाता को विद्यार्थियों से संबंधित
            प्रासंगिक जानकारी इकट्ठा करना जरूरी है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            चरण में जैसे विद्यार्थी के बारे में प्रासंगिक जानकारी इकट्ठा करना
            जरूरी है। इस तरह विद्यार्थियों से संबंधित उनकी शैक्षिक पृष्ठभूमि,
            उनके करियर की आकांक्षाएं, रुचिया, कौशल, मूल्य और उनका व्यक्तित्व इन
            सब की ओर ध्यान देना भी जरूरी है। क्योंकि इस तरह एकत्रित की गई
            जानकारी के जरिए ही परामर्शदाता विद्यार्थियों को व्यक्तिगत और
            प्रभावपूर्ण तरीके से परामर्श की योजना निर्माण कर सकते है और यही
            योजना निर्माण चरण नींव के रूप में भी कार्य करता है।
          </p>
          <p className="text-xs font-bold text-black-gray-100 pt-4">
            कई कारण हैं कि ‘जानकारी इकट्ठा करने का चरण’ करियर परामर्श में सबसे
            महत्वपूर्ण कदमों में से एक है, लेकिन ऐसा क्यों हैं? इसके प्रमुख कारण
            हैं:
          </p>

          <p className="text-xs font-normal text-black-gray-100 pt-1">
            1.यह विद्यार्थी की पृष्ठभूमि और उनके करियर निर्णयों पर प्रभाव डालने
            वाले किसी भी कारक (factors) के बारे में व्यापक जानकारी इकट्ठा करना
            इस चरण में शामिल है। इसे गहराई से समझने के बाद ही परामर्शदाता
            विद्यार्थियों को मार्गदर्शन सही तरीके से या प्रसंग के अनुसार कर सकते
            हैं, क्योंकि विद्यार्थियों के जीवन के महत्वपूर्ण पहलुओं को नजर अंदाज
            नहीं किया जा सकता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            2. जानकारी इकट्ठा करना यह तय करता है कि करियर परामर्श प्रक्रिया एक
            विश्वसनीय, प्रसंग के अनुसार और वैध डेटा पर आधारित है। यह चरण
            ‘समग्र&apos; दृष्टिकोण पर जोर देता है, जिसमें विद्यार्थी के करियर पर
            पड़नेवाले सभी प्रभावों पर विचार किया जाता है, जिससे परामर्शदाता
            विद्यार्थियों को मार्गदर्शन करता है। वह भी पूर्ण रूप से,
            साक्ष्य-आधारित (evidence-based) और उनकी आवश्यकताओं के अनुरूप ही
            परामर्शदाता विद्यार्थियों को मार्गदर्शन करता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            3. यह चरण परामर्शदाता और विद्यार्थी के बीच संबंध निर्माण को और मजबूत
            करने में भी मदद करता है। विद्यार्थी की विशिष्ट स्थिति को समझने और
            व्यक्तिगत मार्गदर्शन प्रदान करने की वचनबद्धता दिखाकर, परामर्शदाता
            विश्वास को बढ़ावा देता है और एक अधिक खुला और सहायक संबंध स्थापित
            करता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            अब आगे हम, आवश्यक जानकारी इकट्ठा करने के अलग-अलग तरीकों को समझते
            हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const InformationSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"चरण 2 - जानकारी एकत्रित करना (Information Gathering)"}
          className="min-w-fit"
        />

        <div>
          {chapterSixData?.informationSubChapter?.content.map(
            (contentItem, contentIndex) => {
              return (
                <React.Fragment key={`section-content-${contentIndex}`}>
                  <div key={`object-content-${contentIndex}`}>
                    <h3 className="text-xs font-normal text-black-gray-100 pb-2 pt-4">
                      {contentItem.header}
                    </h3>
                    {/* category */}
                    {contentItem.category.map((categoryData, i: number) => (
                      <div key={`category-${i}`} className="">
                        <ul key={`content-point-${i}`} className="pb-4 ml-1">
                          <li className="flex items-start flex-wrap gap-1">
                            <p className="text-xs font-bold text-black-gray-100">
                              {i + 1}.
                            </p>
                            <p className="text-xs font-bold text-black-gray-100">
                              {categoryData?.key}
                            </p>
                            <div>
                              {categoryData?.value?.description?.map((data) => (
                                <p
                                  key={i}
                                  className="text-xs font-normal text-black-gray-100"
                                >
                                  {data}
                                </p>
                              ))}
                            </div>
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
              <ul key={`subcategory-${j}`} className="pt-1 list-disc ml-6">
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
              4. ज्ञानवर्धक स्रोत के रूप में माता-पिता (Parents as an
              informative source)
            </span>
            &nbsp; : करियर परामर्श सत्रों में माता-पिता को शामिल करना या उनके
            साथ अलग सत्र आयोजित करना प्रक्रिया को ज्यादा लाभकारी बनाता है।
            माता-पिता का निवेश (input) उनके बच्चे के करियर मार्ग और सफलता पर
            महत्वपूर्ण प्रभाव डाल सकता है। जब विद्यार्थियों को अपने लक्ष्यों या
            रुचियों के बारे में स्पष्टता न हो, तो माता-पिता उनके जीवन के बारे
            में महत्वपूर्ण जानकारी प्रदान दे सकते हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            माता-पिता अपने परिवार, सांस्कृतिक, और सामाजिक-आर्थिक पृष्ठभूमि के
            बारे में जानकारी साझा कर सकते हैं, जो उनके बच्चे के करियर पर्यायों
            पर प्रभाव डाल सकती है। यह संदर्भ परामर्शदाताओं को विद्यार्थी के लिए
            योग्य करियर क्षेत्रों को समझने में सहायता करता है। इसके अलावा,
            माता-पिता अपने बच्चे की शैक्षणिक उपलब्धियों, ताकत, रुचियों और रुचि
            के बारे में वर्णन कर सकते हैं, जो परामर्शदाताओं को बच्चे की क्षमताओं
            के अनुसार संभव होने वाले करियर अवसरों की पहचान करने में मदद करता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            माता-पिता अपने बच्चे के व्यक्तित्व गुणों, प्रेरणाओं, आदतों और
            मूल्यों के बारे में भी जानकारी दे सकते हैं, जो सर्वोत्तम करियर मार्ग
            को तय करने के लिए महत्वपूर्ण हैं। वे अल्पकालिक और दीर्घकालिक दोनों
            लक्ष्यों पर चर्चा कर सकते हैं, जिससे परामर्श सत्रों से विद्यार्थी की
            अपेक्षाओं को स्पष्ट किया जा सकता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            हालांकि माता-पिता एक समृद्ध ज्ञानवर्धक स्रोत के रूप में कार्य करते
            हैं, लेकिन उनके अपने पूर्वाग्रह और अपेक्षाएँ भी हो सकती हैं जो उनके
            बच्चे के करियर पर्यायों पर प्रभाव डालती हैं। माता-पिता के लिए यह
            आवश्यक है कि वे इन पूर्वाग्रहों को चुनौती दें और एक अधिक समावेशक और
            सहायक वातावरण बनाएँ जो रचनात्मकता और व्यक्तिगत विकास दोनों को ही
            प्रोत्साहन दे सकें। अपने बच्चे के सपनों और क्षमताओं का समर्थन करके,
            माता-पिता उनके करियर लक्ष्यों को प्राप्त करने में मदद कर सकते हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-1">
            विद्यार्थी के जीवन के सभी प्रासंगिक पहलुओं के बारे में पुरी जानकारी
            इकट्ठा करने के बाद, परामर्शदाता विद्यार्थियों को योग्य और उपयोगी
            मार्गदर्शन दे सकते हैं। जितना अधिक आप विद्यार्थी को समझेंगे, उतना ही
            बेहतर आप उनके लिए एक व्यक्तिगत दृष्टिकोण तैयार कर सकते हैं ताकि वे
            एक संतोषपूर्ण करियर पथ को नियंत्रित कर सकें।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            जब आप पूरी तरह आवश्यक जानकारी प्राप्त कर लेते हैं, तो आप करियर
            परामर्श प्रक्रिया के अगले चरण ‘निर्णय-लेना’की ओर बढ़ सकते हैं ।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            आइए इस अगले चरण को विस्तार से समझते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={8} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const DecisionMakingPhase = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"चरण 3 - निर्णय लेना (Decision Making)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.6 चरण 3 - निर्णय लेना (Decision Making)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्शदाता के रूप में, सभी जरूरी जानकारी इकट्ठा करने के बाद,
          विद्यार्थी के साथ बैठकर उसका स्पष्टीकरण करना और सबसे अच्छा करियर
          पर्याय चुनना अगला कदम होता है। यह करियर परामर्श प्रक्रिया का
          ‘निर्णय-लेना&apos; एक ऐसा चरण है, जिसमें परामर्शदाता विद्यार्थियों को
          उनके करियर विकास के लिए विश्वसनीय और वैध पर्यायों का पता लगाने में मदद
          करता है।
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
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          (नोट: अधिकांश परामर्श प्रक्रियाएँ इस चरण में खतम हो जाती हैं, जहाँ
          विद्यार्थी को मिली हुई जानकारी के आधार पर वह अंतिम पर्याय का चुनाव
          करते हैं।)
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          यह समझना महत्वपूर्ण है कि, ‘निर्णय-लेना&apos; (decision making) चरण के
          बावजूद, एक परामर्शदाता के रूप में आपकी भूमिका एक Facilitator (एक
          सुविधा देनेवाले) के रूप में होती है, न कि विद्यार्थी के लिए निर्णय
          लेने की। आपका कार्य एक सहयोगी प्रक्रिया के माध्यम से उन्हें मार्गदर्शन
          प्रदान करना है, सही मार्गदर्शन और पर्याय प्रस्तुत करना है, जबकि उनके
          आत्मनिर्णय का सम्मान करना है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस चरण में एक व्यवस्थित दृष्टिकोण है, जो किसी करियर के चयन के बारे में
          विद्यार्थी की सभी चिंताओं और सवालों का समाधान करता है। हर कदम पर, आपको
          विद्यार्थी को अलग-अलग दृष्टिकोणों से जानकारी को संग्रहित करने के अवसर
          देने चाहिए। वैकल्पिक दृष्टिकोण साझा करके, आप विद्यार्थी को एक पूरी समझ
          प्राप्त करने में मदद करते हैं, जिससे वे अपने आखिरी निर्णय में सभी
          महत्वपूर्ण कारकों (factors) को ध्यान में रख सकें।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          मूल्यांकन, विद्यार्थियों के साथ चर्चाओं और माता-पिता और शिक्षकों के
          साथ बातचीत से एकत्र की गई प्रसंग अनुरूप जानकारी के साथ, आपके पास अब
          विद्यार्थी की क्षमताओं, रुचियों, व्यक्तित्वों और अन्य विशेषताओं की
          सुक्ष्म दृष्टि होती है। इस समझ के आधार पर, आपका कार्य करियर पर्यायों
          की पहचान करने में मदद करना है जो विद्यार्थियों के लिए फैसले लेने वाला
          है। उसी तरह आपका कार्य विद्यार्थियों के लिए संतोषपूर्ण और विकासशील
          हैं।
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
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
            निर्णय-लेना चरण के महत्व को समझने के बाद, इस प्रक्रिया के दौरान
            आनेवाली चुनौतियों को समझना जरूरी है। इन चुनौतियों का सही तरीके से
            समाधान करना जरूरी है ताकि विद्यार्थी बताए हुए और सक्षम करियर पर्याय
            चुन सकें।
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const DecisionMakingSecondSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"चरण 3 - निर्णय लेना (Decision Making)"}
          className="min-w-fit"
        />

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          इस चरण में आने वाली चुनौतियाँ:
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          वर्तमान समय में जॉब रोल और करियर के अवसर लगातार मुश्किल होते जा रहे
          हैं, जिनमें शैक्षणिक योग्यता, कौशल समूह, व्यक्तित्व गुण, और सॉफ्ट
          स्किल्स जैसी विशिष्ट आवश्यकताएँ होती हैं। इस चरण का मुख्य कार्य करियर
          पर्याय की आवश्यकताओं और विद्यार्थी की क्षमताओं व योग्यता के बीच मिलान
          करना है। इस मिलान के आधार पर लगभग दो से तीन करियर पर्यायों पर विचार
          करना और विद्यार्थी के लिए इन पर्यायों का विस्तार से पता लगाने के लिए
          एक व्यापक कार्य योजना विकसित करना है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          हालाँकि, यह कार्य जितना आसान दिखता है, उतना नहीं है, क्योंकि हमारे देश
          में कई कारक (factor) और हितधारक (stakeholders) करियर पर्यायों को
          प्रभावित करते हैं, जिससे इस चरण के दौरान अलग-अलग घटनाओं का सामना करना
          पड़ता है। निर्णय-लेना इस चरण के दौरान, कई महत्वपूर्ण चुनौतियाँ आ सकती
          हैं, जिनका समाधान करने के लिए एक केंद्रित दृष्टिकोण की जरूरत होती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          यहाँ कुछ सामान्य चुनौतियाँ दी गई हैं जो उत्पन्न हो सकती हैं:
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
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          परामर्शदाता को इन चुनौतियों का समाधान पहले चरण में संग्रहित जानकारी के
          आधार पर विस्तृत चर्चाओं के जरिए से करना चाहिए, यह तय करते हुए कि
          विद्यार्थी की रुचियों और मूल्यों को प्राथमिकता दी जा रही है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          प्रस्तुत मुद्दों के आधार पर, परामर्शदाता को विद्यार्थी के लिए योग्य
          समाधान चुनना चाहिए। हालांकि, निर्णय-लेना स्वाभाविक रूप से एक व्यक्तिगत
          प्रक्रिया है, क्योंकि प्रत्येक विद्यार्थी की अलग-अलग आवश्यकताएँ और
          लक्ष्य होते हैं। परामर्शदाता को रणनीतियों या गतिविधियों (planning) को
          तैयार करने से पहले किसी भी सीमाओं के लिए जागरूक रहना चाहिए। जबकि
          परामर्शदाता की भूमिका मददगार की होती है, सही कौशल और संचार शैलियों
          (communication skill) का उपयोग करके ज्यादा से ज्यादा चुनौतियों को दूर
          करने में मदद मिल सकती है। निर्णय-लेना चरण के दौरान ध्यान देने योग्य
          महत्वपूर्ण बिंदु:
        </p>
      </div>
      <Footer pageNumber={10} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const DecisionMakingSubChapterThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"चरण 3 - निर्णय लेना (Decision Making)"}
          className="min-w-fit"
        />

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
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
          संक्षेप में, करियर परामर्श के निर्णय-लेना चरण को विद्यार्थियों को
          बताएँ हुए करियर विकल्पों की ओर मार्गदर्शन देने के लिए एक व्यापक
          प्रक्रिया के रूप में बनाया गया है। यह प्रक्रिया विद्यार्थी के आसपास के
          परिस्तिथियों को सूक्ष्म तरीके से समझने के बाद शुरू होती है। जिसमें
          उनकी रुचियों, शैक्षणिक प्रदर्शन और व्यक्तिगत आकांक्षाओं को भी‌ शामिल
          किया जाता है। इसके बाद परामर्शदाता विद्यार्थियों की क्षमता और लक्ष्यों
          के साथ प्रसंग के अनुसार कई करियर पर्यायों को देख सकते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इसके अलावा, इस चरण में महत्वपूर्ण कारकों जैसे बदलती शैक्षणिक प्रणाली,
          उभरते करियर रुझानों और कुछ मामलों में अभिभावकों की अपेक्षाओं को भी
          ध्यान में रखना जरूरी है। इन तत्वों को एकसाथ करके, परामर्शदाता
          विद्यार्थियों को ऐसे निर्णय लेने में मदद करते हैं जो उनके व्यक्तिगत
          लक्ष्यों और बदलते पेशेवर कथानक के साथ तालमेल बिठाते हैं। यह समग्र
          दृष्टिकोण तय करता है कि करियर पर्याय न केवल व्यावहारिक हों, बल्कि
          संतोषपूर्ण भी हों, जो विद्यार्थियों को भविष्य की सफलता के लिए तैयार कर
          सकते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अब, करियर परामर्श प्रक्रिया के अंतिम चरण की बढ़ते हैं, कार्य योजना
          (Action Planning) को समझते हैं।
        </p>
      </div>
      <Footer pageNumber={11} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const ActionPlanningPhase = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"चरण 4 - कार्य योजना (Action Plan)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.7 चरण 4 - कार्य योजना (Action Plan)
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          एक बार जब विद्यार्थी को सबसे अच्छे विकल्पों के बारे में जानकारी दी
          जाती है और प्रसंगानुसार सभी स्पष्टीकरण दिया जाता हैं, जो बातचीत और
          मूल्यांकनों के माध्यम से एकत्रित किए गए होते हैं। उसके आगे, अगले चरण
          में विद्यार्थी के लिए अपने चुने हुए कैरियर क्षेत्र में सफलता प्राप्त
          करने के लिए कार्य योजना निर्माण करना जरूरी है। यह चरण विद्यार्थी को
          उनके चुने हुए करियर क्षेत्र में सफलता प्राप्त करने के लिए मार्गदर्शन
          करता है। यह चरण करियर परामर्श के खोज (अन्वेषण) चरण का विस्तार करता है,
          जिससे विद्यार्थियों को अपने चुने हुए मार्गों में गहराई से जाने का अवसर
          मिलता है। हालांकि, यह ध्यान रखना महत्वपूर्ण है कि यह खोज तत्व हर
          विद्यार्थी के लिए आवश्यक नहीं हो सकता है, क्योंकि कुछ विद्यार्थी पहले
          से ही अपने लक्ष्यों और उन्हें प्राप्त करने के लिए आवश्यक कदमों के बारे
          में स्पष्ट होते हैं।
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
          इस चरण में, करियर परामर्शदाता विद्यार्थियों को उनके लक्ष्यों तक
          पहुँचने के लिए जरूरी कदमों को समझने और रास्ते में आने वाली संभव
          चुनौतियों की पहचान करने में सहायता करते हैं। परामर्शदाता छात्रों को
          शॉर्ट कोर्स, इंटर्नशिप और उद्योग विशेषज्ञों के साथ जुड़ने में
          मार्गदर्शन करते हैं, ताकि वे अपने संभव क्षेत्रों को स्पष्ट रूप से समझ
          सकें। वे छात्रों के लिए एक विकसित रोडमैप तैयार करने में मदद करते हैं।
          जिसमें उनके उठाए जाने वाले विशेष कदम, आवश्यक संसाधन (resources) और
          लक्ष्यों को प्राप्त करने के लिए समय की सीमाएँ तय की जाती हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इसके अलावा, अंतिम चरण में योग्य करियर मार्गों का चुनना और चुनें हुए
          पर्यायों के बारे में जागरूकता की जाती है। उसी के साथ उनके करियर
          पर्यायों से जुड़े हुए कॉलेजों और कोर्स की जानकारी देना भी इस चरण में
          है। परामर्शदाता विद्यार्थियों को उनके चुने हुए संस्थानों से संबंधित
          पात्रता मानदंड (Eligibility Criteria) के लिए तैयार करते हैं, साथ ही
          करियर विकास प्रक्रिया में आने वाली चुनौतियों को दूर करने में मदद करते
          हैं और प्रवेश प्रक्रियाओं में मदद करते हैं। निर्णय लेने के बाद, लक्ष्य
          तय करना आवश्यक हो जाता है। परामर्शदाता विद्यार्थियों को स्पष्ट
          उद्देश्य भी समझाते हैं और मार्गदर्शन के लिए लक्ष्य (Milestones)
          निर्धारित करने में मदद करते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इन कारवाई योग्य कदमों पर ध्यान केंद्रित करके, योजना निर्माण (action
          planning) चरण विद्यार्थियों को उनके करियर की दिशाओं पर सक्षम रूप से
          मार्ग तय करने के लिए आवश्यक ज्ञान और रणनीतियों से मजबूत बनाता है। यह
          विद्यार्थियों को उनके चुने हुए करियर मार्ग की वास्तविकताओं के लिए
          तैयार करता है और करियर परामर्श प्रक्रिया का एक सुंदर समापन (Smooth
          closing) निर्धारित करता है।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-4">
          कार्य योजना (Action Plan) के चरण का महत्व:
        </p>
        <div className="pt-2">
          <p className="text-xs font-normal text-black-gray-100 ">
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
          जैसा कि पहले चर्चा की गई है, एक विद्यार्थी के करियर पर्याय को अंतिम
          रूप देने के बाद, कार्य योजना चरण को आगे खोज का अवसर देता है, जिससे
          विद्यार्थियों को अपने चुने हुए मार्गों के बारे में ज्ञान बढ़ाने और
          आवश्यक अंतर्दृष्टि (insights) प्राप्त करने में मदद मिलती है। करियर
          परामर्शदाता इस चरण में महत्वपूर्ण भूमिका निभाते हैं। विद्यार्थियों को
          शॉर्ट कोर्स, इंटर्नशिप और उद्योग विशेषज्ञों के साथ परामर्श करने के लिए
          मार्गदर्शन भी करते हैं। यह चरण न केवल करियर पर्यायों को मजबूत करने पर
          ध्यान देता है बल्कि यात्रा को नियंत्रित करने के लिए स्पष्ट उद्देश्यों
          के साथ और मील के पत्थर की तरह अपना मार्ग तय करने में भी मददगार साबित
          होता है।
        </p>
      </div>
      <Footer pageNumber={12} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const ActionSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"चरण 4 - कार्य योजना (Action Plan)"}
          className="min-w-fit"
        />

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
          इन बिंदुओं को एकसाथ करके, कार्य योजना चरण विद्यार्थियों को सुझाएँ हुए
          निर्णय लेने और अपने करियर लक्ष्यों का सक्षम रूप से प्राप्त करने के लिए
          आवश्यक ज्ञान और संसाधनों से मजबूत बनाता है। यह चरण अक्सर विद्यार्थियों
          को उनके चुने हुए करियर मार्ग में अधिक आत्मविश्वास महसूस कराने में
          मददगार साबित होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अब, जब हमने सभी चरणों का विस्तार से समझ लिया है, उनका अध्ययन कर लिया
          है, तो आइए मॉड्यूल के अंतिम भाग की ओर बढ़ें ।जो ‘करियर परामर्श सत्रों
          की तैयारी का है।’
        </p>
      </div>
      <Footer pageNumber={13} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const PreparationForCareer = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श सत्रों की तैयारी"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          6.8 करियर परामर्श सत्रों की तैयारी
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श सत्रों को रचनात्मक/उत्पादक और प्रत्येक विद्यार्थी की
          विशिष्ट आवश्यकताओं के अनुसार बनाने के लिए उचित तैयारी जरूरी है। इस खंड
          में, हम आपको करियर परामर्शदाता के रूप में इन परामर्श सत्रों के लिए
          सक्षम रूप से तैयारी करने के लिए व्यावहारिक सुझाव देंगे, विशेष रूप से
          इस परियोजना निर्माण के संदर्भ में, जहाँ विद्यार्थी सत्र से पहले एक
          करियर गाइडेंस टेस्ट पूरा कर लेंगे।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इसके बाद तैयारी की शुरुआत विद्यार्थी की परिस्थिति और उनके द्वारा लिए
          गए करियर गाइडेंस टेस्ट के परिणामों को अच्छी तरह से समझने से होगी।
          रिपोर्ट का सावधानीपूर्वक विश्लेषण करके, करियर परामर्शदाता विद्यार्थी
          की क्षमता, सुधार के संभव होने वाले क्षेत्र और सिफारिश किये हुए करियर
          मार्गों के बारे में महत्वपूर्ण जानकारी प्राप्त कर सकते हैं। इस स्तर की
          तैयारी न केवल सत्रों की प्रभावशीलता को बढ़ाती है, बल्कि परामर्शदाता और
          विद्यार्थियों के बीच भरोसे और खुले संवाद का माहौल भी बनाती है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          तैयार की वजह से परामर्शदाता विद्यार्थियों के संभावना वाले प्रश्नों और
          चिंताओं का पूर्वानुमान लगा सकते हैं, जिससे चर्चा केंद्रित और प्रासंगिक
          बनी रहती है। इसके अलावा, यह परामर्शदाता को विद्यार्थियों की रुचियों और
          क्षमताओं के अनुसार सलाह और संसाधन (resources) प्रदान करने में सक्षम
          बनाता है, जिससे विद्यार्थी सुझाए हुए करियर निर्णय ले सकें। प्रभावी
          तैयारी अंततः एक सफल परामर्श अनुभव की नींव रखती है, जिससे विद्यार्थी
          आत्मविश्वास के साथ अपने भविष्य के करियर विकल्पों की खोज कर सकते हैं।
          तैयारी में समय लगाकर, परामर्शदाता एक सहायक और प्रभावशाली वातावरण बना
          सकते हैं, जो विद्यार्थी की विकास और सफलता को बढ़ावा देता है।
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
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
            इन चरणों का पालन करके, करियर परामर्शदाता यह तय कर सकते हैं, कि वे
            विद्यार्थियी को उनके करियर मार्गों के बारे में बताए हुए निर्णय लेने
            में सहायता करने के लिए अच्छी तरह से तैयार हैं, जिससे एक सहायक और
            उत्पादक (productive) परामर्श अनुभव मिल सके।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            इससे हम समझते हैं, कि सक्षम तैयारी सफल करियर परामर्श सत्रों का एक
            महत्वपूर्ण घटक है। प्रत्येक विद्यार्थी की परिस्थिति और टेस्ट के
            परिणामों को गहराई से समझकर, आप व्यक्तिगत मार्गदर्शन प्रदान कर सकते
            हैं, जो उनके रुचियों और क्षमताओं के अनुसार हो। यह विचारशील दृष्टिकोण
            न केवल परामर्श अनुभव की गुणवत्ता को बढ़ाता है, बल्कि विद्यार्थियों
            को उनके भविष्य के बारे में योग्य निर्णय लेने के लिए सशक्त बनाता है।
            अंतत: जब आप तैयारी में समय देते हैं, तो आप आत्मविश्वास से भरकर,
            विद्यार्थियों के विकास में महत्वपूर्ण योगदान दे सकते हैं, जो अपने
            करियर पथ को नियंत्रित करने के लिए तैयार होते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={14} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"निष्कर्ष"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          6.9 निष्कर्ष
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस मॉड्यूल में, हमने करियर परामर्श के चरणों का पता लगाया , जिसकी
          शुरुआत करियर काउंसलिंग में नियोजन के महत्व से हुई । एक संरचित
          दृष्टिकोण से यह तय करता है , कि प्रत्येक सत्र परामर्शदाता और
          विद्यार्थियों दोनों के लिए उद्देश्यपूर्ण , संगठित और प्रभावशाली हो ।
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
            हमने प्रत्येक परामर्श सत्र से पहले तैयारी के महत्व पर भी चर्चा की ,
            जिसमें विद्यार्थियों की जानकारी की समीक्षा करना और सत्र को सुंदर रूप
            से चलाने के लिए प्रासंगिक प्रश्नों के साथ आना शामिल होना जरूरी है ।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            इन चरणों का पालन करके , आप विद्यार्थियों को अच्छी तरह से स्पष्ट ,
            संगठित और अनुसार मदद दे सकते हैं , जिससे उन्हें अपने करियर की यात्रा
            के प्रत्येक चरण को नियंत्रित करने में मदद मिल सके ।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            निष्कर्ष में , ये चरण एक व्यवस्थित रूप रेखा प्रदान करते हैं , जो
            विद्यार्थियों को भ्रम से स्पष्टता की ओर ले जाता है , उनकी आकांक्षाओं
            को ठोस , कार्रवाई योग्य लक्ष्यों में बदल देता है । इस दृष्टिकोण को
            अपनाने से आप अपने विद्यार्थियों के लिए सार्थक और सशक्त परामर्श अनुभव
            बनाने में सक्षम होंगे ।
          </p>
        </div>
      </div>
      <Footer pageNumber={15} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
