import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import Cover from "../../cover";
import ContentPage from "../../contents-page";
import { chapterThree, chapterThreeData } from "@/utils/cover-Hindi";

const ModuleThree = () => {
  return (
    <>
      <Cover
        title={"मॉड्यूल 3"}
        characterTitle={"करियर काउंसलिंग का परिचय"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"कंटेन्ट"}
        title={"सूची "}
        pageNo={"पृष्ठ क्र."}
        tableOfContents={chapterThree}
        projectName={"मिशन मार्गदर्शन"}
      />
      <Introduction />
      <CareerCounseling />
      <AimsAndObjectives />
      <PossibleIndecision />
      <PossibleIndecisionSub />
      <ImportanceStudents />
      <UnderstandingProcess />
      <DualityCareerCounselor />
      <SecondSubChapterDuality />
      <ThreeSubChapterDuality />
      <Conclusion />
    </>
  );
};
export default ModuleThree;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"परिचय"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.1 परिचय
        </h1>
        <div className="pt-4">
          {chapterThreeData?.introduction?.map((item, i) => (
            <p key={i} className="text-xs font-normal text-black-gray-100 pb-2">
              {item}
            </p>
          ))}
        </div>
      </div>
      <Footer pageNumber={2} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const CareerCounseling = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"करियर परामर्श क्या है?"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.2 करियर परामर्श क्या है?
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          ‘’करियर काउंसलिंग’’ शब्दों से वास्तव में क्या अर्थ है? यह हमारे भविष्य
          के व्यवसायों और अन्य व्यावसायिक व्‍यस्‍तताओं के बारे में निर्णयों को
          कैसे प्रभावित (Affected) करता है? क्या यह एक बार किया जाने वाला काम
          है, या हमें अपने करियर के विभिन्न चरणों में करियर परामर्श की आवश्यकता
          होती है? केरियर परामर्श के बारे में इन और कई अन्य महत्वपूर्ण प्रश्नों
          को इस मॉड्यूल में चर्चा की गई है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आइए, सबसे पहले ‘करियर काउंसलिंग’ शब्द के दोनों भागों को समझते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          <span className="font-bold">एक ‘करियर’ </span> एक नौकरी या पेशा को
          दर्शाता है जिसे कोई व्यक्ति लंबे समय तक अपनाता है, जिसमें आगे बढ़ने और
          उन्नति करने के अवसर होते हैं। यह वह कार्य है जिसमें कोई व्यक्ति अपने
          जीवन के महत्वपूर्ण हिस्से पर समय और प्रयास समर्पित (Dedicated)करता है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          <span className="font-bold"> ‘काउंसलिंग/परामर्श’</span> का मतलब किसी
          स्थिति को बेहतर ढंग से समझने और समाधान की दिशा में काम करने के लिए
          किसी के साथ विचारों और विचारों को साझा करने और उनका आदान-प्रदान करने
          के बारे में है। यह एक विशिष्ट विषय पर केंद्रित बातचीत (Conversation)
          है, जहाँ समस्या को बेहतर तरीके से समझने और वांछित परिणाम तक पहुँचने
          में मदद करने के लिए राय साझा की जाती है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अब जब हमने दोनों शब्दों को समझ लिया है, तो आइए समझते हैं कि ‘करियर
          परामर्श’ क्या है। यह व्यक्तियों को सूचित (Informed) करियर विकल्प चुनने
          में मार्गदर्शन करने की एक प्रक्रिया है। इसमें रुचियों, कौशलों और
          अवसरों पर चर्चा शामिल होती है, ताकि किसी को ऐसा व्यवसाय चुनने में मदद
          मिले जो उनके लक्ष्यों और ताकतों के साथ मेल खाता हो। संक्षेप में, यह
          व्यक्तियों को एक समाधानकारक करियर पथ चुनने में मदद करता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अब जब हमने करियर काउंसलिंग का सैद्धांतिक (Theoretical) अर्थ समझ लिया
          है, तो हम अगले खंड में इसके उद्देश्यों और लक्ष्यों के बारे में जानकारी
          लेंगे।
        </p>
      </div>
      <Footer pageNumber={3} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const AimsAndObjectives = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श के उद्देश्य और लक्ष्य (Goals)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.3 करियर परामर्श के उद्देश्य और लक्ष्य (Goals)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर काउंसलिंग एक संरचित (Structured) और व्यवस्थित (systematic)
          प्रक्रिया है, जिसे व्यक्तियों को सूचित करियर विकल्प चुनने में
          मार्गदर्शन प्रदान करने के लिए बनाया गया है। इसके उद्देश्य और लक्ष्य
          स्पष्ट होते हैं, जो सुनिश्चित करता है कि काउंसलर और छात्र अच्‍छी तरह
          से परिभाषित लक्ष्यों की दिशा में अधिक स्पष्ट रूप से कार्य करें। यह
          काउंसलिंग प्रक्रिया की प्रभावशीलता को बढ़ाता है और छात्र के करियर
          मार्ग को सही दिशा प्रदान करता है।
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterThreeData?.aimsAndObjectives?.hading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterThreeData?.aimsAndObjectives?.aimsPoints.map((item, i) => {
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
            })}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            ये उद्देश्य और लक्ष्य एक ऐसी रूपरेखा बनाते हैं जो व्यक्तियों को उनकी
            क्षमताओं को समझने और सूचित करियर विकल्प चुनने में मदद करता है, जिससे
            एक व्यक्तिगत और प्रभावी करियर परामर्श अनुभव होता है। इन लक्ष्यों को
            समझना करियर परामर्श की सीमाओं को भी स्पष्ट करता है, यह सुनिश्चित
            करते हुए कि परामर्शदाता का मार्गदर्शन करने में महत्वपूर्ण क्षेत्रों
            पर ध्यान केंद्रित करें।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            इस खंड में, हमने करियर परामर्श के उद्देश्यों और लक्ष्यों का विश्लेषण
            किया, जो छात्रों को उनके करियर निर्णयों में मार्गदर्शन करने में
            महत्वपूर्ण भूमिका निभाते हैं। इन लक्ष्यों की स्पष्ट समझ परामर्शदाता
            की प्रभावी सहायता प्रदान करने की क्षमता को बढ़ाती है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अगले खंड में, हम कुछ सामान्य चुनौतियों पर नज़र डालेंगे जो करियर
            निर्णय लेने की प्रक्रिया के दौरान उत्पन्न हो सकती हैं। यह प्रक्रिया
            जटिल है और इसमें माता-पिता, साथी और शिक्षक जैसे कई हितकारकों के
            साथ-साथ सामाजिक-आर्थिक स्थिति, सांस्कृतिक प्रभावों और माता-पिता की
            शैक्षिक पृष्ठभूमि जैसे विभिन्न कारकों (Factors) से प्रभावित है। इस
            प्रकार, करियर सलाहकारों को अनिर्णय या गलत विकल्प चुनने के संभावित
            कारणों की पहचान करने की आवश्यकता होती है। आइए, अनिर्णय या गलत करियर
            विकल्प चुनने के संभावित कारणों का पता लगाते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const PossibleIndecision = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"निर्णय या गलत विकल्प चुनने के संभावित (potential) कारण"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.4 अनिर्णय या गलत विकल्प चुनने के संभावित (potential) कारण
        </h1>

        <div>
          {chapterThreeData?.possibleIndecision?.content.map(
            (contentItem, contentIndex) => {
              return (
                <React.Fragment key={`section-content-${contentIndex}`}>
                  {typeof contentItem === "string" ? (
                    <p
                      className="text-xs font-normal text-black-gray-100 pt-4"
                      key={`string-content-${contentIndex}`}
                    >
                      {contentItem}
                    </p>
                  ) : (
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
                                {categoryData?.key} &nbsp;
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
                                  className="pt-4 list-disc ml-6"
                                >
                                  <li className="">
                                    <p className="text-xs font-bold text-black-gray-100">
                                      {subCategoryData?.key}
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
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            }
          )}
        </div>

        <div className="pt-4"></div>
      </div>
      <Footer pageNumber={5} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const PossibleIndecisionSub = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"निर्णय या गलत विकल्प चुनने के संभावित (potential) कारण"}
          className="min-w-fit"
        />

        <div className="pt-5">
          {chapterThreeData?.possibleIndecisionSub.category.map(
            (categoryData, i: number) => (
              <div key={`category-${i}`}>
                <ul key={`content-point-${i}`} className="pb-4 ml-1">
                  <li className="flex items-start gap-1">
                    <p className="text-xs font-bold text-black-gray-100">
                      {i + 2}.
                    </p>
                    <p className="text-xs font-bold text-black-gray-100">
                      {categoryData?.key} :
                      <span className="font-normal">
                        {categoryData?.value.description}
                      </span>
                    </p>
                  </li>
                  {categoryData.value.subCategory.map(
                    (subCategoryData, j: number) => (
                      <ul
                        key={`subcategory-${j}`}
                        className="pt-4 list-disc ml-6"
                      >
                        <li>
                          <p className="text-xs font-bold text-black-gray-100">
                            {subCategoryData?.key}
                            {subCategoryData?.value.map((data) => (
                              <span
                                key={data}
                                className="text-xs font-normal text-black-gray-100"
                              >
                                {data}
                              </span>
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
            अब जब हमने निर्णय न लेने और गलत विकल्प चुनने के संभाव्य कारणों की
            पहचान कर ली है और सही जानकारी और मार्गदर्शन के महत्व को समझ लिया है,
            तो अगले खंड में हम छात्रों के जीवन में करियर मार्गदर्शन के महत्व और
            यह कैसे बेहतर और सूचित करियर निर्णय लेने में मदद करता है, इस पर
            चर्चा करेंगे।
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const ImportanceStudents = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"छात्रों के लिए करियर मार्गदर्शन का महत्व"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.5 छात्रों के लिए करियर मार्गदर्शन का महत्व
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श छात्रों को विभिन्न करियर पथों की खोज करने, उनकी
          प्रासंगिकता को समझने, और उनकी रुचियों और शक्तियों का आकलन करने में
          सहायता करती है। शोध (research) लगातार दिखाता है कि जिन छात्रों को
          करियर मार्गदर्शन मिलता है, उनके करियर लक्ष्यों (goals) को प्राप्त करने
          की संभावना अधिक होती है।
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterThreeData?.importanceStudents?.hading}
          </p>
          {chapterThreeData?.importanceStudents?.importancePoints?.map(
            (item) => (
              <ul key={item?.title} className="list-disc ml-6">
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
            कुल मिलाकर, करियर परामर्श अत्यंत महत्वपूर्ण है क्योंकि यह छात्रों को
            उनके रुचियों, क्षमताओं और व्यक्तित्व के अनुरूप मार्ग चुनने में मदद
            करती है। यह उनके ताकतों और कमजोरियों की पहचान करने के साथ-साथ सुधार
            के क्षेत्रों की पहचान करने में भी सहायता करती है। एक कुशल करियर
            काउंसलर छात्रों की क्षमताओं के आधार पर एक वास्तविक कार्य योजना तैयार
            कर सकता है, जिससे यह सुनिश्चित हो सके कि वे भविष्य की चुनौतियों के
            लिए अच्छी तरह से तैयार हों।
          </p>
          <p className="text-xs font-normal text-black-gray-100">
            पिछले खंड में, हमने करियर विकल्पों में अनिर्णय के उदाहरणों का
            विश्लेषण किया और छात्रों के लिए करियर मार्गदर्शन के महत्व को उजागर
            किया। अब, जब हमें करियर परामर्श की स्पष्ट समझ हो गई है, तो आइए
            संक्षेप में इसके प्रक्रिया के बारे में जानें।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            इस प्रक्रिया को समझना छात्रों की जरूरतों को समझने और उनके चिंताओं के
            प्रति एक व्यक्तिगत दृष्टिकोण अपनाने के लिए महत्वपूर्ण है, जिससे
            करियर मार्गदर्शन की प्रक्रिया की प्रभावशीलता बढ़ती है। आइए इसे और
            विस्तार से समझें।
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const UnderstandingProcess = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श प्रक्रिया को समझना"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.6 करियर परामर्श प्रक्रिया को समझना
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श प्रक्रिया को समझना छात्रों को उनके करियर पथ पर प्रभावी
          ढंग से चलने में मदद करने के लिए आवश्यक है। विभिन्न महत्वपूर्ण चरणों को
          समझकर, हम छात्रों को सूचित करियर निर्णय लेने में बेहतर सहायता कर सकते
          हैं।
        </p>

        <div>
          <div className="pt-4">
            <p className="text-xs font-bold text-black-gray-100">
              {chapterThreeData?.understandingProcess?.hading}
            </p>

            <ol className="list-decimal ml-4">
              {chapterThreeData?.understandingProcess?.point.map((item, i) => {
                return (
                  <>
                    <li
                      key={i}
                      className="text-xs font-bold text-black-gray-100 pt-1"
                    >
                      {item}
                    </li>
                  </>
                );
              })}
            </ol>
          </div>

          <div className="pt-4">
            <p className="text-xs font-normal text-black-gray-100">
              {
                chapterThreeData?.understandingProcess?.understandingPoints
                  ?.hading
              }
            </p>

            <ol className="list-decimal ml-4">
              {chapterThreeData?.understandingProcess?.understandingPoints?.processPoints.map(
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
            <p className="text-xs font-normal text-black-gray-100 pt-1">
              काउंसलिंग प्रक्रिया की सफलता इस बात पर निर्भर करती है कि काउंसलर
              कितनी कुशलता से यह समझा पाता है कि छात्र की क्षमताएँ विभिन्न करियर
              मार्गो से कैसे संबंधित हैं। यदि यह संबंध स्पष्ट रूप से अवगत नहीं
              कराया जाता है तो यह पूरी प्रक्रिया प्रभावी नहीं हो पाएगी।
            </p>
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              छात्र और अन्य संबंधित पक्ष, जैसे माता-पिता और शिक्षक, भ्रमित महसूस
              कर सकते हैं, जिससे खराब निर्णय लेने की स्थिति उत्पन्न हो सकती है।
            </p>
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              उपरोक्त प्रक्रियाएँ और तीन महत्वपूर्ण चरण मिलकर, एक प्रभावी करियर
              परामर्श प्रक्रिया का मूल निर्माण करते हैं। आगामी मॉड्यूल में, हम
              इन संकल्पनाओं का अधिक गहराई से स्पष्टीकरण करेंगे ताकि अधिक व्यापक
              समझ प्राप्त की जा सके, लेकिन अभी के लिए, हम इन्हें आवश्यकताओं तक
              सीमित रखेंगे ताकि बेहतर समझ को सरल बनाया जा सके।
            </p>
            <p className="text-xs font-normal text-black-gray-100 pt-4">
              अब जब हमने करियर परामर्श और इसकी प्रक्रिया के मूल सिद्धांतों के
              बारे में संक्षेप में सीखा है, तो अगले अनुभाग में हम आपको आपके
              छात्रों के लिए शिक्षक और करियर काउंसलर की दोहरी भूमिका निभाने में
              मदद करने के लिए महत्वपूर्ण जानकारी प्रस्तुत करेंगे।
            </p>
          </div>
        </div>
      </div>
      <Footer pageNumber={8} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const DualityCareerCounselor = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"शिक्षक और करियर काउंसलर के रूप में भूमिका की द्वैतता"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          3.7 शिक्षक और करियर काउंसलर के रूप में भूमिका की द्वैतता
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          ऐसे शिक्षक जो शिक्षक और करियर परामर्शदाता की दोहरी भूमिकाओं को अपनाते
          हैं, अपने छात्रों को मूल्यवान सहायता प्रदान करते हैं और करियर विकल्पों
          की खोज करने वाले छात्रों के लिए मार्गदर्शन के प्राथमिक स्रोत के रूप
          में कार्य करते हैं। यह संयोजन आवश्यक है, क्योंकि यह शिक्षकों को
          छात्रों को उनके भविष्य के बारे में सूचित निर्णय लेने में मदद करने में
          सक्षम बनाता है, उन्हें प्रभावी करियर योजना के लिए आवश्यक उपकरण और
          ज्ञान से सुसज्जित करता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इन भूमिकाओं को एकीकृत करके, शिक्षक प्रत्येक छात्र की अकादमिक ताकत,
          व्यक्तिगत रुचियों और आकांक्षाओं पर विचार करते हुए एक समग्र समझ प्राप्त
          करते हैं। यह अंतर्दृष्टि अनुकूलन सलाह और समर्थन समग्र विकास को बढ़ावा
          देने और छात्रों को केरियर के रास्‍ते को पूरा करने की दिशा में
          मार्गदर्शन करने की अनुमति देती है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस खण्‍ड में, हम पहले शिक्षक और करियर सलाहकारों की भूमिकाओं का अलग-अलग
          अन्वेषण करेंगे, इसके बाद एक व्यक्ति द्वारा दोनों भूमिकाओं को एक साथ
          निभाने के प्रमुख लाभों की चर्चा करेंगे।
        </p>

        <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
          3.7.1 शिक्षक की भूमिका
        </h1>
        <p className="text-xs font-normal text-black-gray-100">
          शिक्षक के पास आमतौर पर अपने छात्रों के बारे में अद्वितीय
          अंतर्दृष्टियों तक पहुँच होती हैं, जो अक्सर अन्य लोगों के लिए उपलब्ध
          नहीं होती हैं। विभिन्न परिस्थितियों में छात्रों का अवलोकन करके, वे
          उनके बल, रुचियों और क्षमताओं की एक समग्र समझ विकसित करते हैं। यह
          प्रत्यक्ष ज्ञान शिक्षकों को करियर काउंसलिंग प्रक्रिया में महत्वपूर्ण
          लाभ देता है, जिससे वे छात्र के जीवन के विभिन्न पहलुओं पर विचार कर सकते
          हैं और उन्हें उपयुक्त करियर पथों की ओर प्रभावी ढंग से मार्गदर्शन कर
          सकते हैं।
        </p>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterThreeData?.dualityCareerCounselor?.hading}
          </p>
          {chapterThreeData?.dualityCareerCounselor?.subContent?.map((item) => (
            <ul key={item?.key} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.key} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            यह जानकारी एकत्रित करने से शिक्षक छात्रों को व्यक्तिगत तरीके से
            मार्गदर्शन कर सकते हैं, जो उनकी समस्याओं को संबोधित करता है जो उनके
            साथियों से अलग हो सकती हैं। यह सभी जानकारी बच्चे के करियर विकल्पों
            पर विचार करते समय निर्णय लेने की प्रक्रिया में मूल्य जोड़ सकती है।
            शिक्षक पहले से ही छात्रों की शैक्षणिक क्षमता, व्यक्तित्व विशेषताएँ,
            सीखने की क्षमताएँ, आकांक्षाएँ और रुचि क्षेत्रों को समझते हैं। यह
            विभिन्न जानकारी उनके वास्तविक कौशल और रुचियों के विश्लेषण की
            प्रक्रिया की रीढ़ की हड्डी के रूप में कार्य करती है। एक बार जब
            प्रारंभिक जानकारी एकत्रित कर ली जाती है, तो शिक्षकों की भूमिका करियर
            सलाहकार के रूप में शुरू होती है, जहाँ कौशल को अवसरों से जोड़ने की
            आवश्यकता होती है।
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const SecondSubChapterDuality = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"शिक्षक और करियर काउंसलर के रूप में भूमिका की द्वैतता"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
          3.7.2 करियर परामर्शदाता की भूमिका
        </h1>

        <div className="">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterThreeData?.dualityCareerCounselor?.secondSubChapterHading}
          </p>

          <ol className="list-decimal ml-4">
            {chapterThreeData?.dualityCareerCounselor?.secondSubChapterContent.map(
              (item, i) => {
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
              }
            )}
          </ol>
        </div>
      </div>
      <Footer pageNumber={10} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const ThreeSubChapterDuality = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"शिक्षक और करियर काउंसलर के रूप में भूमिका की द्वैतता"}
          className="min-w-fit"
        />

        <h1 className="text-base font-normal text-primary uppercase py-4 tracking-[1.5px]">
          3.7.3 शिक्षक और करियर काउंसलर के रूप में दोहरी भूमिका के लाभ
        </h1>

        <div className="">
          {chapterThreeData?.dualityCareerCounselor?.threeSubChapterPointe?.map(
            (item, i) => (
              <p
                key={i}
                className="text-xs font-normal text-black-gray-100 pt-4"
              >
                {item}
              </p>
            )
          )}
        </div>
      </div>
      <Footer pageNumber={11} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"निष्कर्ष"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          3.8 निष्कर्ष
        </h1>

        {chapterThreeData?.conclusion?.map((item) => {
          return (
            <p
              key={item}
              className="text-xs font-normal text-black-gray-100 pt-4"
            >
              {item}
            </p>
          );
        })}
      </div>
      <Footer pageNumber={12} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
