import Header from "@/components/header";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Footer from "@/components/footer";
import React from "react";
import { chapterSeven, chapterSevenData } from "@/utils/cover-Hindi";

const ModuleSeven = () => {
  return (
    <>
      <Cover
        title={"मॉड्यूल 7"}
        characterTitle={
          "समग्र करियर मार्गदर्शन: दृष्टिकोण, मूल्यांकन और अनुप्रयोग"
        }
        className="max-w-[500px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"कंटेन्ट"}
        title={"सूची "}
        pageNo={"पृष्ठ क्र."}
        projectName={"मिशन मार्गदर्शन"}
        tableOfContents={chapterSeven}
      />
      <Introduction />
      <UnderstandingHolistic />
      <UnderstandingSubchapterTwo />
      <UnderstandingSubchapterThree />
      <UnderstandingSubchapterFour />
      <HolisticAssessment />
      <HolisticSubChapterTwo />
      <HolisticThreeSubChapter />
      <HolisticFourSubChapter />
      <HolisticFiveSubChapter />
      <Personality />
      <PersonalitySubChapter />
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
        <Header title={"परिचय"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.1 परिचय
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
      <Footer pageNumber={2} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const UnderstandingHolistic = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श में समग्र दृष्टिकोण को समझना"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.2 करियर परामर्श में समग्र दृष्टिकोण को समझना
        </h1>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          करियर परामर्श में समग्र दृष्टिकोण : एक विस्तृत समझ
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          इस प्रशिक्षण कार्यक्रम की शुरुआत में, हमने यह समझा कि 21वीं सदी में
          करियर की अवधारणा कैसे विकसित हुई है और करियर कथानक में आए बदलाव,
          विद्यार्थियों के करियर संभावनाओ को कैसे प्रभावित कर रहे हैं। इस विविध
          और जटिल करियर कथानक में, विद्यार्थियों को उचित निर्णय लेने में मदद
          करना केवल उनके ग्रेड या टेस्ट स्कोर के आधार पर किसी क्षेत्र का चयन
          करने तक सीमित नहीं हो सकता।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          समग्र दृष्टिकोण का महत्व
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          समग्र दृष्टिकोण करियर परामर्श के लिए विशेष रूप से प्रभावी है क्योंकि
          यह विद्यार्थी के जीवन के अन्य महत्वपूर्ण पहलुओं को भी ध्यान में रखता
          है। यह दृष्टिकोण मानता है कि किसी व्यक्ति के कौशल, रुचियों,
          व्यक्तित्व, मूल्यों, और पृष्ठभूमि का अनूठा मिश्रण सबसे उपयुक्त करियर
          मार्ग को निर्धारित करने में महत्वपूर्ण भूमिका निभाता है।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          करियर पर्याय का महत्व
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर का चयन किसी भी व्यक्ति के जीवन की सबसे महत्वपूर्ण घटनाओं में से
          एक है। यह दीर्घकालिक व्यावसायिक सफलता और व्यक्तिगत संतुष्टि को
          प्रभावित करता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          संतुष्टि और कार्यक्षमता: जो लोग अपने कौशल और रुचियों के आधार पर करियर
          का चयन करते हैं, वे काम में अधिक संतुष्टि और प्रभावशीलता अनुभव करते
          हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          विद्यार्थियों के लिए आत्मविश्वास: समग्र करियर मार्गदर्शन प्राप्त करने
          से विद्यार्थियों को निर्णय लेने की क्षमता पर विश्वास होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          दबाव और असंतोष से बचाव: पर्याप्त मार्गदर्शन के बिना, विद्यार्थी ऐसे
          करियर चुनने के दबाव में आ सकते हैं जो उनकी रुचियों और क्षमताओं के साथ
          मेल नहीं खाते।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          समग्र दृष्टिकोण के लाभ
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          समग्र दृष्टिकोण अपनाकर करियर परामर्शदाता विद्यार्थियों को उन करियर
          मार्गों की ओर निर्देशित कर सकते हैं, जो उनकी पहचान और आकांक्षाओं से
          मेल खाते हैं। यह दृष्टिकोण विद्यार्थियों को ऐसी अवसरों से जोड़ता है
          जहाँ वे व्यक्तिगत और व्यावसायिक रूप से उन्नति कर सकते हैं।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          समग्र दृष्टिकोण के प्रमुख तत्व
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर चयन करते समय यह महत्वपूर्ण है कि केवल कौशल या रुचियों से परे
          जाकर विभिन्न कारकों पर विचार किया जाए, जैसे:
        </p>
        {chapterSevenData.understandingPoints.map(
          (subCategoryData, j: number) => (
            <ul key={`subcategory-${j}`} className="list-disc ml-5">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {subCategoryData?.title}&nbsp;
                  <span className="font-normal">{subCategoryData?.value}</span>
                </p>
              </li>
            </ul>
          )
        )}
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          इस समग्र दृष्टिकोण के माध्यम से, परामर्शदाता विद्यार्थियों को ऐसे
          करियर संभावनाओं की ओर प्रेरित कर सकते हैं, जो उनके लिए दीर्घकालिक
          संतुष्टि और सफलता तय करें।
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.2.1 करियर पर्याय के लिए समग्र दृष्टिकोण का अर्थ
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          एक विद्यार्थी की कल्पना करें, जो एक चौराहे पर खड़ा है और हर रास्ता एक
          अलग करियर अवसर की ओर जाता है। करियर परामर्शदाता के रूप में, आपकी
          भूमिका उन्हें यह समझाने में मदद करना है कि सही दिशा का चुनाव केवल एक
          पेशे को चुनने तक सीमित नहीं है; इसके लिए यह समझना आवश्यक है कि वे एक
          व्यक्ति के रूप में कौन हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          समग्र दृष्टिकोण का मतलब है कि विद्यार्थी के जीवन के विभिन्न पहलुओं
          जैसे उनकी अद्वितीय क्षमताएँ, रुचियाँ, व्यक्तित्व के गुण और पृष्ठभूमि
          पर विचार करना, न कि केवल उनके ग्रेड या परीक्षा परिणामों पर ध्यान
          केंद्रित करना। करियर निर्णय लेने के लिए समग्र दृष्टिकोण क्यों ज़रूरी
          है?
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर निर्णय लेने के लिए समग्र दृष्टिकोण क्यों ज़रूरी है?
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          जीवन का हर पहलू मायने रखता है: करियर का चुनाव एक पहेली को सुलझाने जैसा
          है, जिसमें हर टुकड़ा महत्वपूर्ण है। एक संतोषजनक करियर केवल आय देने
          वाला नहीं होना चाहिए, बल्कि खुशी और उद्देश्य का स्रोत भी होना चाहिए।
          रुचियों और उत्कृष्टता का मेल: विद्यार्थियों को ऐसा करियर खोजना चाहिए
          जो उनकी रुचियों के साथ-साथ उनकी क्षमताओं के साथ मेल खाता हो।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          सांस्कृतिक और सामाजिक कारकों की भूमिका
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          मॉड्यूल 4: करियर परामर्श में महत्वपूर्ण स्टेकहोल्डर्स में, हमने यह
          समझा कि सामाजिक-आर्थिक पृष्ठभूमि, माता-पिता की अपेक्षाएँ और सांस्कृतिक
          प्रभाव विद्यार्थियों के करियर संभावनाओं को कैसे आकार देते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          उदाहरण: एक संपन्न परिवार का विद्यार्थी अपनी रुचियों का पीछा करने में
          अधिक स्वतंत्र महसूस कर सकता है। वहीं, मध्यम वर्गीय पृष्ठभूमि का
          विद्यार्थी ऐसी राह चुनने के लिए दबाव महसूस कर सकता है, जो आर्थिक
          स्थिरता प्रदान करे।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          महत्वपूर्ण कारक जो करियर मार्गदर्शन को प्रभावित करते हैं
        </p>
      </div>
      <Footer pageNumber={3} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const UnderstandingSubchapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श में समग्र दृष्टिकोण को समझना"}
          className="min-w-fit"
        />

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          समग्र दृष्टिकोण में इन पहलुओं को ध्यान में रखा जाता है:
        </p>
        {chapterSevenData.understandingSubPoints.map(
          (subCategoryData, j: number) => (
            <ul key={`subcategory-${j}`} className="list-disc ml-5">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {subCategoryData?.title}&nbsp;
                  <span className="font-normal">{subCategoryData?.value}</span>
                </p>
              </li>
            </ul>
          )
        )}
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          समग्र दृष्टिकोण का लाभ
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          यह विद्यार्थियों को उनके मूल्यों और आकांक्षाओं को प्रतिबिंबित करने
          वाले करियर संभावनाओं को चुनने में मदद करता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          यह प्रक्रिया उन्हें न केवल उनके लक्ष्यों तक पहुँचने में मदद करती है,
          बल्कि उनकी व्यक्तिगत पहचान को भी मजबूत करती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अब जब हमने समग्र दृष्टिकोण को समझ लिया है, आइए जानें कि यह करियर
          मार्गदर्शन में क्यों महत्वपूर्ण है।
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.2.2 करियर मार्गदर्शन में समग्र दृष्टिकोण क्यों आवश्यक है?
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
                  <div>
                    {item.value.map((item) => (
                      <p
                        key={item}
                        className="text-xs font-normal text-black-gray-100"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100">
            अब जब हमने यह समझ लिया है कि करियर परामर्श में समग्र दृष्टिकोण क्या
            है और यह क्यों आवश्यक है, आइए देखें कि इसे एक केस स्टडी के माध्यम से
            व्यावहारिक रूप से कैसे लागू किया जा सकता है।
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const UnderstandingSubchapterThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श में समग्र दृष्टिकोण को समझना"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.2.3 करियर मार्गदर्शन में समग्र दृष्टिकोण कैसे अपनाएँ?
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          समग्र दृष्टिकोण के माध्यम से करियर मार्गदर्शन: एक केस स्टडी
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          पृष्ठभूमि :
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अर्जुन 10वीं कक्षा का विद्यार्थी है, जिसे प्रोग्रामिंग और कंप्यूटर
          साइंस में गहरी रुचि है। हालाँकि, उसका अकादमिक प्रदर्शन औसत है। वह अपने
          भविष्य के करियर को लेकर अनिश्चित है और उपलब्ध कई संभावनाओं से अभिभूत
          महसूस करता है। अर्जुन का परिवार मध्यमवर्गीय है, जिससे उसकी आर्थिक
          चिंताएँ भी बढ़ जाती हैं
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          आकलन और मूल्यांकन :
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर मार्गदर्शन आंकलन का उपयोग करके परामर्शदाता ने अर्जुन की
          प्रोफ़ाइल के विभिन्न आयामों का परीक्षण किया। इस परीक्षण में निम्नलिखित
          महत्वपूर्ण पहलुओं की पहचान की गई:
        </p>
        {chapterSevenData.understandingSubThreePoints.map(
          (subCategoryData, j: number) => (
            <ul key={`subcategory-${j}`} className="list-disc ml-5">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {subCategoryData?.title}&nbsp;
                  <span className="font-normal">{subCategoryData?.value}</span>
                </p>
              </li>
            </ul>
          )
        )}
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          शिक्षक और परामर्शदाता के अवलोकन :
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अर्जुन के शिक्षक और परामर्शदाता ने देखा कि वह कक्षा में कंप्यूटर से
          जुड़े प्रोजेक्ट्स के प्रति उत्साही रहता है और अपने सहपाठियों की तकनीकी
          समस्याओं को हल करने में मदद करने के लिए हमेशा तैयार रहता है। इन
          अकादमिक और व्यक्तिगत अवलोकनों ने टेस्ट के परिणामों के साथ मिलकर अर्जुन
          की क्षमताओं और सुधार के क्षेत्रों का एक व्यापक दृष्टिकोण प्रदान किया।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          माता-पिता और अर्जुन के साथ चर्चा :
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          परामर्शदाता ने अर्जुन और उसके माता-पिता के साथ चर्चा की, जिसमें अर्जुन
          की रुचियों और भविष्य की आकांक्षाओं पर ध्यान केंद्रित किया गया।
          उन्होंने अर्जुन को उसके कौशल और रुचियों के अनुसार विभिन्न करियर
          संभावनाओं की जानकारी दी, जैसे कि: सॉफ्टवेयर डेवलपमेंट इन्फॉर्मेशन
          टेक्नोलॉजी शैक्षणिक तकनीक (EdTech) उपकरण विकसित करना गैर-लाभकारी
          संगठनों के साथ काम करना
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          मूल्यों और प्रेरणाओं को समझना :
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          चर्चा के दौरान यह पता चला कि अर्जुन को ईमानदारी, सहयोग, और दूसरों की
          मदद करने में रुचि है। यह सुनिश्चित करता है कि उसे ऐसे करियर की ओर
          मार्गदर्शन किया जा सकता है, जो सामाजिक प्रभाव डालते हों, जैसे कि:
          शैक्षिक तकनीकी उपकरणों का विकास गैर-लाभकारी संगठनों के साथ काम करना
          समग्र दृष्टिकोण का प्रभाव:
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          परामर्शदाता ने अर्जुन को उसकी क्षमताओं को और बेहतर बनाने के लिए सुझाव
          दिए, जैसे:
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अर्जुन और उसके माता-पिता ने इस समग्र दृष्टिकोण को सराहा, जिससे न केवल
          अर्जुन को करियर संभावनाओं को समझने में मदद मिली, बल्कि उसने अपने कौशल
          को विकसित करने की दिशा में भी कदम उठाए।
        </p>{" "}
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          परामर्शदाता ने अर्जुन को उसकी क्षमताओं को और बेहतर बनाने के लिए सुझाव
          दिए, जैसे:
        </p>
        <ol className="list-decimal ml-4">
          {chapterSevenData.understandingSubFourPoints.map((item, i) => (
            <li
              key={i}
              className="text-xs font-normal text-black-gray-100 pt-1"
            >
              {item}
            </li>
          ))}
        </ol>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          परामर्शदाता ने अर्जुन को उसकी क्षमताओं को और बेहतर बनाने के लिए सुझाव
          दिए, जैसे:
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">निष्कर्ष :</p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          समग्र दृष्टिकोण का उपयोग करते हुए करियर मार्गदर्शन अर्जुन जैसे
          विद्यार्थियों को न केवल उनके वर्तमान प्रदर्शन के आधार पर, बल्कि उनकी
          रुचियों, क्षमताओं, और व्यक्तिगत आकांक्षाओं के अनुसार भी मार्गदर्शन
          प्रदान करता है। यह दृष्टिकोण विद्यार्थियों को उनके दीर्घकालिक लक्ष्यों
          के साथ करियर मार्ग को सुनिश्चित करने में मदद करता है, जिससे वे
          आत्मविश्वास और संतुष्टि के साथ अपने करियर की यात्रा शुरू कर सकें।
        </p>
      </div>
      <Footer pageNumber={5} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const UnderstandingSubchapterFour = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श में समग्र दृष्टिकोण को समझना"}
          className="min-w-fit"
        />
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          समग्र दृष्टिकोण के माध्यम से अर्जुन का मार्गदर्शन
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          परामर्शदाता ने अर्जुन को तकनीकी क्षेत्र में विभिन्न संभावनाओं से
          परिचित कराया, जिनमें सॉफ्टवेयर डेवलपमेंट और आईटी सपोर्ट की भूमिकाएँ
          शामिल थीं। अर्जुन और उसके परिवार की आर्थिक स्थिति को ध्यान में रखते
          हुए, परामर्शदाता ने संभावित स्कॉलरशिप, वित्तीय सहायता विकल्पों, और
          प्रोग्रामिंग में प्रमाण पत्र प्रदान करने वाले व्यावसायिक प्रशिक्षण
          कार्यक्रमों पर चर्चा की। इन संभावनाओं से अर्जुन को उच्च शिक्षा की लागत
          का भार कम करने में मदद मिल सकती है। इसके साथ ही, परामर्शदाता ने अर्जुन
          को कुछ किफायती ऑनलाइन संसाधनों की जानकारी दी, जिनके माध्यम से वह स्कूल
          में रहते हुए अपनी प्रोग्रामिंग कौशल को सुधार सकता है।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          अर्जुन के विकास के लिए अतिरिक्त समर्थन :
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अर्जुन की प्रगति में मदद करने के लिए, परामर्शदाता ने उसे निम्नलिखित
          सुझाव दिए:
        </p>

        <ol className="list-decimal ml-4">
          {chapterSevenData.understandingSubFivePoints.map((item, i) => (
            <li key={i} className="text-xs font-bold text-black-gray-100 pt-1">
              {item?.title} &nbsp;
              <span className="font-normal">{item?.value}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          समग्र दृष्टिकोण का प्रभाव :
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          इस केस स्टडी में देखा जा सकता है कि परामर्शदाता ने करियर गाइडेंस
          टेस्ट, अर्जुन की अकादमिक प्रदर्शन, और अन्य उपयोगकर्ताओं की भागीदारी के
          आधार पर समग्र दृष्टिकोण अपनाया।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अर्जुन की क्षमताओं, रुचियों, व्यक्तित्व लक्षणों, और सामाजिक-आर्थिक
          पृष्ठभूमि का परीक्षण करते हुए, परामर्शदाता ने उसकी अनोखी परिस्थितियों
          को ध्यान में रखकर मार्गदर्शन प्रदान किया।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          यह समग्र समर्थन न केवल अर्जुन को सही करियर मार्ग चुनने में मदद करता है
          बल्कि उसकी व्यक्तिगत विकास और आत्मविश्वास को भी बढ़ावा देता है, जिससे
          वह भविष्य की चुनौतियों का सामना करने के लिए बेहतर रूप से तैयार होता
          है।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          आगे का कदम :
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अब तक, हमने करियर परामर्श में समग्र दृष्टिकोण के महत्व को समझा। अब, इस
          मॉड्यूल के अगले भाग में, हम एक महत्वपूर्ण आकलन उपकरण — करियर
          मार्गदर्शन आंकलन — के बारे में विस्तार से जानेंगे और देखेंगे कि यह
          प्रभावी करियर मार्गदर्शन में कैसे सहायक है।
        </p>
      </div>
      <Footer pageNumber={6} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const HolisticAssessment = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3 करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र
          परिक्षण
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आकलन उपकरण करियर परामर्श में महत्वपूर्ण भूमिका निभाते हैं, क्योंकि ये
          विद्यार्थियों की ताकत, रुचियों और संभावित करियर मार्गों के बारे में
          वस्तुनिष्ठ, डेटा-आधारित जानकारी प्रदान करते हैं। करियर मार्गदर्शन
          परीक्षण जैसे उपकरण परामर्शदाताओ को सतही रुचियों से आगे बढ़ने और
          विद्यार्थियों की क्षमताओं, रुचियों और व्यक्तित्व लक्षणों का समग्र समझ
          प्राप्त करने का अवसर प्रदान करते हैं। यह गहरी समझ परामर्शदाताओ को यह
          सलाह देने का अधिकार देती है, जो प्रत्येक विद्यार्थी की विशिष्ट
          आकांक्षाओं के साथ मेल खाती है, और साथ ही सिफारिशों को उनके स्वाभाविक
          क्षमताओं और प्राथमिकताओं के आधार पर ग्राउंड करती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस परियोजना के तहत, आपके स्कूलों में विद्यार्थी WhizQiz करियर
          मार्गदर्शन आंकलन लेंगे, जो करियर परामर्श प्रक्रिया की नींव बनेगा। इस
          परीक्षण के द्वारा उत्पन्न व्यापक रिपोर्ट के आधार पर, आप विद्यार्थियों
          को व्यक्तिगत सलाह देने में सक्षम होंगे, जिससे यह निर्धारित होगा कि
          उन्हें निर्धारित करियर चुनाव करने में मदद मिल रही है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अब हम इस आकलन को विस्तार से समझते हैं ताकि यह देखा जा सके कि यह
          डेटा-आधारित और व्यक्तिगत करियर गाइडेंस को कैसे समर्थन करता है।
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.1 करियर मार्गदर्शी परीक्षण का परिचय
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
            यह समग्र परिक्षण यह तय करता है कि करियर परामर्शदाताओं को विद्यार्थी
            के बारे में एक व्यापक समझ हो, न कि केवल उनके शैक्षिक प्रदर्शन तक
            सीमित।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            इन पहलुओं का वैज्ञानिक परिक्षण करके, WhizQiz करियर मार्गदर्शी
            परीक्षण गहरे और विस्तृत डेटा प्रदान करता है, जिससे परामर्शदाता
            विद्यार्थियों के असल क्षमताओं और व्यक्तित्व लक्षणों के आधार पर
            मार्गदर्शन कर सकते हैं। इससे यह तय होता है कि करियर मार्गदर्शन
            व्यक्तिगत और डेटा-आधारित हो, और विद्यार्थियों को उनके लक्ष्यों और
            योग्यताओं के अनुरूप करियर चुनाव में मदद मिले।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            करियर मार्गदर्शन आंकलन विद्यार्थियों की विशिष्ट ताकत, आकांक्षाओं और
            विकास के क्षेत्रों पर महत्वपूर्ण जानकारी प्रदान करता है। इस परीक्षण
            की एक प्रमुख विशेषता यह है कि यह विद्यार्थी की शीर्ष क्षमताओं,
            प्रमुख रुचियों और प्रमुख व्यक्तित्व लक्षणों का संयोजन करके व्यक्तिगत
            करियर सिफारिशें प्रदान करने में सक्षम है। यह दृष्टिकोण निर्धारित
            करता है कि सुझाए गए करियर मार्ग न केवल विद्यार्थी की आंतरिक
            प्रेरणाओं और क्षमताओं से मेल खाते हैं, बल्कि उनके दीर्घकालिक जीवन
            लक्ष्यों का भी समर्थन करते हैं, जिससे व्यक्तिगत संतोष और व्यावसायिक
            सफलता दोनों को बढ़ावा मिलता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            करियर मार्गदर्शी परीक्षण की समग्र प्रकृति परामर्शदाताओं को
            महत्वपूर्ण जानकारी प्रदान करती है, जिससे वे विद्यार्थियों को पूरी
            तरह से निर्धारित और संतुलित मार्गदर्शन दे सकते हैं। यह विद्यार्थियों
            को ऐसे करियर खोजने में मदद करता है जो न केवल प्राप्ति योग्य हैं,
            बल्कि संतोषजनक भी हैं, और उनके दीर्घकालिक विकास और सफलता का समर्थन
            करते हैं। अगले अनुभागों में, हम परीक्षण में मूल्यांकित विशिष्ट
            क्षमताओं को विस्तार से समझेंगे और यह देखेंगे कि प्रत्येक क्षमता
            विद्यार्थी के करियर यात्रा को आकार देने में कैसे योगदान करती है।
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const HolisticSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.2. करियर मार्गदर्शी परीक्षण में मूल्यांकित आदर्श क्षमता
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर मार्गदर्शी परीक्षण विद्यार्थी की प्रोफ़ाइल के विभिन्न महत्वपूर्ण
          पहलुओं का परिक्षण करता है, जैसे उनकी क्षमताएँ, रुचियाँ, व्यक्तित्व
          लक्षण और अध्ययन कौशल और आदतें। इन पहलुओं को पूरी तरह से समझने के लिए,
          यह परीक्षण कई आदर्श क्षमता का उपयोग करता है, जो प्रत्येक विद्यार्थी की
          विशिष्ट ताकत और विकास के क्षेत्रों में गहरी जानकारी प्रदान करते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अध्यापक के रूप में, जो करियर परामर्शदाता बनने के लिए प्रशिक्षण प्राप्त
          कर रहे हैं, इन आदर्श क्षमता को समझना अत्यंत आवश्यक है। जब आप करियर
          मार्गदर्शी परीक्षण में मूल्यांकित लक्षणों से परिचित होंगे, तो आप
          परिणामों को अधिक प्रभावी ढंग से समझने और विद्यार्थियों को व्यक्तिगत
          मार्गदर्शन देने के लिए बेहतर तरीके से सुसज्जित होंगे। यह गहरी समझ आपको
          अधिक निर्धारित निर्णय लेने में मदद करती है, जिससे आप विद्यार्थियों की
          ताकत को सही करियर मार्ग से जोड़ने में सक्षम होते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इसके अलावा, इस समझ से आपको टेस्ट के परिणामों को स्पष्ट रूप से
          विद्यार्थियों और उनके माता-पिता को संप्रेषित करने में मदद मिलती है,
          जिससे किसी भी सवाल या चिंता का समाधान हो सकता है और वे परिणामों को
          पूरी तरह से समझ सकें। जब आप इन क्षमताओं को विद्यार्थी की शैक्षिक
          प्रगति, व्यक्तिगत विकास और आकांक्षाओं के व्यापक संदर्भ से जोड़ते हैं,
          तो आप करियर परामर्श के लिए एक अधिक समग्र और एकीकृत दृष्टिकोण प्रदान कर
          सकते हैं। इससे न केवल आपको अधिक अर्थपूर्ण करियर सलाह देने में मदद
          मिलेगी, बल्कि विद्यार्थियों को भविष्य के बारे में अधिक आत्मविश्वास के
          साथ सूचित निर्णय लेने में भी सहायता मिलेगी।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अब, आइए परीक्षण में उपयोग किए गए आदर्श क्षमताओ पर एक गहरी नज़र डालते
          हैं, शुरुआत करते हैं उन क्षमताओं से जो इस आदर्श में मूल्यांकित की जाती
          हैं। इन क्षमताओं को समझने से आपको यह जानने में मदद मिलेगी कि कैसे एक
          विद्यार्थी की प्राकृतिक ताकत उन्हें उपयुक्त करियर मार्ग की ओर
          मार्गदर्शन कर सकती है
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.2.1 क्षमताएँ
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श में क्षमताओं का महत्व:
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर परामर्श में एक विद्यार्थी की क्षमताओं को समझना अत्यंत आवश्यक है,
          ताकि उन्हें एक ऐसा करियर मार्ग चुनने में मदद मिल सके जो उनकी प्राकृतिक
          शक्तियों के अनुसार हो। क्षमताएँ व्यक्ति की प्राकृतिक या विकसित कौशल,
          प्रतिभाएँ और क्षमता को दर्शाती हैं, जो उन्हें विशिष्ट कार्यों और
          गतिविधियों को प्रभावी ढंग से निष्पादित करने में सक्षम बनाती हैं। ये
          क्षमताएँ जन्मजात हो सकती हैं या अनुभव और अभ्यास से विकसित हो सकती हैं,
          और ये यह निर्धारित करने में महत्वपूर्ण भूमिका निभाती हैं कि विद्यार्थी
          किस करियर में कितना सफल हो सकता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अमेरिकन साइकोलॉजिकल एसोसिएशन (APA) के अनुसार, क्षमताएँ &quot;किसी
          विशिष्ट शारीरिक या मानसिक कार्य को सफलतापूर्वक करने की क्षमता या
          कौशल&quot; होती हैं। सरल शब्दों में, क्षमताएँ एक व्यक्ति की किसी विशेष
          कार्य या नौकरी को सफलतापूर्वक पूरा करने की क्षमता को दर्शाती हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-3">
          करियर मार्गदर्शी परीक्षण में सात प्रकार की क्षमताओं का परिक्षणकिया
          जाता है। आइए हम इन्हें एक-एक करके समझते हैं, साथ ही उनके उदाहरण भी
          देखते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          1.&nbsp;
          <span className="font-bold"> मौखिक क्षमताएँ (Verbal Ability)</span>
          &nbsp; यह एक संज्ञानात्मक कौशल है, जो एक व्यक्ति को भाषा को समझने,
          व्याख्या करने और प्रभावी रूप से उपयोग करने में सक्षम बनाता है। इस
          परीक्षण में यह परिक्षण किया जाता है कि विद्यार्थी वाक्य संरचना,
          शब्दार्थ और संदर्भ को कैसे समझता है और लिखित रूप में भाषा को कैसे
          संभालता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">उदाहरण:</span> &nbsp; ऐसे विद्यार्थी जिनकी
          मौखिक क्षमताएँ मजबूत होती है, वे रचनात्मक लेखन, पत्रकारिता, अध्यापन,
          और संचार जैसे क्षेत्रों में अच्छा कर सकते हैं, जहाँ पढ़ने की समझ और
          भाषा का प्रभावी उपयोग महत्वपूर्ण होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          2.&nbsp;
          <span className="font-bold"> आंकिक क्षमताएँ (Numerical Ability)</span>
          &nbsp;यह कौशल और योग्यता है, जो किसी व्यक्ति को संख्याओं के साथ सटीक
          और प्रभावी ढंग से काम करने की क्षमता देती है। इसमें गणना जैसे जोड़,
          घटाव, गुणा और भाग करना शामिल है, और केवल गणना तक सीमित नहीं है, बल्कि
          संख्याओं के रिश्तों, पैटर्न और रणनीतियों को समझना भी आवश्यक है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">उदाहरण:</span> &nbsp; ऐसे विद्यार्थी जिनकी
          आंकिक क्षमताएँ मजबूत होती है, वे वित्त, लेखा, बैंकिंग और डेटा विश्लेषण
          जैसे क्षेत्रों में अच्छा कर सकते हैं, जहाँ संख्याओं के साथ काम करना,
          डेटा का विश्लेषण करना और मात्रात्मक समस्याओं को हल करना महत्वपूर्ण
          होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          3.&nbsp;
          <span className="font-bold">
            तार्किक क्षमताएँ (Reasoning Ability)
          </span>
          &nbsp;यह संज्ञानात्मक कौशल है, जो व्यक्तियों को जानकारी का विश्लेषण,
          परीक्षण और व्यवस्थित रूप से प्रसंस्करण करने में सक्षम बनाता है। इसमें
          विभिन्न प्रकार की सोच का उपयोग किया जाता है, जैसे कि डिडक्टिव,
          इंडक्टिव, और क्रिटिकल रीजनिंग, ताकि जटिल स्थितियों को समझा जा सके,
          समस्याओं को हल किया जा सके और अपेक्षित निर्णय लिए जा सकें।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">उदाहरण:</span> &nbsp; ऐसे विद्यार्थी जिनकी
          तार्किक क्षमताएँ मजबूत होती है, वे उन क्षेत्रों में अच्छे होते हैं,
          जहाँ पैटर्न की पहचान, निष्कर्ष निकालना और रिश्तों को समझना आवश्यक होता
          है, जैसे कि अनुसंधान, विश्लेषणात्मक सोच, और रणनीतिक योजना बनाना।
        </p>
        <p>
          इन क्षमताओं का परीक्षण विद्यार्थी के करियर मार्गदर्शन में सहायक होता
          है, क्योंकि यह विद्यार्थियों की प्राकृतिक क्षमताओं और रुचियों के आधार
          पर उन्हें उचित करियर पर्याय सुझाने में मदद करता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">उदाहरण:</span> &nbsp; जिन विद्यार्थियों की
          तार्किक क्षमताएँ मजबूत होती है, वे अनुसंधान, प्रबंधन, सॉफ़्टवेयर
          विकास, कानूनी पेशे, आदि जैसे क्षेत्रों में अच्छा कर सकते हैं, जहाँ
          समस्याओं का समाधान, आलोचनात्मक सोच और रणनीतिक योजना की आवश्यकता होती
          है।
        </p>
      </div>
      <Footer pageNumber={8} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const HolisticThreeSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          4.&nbsp;
          <span className="font-bold">
            स्थानिक व भौगोलिक क्षमताएँ (Spatial Ability)
          </span>
          &nbsp; यह संज्ञानात्मक कौशल है, जो व्यक्तियों को दृश्य और स्थानिक
          जानकारी को समझने, व्याख्या करने और प्रभावी रूप से उपयोग करने में सक्षम
          बनाता है। इसमें तीन-आयामी स्थान में वस्तुओं और रूपों को मानसिक रूप से
          काल्पनिक दृश्य निर्मित करने, बदलने और बातचीत करने की क्षमता शामिल है।
          यह क्षमता उन कार्यों में महत्वपूर्ण होती है, जिनमें स्थानिक रिश्तों और
          रूपों को समझने और यह जानने की आवश्यकता होती है कि ये एक-दूसरे से कैसे
          संबंधित हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">उदाहरण:</span> &nbsp; जिन विद्यार्थियों की
          स्थानिक व भौगोलिक क्षमताएँ मजबूत होती है, वे डिज़ाइन, विज़ुअलाइजेशन और
          स्थानिक योजना जैसे क्षेत्रों में अच्छा कर सकते हैं, जैसे कि वास्तुकला,
          सिविल इंजीनियरिंग, उड्डयन और एनीमेशन।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          5.&nbsp;
          <span className="font-bold">
            यंत्रवत क्षमताएँ (Mechanical Ability)
          </span>
          &nbsp;यह कौशल और ज्ञान है, जो व्यक्तियों को विभिन्न यांत्रिक
          प्रणालियों, उपकरणों और प्रक्रियाओं को समझने और उनके साथ काम करने में
          सक्षम बनाता है। इसमें यांत्रिक सिद्धांतों जैसे गति, बल, विद्युत और
          चुंबकत्व का मौलिक ज्ञान शामिल है, जो यह समझने के लिए आवश्यक है कि
          मशीनें और उपकरण कैसे कार्य करते हैं। यह क्षमता व्यक्तियों को यांत्रिक
          अवधारणाओं को समस्याओं को हल करने और उपकरणों और प्रणालियों को प्रभावी
          ढंग से संचालित करने में मदद करती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">उदाहरण:</span> &nbsp;जिन विद्यार्थियों की
          मेकैनिकल एबिलिटी मजबूत होती है, वे रोबोटिक्स, मशीन लर्निंग, सामग्री
          डिज़ाइन, अंतरिक्ष अनुसंधान और मिसाइल प्रौद्योगिकी जैसे क्षेत्रों में
          अच्छा कर सकते हैं, जहाँ यांत्रिक सिद्धांतों का ज्ञान समस्याओं के
          समाधान और नवाचार में महत्वपूर्ण होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          6.&nbsp;
          <span className="font-bold"> समापन क्षमताएँ (Closure Ability)</span>
          &nbsp;यह वह कौशल है, जो दृश्य या अवधारणात्मक पैटर्न को पूरा करके समझने
          की क्षमता प्रदान करता है, भले ही कुछ जानकारी गायब या अपूर्ण हो। इसमें
          यह क्षमता शामिल है कि व्यक्ति उन खाली स्थानों को भरने और अनुपलब्ध
          विवरणों के बावजूद वस्तुओं या पैटर्न को संपूर्ण रूप में पहचान सके। यह
          क्षमता हमारे दिमाग के स्वाभाविक तरीके से जुड़ी होती है, जो अधूरी रूपों
          या विचारों को &quot;पूर्ण&quot; करता है, जिससे हम अपूर्ण जानकारी का
          सही अर्थ निकाल सकते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">उदाहरण:</span> &nbsp; जिन विद्यार्थियों की
          क्लोज़र एबिलिटी (समापन क्षमताएँ) मजबूत होती है, वे जांच, अनुसंधान,
          डेटा विश्लेषण, भविष्यवाणी मॉडलिंग और फैशन डिज़ाइन जैसे क्षेत्रों में
          अच्छा कर सकते हैं, जहाँ अपूर्ण जानकारी को समझना और पैटर्न देखना
          महत्वपूर्ण होता है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          7.&nbsp;
          <span className="font-bold">लिपिकीय क्षमताएँ (Clerical Ability)</span>
          &nbsp;यह कौशल है जो व्यक्तियों को विवरणों को जल्दी और सही ढंग से
          पहचानने में सक्षम बनाता है, विशेष रूप से जब पत्रों, संख्याओं या
          प्रतीकों में समानताएँ और भिन्नताएँ पहचानी जाती हैं। यह कौशल उन कार्यों
          में मददगार होता है जिनमें ध्यान केंद्रित करने और त्वरित निर्णय लेने की
          आवश्यकता होती है, जैसे कि संख्या या पत्र संयोजन के साथ काम करना और
          जानकारी को सही तरीके से व्यवस्थित करना।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          <span className="font-bold">उदाहरण:</span> &nbsp; जिन विद्यार्थियों की
          क्लेरिकल एबिलिटी (लिपिकीय क्षमताएँ) मजबूत होती है, वे प्रशासनिक
          भूमिकाओं, डेटा एंट्री, खुदरा, और कानूनी सहायता जैसे क्षेत्रों में
          अच्छा कर सकते हैं, जहाँ त्वरित निर्णय-निर्माण और सटीकता कार्यों को
          प्रभावी रूप से संभालने के लिए महत्वपूर्ण होते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          इन क्षमताओं का विद्यार्थियों की ताकत और संभावित करियर मार्गों को
          निर्धारित करने में महत्वपूर्ण योगदान होता है। इन क्षमताओं को समझकर,
          करियर परामर्शदाता अधिक लक्षित और क्रियात्मक सलाह दे सकते हैं, जिससे
          विद्यार्थियों को अपनी ताकत पर ध्यान केंद्रित करने और सुधार के
          क्षेत्रों की पहचान करने में मदद मिलती है। यह व्यक्तिगत दृष्टिकोण यह
          निर्धारित करता है कि विद्यार्थी अपने करियर मार्गों का चयन अपनी ताकत के
          अनुरूप करें, जबकि उन्हें भविष्य की सफलता के लिए आवश्यक कौशल और
          क्षमताओं का विकास करने में मदद मिलती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          अब जब हमने इस परीक्षण में आकलित विभिन्न क्षमताओं का अध्ययन कर लिया है,
          तो हम करियर रुचियों पर विचार करेंगे। हम प्रत्येक रुचि को करीब से
          देखेंगे और समझेंगे कि ये करियर संभावनाओं को कैसे प्रभावित करती हैं।
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.2.2 करियर रुचियाँ (Career Interests)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर रुचियाँ उन गतिविधियों या क्षेत्रों को दर्शाती हैं जिनमें व्यक्ति
          स्वाभाविक रूप से रुचि रखते हैं और जिनमें वे उत्कृष्टता प्राप्त करते
          हैं। ये रुचियाँ व्यक्तिगत क्षमताओं, झुकावों और बाहरी प्रभावों जैसे
          परिवार और समाज द्वारा प्रभावित होती हैं, और यह मार्गदर्शन करती हैं कि
          व्यक्ति उन व्यवसायों की ओर बढ़े, जो उनके रुचि के अनुकूल हों। करियर
          रुचियों को पहचानना और समझना यह निर्धारित करने के लिए महत्वपूर्ण है कि
          व्यक्ति को दीर्घकालिक नौकरी और व्यावसायिक संतुष्टि मिले। जब करियर के
          संभावनाओं को व्यक्तिगत रुचियों के साथ मेल किया जाता है, तो व्यक्ति को
          ऐसे कार्य मिलते हैं जो अर्थपूर्ण और पुरस्कृत महसूस होते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर परामर्श में, करियर रुचियों का परिक्षण परामर्शदाताओं को यह सलाह
          देने में मदद करता है कि विद्यार्थी को कौन-से करियर मार्ग अपनाने चाहिए,
          जिससे वे उन क्षेत्रों में समृद्ध हो सकें, जहाँ उनकी स्वाभाविक रुचियाँ
          होती हैं। WhizQiz करियर मार्गदर्शी परीक्षण इस उद्देश्य से डिज़ाइन किया
          गया है कि विद्यार्थियों को उनकी रुचियों का पता लगाने का अवसर मिले,
          जिससे वे अपने भविष्य के बारे में उचित निर्णय ले सकें। विद्यार्थियों को
          उनके विशिष्ट झुकावों के आधार पर करियर संभावनाओं का मेल करके, वे सफलता
          और संतुष्टि की संभावना को बढ़ा सकते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अब, हम इस परीक्षण में मापी गई 8 करियर रुचियों को करीब से देखेंगे और
          समझेंगे कि ये करियर संभावनाओं को कैसे प्रभावित कर सकती हैं
        </p>
      </div>
      <Footer pageNumber={9} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const HolisticFourSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          1.&nbsp;
          <span className="font-bold">विज्ञान में रुचि (Science Interest)</span>
          &nbsp; विज्ञान में रुचि उस स्वाभाविक जिज्ञासा और उत्साह को दर्शाती है
          जो किसी व्यक्ति को पर्यावरण, प्राकृतिक प्रक्रियाओं, और वैज्ञानिक
          अवधारणाओं को समझने और उनका अध्ययन करने के लिए प्रेरित करती है। ऐसे
          विद्यार्थी जिनकी विज्ञान में रुचि होती है, वे अनुसंधान, चिकित्सा,
          इंजीनियरिंग, और अन्य वैज्ञानिक क्षेत्रों में उत्कृष्टता प्राप्त कर
          सकते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          2.&nbsp;
          <span className="font-bold">
            कला और डिजाइन में रुचि (Arts and Design Interest)
          </span>
          &nbsp;यह रुचि उस व्यक्ति की रचनात्मकता और सौंदर्य बोध को दर्शाती है।
          कला और डिजाइन में रुचि रखने वाले विद्यार्थी उन क्षेत्रों में सफल हो
          सकते हैं जहां उनकी रचनात्मकता, डिज़ाइन विचार और कला कौशल की आवश्यकता
          होती है, जैसे ग्राफिक डिज़ाइन, इंटीरियर्स, फिल्म निर्माण, और फैशन
          डिजाइन।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          3.&nbsp;
          <span className="font-bold">
            व्यवसाय और प्रबंधन में रुचि (Business and Management Interest)
          </span>
          &nbsp;इस रुचि में विद्यार्थियों को उन क्षेत्रों में रुचि होती है जो
          व्यापार संचालन, वित्तीय योजना, रणनीतिक निर्णय, और नेतृत्व से संबंधित
          होते हैं। व्यवसाय और प्रबंधन में रुचि रखने वाले विद्यार्थी वाणिज्य,
          वित्त, विपणन, मानव संसाधन, और अन्य प्रबंधन भूमिकाओं में सफलता प्राप्त
          कर सकते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          4.&nbsp;
          <span className="font-bold">
            सामाजिक सेवाओं में रुचि (Social Services Interest)
          </span>
          &nbsp;यह रुचि उस व्यक्ति के समाज सेवा, परामर्श और अन्य लोगों की मदद
          करने के प्रति लगाव को दर्शाती है। सामाजिक सेवाओं में रुचि रखने वाले
          विद्यार्थी परामर्श, शिक्षा, मानसिक स्वास्थ्य, और सामुदायिक विकास जैसे
          क्षेत्रों में अपना करियर बना सकते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          5.&nbsp;
          <span className="font-bold">
            लेखन और साहित्य में रुचि (Writing and Literature Interest)
          </span>
          &nbsp;लेखन में रुचि रखने वाले विद्यार्थी साहित्य, पत्रकारिता, संपादन,
          और अन्य लेखन संबंधित करियर में सफल हो सकते हैं। यह रुचि भाषा और
          विचारों को अभिव्यक्त करने में मदद करती है, और विद्यार्थियों को विभिन्न
          प्रकार की रचनात्मक और अकादमिक लेखन में सफलता मिल सकती है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          6.&nbsp;
          <span className="font-bold">
            गणितीय और विश्लेषण में रुचि (Mathematics and Analysis Interest)
          </span>
          &nbsp; गणित और विश्लेषण में रुचि रखने वाले विद्यार्थी उन करियर मार्गों
          में उत्कृष्टता प्राप्त कर सकते हैं जिनमें सांख्यिकी, डेटा विश्लेषण,
          वित्त, और गणनात्मक मॉडलिंग जैसी क्षमताओं की आवश्यकता होती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          7.&nbsp;
          <span className="font-bold">
            . तकनीकी और इंजीनियरिंग में रुचि (Technology and Engineering
            Interest)
          </span>
          &nbsp; इस रुचि के तहत, विद्यार्थी उन क्षेत्रों में रुचि रखते हैं जो
          तकनीकी विकास और इंजीनियरिंग से संबंधित हैं। वे कंप्यूटर विज्ञान,
          इलेक्ट्रिकल इंजीनियरिंग, रोबोटिक्स, और आईटी जैसे क्षेत्रों में सफलता
          प्राप्त कर सकते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          8.&nbsp;
          <span className="font-bold">
            स्वास्थ्य और चिकित्सा में रुचि (Health and Medical Interest)
          </span>
          &nbsp; स्वास्थ्य और चिकित्सा में रुचि रखने वाले विद्यार्थी चिकित्सा,
          नर्सिंग, फार्मेसी, और अन्य स्वास्थ्य से संबंधित करियर में अपना योगदान
          दे सकते हैं। ऐसे विद्यार्थी रोगियों की देखभाल, चिकित्सा अनुसंधान और
          स्वास्थ्य नीति के क्षेत्र में कार्य करने के लिए प्रेरित होते हैं।
        </p>
      </div>
      <Footer pageNumber={10} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const HolisticFiveSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          यहाँ दिए गए करियर रुचियों के द्वारा, परामर्शदाता विद्यार्थियों के
          व्यक्तिगत झुकाव और रुचियों को समझ सकते हैं, जिससे उन्हें उपयुक्त करियर
          संभावनाओं का मार्गदर्शन किया जा सकता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          विज्ञान में रुचि का अर्थ है भौतिक और प्राकृतिक दुनिया में वैज्ञानिक
          सिद्धांतों का उपयोग करना। इसमें वैज्ञानिक अवधारणाओं को हल करने और नए
          विचारों का खोज करने के लिए सिद्धांतात्मक समझ और व्यावहारिक आवेदन दोनों
          का संयोजन होता है। जिन लोगों की विज्ञान में गहरी रुचि होती है, वे
          प्रयोग करना, डेटा का विश्लेषण करना और वास्तविक जीवन की परिस्थितियों
          में अपने ज्ञान को लागू करना पसंद करते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          विज्ञान में रुचि रखने वाले विद्यार्थी निम्नलिखित क्षेत्रों में करियर
          बना सकते हैं: चिकित्सा और स्वास्थ्य, फार्मास्यूटिकल्स, जैव चिकित्सा
          इंजीनियरिंग, पर्यावरण विज्ञान, डेटा विश्लेषण, खगोलशास्त्र, रासायनिक
          इंजीनियरिंग, फोरेंसिक, जैव प्रौद्योगिकी, समुद्री जैविकी, सूचना
          प्रौद्योगिकी, भूविज्ञान और पृथ्वी विज्ञान आदि।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          सृजनात्मक कला में रुचि का मतलब है ऐसी गतिविधियों में स्वाभाविक रुचि जो
          व्यक्ति को अपनी कल्पना का उपयोग करने और अद्वितीय तरीकों से खुद को
          व्यक्त करने का अवसर देती हैं। इस रुचि वाले लोग चित्रकला, अभिनय, संगीत,
          डिजाइन जैसे रचनात्मक कार्यों में संलग्न होते हैं। उन्हें सुंदरता और
          कलात्मक अभिव्यक्ति की गहरी सराहना होती है, और वे विभिन्न कलात्मक रूपों
          के माध्यम से खुद को व्यक्त करना पसंद करते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          सृजनात्मक कला में रुचि रखने वाले विद्यार्थी निम्नलिखित क्षेत्रों में
          करियर बना सकते हैं: दृश्य कला, प्रदर्शन कला, लेखन और साहित्य, फिल्म और
          मीडिया उत्पादन, फैशन डिजाइन, उत्पाद डिजाइन, ग्राफिक डिजाइन, चित्रण,
          कला चिकित्सा, थिएटर उत्पादन, म्यूजियम क्यूरेशन, रचनात्मक लेखन, एनीमेशन
          और गेम डिजाइन, संगीत उत्पादन, रचनात्मक निर्देशन और फोटोग्राफी आदि।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          व्यापार और अर्थशास्त्र में रुचि का मतलब है यह जानने की स्वाभाविक इच्छा
          कि पैसे, व्यवसाय और आर्थिक प्रणालियाँ कैसे काम करती हैं। इस रुचि वाले
          लोग व्यवसायों के संचालन, वित्तीय प्रबंधन और रणनीतिक निर्णयों को समझने
          में रुचि रखते हैं। यह व्यक्तियों को पैसे के प्रबंधन, उद्यमिता और
          व्यापक आर्थिक परिप्रेक्ष्य के बारे में जानने की इच्छा प्रदान करता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          व्यापार और अर्थशास्त्र में रुचि रखने वाले विद्यार्थी निम्नलिखित
          क्षेत्रों में करियर बना सकते हैं: बैंकिंग, चार्टर्ड एकाउंटेंसी,
          अनुसंधान विश्लेषण, ऐक्चुअरियल साइंस, निवेश बैंकिंग, वित्तीय बाजार आदि।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          व्यापार और अर्थशास्त्र में रुचि रखने वाले विद्यार्थी निम्नलिखित
          क्षेत्रों में करियर बना सकते हैं: बैंकिंग, चार्टर्ड एकाउंटेंसी,
          अनुसंधान विश्लेषण, ऐक्चुअरियल साइंस, निवेश बैंकिंग, वित्तीय बाजार आदि।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          यथार्थवादी और तकनीकी रुचि रखने वाले विद्यार्थी निम्नलिखित क्षेत्रों
          में करियर बना सकते हैं: सिविल इंजीनियरिंग, निर्माण, ऑटोमोबाइल निर्माण,
          कृषि, रसोई कला, लैंडस्केपिंग, बढ़ईगिरी, लकड़ी का काम, स्वास्थ्य
          देखभाल, आतिथ्य प्रबंधन आदि।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          यथार्थवादी और तकनीकी रुचि रखने वाले विद्यार्थी निम्नलिखित क्षेत्रों
          में करियर बना सकते हैं: सिविल इंजीनियरिंग, निर्माण, ऑटोमोबाइल निर्माण,
          कृषि, रसोई कला, लैंडस्केपिंग, बढ़ईगिरी, लकड़ी का काम, स्वास्थ्य
          देखभाल, आतिथ्य प्रबंधन आदि।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          कृषि में रुचि रखने वाले विद्यार्थी निम्नलिखित क्षेत्रों में करियर बना
          सकते हैं: कृषि विज्ञान, एग्रीबिजनेस प्रबंधन, कृषि इंजीनियरिंग,
          एग्रोमनी, पशुपालन प्रबंधन, खाद्य विज्ञान, पर्यावरणीय संरक्षण, ग्रामीण
          विकास, कृषि शिक्षा, बागवानी, जल कृषि, स्थिरता, खाद्य सुरक्षा, खाद्य
          प्रौद्योगिकी और बागवानी आदि।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          इसके बाद, हम व्यक्तित्व क्षमताओं (Personality Competencies) का खोज
          करेंगे, जो कार्य, रिश्तों और अध्ययन के प्रति व्यक्तिगत दृष्टिकोण को
          आकार देने में महत्वपूर्ण भूमिका निभाती हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          मानव स्वभाव और सामाजिक तथा राजनीतिक प्रणालियों को आकार देने वाली
          ताकतों की जटिलताएँ का अध्ययन सामाजिक विज्ञान और मानविकी के अंतर्गत आता
          है। इस रुचि वाले विद्यार्थी समाज में मानवीय व्यवहार, सांस्कृतिक
          परिवर्तन और राजनीतिक प्रणालियों के प्रभाव को समझने में रुचि रखते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          सामाजिक विज्ञान और मानविकी में उच्च रुचि रखने वाले विद्यार्थी
          निम्नलिखित क्षेत्रों में करियर बना सकते हैं: मनोविज्ञान, समाजशास्त्र,
          अर्थशास्त्र, राजनीति विज्ञान, मानवशास्त्र, समाज सेवा, परामर्श और
          चिकित्सा, अंतर्राष्ट्रीय संबंध, शिक्षा, मानव संसाधन, सार्वजनिक
          स्वास्थ्य, सामुदायिक विकास, सार्वजनिक प्रशासन, पर्यावरणीय स्थिरता और
          सामाजिक नीति विश्लेषण आदि।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          गृह विज्ञान में रुचि का मतलब है एक व्यक्ति की स्वाभाविक प्रवृत्ति जो
          एक सुव्यवस्थित, आरामदायक और स्वस्थ जीवन वातावरण बनाने की ओर आकर्षित
          होती है। इसमें पोषण, घरेलू प्रबंधन और बाल विकास जैसे कौशलों का अध्ययन
          और व्यावहारिक आवेदन शामिल होता है, जो व्यक्तिगत और पारिवारिक भलाई को
          बढ़ावा देते हैं। यह रचनात्मकता के साथ व्यावहारिक कौशल को जोड़ता है, और
          व्यक्तियों को दैनिक कार्यों को प्रभावी ढंग से व्यवस्थित करने, पोषक
          आहार बनाने, एक सामंजस्यपूर्ण घरेलू वातावरण बनाए रखने, और यहां तक कि
          घरेलू डिज़ाइन या वस्त्र काम में शामिल होने के तरीके सिखाता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          गृह विज्ञान में रुचि रखने वाले विद्यार्थी निम्नलिखित क्षेत्रों में
          करियर बना सकते हैं: आहार और पोषण विज्ञान, स्वास्थ्य देखभाल, बाल विकास,
          सार्वजनिक स्वास्थ्य शिक्षा, वस्त्र और परिधान डिजाइन, आंतरिक डिजाइन,
          रसोई कला, आतिथ्य प्रबंधन, गृह अर्थशास्त्र और उपभोक्ता संरक्षण।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          शारीरिक और खेल में रुचि का मतलब है शारीरिक फिटनेस, एथलेटिक कौशल और
          सक्रिय खेल सहभागिता की ओर एक मजबूत प्रवृत्ति। इस रुचि वाले व्यक्तियों
          को शारीरिक गतिविधियों से ऊर्जा मिलती है, वे खेल संबंधित कौशल विकसित
          करने का आनंद लेते हैं और प्रतिस्पर्धी तथा सहयोगात्मक वातावरण में
          कामयाब होते हैं। यह रुचि उन करियरों के लिए उपयुक्त होती है जो शारीरिक
          गतिविधियों पर आधारित होते हैं, चाहे वह व्यावसायिक खेल, कोचिंग, खेल
          प्रबंधन या खेल उद्योग में सहायक भूमिकाएँ हों। इसमें टीम गतिशीलता,
          व्यक्तिगत फिटनेस और खेल पारिस्थितिकी तंत्र के प्रति एक विशेष आकर्षण
          होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          शारीरिक और खेल में उच्च रुचि रखने वाले विद्यार्थी निम्नलिखित क्षेत्रों
          में करियर बना सकते हैं: व्यावसायिक एथलेटिक्स, खेल कोचिंग, शारीरिक
          शिक्षा, खेल प्रबंधन, खेल विपणन, खेल पत्रकारिता, खेल मनोविज्ञान, खेल
          पोषण, फिटनेस प्रशिक्षण, खेल चिकित्सा, खेल आयोजन प्रबंधन और खेल उपकरण
          डिजाइन और निर्माण।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          व्यक्तिगत रुचियों का खोज परामर्शदाताओं को संभावित करियर मार्गों के
          बारे में मूल्यवान जानकारी प्रदान करता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          एक परामर्शदाता के लिए यह महत्वपूर्ण होता है कि वे यह निर्धारित करें कि
          एक विद्यार्थी की बताई गई रुचियाँ उनके स्वाभाविक झुकाव, प्रेरणाओं और
          संतोष के क्षेत्रों से मेल खाती हैं या नहीं। करियर रुचियों को समझकर,
          परामर्शदाता यह बेहतर तरीके से परिक्षणकर सकते हैं कि विद्यार्थी की
          करियर आकांक्षाएँ वास्तव में उनकी पसंद और ताकत से मेल खाती हैं या नहीं,
          जैसा कि परामर्श सत्र में चर्चा की जाती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-1">
          इसके बाद, हम व्यक्तित्व क्षमताओं (Personality Competencies) का खोज
          करेंगे, जो कार्य, रिश्तों और अध्ययन के प्रति व्यक्तिगत दृष्टिकोण को
          आकार देने में महत्वपूर्ण भूमिका निभाती हैं।
        </p>
      </div>
      <Footer pageNumber={11} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const Personality = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.2.3 व्यक्तित्व (Personality)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          व्यक्तित्व किसी व्यक्ति के विचारों, भावनाओं और व्यवहारों के अद्वितीय
          और स्थायी पैटर्न को संदर्भित करता है, जो उन्हें विशिष्ट बनाता है।
          मानसिकतावादी व्यक्तित्व को एक ऐसे स्थिर गुण और विशेषताओं के रूप में
          परिभाषित करते हैं जो एक व्यक्ति को वह बनाती हैं, और जो यह प्रभावित
          करती हैं कि वे विभिन्न स्थितियों में कैसे प्रतिक्रिया करते हैं और
          दूसरों के साथ कैसे संवाद करते हैं। ये गुण जीवन के हर पहलु को आकार देते
          हैं, जैसे रिश्ते, व्यक्तिगत विकास, और व्यावसायिक सफलता।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर मार्गदर्शन परिक्षण व्यक्तित्व को पाँच प्रमुख आयामों के माध्यम से
          परिक्षण करता है, जो प्रसिद्ध बिग फाइव व्यक्तित्व मॉडल पर आधारित हैं,
          और यह एक ढांचा प्रदान करता है ताकि उन विशिष्ट गुणों को समझा जा सके जो
          करियर निर्णयों में महत्वपूर्ण भूमिका निभाते हैं। करियर परामर्शदाताओं
          के लिए, इन व्यक्तित्व अंतर्दृष्टियों का उपयोग एक शक्तिशाली उपकरण के
          रूप में होता है, जो विद्यार्थियों को उनके अद्वितीय गुणों के अनुरूप
          करियर पथों की ओर मार्गदर्शन करने में सहायक होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          व्यक्तित्व के गुणों जैसे खुलेपन, सतर्कता, और बहिर्मुखता का परिक्षण
          करके, परामर्शदाता करियर सुझावों की पुष्टि या परिष्कृत कर सकते हैं ताकि
          वे प्रत्येक विद्यार्थी की स्वाभाविक प्रवृत्तियों और अंतर-व्यक्तिगत
          शैली के साथ मेल खाते हों। यह करियर मार्गदर्शन के समग्र दृष्टिकोण में
          महत्वपूर्ण भूमिका निभाता है, जिससे विद्यार्थियों की ताकत, प्राथमिकताएँ
          और संभावित चुनौतियों को गहरे तरीके से समझने में मदद मिलती है।
          व्यक्तित्व गुणों को ध्यान में रखते हुए, परामर्शदाता अधिक व्यक्तिगत और
          सटीक करियर सलाह प्रदान कर सकते हैं, जो विद्यार्थी की स्वाभाविक
          प्रवृत्तियों के अनुरूप होती है, जिससे वे अधिक उपयोगी वास्तविक करियर
          संभावनाएँ चुन सकते हैं और व्यावसायिक चुनौतियों को अधिक आत्म-ज्ञान के
          साथ सामना कर सकते हैं।
        </p>
      </div>
      <Footer pageNumber={12} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const PersonalitySubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />

        <div className="pt-5">
          {chapterSevenData?.introductionCareerGuidance.personalityPointData.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pb-2 ml-1">
                  <li>
                    <div className="flex items-start gap-1">
                      <p className="text-xs font-bold text-black-gray-100">
                        {i + 1}.
                      </p>
                      <p className="text-xs font-bold text-black-gray-100">
                        {categoryData?.key}
                      </p>
                    </div>
                    <div>
                      {Array.isArray(categoryData?.value.description) &&
                        categoryData?.value.description.map((data, index) => (
                          <p
                            className="text-xs font-normal text-black-gray-100"
                            key={index}
                          >
                            {data}
                          </p>
                        ))}
                    </div>
                  </li>
                  {/* sun Category */}
                  {categoryData.value.subCategory.map(
                    (subCategoryData, j: number) => (
                      <ul key={`subcategory-${j}`} className="pt-2  ">
                        <li>
                          <p className="text-xs font-bold text-black-gray-100">
                            {subCategoryData?.key}
                          </p>
                          <div>
                            {Array.isArray(subCategoryData?.value) &&
                              subCategoryData?.value.map((data, index) => (
                                <p
                                  className="text-xs font-normal  text-black-gray-100"
                                  key={index}
                                >
                                  {data}
                                </p>
                              ))}
                          </div>
                        </li>
                      </ul>
                    )
                  )}
                </ul>
              </div>
            )
          )}

          <p className="text-xs font-normal text-black-gray-100 pt-2">
            व्यक्तित्व का परिक्षण एक व्यक्ति के करियर निर्णयों में महत्वपूर्ण
            भूमिका निभाता है, और यह जीवन के विभिन्न पहलुओं, जैसे व्यक्तिगत और
            व्यावसायिक संबंधों, में भी प्रभाव डालता है। इसके बाद, हम अध्यान कौशल
            और आदतों पर चर्चा करेंगे, जो एक विद्यार्थी की अकादमिक सफलता और
            व्यावसायिक विकास के लिए आवश्यक हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={13} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const StudySkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-6 tracking-[1.5px]">
          7.3.2.4 अध्ययन कौशल और आदतें (Study Skills & Habits)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अध्यान कौशल और आदतें एक विद्यार्थी की शैक्षिक यात्रा और समग्र सफलता को
          आकार देने में महत्वपूर्ण भूमिका निभाती हैं। ये व्यवहार और तकनीकें यह
          निर्धारित करती हैं, कि विद्यार्थी कितनी प्रभावी तरीके से सीखते हैं,
          जानकारी को बनाए रखते हैं, और उसे लागू करते हैं, और इसका शैक्षिक
          परिणामों और करियर प्रदर्शन पर गहरा प्रभाव पड़ता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          एक विद्यार्थी के अध्ययन कौशल और आदतों को समझना करियर परामर्शदाताओं को
          उनकी शैक्षिक और अन्य क्षेत्रों में प्रदर्शन की क्षमता के बारे में
          महत्वपूर्ण जानकारी प्रदान करता है, जो उनके विकास के लिए आवश्यक हैं। इन
          जानकारियों के माध्यम से परामर्शदाता यह परिक्षण कर सकते हैं कि
          विद्यार्थी अपने लक्ष्यों के प्रति कैसे दृष्टिकोण अपनाते हैं, शैक्षिक
          दबाव को कैसे प्रबंधित करते हैं, और एक नियमित अध्ययन दिनचर्या बनाए रखते
          हैं। उदाहरण के लिए, वे विद्यार्थी जो परीक्षा के लिए नियमित रूप से
          तैयारी करते हैं, नियमित अध्ययन आदतों को बनाए रखते हैं और शैक्षिक दबाव
          को अच्छे से संभालते हैं, वे अपने करियर में भी समान लचीलापन और ध्यान
          केंद्रित करने की क्षमता प्रदर्शित कर सकते हैं। परामर्शदाता इस जानकारी
          का उपयोग विद्यार्थियों की सलाह और समर्थन को अनुकूलित करने में कर सकते
          हैं, ताकि वे उन क्षेत्रों को सुधार सकें जिन्हें सुधारने की आवश्यकता
          है—चाहे वह समय प्रबंधन को बेहतर करना हो, आंतरिक प्रेरणा को बढ़ाना हो,
          या संचार और सहयोग कौशल को परिष्कृत करना हो।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर मार्गदर्शी परीक्षण में, इन कौशल और आदतों को चार मुख्य श्रेणियों
          में बाँटा जाता है: कौशल क्षमता, आपसी कौशल, अध्ययन कौशल, और स्वास्थ्य
          आदतें, जिनमें से प्रत्येक को विशिष्ट कौशल में और विभाजित किया जाता है।
        </p>

        <div>
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
      <Footer pageNumber={14} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const StudySkillsPoints = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          3 .<span className="font-bold">अध्ययन कौशल (Study Skills): </span>
          &nbsp; अध्ययन कौशल वे आवश्यक अभ्यास और रणनीतियाँ हैं जो विद्यार्थियों
          को ज्ञान को समझने, याद रखने और प्रभावी रूप से लागू करने में मदद करती
          हैं। इनमें नोट्स बनाना, परीक्षा की तैयारी, और सकारात्मक सीखने की
          मानसिकता रखना जैसी विधियाँ शामिल हैं, जो अकादमिक प्रदर्शन को सुधारने
          में मदद करती हैं। इन कौशलों को विकसित करके, विद्यार्थी न केवल अपने
          शैक्षिक कार्य को बेहतर समझते हैं, बल्कि वे भविष्य की करियर चुनौतियों
          का सामना करने के लिए आवश्यक लचीलापन और अनुकूलन क्षमता भी विकसित करते
          हैं। इस श्रेणी के तहत 6 प्रमुख क्षमताएँ परिक्षण की जाती हैं: टीप-लेने
          के कौशल (Note-taking), सीखने की मानसिकता (Learning Attitude), परीक्षा
          की तैयारी (Exam Preparation), परीक्षा लेखन (Exam Writing), नियमित
          अध्ययन (Regular Studies), और अकादमिक तनाव (Academic Stress)।
        </p>
        <div className="pt-4">
          {chapterSevenData?.introductionCareerGuidance.studySkillsSubPoints.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pt-1 list-disc ml-5">
                  <li>
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
      </div>
      <Footer pageNumber={15} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const HealthHabits = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          4 .
          <span className="font-bold">स्वास्थ्य की आदतें (Health Habits):</span>
          &nbsp; स्वास्थ्य की आदतें उन निरंतर व्यवहारों और दिनचर्याओं को
          संदर्भित करती हैं, जिन्हें व्यक्ति शारीरिक, मानसिक, और भावनात्मक भलाई
          बनाए रखने और बढ़ाने के लिए अपनाते हैं। ये आदतें विभिन्न प्रथाओं को
          शामिल करती हैं, जैसे कि सचेत आहार, नियमित शारीरिक गतिविधि, तनाव
          प्रबंधन, उचित नींद, और स्वच्छता बनाए रखना। सकारात्मक स्वास्थ्य आदतों
          को विकसित करके, विद्यार्थी अपनी एकाग्रता, ऊर्जा स्तर, और भावनात्मक
          लचीलापन में सुधार कर सकते हैं, जो सीधे उनके शैक्षिक प्रदर्शन और
          व्यक्तिगत विकास में योगदान करते हैं। दीर्घकालिक रूप से, ये आदतें समग्र
          जीवन शक्ति और भलाई का समर्थन करती हैं, जिससे विद्यार्थी न केवल शैक्षिक
          रूप से, बल्कि अपने व्यक्तिगत और व्यावसायिक जीवन में भी सफल हो सकते
          हैं। इस श्रेणी के तहत 5 प्रमुख क्षमताओं का परिक्षण किया जाता है: सचेत
          आहार, नींद की दिनचर्या बनाए रखना, तनाव प्रबंधन, शारीरिक गतिविधि, और
          स्वच्छता।
        </p>
        <div className="pt-4">
          {chapterSevenData?.introductionCareerGuidance.healthHabits.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pt-1 list-disc ml-5">
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
          इस अनुभाग में, हमने अध्ययन कौशल और आदतों के चार प्रमुख श्रेणियों:
          क्षमता कौशल, संवाद कौशल, अध्ययन कौशल, और स्वास्थ्य आदतों की जाँच की
          है। इन सभी क्षेत्रों का विद्यार्थियों के शैक्षिक विकास में महत्वपूर्ण
          योगदान होता है और भविष्य के व्यावसायिक प्रयासों के लिए मार्ग प्रशस्त
          करता है। इन तथ्यों को समझकर, करियर परामर्शदाताओं विद्यार्थियों की ताकत
          और सुधार की जरूरतों को अधिक स्पष्ट रूप से देख सकते हैं। इससे व्यक्तिगत
          मार्गदर्शन और समर्थन प्रदान करने में मदद मिलती है, जो विद्यार्थियों को
          सफलता प्राप्त करने के लिए आवश्यक कौशल विकसित करने में मदद करता है,
          दोनों उनकी पढ़ाई में और भविष्य के करियर में। ये जानकारी परामर्शदाता को
          कार्यों को प्रबंधित करने, संवाद सुधारने, अध्ययन विधियों को परिष्कृत
          करने और समग्र कल्याण बनाए रखने के बारे में व्यक्तिगत सलाह देने की
          अनुमति देती है, जिससे बेहतर करियर निर्णय और सतत विकास की दिशा में
          मार्गदर्शन मिलता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अब, आइए करियर मार्गदर्शी परीक्षण के तकनीकी विवरणों पर नज़र डालें, ताकि
          एक स्पष्ट समझ हो सके। यह अनुभाग परिक्षण की संरचना, इसकी अवधि, अंकन
          प्रणाली आदि के बारे में जानकारी प्रदान करेगा। इन विवरणों को समझने से
          करियर परामर्शदाता को परिणामों की अधिक प्रभावी व्याख्या करने, व्यक्तिगत
          मार्गदर्शन देने, और विद्यार्थियों को सही करियर निर्णय लेने में मदद
          मिलेगी।
        </p>
      </div>
      <Footer pageNumber={16} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const GeneralDetails = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शन निर्देश – विद्यार्थियों की क्षमताओं का समग्र परिक्षण"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.3 करियर मार्गदर्शी परीक्षण के सामान्य विवरण
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर मार्गदर्शी परीक्षण (CGT) एक व्यापक परिक्षण है, जो विद्यार्थियों
          को उनकी क्षमताओं का पता लगाने और उन्हें संभावित करियर मार्गों से
          मिलाने में मदद करने के लिए डिज़ाइन किया गया है। यह चार मुख्य क्षेत्रों
          को मापता है: क्षमताएँ, करियर रुचियाँ, व्यक्तित्व, और अध्ययन कौशल और
          आदतें।
        </p>
        <div className="pt-4">
          {chapterSevenData?.introductionCareerGuidance.generalDetailsPoints.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pt-1 list-disc ml-5">
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
          यह संरचित दृष्टिकोण यह निर्धारित करता है कि करियर मार्गदर्शी परीक्षण
          सभी विद्यार्थियों के लिए व्यापक, सुलभ और प्रभावी हो। करियर परामर्शदाता
          के लिए, टेस्ट के डिज़ाइन और प्रारूप को समझना परिणामों की सही तरीके से
          व्याख्या करने में मदद करता है। क्षमताओं, रुचियों, व्यक्तित्व और अध्ययन
          आदतों का परिक्षण करके, यह परीक्षण विद्यार्थी की ताकत और विकास के
          क्षेत्रों का एक संतुलित दृष्टिकोण प्रस्तुत करता है। इस जानकारी के आधार
          पर परामर्शदाता को व्यक्तिगत करियर सलाह देने में मदद मिलती है, जिससे
          विद्यार्थी अपनी भविष्य की शैक्षिक और व्यावसायिक दिशा को लेकर सूचित
          निर्णय ले सकते हैं। स्पष्ट और संक्षिप्त संरचना यह निर्धारित करती है कि
          परामर्शदाता प्रमुख दृष्टिकोणों की जल्दी पहचान कर सकें, जिससे सटीक और
          अर्थपूर्ण करियर मार्गदर्शन की सुविधा मिलती है।
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.3.4 करियर मार्गदर्शन आकलन की विशेषताएँ
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          करियर मार्गदर्शी परीक्षण एक विस्तृत और समग्र रिपोर्ट प्रदान करता है,
          जो विद्यार्थियों और करियर परामर्शदाताओं को विद्यार्थी की क्षमताओं,
          रुचियों, व्यक्तित्व लक्षणों और अध्ययन आदतों के बारे में स्पष्ट
          दृष्टिकोण देती है। यह व्यापक रिपोर्ट यह निर्धारित करती है कि प्रत्येक
          विद्यार्थी को एक गहरे परिक्षण के आधार पर व्यक्तिगत मार्गदर्शन प्राप्त
          हो, जो उनके करियर और शैक्षिक विकास के लिए अच्छे सुझाव प्रदान करती है।
          विद्यार्थी की प्रोफाइल के विभिन्न पहलुओं पर ध्यान केंद्रित करके, यह
          रिपोर्ट व्यक्तिगत करियर सलाह देने की सुविधा प्रदान करती है, जिससे
          विद्यार्थी अपने भविष्य के बारे में सूचित निर्णय ले सकते हैं।
        </p>
        <div className="pt-4">
          {chapterSevenData?.introductionCareerGuidance.recommendations.map(
            (categoryData, i: number) => (
              <ul key={`content-point-${i}`} className="pt-1 list-disc ml-5">
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
          विद्यार्थी की क्षमताओं, रुचियों, व्यक्तित्व लक्षणों और अध्ययन आदतों के
          परिक्षण को एकीकृत करके, रिपोर्ट करियर मार्गदर्शी के लिए एक समग्र
          दृष्टिकोण अपनाती है। यह निर्धारित करती है कि दी गई सलाह व्यक्तिगत,
          क्रियाशील और संतुलित हो, जिससे विद्यार्थियों को सफलता की दिशा में
          सर्वोत्तम मार्गदर्शन मिलता है। करियर मार्गदर्शी परीक्षण करियर
          परामर्शदाता को लक्षित और उचित मार्गदर्शन प्रदान करने में मदद करता है,
          यह निर्धारित करते हुए कि विद्यार्थियों को उनकी अकादमिक यात्रा और करियर
          आकांक्षाओं का समर्थन करने वाली व्यक्तिगत सलाह प्राप्त हो।
        </p>
      </div>
      <Footer pageNumber={17} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const EffectiveTailored = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर मार्गदर्शी परीक्षण रिपोर्ट के माध्यम से प्रभावी और व्यक्तिगत करियर मार्गदर्शन"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          7.4 करियर मार्गदर्शी परीक्षण रिपोर्ट के माध्यम से प्रभावी और व्यक्तिगत
          करियर मार्गदर्शन
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर मार्गदर्शी परीक्षण (CGT) रिपोर्ट विद्यार्थी के अद्वितीय प्रोफाइल
          का गहरा और समग्र विश्लेषण प्रदान करती है, जिसमें उनकी क्षमताएँ, करियर
          रुचियाँ और व्यक्तित्व लक्षणों का परिक्षण किया जाता है। इन महत्वपूर्ण
          तत्वों को कैप्चर करके, रिपोर्ट विद्यार्थी की ताकत, प्राथमिकताओं और
          प्राकृतिक प्रवृत्तियों की एक पूर्ण तस्वीर प्रस्तुत करती है, जिसके आधार
          पर सोच-समझकर तैयार किए गए करियर की तीन सिफारिशें दी जाती हैं। ये
          सिफारिशें विद्यार्थी की प्रमुख क्षमताओं, प्रमुख करियर रुचियों और मूल
          व्यक्तित्व लक्षणों पर आधारित होती हैं, यह निर्धारित करते हुए कि ये
          विद्यार्थी की क्षमता, आकांक्षाओं और कार्य शैली के साथ मेल खाती हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          एक करियर परामर्शदाता के रूप में, आपकी भूमिका केवल व्यक्तिगत स्कोर की
          व्याख्या करने तक सीमित नहीं होती; यह CGT रिपोर्ट के विभिन्न तत्वों के
          बीच संबंधों को जोड़ने और प्रत्येक विद्यार्थी के अद्वितीय प्रोफाइल को
          समझने के बारे में है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          जब आप विद्यार्थी के प्रोफाइल के सभी पहलुओं का समग्र रूप से विश्लेषण
          करते हैं और विभिन्न लक्षणों और क्षमताओं के बीच सहसंबंधों को पहचानते
          हैं, तो परामर्शदाता को उनके ताकत, चुनौतियों और विकास के संभावित
          क्षेत्रों का व्यापक समझ प्राप्त होता है। यह परामर्शदाता को व्यक्तिगत
          रणनीतियाँ पेश करने में सक्षम बनाता है, जो विद्यार्थियों की क्षमताओ को
          अधिकतम करने और अकादमिक सफलता को बढ़ावा देने के लिए होती हैं, जिससे
          उन्हें उनके समग्र विकास में अधिक व्यक्तिगत और प्रभावी मार्गदर्शन मिलता
          है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          क्षमताएँ, रुचियाँ और व्यक्तित्व लक्षण करियर चयन का आधार बनते है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          रिपोर्ट में विद्यार्थी के अध्ययन कौशल और आदतों के बारे में जानकारी भी
          शामिल होती है। हालांकि अध्ययन कौशल सीधे तौर पर करियर सिफारिशों को
          प्रभावित नहीं करते, वे परामर्शदाताओं को महत्वपूर्ण मार्गदर्शन प्रदान
          करते हैं। जैसे कि समय प्रबंधन, संगठन, और ध्यान केंद्रित करने में
          विद्यार्थी की ताकत और कमजोरी को समझना, परामर्शदाताओं को ऐसी व्यक्तिगत
          रणनीतियाँ पेश करने में मदद करता है, जो केवल करियर मार्ग चयन में नहीं,
          बल्कि शैक्षिक सफलता में भी सहायक होती हैं। ये जानकारी यह निर्धारित
          करने के लिए महत्वपूर्ण है कि विद्यार्थी प्रभावी अध्ययन आदतें विकसित
          करें, जो शैक्षिक और चुने हुए करियर में निरंतर विकास और सफलता में
          योगदान करें।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          <span className="font-bold"> उदाहरण: </span> मान लीजिए एक विद्यार्थी
          की करियर मार्गदर्शी परीक्षण रिपोर्ट में उच्च तर्कशक्ति और संख्यात्मक
          क्षमताएँ, व्यापार और वाणिज्य में मजबूत रुचि, और उच्च ईमानदारी स्कोर
          है। इसके आधार पर, रिपोर्ट करियर जैसे डेटा एनालिस्ट, वित्तीय विश्लेषक,
          या निवेश बैंकर की सिफारिश कर सकती है। ये मार्ग विद्यार्थी की
          विश्लेषणात्मक क्षमताओं, मात्रात्मक ताकतों और व्यवस्थित समस्या-समाधान
          के साथ मेल खाते हैं, जो संरचित समस्या-समाधान और विवरण पर ध्यान देने
          वाले करियर के लिए उपयुक्त हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          इसके अतिरिक्त, यदि इस विद्यार्थी के पास कुछ कौशलों को और विकसित करने
          की आवश्यकता हो – जैसे समय प्रबंधन या शैक्षिक तनाव – तो परामर्शदाता CGT
          रिपोर्ट से टिप्स का उपयोग करके उन्हें इन क्षमताओं को बढ़ाने में मदद कर
          सकते हैं। उदाहरण के लिए, यदि विद्यार्थी को अपनी क्षमताओं को मजबूत करने
          के लिए कुछ क्षेत्रों में मदद की आवश्यकता हो, तो परामर्शदाता संरचित
          अध्ययन शेड्यूल बनाने या प्राप्त करने योग्य लक्ष्य सेट करने का सुझाव दे
          सकते हैं। ये रणनीतियाँ विद्यार्थी को प्रभावी आदतें और कौशल विकसित करने
          में मदद करती हैं, जो शैक्षिक और व्यावसायिक सफलता दोनों में सहायक होती
          हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          शक्ति, रुचियाँ, व्यक्तित्व लक्षणों और अध्ययन कौशल और आदतों के इस पूर्ण
          समझ के साथ, CGT रिपोर्ट करियर परामर्श के लिए एक संतुलित ढांचा प्रदान
          करती है। इस दृष्टिकोण के माध्यम से, परामर्शदाता को व्यक्तिगत,
          क्रियाशील सिफारिशें प्रदान करने की सुविधा मिलती है, जो करियर चयन और
          शैक्षिक विकास दोनों का समर्थन करती हैं, जिससे विद्यार्थियों को भविष्य
          में सफलता के लिए एक मजबूत आधार बनाने में मदद मिलती है।
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            {chapterSevenData?.effectiveTailored.hading}
          </p>
          {chapterSevenData?.effectiveTailored.effectiveTailoredPoint.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pt-1 list-disc ml-5">
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
            सोच-समझकर किए गए प्रतिबिंब, लचीले पर्याय और लक्षित समर्थन को जोड़कर,
            परामर्शदाता व्यक्तिगत मार्गदर्शन प्रदान कर सकते हैं जो प्रत्येक
            विद्यार्थी की अद्वितीय ताकत और आकांक्षाओं के साथ मेल खाता हो। यह
            दृष्टिकोण न केवल करियर सिफारिशों की सटीकता को बढ़ाता है, बल्कि
            विद्यार्थियों को उनके मार्गों का अनुसरण करने के लिए अधिक आत्मविश्वास
            और सफलता के लिए बेहतर तैयारी भी प्रदान करता है।
          </p>
        </div>
      </div>
      <Footer pageNumber={18} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"निष्कर्ष"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          7.5 निष्कर्ष
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस मॉड्यूल में, हमने करियर परामर्श के लिए एक समग्र दृष्टिकोण के महत्व
          का पता लगाया है और यह कैसे विद्याथियों को सही करियर निर्णय लेने में
          मदद करने में महत्वपूर्ण भूमिका निभाता है। करियर मार्गदर्शन परीक्षण
          (CGT) इस दृष्टिकोण में एक महत्वपूर्ण उपकरण के रूप में कार्य करता है,
          जो विद्यार्थी की क्षमताओं, रुचियों, व्यक्तित्व और अध्ययन कौशल और आदतों
          का व्यापक मूल्यांकन प्रदान करता है। In this module, we have explored
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            हमने जिन प्रमुख योग्यताओं को सम्मिलित किया है, वे निम्नलिखित हैं :
          </p>
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
            CGT इन सभी आयामों को एकीकृत करता है, व्यक्तिगत अंतर्दृष्टि प्रदान
            करता है, जो सरल करियर अनुशंसाओं से परे है । यह विद्यार्थी का समग्र
            दृष्टिकोण प्रदान करता है, न केवल उनके शैक्षणिक प्रदर्शन को ध्यान में
            रखते हुए, बल्कि उनकी ताकत, रुचियों और व्यक्तिगत लक्षणों को भी ध्यान
            में रखते हुए।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            CGT रिपोर्ट से प्राप्त अंतर्दृष्टि का उपयोग करके, आप, एक करियर
            परामर्शदाता के रूप में, विद्याथियों को ऐसे करियर की ओर मार्गदर्शन कर
            सकते हैं, जो उनकी अनोखी क्षमताओं और आकांक्षाओं के साथ संरेखित हों ।
            यह दृष्टिकोण न केवल विद्याथियों को उनके भविष्य के बारे में सूचित
            निर्णय लेने में मदद करता है, बल्कि उनके व्यक्तिगत विकास और विकास को
            भी बढ़ावा देता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            संक्षेप में, इस मॉड्यूल ने आपको अपने विद्याथियों को अनुरूप और
            प्रभावी करियर मार्गदर्शन प्रदान करने के लिए आवश्यक ज्ञान और उपकरण
            प्रदान किए हैं ।
          </p>
        </div>
      </div>
      <Footer pageNumber={19} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
