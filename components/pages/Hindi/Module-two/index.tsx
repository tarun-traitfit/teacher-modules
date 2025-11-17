import Cover from "../../cover";
import ContentPage from "../../contents-page";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { chapterTwo, chapterTwoData } from "@/utils/cover-Hindi";

const ModuleTwo = () => {
  return (
    <>
      <Cover
        title={"मॉड्यूल 2"}
        characterTitle={"शिक्षा क्षेत्र में मैक्रो-स्तर पर परिवर्तन"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        tableOfContents={chapterTwo}
        contents={"कंटेन्ट"}
        title={"सूची "}
        pageNo={"पृष्ठ क्र."}
        projectName={"मिशन मार्गदर्शन"}
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
        <Header title={"परिचय"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.1 परिचय
        </h1>
        <div className="pt-4">
          {chapterTwoData?.introduction?.map((item, index) => (
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
export const UnderstandingCentury = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"21वीं सदी में करियर की अवधारणा को समझना"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.2 21वीं सदी में करियर की अवधारणा को समझना
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          21वीं सदी में करियर की अवधारणाओ में बहुत बदलाव आया है, जिसका मुख्य
          कारण तेजी से हो रहे तकनीकी विकास, वैश्वीकरण और बदलती सामाजिक मूल्य
          हैं। आज करियर केवल एक सीधी रेखा में या पारंपरिक रास्तों तक सीमित नहीं
          है; इसमें विभिन्न प्रकार के अवसर शामिल हैं जो कौशल, अनुकूलन क्षमता और
          जीवनभर सीखने को प्राथमिकता देते हैं। लोगों को अब बहु-विषयक क्षेत्रों
          में काम करने, निरंतर व्यवसायिक विकास में भाग लेने और उद्यमशील की
          मानसिकता अपनाने के लिए प्रोत्साहित किया जाता है। इस बदलाव से यह स्पष्ट
          होता है कि रोजगार परक बाजार नई प्रवृत्तियों और माँगो के अनुसार लगातार
          बदल रहा है, इसीलिए बदलाव के प्रति लचीला और तैयार रहना अत्यंत
          महत्वपूर्ण है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-3">
          इस बदलाव का परिणाम यह है कि 21वीं सदी में एक सफल करियर न केवल तकनीकी
          विशेषज्ञता पर निर्भर करता है, बल्कि संचार, सहयोग, और रचनात्मकता जैसे
          &apos;सॉफ्ट स्किल्स&apos; पर भी जोर देता है, जो व्यक्तियों को परस्पर
          जुड़े हुए और गतिशील दुनिया में सफल होने में सक्षम बनाते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-3">
          पारंपरिक रुप से प्रातः नौ से शाम पाँच तक की नौकरी अब आम रुप से कम हो
          रही है। आजकल कई लोग फ्रीलांसर के रूप में काम करते हैं, अल्पकालिक
          अनुबंध लेते हैं या प्रोजेक्ट-आधारित कार्य करते हैं। इससे लोगों को अपनी
          कौशल और रुचियों के अनुसार नौकरियाँ चुनने की अधिक स्वतंत्रता मिलती है,
          लेकिन इसका मतलब यह भी है कि उन्हें नए कौशल सीखने और उद्यमशीलता पर
          ध्यान देने की आवश्यकता होती है। यह बदलाव आधुनिक करियर की बदलती माँगो
          को दर्शाता है, जो पारंपरिक नौकरियों की तुलना में अधिक लचीलापन प्रदान
          करता है। लोग अब अलग-अलग अनुभवों को प्राप्त करके करियर बनाते हैं, जो
          उन्हें व्यक्तिगत और पेशेवर रूप से बढ़ने में मदद करते हैं।
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
            अंत में, हम कह सकते हैं कि इस परिवर्तन और रूपांतरण के युग में, करियर
            की बदलती अवधारणा अनुकूलन और पुनः आविष्कार की आवश्यकता को दर्शाती है।
            यह निरंतर कौशल विकास, अनुकूलन क्षमता और अनिश्चितताओं के बीच
            मार्गदर्शन करने की क्षमता के महत्व को उजागर करती है। एक सफल करियर
            किसी एक विशिष्ट नौकरी के शीर्षक से नहीं जुड़ा है, बल्कि यह इस बात से
            परिभाषित होता है कि व्यक्ति लगातार बदलते माहौल में कैसे सफल होता है।
            21वीं सदी की शुरुआत ने करियर के एक नए युग को आगे बढ़ाया है, जहाँ
            परिवर्तन को अपनाना और कौशल की शक्ति को पहचानना सबसे महत्वपूर्ण कारक
            सिद्ध हुआ हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            इन बदलते परिवर्तनों को स्वीकार करते हुए, भारत में शैक्षिक परिदृश्य
            को फिर से आकार देने के लिए राष्ट्रीय शिक्षा नीति (NEP) 2020 प्रस्तुत
            की गई है ताकि इसे आधुनिक कार्यबल की आवश्यकताओं के साथ अधिक संरेखित
            किया जा सके। NEP 2020 का उद्देश्य, एक समग्र और बहु-विषयक दृष्टिकोण
            को बढ़ावा देते हुए, छात्रों को इस जटिल करियर वातावरण में मार्गदर्शन
            करने के लिए आवश्यक कौशल और ज्ञान से सुसज्जित कर सके। यह छात्रों के
            बीच एक अनुकूलनीय और नवीन मानसिकता को बढ़ावा देते हुए शिक्षा में
            व्यावसायिक प्रशिक्षण, योग्यता-आधारित शिक्षा और प्रौद्योगिकी के
            एकीकरण को प्रोत्साहित करती है। NEP 2020 और समकालीन करियर अवधारणाओं
            के बीच संरेखण यह सुनिश्चित करता है कि छात्र 21वीं सदी के नौकरी के
            बाजार की चुनौतियों और अवसरों का बेहतर ढंग से सामना करने के लिए तैयार
            हों।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अब आइए NEP 2020 का विस्तार से अध्ययन करें और इसके द्वारा शिक्षा
            प्रणाली में लाए गए प्रमुख बदलावों पर चर्चा करें।
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const UnderstandingNEF = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"NEP 2020 और इसका करियर के बदलाव पर प्रभाव"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.3 NEP 2020 और इसका करियर के बदलाव पर प्रभाव
        </h1>
        <p className="text-sm font-normal text-primary py-4">
          2.3.1 राष्ट्रीय शिक्षा नीति (NEP) 2020 क्या है?
        </p>
        <div className="pt-4">
          {chapterTwoData?.understandingNEF?.content?.map((item, i) => (
            <p key={i} className="text-xs font-normal text-black-gray-100 pb-2">
              {item}
            </p>
          ))}
        </div>
      </div>
      <Footer pageNumber={4} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const UnderstandingSubNEF = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"NEP 2020 और इसका करियर के बदलाव पर प्रभाव"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.3.2 NEP 2020 द्वारा शिक्षा प्रणाली में लाए गए प्रमुख बदलाव:
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
            इसके अतिरिक्त, शैक्षणिक क्रेडिट का बैंक (Academic Bank of Credits -
            ABC) का प्रारंभ छात्रों को अपने शैक्षणिक क्रेडिट को संग्रहीत और
            स्थानांतरित करने की सुविधा देकर इस लचीलेपन का समर्थन करती है। यह
            प्रणाली छात्रों को प्रगति खोए बिना अपनी पढ़ाई को रोकने और फिर से
            शुरू करने की अनुमति देती है, जिससे उनके करियर लक्ष्यों के अनुसार
            शिक्षा को अनुकूलित करना आसान हो जाता है। इन परिवर्तनों को समझकर,
            करियर काउंसलर छात्रों को उनके शैक्षिक यात्रा में मार्गदर्शन कर सकते
            हैं उन्हें यह निर्णय लेने में मदद मिलती है कि कब कार्यबल में प्रवेश
            करना है या अपनी आकांक्षाओं के आधार पर ध्यान केंद्रित करना है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अब जब हमने NEP 2020 द्वारा लाए गए प्रमुख परिवर्तनों का अध्ययन कर
            लिया है और यह देखा है कि वे शैक्षिक ढांचे को कैसे बदल रहे हैं, तो
            आइए उनके बदलते करियर परिदृश्य पर प्रभाव को देखें। इन बदलावों को
            समझकर हम यह पहचान सकते हैं कि तेजी से बदलते नौकरी के बाजार में
            छात्रों के लिए नए अवसर कैसे उपलब्ध हो रहे हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const ImportantCareerCounseling = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर काउंसलिंग में NEP की महत्वपूर्ण भूमिका"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.4 करियर काउंसलिंग में NEP की महत्वपूर्ण भूमिका
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
            केस स्टडी 1 :
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
      <Footer pageNumber={6} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CaseStudyTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर काउंसलिंग में NEP की महत्वपूर्ण भूमिका"}
          className="min-w-fit"
        />

        <div>
          <p className="text-base font-bold text-black-gray-100 pt-8">
            केस स्टडी 2 :
          </p>
          <div className="pt-4">
            {/* <p className="text-xs font-bold text-black-gray-100">
              {chapterTwoData?.importantCareerCounseling?.CaseStudyTwo?.hading}
            </p> */}
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
              इस प्रकार, करियर काउंसलर अजय को ऐसे रास्ते दिखाते हैं जो उसे
              व्यावहारिक कौशल प्राप्त करने और तुरंत रोजगार पाने के लिए तैयार
              करते हैं, जबकि वह अपनी शिक्षा को भी आगे बढ़ा सकता है।
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={7} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const CaseStudyThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर काउंसलिंग में NEP की महत्वपूर्ण भूमिका"}
          className="min-w-fit"
        />

        <div>
          <p className="text-base font-bold text-black-gray-100 pt-8">
            केस स्टडी 3 :
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
              कौशल और आकांक्षाओं के साथ-साथ वर्तमान करियर और नौकरी के रुझानों के
              अनुरूप मार्गदर्शन करना, काउंसलर छात्रों के लिए आवश्यक संसाधन
              प्रदान करते हैं, उन्हें संबंधित कार्यक्रमों से जोड़ते हैं और
              उन्हें कार्यबल में संक्रमण के लिए आत्मविश्वास बनाने में मदद करते
              हैं ।
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={8} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"निष्कर्ष"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          2.5 निष्कर्ष
        </h1>

        {chapterTwoData?.conclusion?.map((data) => {
          return (
            <p
              key={data}
              className="text-xs font-normal text-black-gray-100 pt-4"
            >
              {data}
            </p>
          );
        })}
      </div>
      <Footer pageNumber={9} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
