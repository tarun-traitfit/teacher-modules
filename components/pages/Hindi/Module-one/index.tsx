import Header from "@/components/header";
import Footer from "@/components/footer";
import Cover from "../../cover";
import ContentPage from "../../contents-page";
import { chapterOne, chapterOneData } from "@/utils/cover-Hindi";

const ModuleOne = () => {
  return (
    <>
      <Cover
        title={"मॉड्यूल 1"}
        characterTitle={"प्रोग्राम ओरिएंटेशन"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        tableOfContents={chapterOne}
        contents={"कंटेन्ट"}
        title={"सूची "}
        pageNo={"पृष्ठ क्र."}
        projectName={"मिशन मार्गदर्शन"}
      />
      <Introduction />
      <ObjectiveProgram />
      <OverviewProgram />
      <FeaturesProgram />
      <CertifiedCareerCounselor />
      <Conclusion />
    </>
  );
};
export default ModuleOne;

export const Introduction = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"स्वागत नोट"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.1 – स्वागत नोट
        </h1>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            मध्यप्रदेश के भविष्य के सभी करियर परामर्शदाताओं का इस प्रशिक्षण
            कार्यक्रम में हार्दिक स्वागत है! यह हमारे लिए गर्व की बात है, कि हम
            इस ‘महत्वपूर्ण पहल’ का हिस्सा हैं, जो समर्पित स्कूल शिक्षकों को
            प्रमाणित करियर परामर्शदाता के रूप में प्रशिक्षित करेगी और
            विद्यार्थियों को उनके करियर के बारे में सही निर्णय लेने में मदद करने
            के लिए आवश्यक उपकरण और ज्ञान प्रदान करेगी।
          </p>
          <p className="text-xs font-normal text-black-gray-100 ">
            एक शिक्षक के रूप में, आप पहले से ही विद्यार्थियों की शैक्षणिक यात्रा
            को आकार देने में महत्वपूर्ण भूमिका निभाते हैं। अब, यह कार्यक्रम आपके
            प्रभाव को और आगे बढ़ाएगा, ताकि आप विद्यार्थियों को उनके भविष्य के
            करियर की संभावनाओं को तलाशने और सही विकल्प चुनने में मार्गदर्शन कर
            सकें।
          </p>
          <p className="text-xs font-bold text-black-gray-100 pt-3">
            “किसी बच्चे को अपनी शिक्षा तक सीमित न रखें, क्योंकि उसका जन्म किसी
            और समय में हुआ है।”
          </p>
          <p className="text-xs font-bold text-black-gray-100 text-right">
            – रवींद्रनाथ टैगोर
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-3">
            यह वाक्य हमें याद दिलाता है, कि दुनिया लगातार बदल रही है, विशेष रूप
            से तकनीकी, शिक्षा और रोजगार के क्षेत्रों में। एक करियर परामर्शदाता
            के रूप में, आप विद्यार्थियों को ऐसे भविष्य के लिए तैयार करने में मदद
            करेंगे, जो आज से बहुत अलग हो सकता है। कृत्रिम बुद्धिमत्ता (AI),
            स्वचालन (Automation) और नये उद्योगों का आगमन यह दर्शाता है, कि करियर
            को देखने का नजरिया बदल रहा है। आपका मार्गदर्शन विद्यार्थियों को उनके
            भविष्य के रास्तों के बारे में आत्मविश्वासपूर्ण और सही निर्णय लेने
            में सक्षम बनाएगा।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-3">
            शिक्षक प्रशिक्षण कार्यक्रम आपके लिए अपने विद्यार्थियों के लिए एक
            महत्वपूर्ण संसाधन बनने का प्रवेश द्वार है। यह आपको ज्ञान, उपकरण और
            कौशल प्रदान करेगा, ताकि आप उन्हें उनके क्षमता के अनुसार करियर के
            फैसले लेने में प्रभावी तरीके से मार्गदर्शन कर सकें।
          </p>

          <p className="text-xs font-normal text-black-gray-100 pt-3">
            अब, आगे बढ़ने से पहले, आइए सबसे पहले इस कार्यक्रम के उद्देश्यों को
            समझते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={2} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const ObjectiveProgram = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"कार्यक्रम के उद्देश्य"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.2 – कार्यक्रम के उद्देश्य
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          शिक्षक प्रशिक्षण कार्यक्रम मध्यप्रदेश सरकार के स्कूल शिक्षा विभाग
          द्वारा संचालित एक ‘पहल’ का हिस्सा है। इस कार्यक्रम का मुख्य उद्देश्य
          है कि, शैक्षिक परिणामों में सुधार करना, जो नीचे दिए गए, क्षेत्रों पर
          ध्यान केंद्रित करता है: बुनियादी शिक्षा को मजबूत करना : प्रभावी
          मूल्यांकन प्रणालियों को लागू करना और विद्यार्थियों को स्कूल से उच्च
          शिक्षा या रोजगार की ओर महत्वपूर्ण परिवर्तन में मार्गदर्शन प्रदान करना।
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterOneData?.objectivesProgram?.hading}
          </p>
          {chapterOneData?.objectivesProgram?.ProgramKey?.map((item, index) => (
            <ul key={index} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.key} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            यह कार्यक्रम मध्यप्रदेश के सरकारी स्कूलों को गुणवत्तापूर्ण करियर
            मार्गदर्शन प्रदान करने में आत्मनिर्भर बनाने की दिशा में काम करता है,
            ताकि विद्यार्थियों को अपने भविष्य के बारे में सही निर्णय लेने के लिए
            आवश्यक मदद मिल सके।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            कार्यक्रम के मुख्य उद्देश्यों को समझने के बाद, अब आइए, इसके नियोजन
            को समझते हैं, जो आपको प्रभावी मार्गदर्शन प्रदान करने के लिए बनाया
            गया है।
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const OverviewProgram = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"प्रशिक्षण कार्यक्रम का अवलोकन"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.3 प्रशिक्षण कार्यक्रम का अवलोकन
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          यह प्रशिक्षण कार्यक्रम विशेष रूप से स्कूली शिक्षकों के लिए तैयार किया
          गया है। इसे इस प्रकार तैयार किया गया है, कि यह सीखने में सुगम और सहज
          हो, जिससे आप अपनी रुचि और आवश्यकता के साथ जुड़ सकते हैं। इसमें आकर्षक
          <span className="font-bold"> LMS वीडियो </span>&nbsp; और &nbsp;
          <span className="font-bold">डाउनलोड करने योग्य PDF सामग्री</span>
          &nbsp; को बनाया है, जो सहज और प्रभावी शिक्षण को सक्षम बनाता है।
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterOneData?.overviewProgram?.hading}
          </p>
          <ol className="list-decimal ml-4">
            {chapterOneData?.overviewProgram?.ProgramKey.map((item, i) => {
              return (
                <>
                  <li
                    key={i}
                    className="text-xs font-bold text-black-gray-100 pt-1"
                  >
                    {item?.key} &nbsp;
                    <span className="font-normal">{item?.value}</span>
                    <p className="text-xs font-normal italic text-black-gray-100">
                      {item?.note}
                    </p>
                  </li>
                </>
              );
            })}
          </ol>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            ये सभी मॉड्यूल आपको करियर परामर्श में आवश्यक ज्ञान और कौशल प्रदान
            करने के लिए बनाया गया हैं। करियर परामर्शदाता के रूप में उत्कृष्टता
            प्राप्त करने के लिए आवश्यक ज्ञान और कौशल प्रदान करने के बाद, अब आइए
            इस परिवर्तनकारी कार्यक्रम की विशेषताओं पर विस्तार से चर्चा करें।
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const FeaturesProgram = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"कार्यक्रम की विशेषताएँ"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.4 कार्यक्रम की विशेषताएँ
        </h1>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterOneData?.featuresProgram?.hading}
          </p>
          {chapterOneData?.featuresProgram?.ProgramKey?.map((item) => (
            <ul key={item?.key} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100">
                  {item?.key} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
          {/* <p className="text-xs font-normal text-black-gray-100 pt-4">
            Now that you’ve gained an understanding of the training program,
            let’s explore your role in this process.
          </p> */}
        </div>
      </div>
      <Footer pageNumber={5} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const CertifiedCareerCounselor = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"प्रमाणित करियर परामर्शदाता के रूप में आपकी भूमिका"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.5 प्रमाणित करियर परामर्शदाता के रूप में आपकी भूमिका
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          एक शिक्षक के रूप में, आप पहले से ही अपने विद्यार्थियों की शैक्षणिक
          क्षमताओं और चुनौतियों को गहराई से समझते हैं। यह कार्यक्रम आपकी इस समझ
          को और विस्तारित करेगा और आपको एक कुशल करियर परामर्शदाता के रूप में
          विकसित करेगा। करियर परामर्शदाता के रूप में आपकी नई भूमिका केवल
          शैक्षणिक समर्थन तक सीमित नहीं होगी, बल्कि आप एक भरोसेमंद मार्गदर्शक बन
          जाएंगे, जो विद्यार्थियों को उनके भविष्य के करियर की ओर प्रेरित करेंगे।
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-4">
          यह कार्यक्रम आपको नीचे दिए गए मुद्दों में मदद करेगा:
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          विद्यार्थियों की अद्वितीय प्रतिभा और रुचियों को पहचानना:
        </p>
        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100">
            {chapterOneData?.certifiedCareerCounselor?.hading}
          </p>
          {chapterOneData?.certifiedCareerCounselor?.ProgramKey?.map((item) => (
            <ul key={item?.key} className="list-disc ml-6">
              <li>
                <p className="text-xs font-bold text-black-gray-100 pt-2">
                  {item?.key} &nbsp;
                  <span className="font-normal">{item?.value}</span>
                </p>
              </li>
            </ul>
          ))}
        </div>
        <div>
          {/* <p className="text-sm font-normal text-primary py-4">
            {chapterOneData?.certifiedCareerCounselor?.subChapter?.hading}
          </p>
          {chapterOneData?.certifiedCareerCounselor?.subChapter?.subChapterKey?.map(
            (item, index) => (
              <ul key={index} className="list-disc ml-6">
                <li>
                  <p className="text-xs font-normal text-black-gray-100">
                    {item}
                  </p>
                </li>
              </ul>
            )
          )} */}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            यह कार्यक्रम केवल एक प्रमाणित करियर परामर्शदाता बनने का अवसर नहीं है
            – यह एक शिक्षक के रूप में आपकी भूमिका को फिर से परिभाषित करने का एक
            माध्यम है। एक प्रमाणित करियर परामर्शदाता के रूप में, आप अपने
            विद्यार्थियों को जीवनभर मार्गदर्शन प्रदान करने के लिए विशेष रूप से
            योग्य होंगे, उनके लिए सार्थक करियर, अवसर और व्यक्तिगत सफलता के द्वार
            खोलेंगे।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            इस प्रशिक्षण में भाग लेकर, आप अपने व्यावसायिक विकास की दिशा में एक
            सक्रिय कदम उठा रहे हैं। विकास, शैक्षिक झुकावों से आगे रहना और अपने
            विद्यार्थियों के जीवन को समृद्ध करना। जब आप अनगिनत विद्यार्थियों के
            भविष्य को आकार देने में मदद करेंगे, तो आप अपनी खुद की करियर को भी
            सशक्त बनाएँगे और अपने समुदाय पर स्थायी प्रभाव छोड़ेंगे।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-2">
            अब समय है इस नई जिम्मेदारी को अपनाने, अपने कौशल को तेज करने और बदलाव
            लाने का – न केवल कक्षा में बल्कि अपने विद्यार्थियों के करियर और
            भविष्य में भी।
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"निष्कर्ष"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          1.6 निष्कर्ष
        </h1>

        <p className="text-xs font-normal text-black-gray-100 py-4">
          एक प्रमाणित करियर परामर्शदाता बनकर, आप अपने स्कूलों में विद्यार्थियों
          के भविष्य को आकार देने में एक महत्वपूर्ण भूमिका निभाते हैं। यह
          कार्यक्रम आपको विद्यार्थियों को सही करियर निर्णय लेने में मार्गदर्शन
          करने के लिए जरूरी साधन, ज्ञान और संसाधन प्रदान करता है, जो आने वाले
          वर्षों में उनके काम आएँगे। जब आप इस यात्रा पर निकलते हैं, तो आप न केवल
          विद्यार्थियों के जीवन को बदल रहे हैं, बल्कि एक अधिक कुशल और शिक्षित
          भविष्य के कार्यबल के विकास में भी योगदान दे रहे हैं। साथ मिलकर, हम एक
          स्थायी प्रभाव डाल सकते हैं!
        </p>

        <p className="text-xs font-normal text-black-gray-100">
          हम आपको एक प्रमाणित करियर परामर्शदाता बनने की इस रोमांचकारी यात्रा की
          शुरुआत करने के लिए शुभकामनाएँ देते हैं। इस ‘पहल’ के माध्यम से, हम यह
          तय करेंगे, कि प्रत्येक छात्र को एक निरंतर विकसित होनेवाली दुनिया में
          सफल होने के लिए जरूरी मार्गदर्शन मिलता रहे।
        </p>
      </div>
      <Footer pageNumber={7} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
