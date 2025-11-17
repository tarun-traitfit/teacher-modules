import Header from "@/components/header";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Footer from "@/components/footer";

import React from "react";
import { chapterNight, chapterNightData } from "@/utils/cover-Hindi";

const ModuleNight = () => {
  return (
    <>
      <Cover
        title={"मॉड्यूल 9"}
        characterTitle={"करियर काउंसलिंग में मतभेदों का समाधान"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"कंटेन्ट"}
        title={"सूची "}
        pageNo={"पृष्ठ क्र."}
        projectName={"मिशन मार्गदर्शन"}
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
      {/* <TechniquesDuringSubChapter /> */}
      <Conclusion />
    </>
  );
};
export default ModuleNight;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"परिचय"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.1 परिचय
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
      <Footer pageNumber={2} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const ConflictResolution = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श में मतभेद का समाधान (Conflict Resolution)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.2 करियर परामर्श में मतभेद का समाधान (Conflict Resolution)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस मॉड्यूल के माध्यम से, हम उन विभिन्न मतभेद और समाधान की खोज करेंगे
          जो विद्यार्थियों को योग्य दिशा चुनते समय निर्माण हो सकती हैं और एक
          करियर परामर्शदाता के रूप में, आप इन मतभेद का समाधानों को सुलझा सकते
          हैं। हम करियर परामर्श में विभिन्न मतभेद और समाधान के कथानकों
          (scenarios) का भी अध्ययन करेंगे। इसमें मतभेद का समाधानों को प्रभावी
          तरीके से दिखाते (address) हुए उन्हें हल करने की योजना (strategies) और
          तकनीक (Techniques) सीखेंगे।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आइए सबसे पहले मतभेद और समाधान की संकल्पना (concept) को समझते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          मतभेद जीवन का स्वाभाविक हिस्सा हैं, जो तब उत्पन्न होते हैं जब लोगों के
          विचारो में, किसी भी चीज के बारें में मतभेद हो। ये सिर्फ मानव बातचीत
          में ही नही होते हैं, बल्कि प्रकृति में और सामाजिक परिस्थितियो में भी
          दिखाई देते हैं, जिन्हें हम खुद ही बनाते हैं। समस्या मतभेद के अस्तित्व
          में नहीं होती है, कुछ हद तक उन्हें हम किस दृष्टिकोण से देखकर हल करते
          हैं, इसमें समस्या है। मतभेद को नकारात्मक या टालने योग्य मानना, यानि
          उन्हें हल करते समय गलतियों की ओर ले जाने जैसा है। इससे, अच्छा है यह
          समझना कि मतभेद स्वाभाविक है और जीवन का हिस्सा भी है। हम उसे अधिक
          सकारात्मक (positive) और रचनात्मक (creative) तरीके से देखेंगे तो समस्या
          सुलझाने में वह मदद करता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          मतभेद को चुनौती न समझते हुए उन्हें अवसर के रूप में देखना चाहिए। इसी
          मानसिकता के साथ मतभेद का सामना करते समय हम इन समस्याओं को फिर समस्याओं
          के रूप में ही नहीं बल्कि इन्हें सुधार के अवसरों के रूप में भी देख
          पाएँगे। इस मानसिकता को अपनाएँगे, तो मतभेद के समाधान (conflict
          resolution) का महत्व अधिक सरल और व्यवहारिक लगने लगता है। the process,
          conflicts or disagreements are bound to happen.
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          Conflicts can arise in multiple ways during a career counseling
          process. A few scenarios have been detailed below to give you an
          insight into the various reasons for these conflicts.
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस मॉड्यूल में, हम उन मतभेद के समाधान (conflict resolution) के महत्व
          पर चर्चा करेंगे जो करियर परामर्श प्रक्रिया के दौरान आते हैं। पिछले
          मॉड्यूल में, हमने करियर के निर्णय लेने की प्रक्रिया को प्रभावित करने
          वाले विभिन्न घटकों के बारे में जाना । प्रत्येक व्यक्ति के लिए एक
          विशिष्ट कारक (specific factor) के बारे में हमनें समझा, जिन पर हमारा
          निर्णय निर्भर करता है। इस प्रक्रिया में कई भागीदारों की उपस्थिति कि
          वजह से, मतभेद या असहमति होना स्वाभाविक है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श प्रक्रिया के दौरान कई प्रकार से मतभेद उत्पन्न हो सकते
          हैं। नीचे दिए गए कुछ उदाहरण है, जो विभिन्न कारणों से होने वाले इन
          मतभेदों की जानकारी देते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          सबसे सामान्य मतभेद समाधान की घटनाओं (scenarios) में से एक है, जो
          माता-पिता और उनके बच्चों के बीच होता है। माता-पिता की अपेक्षाएँ और
          विद्यार्थियों के करियर विकल्पों के बीच मतभेद के कारण यह मतभेद उत्पन्न
          हो सकता है। एक अन्य घटनाक्रम में यह हो सकता है जब किसी विद्यार्थी की
          किसी विशेष करियर में रुचि हो और उन पर अन्य कारकों (factors) जैसे
          सामाजिक दबाव, सामाजिक नियम (norms) के साथ मेल न बैठाना, आर्थिक
          स्थितियों की वजह से लगने वाले प्रतिबंध (रोक) आदि के कारण भी मतभेद
          उत्पन्न होते है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इन मतभेदों के पीछे के मुख्य कारणों में से एक कारण यह है कि, माता-पिता
          और विद्यार्थियों को अलग-अलग नौकरीयों के के बारे में जानकारी की कमी
          होती है। जिसके परिणामस्वरूप गलतफहमियाँ या सीमित दृष्टिकोण आ जाते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर काउंसलिंग सत्र के दौरान मतभेद के समाधान महत्वपूर्ण हैं। यह उन
          चुनौतियों और कठिनाइयों से निपटने की एक प्रक्रिया है जो करियर निर्णय
          लेने के दौरान विकसित होती हैं। यह एक प्रक्रिया है जो आने वाली समस्याओं
          का सौहार्दपूर्ण/मैत्रीपूर्ण समाधान (cordial solution) देती है। करियर
          परामर्शदाताओं को मतभेद के समाधान कौशल की आवश्यकता होती है ताकि वे आने
          वाली समस्याओं को हल कर सकें और विद्यार्थियों और माता-पिता के लिए नये
          अवसर उत्पन्न कर सकें।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आइये अब समझते हैं कि मतभेद के समाधान (conflict resolution) करियर
          परामर्श में महत्वपूर्ण तत्वों में से एक क्यों है।
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.2.1 करियर परामर्श में मतभेद के समाधान (conflict resolution) का महत्व
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श में मतभेद समाधान अत्यंत महत्वपूर्ण है, क्योंकि यह
          परामर्शदाताओं को निर्णय लेने की प्रक्रिया के दौरान विद्यार्थियों के
          सामने आने वाली चुनौतियों से निपटने में मदद करता है। मतभेदों को हल
          करके, करियर परामर्शदाता विद्यार्थियों को ऐसी दिशा चुनने में सक्षम
          बनाते हैं जो उनके मूल्यों, रुचियों और लक्ष्यों के अनुरूप हों। इसके लिए
          मतभेदों की स्वभाव को समझना जरूरी है। उसी के साथ प्रभावी संचार
          (effective communication) को बढ़ावा देना और करियर परामर्श में शामिल
          सभी घटकों को एक योग्य आधार खोजने में मदद करना आवश्यक है। अब, आइए करियर
          परामर्श में मतभेद के समाधान के महत्व को स्पष्ट रूप से समझें।
        </p>
      </div>
      <Footer pageNumber={3} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const SignificanceConflict = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श में मतभेद का समाधान (Conflict Resolution)"}
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
            अब जब हम करियर काउंसलिंग में मतभेद समाधान के महत्व को समझ चुके हैं,
            आइए यह जानें कि करियर परामर्शदाता मतभेदों को पहचानने में और हल करने
            में क्या भूमिका निभाते हैं।
          </p>
        </div>

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.2.2 मतभेद के प्रबंधन (management) में करियर परामर्शदाता की भूमिका
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्शदाता सही जानकारी देते हैं और उपलब्ध साधनों से पहचान कराते
          हैं। करियर परामर्श के दौरान उत्पन्न होने वाले मुद्दों को हल करने में
          मध्यस्थ के रूप में वे कार्य करते हैं। वे खुले संवाद (Open dialogs) और
          समझ को प्रोत्साहित करते हैं। विद्यार्थियों और अन्य घटकों को समस्याओं
          का समाधान खोजने में मदद करते हैं। यहाँ कुछ तरीके दिए गए हैं जिनसे आप
          करियर परामर्शदाता के रूप में मतभेदों के समाधान में सहायता कर सकते हैं।
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
            अब तक, हमने यह समझ लिया है कि करियर परामर्शदाता मतभेदों में शामिल
            सभी घटकों के लिए एक ऐसा माध्यम बनाने में महत्वपूर्ण भूमिका निभाते
            हैं। जिससे वे एक-दूसरे के नजरिए को बेहतर तरीके से समझ सकें और
            मतभेदों को प्रभावी तरीके से सुलझा सकें। आइए अब हम समझते हैं कि करियर
            निर्णय लेते समय किस प्रकार के मतभेद उत्पन्न होते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const TypesOfConflict = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्शदाता में मतभेद समाधान के प्रकार"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.3 करियर परामर्शदाता में मतभेद समाधान के प्रकार
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर निर्णय लेते समय अलग-अलग कारणों और अलग-अलग रूपों (forms) की वजह
          से मतभेद उत्पन्न हो सकते हैं। फिर ये आंतरिक मतभेद क्यों न हो, जैसे कि
          निर्णय लेने में परेशानी (Confusion) या आत्म-संदेह’(Self-doubt), या फिर
          बाहरी मतभेद हो। जिसमें असहमति या गलतफहमियाँ शामिल होती है, हर प्रकार
          के मतभेदों को अलग तरीके से संभालने की आवश्यकता होती है। प्रत्येक मतभेद
          के पीछे के कारणों को समझना महत्वपूर्ण होता है ताकि उन्हें सही तरीके से
          सुलझाया जा सके, जिसके लिए एक विशेष नजरिए की आवश्यकता होती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर का चुनाव करने की उलझन (Complexity) विद्यार्थियों के लिए भारी हो
          सकती है। विशेष रूप से तब जब इस प्रक्रिया में कई कारक (factors) और घटक
          शामिल होते हैं। ऐसे मामलों में, करियर परामर्शदाता की जिम्मेदारी यह
          समझने में होती है कि मतभेद का प्रकार और स्वभाव क्या है, ताकि एक
          प्रभावी समाधान निकाला जा सके।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          पहले मतभेद की पहचान और उसे श्रेणीकृत (categorized) करके, परामर्शदाता
          उसके पीछे के कारणों को उजागर (Exposed) कर सकते हैं और उन्हें प्रभावी
          तरीके से सुलझाने के लिए विशेष रणनीतियाँ (Strategy) विकसित कर सकते हैं।
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
            करियर परामर्श के संदर्भ में, मतभेदों को निम्नलिखित 3 प्रकारों में
            वर्गीकृत किया जा सकता है:
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
            इस खंड में, हमने मतभेद के तीन प्रमुख प्रकारों पर चर्चा की है। यह
            समझना महत्वपूर्ण है कि करियर परामर्श के दौरान मतभेद के प्रकार की
            पहचान करके, परामर्शदाता इसे प्रभावी तरीके से सुलझाने की प्रक्रिया को
            बेहतर समझ सकते हैं। अब, जब हमने उन मतभेदों के प्रकारों के बारे में
            जान लिया है जो करियर परामर्श के दौरान उत्पन्न हो सकते हैं, तो इनका
            समाधान खोजना आसान हो जाएगा।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            अगले सत्र में, हम कुछ केस स्टडी और कथानक (Scenarios) पर विस्तार से
            चर्चा करेंगे ताकि आपको और स्पष्टता मिल सके।
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const ScenariosResolution = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्शदाता में मतभेद समाधान के प्रकार"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.3.1 संघर्ष समाधान के केस स्टडी और कथानक (Scenarios)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          एक करियर परामर्शदाता के रूप में, करियर परामर्श के दौरान उत्पन्न होने
          वाले विभिन्न प्रकार के मतभेदों को पहचानना आवश्यक है। इन मतभेदों की
          पहचान करने में माहिर होने से आपको उन्हें अच्छे तरीके से समझने और
          प्रभावी रूप से सुलझाने में मदद मिलेगी, जिससे आप अपने विद्यार्थियों को
          एक अच्छा समर्थन दे सकेंगे।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          <span className="font-bold">
            विभिन्न मतभेदों के कथानक (Scenarios) की पहचान करना
          </span>
          &nbsp; मतभेद के कथानक (scenarios) विभिन्न कारणों से उत्पन्न हो सकते
          हैं। हम पिछले खंड में देखे गए मतभेद के प्रकारों के उदाहरण और उनमें
          होने वाले विभिन्न रूपों पर विचार करेंगे।
        </p>

        <div className="pt-4">
          {chapterNightData?.scenariosResolutionPoint.scenariosResolution.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <p className="text-xs font-bold text-black-gray-100 ">
                  {categoryData?.key}
                </p>
                {categoryData.value.map((subCategoryData, j: number) => (
                  <ul key={`subcategory-${j}`} className="list-disc ml-6">
                    <li>
                      <p className="text-xs font-bold text-black-gray-100">
                        {subCategoryData?.title}
                      </p>
                      <div>
                        {subCategoryData.value.map((data) => (
                          <p
                            key={data}
                            className="text-xs font-normal text-black-gray-100 pt-1"
                          >
                            {data}
                          </p>
                        ))}
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            )
          )}
        </div>
      </div>
      <Footer pageNumber={6} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const ScenariosResolutionSubChapter = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्शदाता में मतभेद समाधान के प्रकार"}
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
          <p className="text-xs font-normal text-black-gray-100 ">
            वह पर्यावरण संरक्षण में करियर बनाना चाहता है ताकि समाज की भलाई में
            योगदान कर सके। वह इस क्षेत्र में संघर्ष का सामना करने के लिए तैयार
            है। लेकिन, उसके परिवार की आर्थिक सीमाएँ हैं और राहुल से अपेक्षा की
            जाती है कि वह एक स्थिर करियर अपनाए और अपने परिवार की जिम्मेदारियों
            को पूरा करें। राहुल अपने परिवार की जिम्मेदारी लेने या अपने जुनून को
            आगे बढ़ाने के बीच मतभेद महसूस करता है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            अब तक, हमने विभिन्न प्रकार के मतभेदों की जाँच (Investigation) की है
            और विभिन्न उदाहरणों के माध्यम से उन्हें समझा है। एक बार मतभेद की
            पहचान हो जाने के बाद, अगला महत्वपूर्ण कदम यह सीखना है कि उसे प्रभावी
            तरीके से कैसे सुलझाया जाए। आइए, इसे एक मामले की मदद से विस्तार से
            समझते हैं।
          </p>
        </div>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.3.2 करियर परामर्श में मतभेदात्मक स्थितियों को संभालना
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          आपको यह समझाने के लिए कि करियर परामर्श के दौरान उत्पन्न होने वाले
          मतभेदों को कैसे संभालना है। इसलिए परामर्श सत्रों में सामना की जाने
          वाली सबसे सामान्य स्थितियों में से एक का चुनाव किया है। हम इसे विस्तार
          से देखेंगे और चर्चा करेंगे कि आप एक करियर परामर्शदाता के रूप में ऐसी
          स्थितियों को प्रभावी तरीके से प्रबंधित (Managed) करने के लिए कौन-सी
          नजरियाँ अपना सकते हैं।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          स्थिति:
          <span className="italic">
            जब विद्यार्थी अपनी क्षमताओं में विश्वास करने में कठिनाई महसूस करता
            है और करियर की मार्ग को अपनाने में संकोच करता है। यह डरते हुए कि
            प्रतियोगिता करने में कठिनाइयाँ होगी। यह आंतरिक मतभेद का एक उदाहरण
            है।
          </span>
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          इस तरह की परिस्थितियाँ परामर्श प्रक्रिया में सामान्य रूप से पाई जाती
          हैं। देश में प्रतिष्ठित कॉलेजों और विश्वविद्यालयों में प्रवेश के लिए
          हो रही प्रतियोगिता के कारण, विद्यार्थी अपनी क्षमताओं के बारे में
          अनिश्चितता महसूस कर सकते हैं। विद्यार्थियों के दिखाने वाली इस
          अनिश्चितता का एक मुख्य कारण सही जानकारी का अभाव होना, या जागरूकता की
          कमी, या किसी विशेष करियर के लिए गुणवत्तापूर्ण शिक्षा तक पहुँचने में
          अभाव होना है। आजकल संस्थान (Institute) खुद का प्रचार करते हैं, जिससे
          यह डर पैदा होता है कि यदि विद्यार्थी उनके पाठ्यक्रम या सामग्री का पालन
          नहीं करते हैं, तो प्रतिष्ठित कॉलेजों में प्रवेश पाना बहुत कठिन होगा,
          जिसकी वजह से विद्यार्थियों के लिए उनकी क्षमताओं और रुचियों के प्रति
          अनिश्चितता आ जाती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          विद्यार्थी ऐसी जानकारी की वजह से स्वयं व्याकुल हो जाते हैं और सही
          मार्गदर्शन खोजते समय मतभेदों में फँस जाते हैं। ऐसे में, करियर काउंसलर
          को विद्यार्थियों को सही जानकारी और संसाधन (resources) प्रदान करने
          चाहिए ताकि वे अपनी वास्तविक क्षमता और क्षमताओं को समझ सकें।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          एक करियर परामर्शदाता के रूप में मतभेदों को प्रभावी तरीके से नियंत्रित
          करने में आपकी मदद करने के लिए, हमने आपकी संदर्भ के लिए कुछ सामान्य
          दिशा-निर्देश प्रदान किए हैं। इन्हें एक ही क्रम में सख्ती से पालन करने
          की आवश्यकता नहीं है, लेकिन इन्हें आपको एक तैयार ढांचा देने के लिए
          वर्णन किया गया है।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          मतभेद व्यवस्था के लिए सामान्य दिशा-निर्देश:
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          अनिश्चितता के कारणों की पहचान करें:
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          अनिश्चितता के कारणों की पहचान करें:
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          अनिश्चितता का कारण जानकारी की कमी, आत्मविश्वास की कमी, या आवश्यक
          प्रयास करने की प्रेरणा की कमी हो सकता है। इसलिए, पहले यह समझना आवश्यक
          है कि अनिश्चितता का कारण क्या है।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          कारणों की पहचान होने के बाद, परामर्शदाता को निम्नलिखित इनपुट के आधार
          पर अगले कदम का निर्णय लेना चाहिए:
        </p>
      </div>
      <Footer pageNumber={7} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const ScenariosSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्शदाता में मतभेद समाधान के प्रकार"}
          className="min-w-fit"
        />
        <p className="text-xs font-normal text-black-gray-100 pt-8">
          उदाहरण के लिए, यदि अनिश्चितता की वजह जानकारी की कमी है, तो परामर्शदाता
          को विद्यार्थी को विश्वसनीय स्रोतों की ओर ले जाना चाहिए और उन्हें
          प्रासंगिक पाठ्यक्रमों या संस्थानों (institute) के बारे में जानकारी
          देनी चाहिए। परामर्शदाता NCERT, CBSE, NSDC, AICTE, NTA, और UGC जैसी
          एजेंसियों के बारे में जानकारी प्रदान कर सकते हैं। जो सही पाठ्यक्रमों
          की जानकारी, पाठ्यक्रम की रूपरेखा और पात्रता नियमों के साथ ऑनलाइन
          जानकारी एकृत्रित रखते हैं। ये संसाधन विद्यार्थियों को उनके करियर पथ के
          बारे में योग्य निर्णय लेने में मदद कर सकते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          यदि विद्यार्थी यह सुनिश्चित नहीं कर पा रहा है कि करियर विकल्प उसके लिए
          सबसे उपयुक्त है, तो इससे भ्रम उत्पन्न हो सकता है। ऐसे मामलों में
          परामर्शदाता विद्यार्थी को उस क्षेत्र में एक छोटा कोर्स, इंटर्नशिप, या
          प्रशिक्षण प्राप्त करने की लिए कह सकते हैं ताकि वह यह अच्छे से समझ सके
          कि कार्यस्थल (Workplace) पर क्या जरूरी है। आजकल, यह अधिक संगत है
          क्योंकि राष्ट्रीय शिक्षा नीति को अपडेट किया गया है ताकि विद्यार्थियों
          को इंटर्नशिप में भाग लेने के लिए मौका दिया जाए और व्यवसायों को इन
          अनुभवों की पेशकश करने के लिए प्रोत्साहित किया जा सके।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          इस चिंता को दूर करने के लिए कई रणनीतियों की रचना की जा सकती है। आपके
          संदर्भ के लिए हम कुछ सुझाव दे रहे हैं:
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          a) परामर्शदाता को विद्यार्थियों की ताकत की याद दिलाने से शुरू करना
          चाहिए, जो मूल्यांकन रिपोर्ट (Assessment Report) पर आधारित हो।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          b)परामर्शदाता को विद्यार्थियों की ताकत की याद दिलाने से शुरू करना
          चाहिए, जो मूल्यांकन रिपोर्ट (Assessment Report) पर आधारित हो।
        </p>{" "}
      </div>
      <Footer pageNumber={8} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const TechniquesDuring = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श के दौरान उपयोग की जानेवाली तकनीकी (Technique)"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          9.4 करियर परामर्श के दौरान उपयोग की जानेवाली तकनीकी (Technique)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अब, हम कुछ तकनीकों पर चर्चा करेंगे जो आपको करियर परामर्श सत्रों के
          दौरान तनावपूर्ण या मतभेदपूर्ण परिस्थितियों में मदद करेंगी। ऐसी
          परिस्थितियों में, माहौल तनावपूर्ण या गर्म हो सकता है, और परामर्श
          प्रक्रिया सही दिशा में आगे नहीं बढ़ सकती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          ये तकनीकें करियर परामर्श सत्रों के दौरान संभावित असहमति को संबोधित
          (addressed) करने के लिए उपयोगी हैं। वे परामर्शदाता को एक ऐसा स्थान
          बनाने में मदद करती हैं जहाँ विद्यार्थी अंतर्दृष्टि (insight) और
          विचार-विमर्श कर सकें, जब स्थिति तनावपूर्ण और अव्यवस्थित हो जाती है।
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            {chapterNightData.techniquesDuring?.techniquesHading}
          </p>
          <ol className="list-decimal ml-4">
            {chapterNightData.techniquesDuring?.techniquesPoint.map(
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
            इन तकनीकों का उद्देश्य तनावपूर्ण और संघर्षपूर्ण परिस्थितियों में
            विद्यार्थियों को बेहतर ढंग से मार्गदर्शन करना है। परामर्शदाता की
            भूमिका इस प्रक्रिया में महत्वपूर्ण है, और उन्हें यह सुनिश्चित करना
            चाहिए कि विद्यार्थी आत्मविश्वास महसूस करें और अपनी चिंताओं को
            बाँटनें में सहजता का अनुभव करें।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            अगले चरण में, हम मतभेद के प्रबंधन (management) के निष्कर्ष पर चर्चा
            करेंगे।
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
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
            मतभेदों का समाधान खोजने के लिए धैर्य, सक्रिय भागीदारी (Active
            Participation) और समाधान खोजने की इच्छा की आवश्यकता होती है। इन
            रणनीतियों का उपयोग करके, एक करियर परामर्शदाता प्रभावी संचार
            (effective communication) और पूरे सत्र में अच्छे मनोबल को बनाए रख
            सकता है ।
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"निष्कर्ष"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          9.5 निष्कर्ष
        </h1>

        <div className="pt-4">
          {chapterNightData.conclusion.map((item, i) => (
            <p key={i} className="text-xs font-normal text-black-gray-100 pt-1">
              {item}
            </p>
          ))}
        </div>
      </div>
      <Footer pageNumber={10} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
