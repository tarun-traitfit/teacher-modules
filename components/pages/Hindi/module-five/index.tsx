import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Header from "@/components/header";
import Footer from "@/components/footer";
import skillRequired from "@/public/Images/skill-required.png";
import Image from "next/image";
import { chapterFive, chapterFiveData } from "@/utils/cover-Hindi";

const ModuleFive = () => {
  return (
    <>
      <Cover
        title={"मॉड्यूल 5"}
        characterTitle={"करियर काउंसलिंग के लिए आवश्यक विभिन्न कौशल"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"कंटेन्ट"}
        title={"सूची "}
        pageNo={"पृष्ठ क्र."}
        projectName={"मिशन मार्गदर्शन"}
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
        <Header title={"परिचय"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.1 परिचय
        </h1>
        <div className="pt-4">
          {chapterFiveData?.introduction?.map((item, i) => (
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
export const SkillsCareerCounseling = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"करियर काउंसलिंग में कौशल"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.2 करियर काउंसलिंग में कौशल
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          शिक्षक के रूप में, आपके पास पहले से ही कई प्रकार के कौशल होते हैं—जैसे
          कि संचार, सहानुभूति और समस्या-समाधान—जो विद्यार्थियों के साथ आपकी
          दैनिक बातचीत में आवश्यक है। हालाँकि, जब आप करियर परामर्श की भूमिका में
          आते हैं, तो इन कौशलों का महत्व एक अलग रूप ले लेता है। करियर परामर्श
          में, ध्यान इस बात पर होता है कि विद्यार्थियों को उनके भविष्य के करियर
          के बारे में योग्य निर्णय लेने में मदद की जाए।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर सलाहकारों को छात्र के ताकत और रुचियों को समझने की आवश्यकता होती
          है, और उन्हें करियर के कठिन विकल्पों के माध्यम से मार्गदर्शन करने की
          क्षमता होनी चाहिए।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस अध्याय में, हम इन बुनियादी कौशलों की चर्चा करेंगे—वे कौशल जिन्हें
          आप एक शिक्षक के रूप में पहले से ही परिचित हो सकते हैं—और देखेंगे कि
          करियर परामर्श में इन्हें विशेष रूप से कैसे लागू किया जाता है। इन
          कौशलों को स्पष्टता देकर और विस्तारित करके, आप विद्यार्थियों को
          महत्वपूर्ण करियर विकल्प बनाने में बेहतर समर्थन और मार्गदर्शन प्रदान
          करने में सक्षम होंगे।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          लेकिन इससे पहले कि हम इस पर गहराई में जाएँ, आइए पहले कौशल की अवधारणा
          को समझते हैं।
        </p>
        <div>
          <h2 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
            5.2.1 कौशल की समझ
          </h2>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            कौशल (skill) का क्या अर्थ है? – &quot;कौशल&quot; शब्द को किसी विशेष
            कार्य या गतिविधि को प्रभावी और दक्षता के साथ करने की योग्यता या
            प्रवीणता के रूप में परिभाषित किया जा सकता है। इसमें सही और कुशलता के
            साथ कुछ करने की क्षमता शामिल होती है, जो प्रशिक्षण, अनुभव या अभ्यास
            के माध्यम से प्राप्त की जाती है। संक्षेप में, कौशल उन ज्ञान,
            क्षमताओं और दक्षताओं को बताते है जो सफलतापूर्वक प्रयोगात्मक कार्यों
            को पूर्ण करने के लिए सक्षम बनाते हैं। करियर परामर्शदाता के संदर्भ
            में, कौशल से तात्पर्य उन क्षमताओं और दक्षताओं से है जो काउंसलरों को
            व्यक्तियों को उनके करियर निर्णयों में प्रभावी रूप से मार्गदर्शन और
            समर्थन देने में सक्षम बनाती हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            करियर सलाहकार को परामर्श प्रक्रिया के दौरान विद्यार्थियों से प्रभावी
            ढंग से जुड़ने और उनका समर्थन करने के लिए संज्ञानात्मक, सामाजिक,
            भावनात्मक और अन्य कौशलों के मिश्रण की आवश्यकता होती है। जबकि इनमें
            से कुछ कौशल कुछ व्यक्तियों के लिए अधिक स्वाभाविक रूप से आ सकते हैं,
            अन्य कम परिचित या सुलभ महसूस कर सकते हैं। हालाँकि, मुख्य बात यह है
            कि इन कौशलों को समर्पण, प्रयास और अभ्यास के माध्यम से विकसित किया जा
            सकता है। एक परामर्शदाता या शिक्षक के रूप में, भले ही आपको लगे कि
            आपके पास किसी विशेष कौशल की कमी है, आप ध्यान और दृढ़ता के साथ अपनी
            प्रभावशीलता को बेहतर बनाने के लिए आवश्यक योग्यताएँ प्राप्त कर सकते
            हैं। इन कौशलों को लगातार निखारने से, आप अपने विद्यार्थियों या
            ग्राहकों को योग्य करियर विकल्प बनाने और उन्हें आवश्यक सहायता प्रदान
            करने में बेहतर ढंग से मार्गदर्शन करने में सक्षम होंगे।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            संक्षेप में, कौशल प्रभावी करियर परामर्श की नींव हैं। एक अच्छी तरह से
            गोल कौशल सेट विकसित करके, परामर्शदाता विद्यार्थियों को करियर रास्‍ते
            पर चलने और उनके लक्ष्यों को प्राप्त करने में सहायता करने की अपनी
            क्षमता को बढ़ा सकते हैं। इस भूमिका में सफलता के लिए निरंतर सुधार और
            अभ्यास आवश्यक हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const SkillsCareerSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"करियर काउंसलिंग में कौशल"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.2.2 करियर काउंसलिंग के लिए आवश्यक कौशल
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          प्रभावी कैरियर परामर्श के लिए एक सहायक और खुला वातावरण बनाना अत्यंत
          महत्वपूर्ण है। एक करियर परामर्शदाता को संवाद को सुगम बनाने और छात्र की
          आकांक्षाओं, क्षमताओं और उपलब्ध संसाधनों की गहरी समझ विकसित करने में
          सक्षम होना चाहिए। विद्यार्थियों को सही करियर मार्ग चुनने में मदद करने
          के लिए, उनकी क्षमताओं, आकांक्षाओं और उनके सामाजिक-आर्थिक पृष्ठभूमि और
          समर्थन प्रणाली को ध्यान में रखते हुए संसाधनों की उपलब्धता का अच्छा
          मूल्यांकन करना आवश्यक होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          प्रभावी कैरियर परामर्श के लिए एक सहायक और खुला वातावरण बनाना अत्यंत
          महत्वपूर्ण है। एक करियर परामर्शदाता को संवाद को सुगम बनाने और छात्र की
          आकांक्षाओं, क्षमताओं और उपलब्ध संसाधनों की गहरी समझ विकसित करने में
          सक्षम होना चाहिए। विद्यार्थियों को सही करियर मार्ग चुनने में मदद करने
          के लिए, उनकी क्षमताओं, आकांक्षाओं और उनके सामाजिक-आर्थिक पृष्ठभूमि और
          समर्थन प्रणाली को ध्यान में रखते हुए संसाधनों की उपलब्धता का अच्छा
          मूल्यांकन करना आवश्यक होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          हमने इन आवश्यक कौशलों को आसानी से समझने के लिए चार प्रमुख श्रेणियों
          में विभाजित किया है। यह ध्यान रखना आवश्यक है कि यह वर्गीकरण केवल
          स्पष्टता के लिए है; कौशल किसी विशिष्ट क्रम का पालन नहीं करते और जरूरत
          के अनुसार लागू किए जा सकते हैं। ये श्रेणियाँ एक सामान्य आधार बताती हैं
          और उन्हें इस तरह से संगठित करने से आपको करियर परामर्श प्रक्रिया के
          विभिन्न चरणों में कौन-से कौशल का उपयोग करना है, यह पहचानने में मदद
          मिलेगी। आइए अब इन महत्वपूर्ण कौशलों को विस्तार से समझते हैं।
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

          <div className="pt-6">
            <p className="text-xs font-normal text-black-gray-100">
              यहाँ इस अध्याय में शामिल कौशलों का अवलोकन दिया गया है जिसे उनकी
              संबंधित श्रेणियों में व्‍यवस्थित किया गया है, जो नीचे प्रदर्शित
              किया गया है-
            </p>
            <Image
              src={skillRequired}
              alt="skill-required"
              width={794}
              height={150}
              className="pt-4"
            />
            {/* <p className="text-xs font-normal text-black-gray-100 pt-4">
              Now, let’s explore each skill set in detail.
            </p> */}
          </div>
        </div>
      </div>
      <Footer pageNumber={4} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const RapportBuildingSkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={" सामान्य आधार की खोज (Finding Common Ground)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.3 संबंध निर्माण का कौशल (Rapport Building Skills)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          संबंध निर्माण करियर परामर्श में एक महत्वपूर्ण कौशल है। यह परामर्शदाता
          और विद्यार्थी के बीच प्रभावी संचार और समझ को सुगम बनाता है। इसमें एक
          भरोसेमंद और सहायक संबंध स्थापित करना शामिल है जो बिना झिझक और पक्षपात
          के खुली बातचीत की अनुमति देता है। जब संबंध मजबूत होता है, तो सलाहकार
          और विद्यार्थी अपने विचारों और दृष्टिकोणों को खुलकर साझा कर सकते हैं,
          यहाँ तक कि जब वे असहमत होते हैं, तब भी सम्मान बनाए रखा जाता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          एक शिक्षक के रूप में, आपने शायद पहले से ही अपने विद्यार्थियों के साथ
          संबंध स्थापित किए होंगे, क्योंकि शिक्षक सामान्य रूप से विश्वास और
          सम्मान का प्रतीक होते हैं। उदाहरण के लिए, विद्यार्थी अक्सर एक शिक्षक
          के मार्गदर्शन पर माता-पिता की तुलना में बेहतर प्रतिक्रिया देते हैं, जो
          आपकी भूमिका को एक भरोसेमंद व्यक्ति के रूप में महत्वपूर्ण बनाता है।
          हालांकि, इस पूर्व-स्थापित संबंध के बावजूद, प्रभावी परामर्श को
          सुविधाजनक बनाने के लिए शिक्षा से परे विद्यार्थियों के बारे में अपनी
          समझ को बढ़ाना महत्‍वपूर्ण है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आइए अब संबंध निर्माण के प्रमुख घटकों पर एक नज़र डालते हैं:
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-6 tracking-[1.5px]">
          5.3.1 एक सुरक्षित स्थान बनाना (Creating a Safe Space)
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
            एक करियर परामर्शदाता के रूप में, जब आप विद्यार्थियों के साथ एक
            भरोसेमंद संबंध स्थापित करते हैं, तो सुनिश्चित करें कि वे जानते हैं
            कि उनकी जानकारी गोपनीय रहेगी, आप उनके विचारों और विकल्पों के बारे
            में कोई निर्णय नहीं लेंगे, और काउंसलिंग प्रक्रिया के दौरान आप सच्चे
            रहेंगे। यह छात्रों के लिए एक सुरक्षित स्थान बनाता है ताकि वे खुलकर
            अपनी बातें रख सकें, जो अंततः मजबूत संबंध बनाने और प्रभावी करियर
            परामर्श की सुविधा प्रदान करता है।
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const RapportBuildingSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={" सामान्य आधार की खोज (Finding Common Ground)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.3.2 सामान्य आधार की खोज (Finding Common Ground)
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
              </ul>
            )
          )}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            संक्षेप में, जब विद्यार्थी यह पहचानते हैं कि आप उनकी सांस्कृतिक
            पृष्ठभूमि को समझते हैं, उनके अनुभवों में वास्तविक रुचि दिखाते हैं,
            और उनकी चुनौतियों से संबंधित होते हैं, तो वे आपके प्रति अधिक खुलापन
            दिखाते हैं। यह खुलापन एक भरोसेमंद वातावरण को बढ़ावा देता है, जिससे
            अधिक प्रभावी करियर काउंसलिंग संभव हो पाती है।
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
            इन तकनीकों को लागू करके, आप विद्यार्थियों के साथ अपने संबंधों को और
            गहरा कर सकते हैं और सुनिश्चित कर सकते हैं कि वे आपको एक शिक्षक और
            करियर काउंसलर दोनों के रूप में सम्मान और विश्वास करें।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            एक बार जब आपने विद्यार्थी के साथ एक अच्छा संबंध बना लिया है, तो
            परामर्श सत्र को आगे बढ़ाने का समय आ गया है। अगला महत्वपूर्ण कौशल जो
            आपकी बातचीत को बढ़ाएगा और परामर्श की प्रक्रिया को अधिक प्रभावी
            बनाएगा वह है संचार कौशल
            <span className="font-bold">(Communication Skills)।</span>
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CommunicationSkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"संचार कौशल"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.4 संचार कौशल
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          प्रभावी संचार करियर काउंसलिंग में विद्यार्थियों के साथ एक उत्पादक
          संबंध बनाने के लिए आवश्यक है। इसमें चार प्रमुख कौशल शामिल हैं: मौखिक
          संचार (Verbal Communication), गैर-मौखिक संचार (Non-Verbal
          Communication), सक्रिय सुनना (Active Listening), और सही प्रश्न पूछना
          (Asking the Right Questions)। मौखिक संचार में विचारों और भावनाओं को
          व्यक्त करने के लिए बोले गए शब्द और उनका टोन शामिल होता है, जबकि
          गैर-मौखिक संचार में बॉडी लैंग्वेज, इशारे और चेहरे के भाव शामिल होते
          हैं जो इन शब्दों के साथ चलते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इन तत्वों को मिलाकर प्रभावी करियर काउंसलिंग के लिए एक महत्वपूर्ण नींव
          बनती है। मौखिक संचार में महारत हासिल करके आप सवालों और अंतर्दृष्टियों
          को स्पष्ट रूप से व्यक्त कर सकते हैं, जिससे विद्यार्थियों की आकांक्षाओं
          के बारे में खुली चर्चा को बढ़ावा मिलता है। इसी बीच, गैर-मौखिक संकेतों
          के प्रति सचेत रहना विद्यार्थियों की आराम स्तर और भावनाओं का आकलन करने
          में मदद करता है, जिससे आप उनकी आवश्यकताओं के अनुसार अपने दृष्टिकोण को
          अनुकूलित कर सकते हैं। सक्रिय सुनने से यह सुनिश्चित होता है कि आप
          विद्यार्थियों के दृष्टिकोण को पूरी तरह से समझें, जबकि सही प्रश्न पूछने
          से गहरे चिंतन को प्रोत्साहन मिलता है। यह एक सहायक वातावरण बनाता है
          जहाँ विद्यार्थी समझे जाने और सशक्त महसूस करते हैं कि वे अपने करियर
          विकल्पों का पता लगा सकते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आइए अब प्रत्येक प्रमुख कौशल को विस्तार से समझते हैं।
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-6 tracking-[1.5px]">
          5.4.1 मौखिक संचार (Verbal Communication)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          मौखिक संचार का मतलब है बोले गए भाषा का उपयोग करके संदेश, विचार, सोच और
          भावनाओं को व्यक्त करना। इसमें न केवल चुने गए शब्द शामिल होते हैं,
          बल्कि आवाज़ का टोन, गति, मात्रा और भाषण की स्पष्टता भी शामिल होती है।
          एक करियर परामर्शदाता के रूप में, आपको इस बात को समझना चाहिए कि आवाज़
          का प्रकार, टोन, गति और शब्द चयन विद्यार्थी की सोचने की प्रक्रिया या
          उनके मूड को दर्शाते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          उदाहरण के लिए, यदि कोई विद्यार्थी बहुत धीमी आवाज़ में बोल रहा है, कम
          ऊर्जा के साथ, और बहुत कम शब्दों का उपयोग कर रहा है, तो इसका मतलब यह हो
          सकता है कि वह जानकारी साझा करने में सहज महसूस नहीं कर रहा है। इस
          स्थिति में, आपको पहले रैपो (संबंध) बनाने पर ध्यान केंद्रित करना चाहिए
          और फिर कुशल मौखिक संचार की मदद से जानकारी एकत्र करने के चरण में
          स्थानांतरित होना चाहिए।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श सत्रों में, मौखिक संचार का कुशल उपयोग करके आप न केवल
          विद्यार्थियों की आकांक्षाओं और विचारों को स्पष्ट रूप से समझ सकते हैं,
          बल्कि एक ऐसा वातावरण भी बना सकते हैं जहाँ विद्यार्थी स्वतंत्र रूप से
          अपने करियर विकल्पों के बारे में बात कर सकें और निर्णय ले सकें।
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
            अब जब हमने मौखिक संचार का पता लगा लिया है, तो आइए समझते हैं कि
            भावनाओं और दृष्टिकोणों को व्यक्त करने में गैर-मौखिक संचार कैसे
            महत्वपूर्ण भूमिका निभाता है।
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CommunicationSkillsSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"संचार कौशल"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.4.2 गैर-मौखिक संचार (Non-Verbal Communication)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          गैर-मौखिक संचार बिना शब्दों के संदेशों को व्यक्त करता है, जिसमें बॉडी
          लैंग्वेज, चेहरे के भाव, आँखों का संपर्क, इशारे, मुद्रा और अन्य शारीरिक
          संकेत शामिल होते हैं, जो भावनाओं और इरादों को दर्शाते हैं। स्थिति और
          व्यक्ति के बारे में सूक्ष्म विवरणों का अवलोकन करने से उनकी वास्तविक
          भावनाओं की समझ बढ़ती है, जो मौखिक संचार को पूरा करता है।
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
          {/* <p className="text-xs font-normal text-black-gray-100 pt-4">
            यहाँ कुछ संकेत दिए गए हैं जिन्हें आपको गैर-मौखिक संचार के संबंध में
            ध्यान में रखना चाहिए:
          </p> */}
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
            अशाब्दिक संचार पर चर्चा करने के बाद, आइए अब सक्रिय सुनने पर विस्तार
            से चर्चा करें, जो विद्यार्थियों के दृष्टिकोण को सही मायने में समझने
            के लिए एक महत्वपूर्ण कौशल है।
          </p>
        </div>
      </div>
      <Footer pageNumber={8} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CommunicationSkillsSubChapterThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"संचार कौशल"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.4.3 सक्रिय रूप से सुनना (Active Listening)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आपने शायद यह वाक्य सुना होगा, &apos;संवाद केवल सक्रिय रूप से बात करने
          के बारे में नहीं है, बल्कि सक्रिय रूप से सुनने के बारे में भी
          है।&apos; सक्रिय सुनना एक महत्वपूर्ण संचार कौशल है, जो करियर काउंसलिंग
          में विशेष महत्व रखता है। इसका उद्देश्य विद्यार्थियों की भावनाओं,
          चिंताओं और विचारों को सही तरीके से समझना है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          सक्रिय सुनने का मतलब है कि आप पूरी तरह से ध्यान केंद्रित करें और
          विद्यार्थी की बात को सुनने में लगे रहें, ना कि केवल यह सोचें कि आप
          अगली बार क्या कहेंगे। यह कौशल न केवल आपको विद्यार्थियों के विचारों और
          भावनाओं को समझने में मदद करता है, बल्कि उन्हें भी यह एहसास दिलाता है
          कि उनकी बातों का मूल्य है और वे सुने जा रहे हैं।
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
            विद्यार्थियों और हितधारकों की सक्रिय रूप से सुनने के बाद, अगला कदम
            उनके विचारों को स्पष्ट करने और उपयोगी विवरण एकत्र करने के लिए सही
            प्रश्न पूछना है, जिससे अधिक प्रभावी मार्गदर्शन मिल सके। आइए इसे और
            विस्तार से समझते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CommunicationSkillsSubChapterFour = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"संचार कौशल"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          5.4.4 सही सवाल पूछना (Asking the Right Questions)
        </h1>

        <div className="pt-4">
          <p className="text-xs font-normal text-black-gray-100 ">
            {
              chapterFiveData?.communicationSkillsSubChapterTwo
                ?.askingQuestionsHading
            }
          </p>

          <p className="text-xs font-bold text-black-gray-100 ">
            सही सवाल पूछने के तरीके (Methods for Asking the Right Questions)
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
          <p className="text-xs font-bold text-black-gray-100 ">
            सही सवाल पूछने के दौरान ध्यान रखने योग्य बातें (Pointers for Asking
            the Right Questions)
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
            संचार कौशल का निष्कर्ष (Conclusion)
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            संचार कौशल—शाब्दिक संचार, गैर-शाब्दिक संकेत, सक्रिय सुनना, और सही
            प्रश्न पूछना—करियर परामर्शदाताओं के लिए अनिवार्य हैं। ये कौशल
            परामर्शदाताओं को विद्यार्थियों से जुड़ने, उनकी आकांक्षाओं को उजागर
            करने, और उन्हें सूचित करियर विकल्पों की ओर मार्गदर्शन करने में सक्षम
            बनाते हैं। हमने जिन सुझावों और तकनीकों पर चर्चा की है, उन्हें लागू
            करके, आप विद्यार्थियों के लिए एक सहायक वातावरण बना सकते हैं जो
            आत्म-खोज और विकास को प्रोत्साहित करता है। इसके अलावा, इन संचार
            कौशलों को निखारना सहानुभूति, आत्म- जागरूकता, और सकारात्मक दृष्टिकोण
            जैसे महत्वपूर्ण अंतरव्यक्तिक कौशलों के लिए नींव तैयार करता है, जो
            विद्यार्थियों के साथ मजबूत संबंध बनाने के लिए महत्वपूर्ण हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            आइए पारस्परिक कौशल को विस्तार से समझें और जानें कि वे आपकी परामर्श
            प्रक्रिया को किस प्रकार अधिक प्रभावी बना सकते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={10} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const InterpersonalSkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"अंतरव्यक्तिगत कौशल"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.5 अंतरव्यक्तिगत कौशल
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अंतरव्यक्तिगत कौशल का उपयोग एक सामाजिक सामूहिकता में व्यक्तियों के साथ
          बातचीत करने के लिए किया जाता है। हालांकि ये संचार कौशल के समान लग सकते
          हैं, लेकिन इनमें एक महत्वपूर्ण अंतर है: संचार कौशल जानकारी के
          आदान-प्रदान पर ध्यान केंद्रित करते हैं, जबकि अंतरव्यक्तिगत कौशल
          संबंधों को विकसित करने और बनाए रखने पर जोर देते हैं, चाहे बातचीत हो
          रही हो या नहीं। ये कौशल किसी व्यक्ति की भावनाओं, ऊर्जा और दृष्टिकोण को
          समझने और उनकी प्रतिकृति देने में शामिल होते हैं, जो केवल जानकारी के
          आदान-प्रदान से परे है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          मजबूत अंतरव्यक्तिगत कौशल करियर परामर्शकर्ताओं के लिए महत्वपूर्ण हैं
          ताकि वे विद्यार्थियों की भावनाओं, प्रेरणाओं और दृष्टिकोणों को पहचान
          सकें और उनके प्रति प्रतिक्रिया कर सकें। प्रमुख अंतरव्यक्तिगत कौशलों
          में सहानुभूति, आत्म-जागरूकता और सकारात्मक दृष्टिकोण शामिल हैं। इन
          कौशलों के माध्यम से सहयोग और सहयोग को बढ़ावा देकर, परामर्शदाता
          विद्यार्थियों के साथ अपने संबंधों को मजबूत कर सकते हैं, जिससे करियर
          अन्वेषण के दौरान अधिक अर्थपूर्ण मार्गदर्शन और समर्थन मिल सकता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          अब आइए प्रत्येक प्रमुख अंतरव्यक्तिगत कौशल पर विस्तार से विचार करें।
        </p>

        <h1 className="text-base font-normal text-primary uppercase pt-6 pb-4 tracking-[1.5px]">
          5.5.1 समानुभूती/ सहानुभूति (Empathy)
        </h1>

        <p className="text-xs font-normal text-black-gray-100">
          सहानुभूति किसी दूसरे व्यक्ति की भावनाओं को समझने और साझा करने की
          क्षमता है। इसमें दो प्रमुख पहलू शामिल होते हैं: व्यक्ति की भावनाओं को
          समझना और उन भावनाओं के साथ जुड़ना। एक सामान्य वाक्यांश जो इस अवधारणा
          को संक्षेप में व्यक्त करता है, वह है &quot;दूसरों के जूते में खुद को
          रखना।&quot; इसका मतलब है कि आप वास्तव में उस व्यक्ति द्वारा अनुभव की
          जा रही स्थिति को समझते हुए उसके अनुभव को महसूस करें।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श में, विद्यार्थी अक्सर परिवार, दोस्तों और अपनी आकांक्षाओं
          से अपेक्षाओं के जटिल जाल को नेविगेट करते हैं, जो महत्वपूर्ण दबाव पैदा
          कर सकता है। एक करियर पथ का निर्णय लेना भारी पड़ सकता है, विशेष रूप से
          जब वे अकादमिक माँगों और व्यक्तिगत लक्ष्यों के बीच संतुलन बनाने की
          कोशिश कर रहे होते हैं। करियर परामर्शदाता के रूप में, विद्यार्थियों की
          अद्वितीय चुनौतियों को पहचानना आवश्यक है। सहानुभूति का अभ्यास करके, आप
          उनके अनिश्चितता और तनाव के भावनाओं को सही मायने में समझ सकते हैं। आपकी
          भूमिका इन कठिनाइयों के माध्यम से सहानुभूति और अंतर्दृष्टि के साथ उनका
          मार्गदर्शन करना है। सहानुभूतिक संबंध बनाने से, आप विद्यार्थियों को
          महसूस कराते हैं कि वे पहचाने गए हैं और समर्थित हैं, और उन्हें उनके
          जुनून और लक्ष्यों के अनुरूप सूचित करियर विकल्प बनाने के लिए सशक्त
          बनाते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          यह दृष्टिकोण विश्वास को बढ़ावा देता है, जिससे विद्यार्थी अपनी चिंताओं
          और आकांक्षाओं के बारे में खुलकर बात कर पाते हैं, जिससे अंततः अधिक
          प्रभावी परामर्श परिणाम प्राप्त होते हैं।
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
            अब, आइए अगले पारस्परिक कौशल का पता लगाते हैं, जो आत्म-जागरूकता है।
          </p>
        </div>
      </div>
      <Footer pageNumber={11} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const InterpersonalSubChapterOne = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"अंतरव्यक्तिगत कौशल "} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.5.2 आत्म-जागरूकता (Self-Awareness)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          जैसे हम अपने विद्यार्थियों के प्रति सहानुभूति विकसित करते हैं, वैसे ही
          आत्म-जागरूकता को विकसित करना भी उतना ही महत्वपूर्ण है, जो हमें परामर्श
          के दौरान अपनी भावनाओं, पूर्वाग्रहों और प्रतिक्रियाओं को पहचानने में
          सक्षम बनाता है। आत्म-जागरूकता वह क्षमता है जिससे हम अपने विचारों,
          भावनाओं, मूल्यों और व्यवहारों को आंतरिक और बाहरी दोनों स्तरों पर समझते
          और स्वीकार करते हैं। इसे दो श्रेणियों में विभाजित किया जा सकता है:
          &nbsp;
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          <span className="font-bold"> आंतरिक आत्म-जागरूकता: </span>
          &nbsp;इसमें यह पहचानना शामिल है कि हमारे मूल्य, विश्वास, जुनून और
          आकांक्षाएँ हमारे परिवेश में कैसे फिट होते हैं और हमारी प्रतिक्रियाओं
          को प्रभावित करते हैं। &nbsp;
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          <span className="font-bold"> बाह्य आत्म-जागरूकता: </span>&nbsp;, इसमें
          यह समझना शामिल है कि दूसरों को उन ही के अनुभव के आधार पर हम कैसे महसूस
          करते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आत्म-जागरूकता विकसित करने से करियर परामर्शकर्ताओं को अपनी भूमिकाओं की
          जटिलताओं को समझने में मदद मिलती है, जिससे वे अपने विद्यार्थियों के साथ
          बेहतर जुड़ाव कर सकते हैं और संपूर्ण काउंसलिंग अनुभव को बढ़ा सकते हैं।
          करियर परामर्श में, आत्म-जागरूकता महत्वपूर्ण है क्योंकि यह
          परामर्शदाताओं को विभिन्न करियर, विद्यार्थियों की चिंताओं, उनके
          माता-पिता के साथ संबंध, पृष्ठभूमियों आदि के बारे में अपने पूर्वग्रहों
          और धारणाओं को पहचानने में सक्षम बनाती है। इससे बिना पूर्वग्रहों को
          विद्यार्थियों पर थोपे अधिक वस्तुनिष्ठ दृष्टिकोण सुनिश्चित होता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          यह सलाहकारों को उनके भावनात्मक ट्रिगर्स और सीमाओं की पहचान करके स्वस्थ
          सीमाएँ स्थापित करने की अनुमति देता है, जिससे उत्पादक पेशेवर संबंध बनते
          हैं। इसके अतिरिक्त, यह सहानुभूति को बढ़ाता है, जिससे काउन्सलर छात्रों
          की भावनाओं और दृष्टिकोणों से गहराई से जुड़ पाते हैं।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          विद्यार्थियों को आत्म-जागरूकता का अभ्यास करने के लिए प्रोत्साहित करना
          भी महत्वपूर्ण है। परामर्शदाता आत्म-प्रतिबिंब की सुविधा प्रदान कर सकते
          हैं और उन्हें अपने करियर की आकांक्षाओं में अंतर्दृष्टि प्राप्त करने
          में मदद कर सकते हैं। यह एक सुरक्षित वातावरण बनाने, सीमाओं को बनाए रखने
          और सार्थक परामर्श सत्र आयोजित करने में मदद करता है।
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
            आइए अब तीसरे पारस्परिक कौशल, सकारात्मक दृष्टिकोण के बारे में अधिक
            समझते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={12} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const InterpersonalSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"अंतरव्यक्तिगत कौशल"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.5.3 सकारात्मक दृष्टिकोण
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          सकारात्मक दृष्टिकोण एक मानसिक और भावनात्मक स्थिति है जिसकी विशेषता
          आशावाद, आशा और आत्मविश्वास है। यह मानसिकता कैरियर सलाहकारों और
          विद्या‍र्थियों के लिए महत्वपूर्ण है, क्योंकि यह प्रभावित करती है कि वे
          चुनौतियों का सामना कैसे करते हैं और जीवन में अवसरों का लाभ कैसे उठाते
          हैं। कैरियर सलाहकारों के लिए, उनकी भलाई और विद्या‍र्थियों को समान
          दृष्टिकोण विकसित करने के लिए प्रेरित करने के लिए एक सकारात्मक
          दृष्टिकोण विकसित करना आवश्यक है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          जब कैरियर सलाहकार एक सकारात्मक दृष्टिकोण प्रदर्शित करते हैं, तो वे
          विद्या‍र्थियों के साथ अपनी बातचीत के वि लिए टोन सेट करते हैं। यह
          विद्या‍र्थियों को खुद को सकारात्मक रूप से देखने और अपने करियर के
          रास्तों के साथ रचनात्मक रूप से जुड़ने के लिए प्रोत्साहित करता है। इससे
          असफलताओं के सामने आत्म-धारणा और अधिक लचीलापन बढ़ सकता है। इसके विपरीत,
          जब विद्यार्थी अपने सलाहकारों द्वारा समर्थित और मूल्यवान महसूस करते
          हैं, तो वे एक आशावादी मानसिकता अपनाने की अधिक संभावना रखते हैं, जो
          उनकी कैरियर की आकांक्षाओं और समग्र सफलता को महत्वपूर्ण रूप से प्रभावित
          कर सकती है। कैरियर सलाहकार अपने और अपने विद्या‍र्थियों में सकारात्मक
          दृष्टिकोण को बढ़ावा देकर व्यक्तिगत विकास और उपलब्धि के लिए एक मजबूत
          नींव बनाने में मदद कर सकते हैं। यह दोनों पक्षों को आत्मविश्वास और आशा
          के साथ अपनी यात्रा करने में सक्षम बनाता है।
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
            अंत में, कैरियर सलाहकारों के लिए सहानुभूति, आत्म-जागरूकता और
            सकारात्मक दृष्टिकोण सहित मजबूत पारस्परिक कौशल विकसित करना आवश्यक है।
            ये कौशल सलाहकारों को अपने विद्या‍र्थियों के साथ गहराई से जुड़ने,
            विश्वास और समर्थन के वातावरण को बढ़ावा देने में सक्षम बनाते हैं।
            परामर्शदाता सहानुभूति का अभ्यास करके खुले संचार के लिए एक सुरक्षित
            स्थान बनाकर अपने विद्या‍र्थियों के अनुभवों को समझ सकते हैं और उनसे
            संबंधित हो सकते हैं। आत्म-जागरूकता सलाहकारों को उनके पूर्वाग्रहों और
            भावनात्मक ट्रिगर्स को पहचानने में मदद करती है, यह सुनिश्चित करते हुए
            कि वे उद्देश्यपूर्ण और प्रभावी मार्गदर्शन प्रदान करते हैं। अंत में,
            एक सकारात्मक दृष्टिकोण बनाए रखना परामर्शदाताओं को सशक्त बनाता है और
            विद्या‍र्थियों को एक समान दृष्टिकोण अपनाने के लिए प्रेरित करता है,
            जिससे उनके आत्मविश्वास और प्रेरणा में वृद्धि होती है। ये पारस्परिक
            कौशल सार्थक परामर्श संबंधों की नींव रखते हैं जो विद्या‍र्थियों के
            व्यक्तिगत और व्यावसायिक विकास को महत्वपूर्ण रूप से प्रभावित कर सकते
            हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            सलाहकारों के लिए विश्लेषणात्मक कौशल, समस्या समाधान और योजना कौशल
            जैसे आलोचनात्मक सोच कौशल विकसित करना भी उतना ही महत्वपूर्ण है। ये
            क्षमताएँ परामर्शदाताओं को स्थितियों का प्रभावी ढंग से आकलन करने,
            व्यावहारिक समाधान तैयार करने और अपने विद्या‍र्थियों के कैरियर विकास
            के लिए कार्रवाई योग्य योजनाएँ विकसित करने में सक्षम बनाकर पारस्परिक
            कौशल का पूरक हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            आइए इन आलोचनात्मक सोच कौशल का विस्तार से पता लगाएँ।
          </p>
        </div>
      </div>
      <Footer pageNumber={13} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CriticalThinkingSkills = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"आलोचनात्मक चिंतन कौशल"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.6 आलोचनात्मक चिंतन कौशल
        </h1>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          जानकारी का तार्किक मूल्यांकन करने, विभिन्न डेटा बिंदुओं के बीच संबंध
          स्थापित करने और सूचित निष्‍कर्षो तक पहुँचने के लिए उन्हें संरचित तरीके
          से जोड़ने के लिए आलोचनात्मक सोच कौशल आवश्यक हैं। इन कौशलों में जटिल
          समस्याओं का विश्लेषण करना, निर्णय लेना और उपलब्ध आंकड़ों पर तर्क को
          लागू करना शामिल है। कैरियर सलाहकारों के लिए, आलोचनात्मक सोच में महारत
          हासिल करना महत्वपूर्ण है, विशेष रूप से निर्णय लेने के चरण के दौरान जब
          विद्यार्थी की ताकत, रुचियों और आकांक्षाओं के बारे में विभिन्न जानकारी
          का संश्लेषण किया जाता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          जानकारी का तार्किक मूल्यांकन करने, विभिन्न डेटा बिंदुओं के बीच संबंध
          स्थापित करने और सूचित निष्‍कर्षो तक पहुँचने के लिए उन्हें संरचित तरीके
          से जोड़ने के लिए आलोचनात्मक सोच कौशल आवश्यक हैं। इन कौशलों में जटिल
          समस्याओं का विश्लेषण करना, निर्णय लेना और उपलब्ध आंकड़ों पर तर्क को
          लागू करना शामिल है। कैरियर सलाहकारों के लिए, आलोचनात्मक सोच में महारत
          हासिल करना महत्वपूर्ण है, विशेष रूप से निर्णय लेने के चरण के दौरान जब
          विद्यार्थी की ताकत, रुचियों और आकांक्षाओं के बारे में विभिन्न जानकारी
          का संश्लेषण किया जाता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          जानकारी का तार्किक मूल्यांकन करने, विभिन्न डेटा बिंदुओं के बीच संबंध
          स्थापित करने और सूचित निष्‍कर्षो तक पहुँचने के लिए उन्हें संरचित तरीके
          से जोड़ने के लिए आलोचनात्मक सोच कौशल आवश्यक हैं। इन कौशलों में जटिल
          समस्याओं का विश्लेषण करना, निर्णय लेना और उपलब्ध आंकड़ों पर तर्क को
          लागू करना शामिल है। कैरियर सलाहकारों के लिए, आलोचनात्मक सोच में महारत
          हासिल करना महत्वपूर्ण है, विशेष रूप से निर्णय लेने के चरण के दौरान जब
          विद्यार्थी की ताकत, रुचियों और आकांक्षाओं के बारे में विभिन्न जानकारी
          का संश्लेषण किया जाता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          आइए इन कौशलों में से प्रत्येक को आलोचनात्मक सोच के तहत विस्तार से
          समझते हैं:
        </p>
      </div>
      <Footer pageNumber={14} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CriticalSubChapterOne = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"आलोचनात्मक चिंतन कौशल"} />

        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.6.1 विश्लेषणात्मक कौशल
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          विश्लेषणात्मक कौशल व्यवस्थित रूप से जानकारी का मूल्यांकन करने, पैटर्न
          की पहचान करने और डेटा से सार्थक निष्कर्ष निकालने की क्षमता को संदर्भित
          करता है। ये कौशल कैरियर सलाहकारों के लिए आवश्यक हैं, क्योंकि ये
          विद्यार्थियों के अद्वितीय प्रोफाइल की गहरी समझ की अनुमति देते हैं और
          उनकी कैरियर योजना में प्रभावी मार्गदर्शन की सुविधा प्रदान करते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          विश्लेषणात्मक कौशल व्यवस्थित रूप से जानकारी का मूल्यांकन करने, पैटर्न
          की पहचान करने और डेटा से सार्थक निष्कर्ष निकालने की क्षमता को संदर्भित
          करता है। ये कौशल कैरियर सलाहकारों के लिए आवश्यक हैं, क्योंकि ये
          विद्यार्थियों के अद्वितीय प्रोफाइल की गहरी समझ की अनुमति देते हैं और
          उनकी कैरियर योजना में प्रभावी मार्गदर्शन की सुविधा प्रदान करते हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          विश्लेषणात्मक कौशल को बढ़ाने के लिए, सलाह‌कार जटिल समस्याओं को छोटे,
          प्रबंधनीप भागों में विभाजित करने, चार्ट और ग्राफ आदि जैसी दृश्य सहायता
          का उपयोग करने जैसी तकनीकों का उपयोग कर सकते हैं।
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
            आलोचनात्मक सोच के तहत एक और आवश्यक कौशल &nbsp;
            <span className="font-bold"> समस्या-समाधानकौशल</span>&nbsp; है, जिसे
            हम अब तलाशेंगे।
          </p>
        </div>
      </div>
      <Footer pageNumber={15} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CriticalSubChapterTwo = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"आलोचनात्मक चिंतन कौशल"} />

        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.6.2 समस्या समाधान कौशल
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          समस्या-समाधान कौशल प्रभावी कैरियर परामर्श प्रदान करने में महत्वपूर्ण
          हैं, सलाहकारों को विद्यार्थियों को चुनौतियों का सामना करने, संघर्षों
          को हल करने और अपने भविष्य के बारे में सूचित निर्णय लेने में मदद करने
          में सक्षम बनाते हैं। इस कौशल में व्यावहारिक समाधान तक पहुँचने के लिए
          बाधाओं की व्यवस्थित रूप से पहचान करना, उनका विश्लेषण करना और उनका
          समाधान करना शामिल है। कैरियर सलाहकारों के लिए, समस्या-समाधान में महारत
          हासिल करना विभिन्न चुनौतियों के माध्यम से विद्यार्थियों का मार्गदर्शन
          करने की कुंजी है, जैसे कि अस्पष्ट कैरियर मार्ग, अवास्तविक अपेक्षाएं,
          या उनकी ताकत के बारे में अनिश्चितताएं। ये कौशल विद्यार्थी की
          आकांक्षाओं और क्षमताओं के बीच असंतुलन को दूर करने, कैरियर विकल्पों के
          बारे में भ्रम को दूर करने या विद्यार्थियों को बाहरी दबावों के साथ
          व्यक्तिगत हितों को मिलाने में मदद करने में अमूल्य हैं।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          समस्या-समाधान तकनीकों को लागू करके, परामर्शदाता स्पष्टता प्रदान कर
          सकते हैं. विद्यार्थियों को यथार्थवादी कार्य योजनाओं को विकसित करने में
          सहायता कर सकते हैं, और उन्हें आत्मविश्वास से अपने लक्ष्यों को प्राप्त
          करने के लिए सशक्त बना सकते हैं। चाहे मूल्यांकन रिपोर्ट की व्याख्या
          करना हो, क्षमताओं और रुचियों का मानचित्रण करना हो, या कैरियर की
          आकांक्षाओं और वास्तविकताओं के बीच संघर्षों का प्रबंधन करना हो, संरचित,
          सूचित, व्यक्तिगत कैरियर मार्ग बनाने के लिए समस्या-समाधान आवश्यक है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          समस्या समाधान एक संरचित दृष्टिकोण है जो कैरियर सलाहकारों को
          विद्यार्थियों को उनके कैरियर विकास में चुनौतियों और संघर्षों के माध्यम
          से मार्गदर्शन करने में मदद करता है। आइए प्रभावी समस्या समाधान शामिल
          प्रमुख चरणों का पता लगाएँ:
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
          {/* <p className="text-xs font-normal text-black-gray-100 pt-4">
            Lastly, let&apos;s explore one of the most crucial critical thinking
            skills: Planning Skills.
          </p> */}
        </div>
      </div>
      <Footer pageNumber={16} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CriticalSubChapterThree = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"आलोचनात्मक चिंतन कौशल"} />

        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.6.3 नियोजन कौशल
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          नियोजन कौशल कैरियर परामर्श में आवश्यक है क्योंकि वे सलाहकारों और
          विद्यार्थियों को स्पष्ट उद्देश्य निर्धारित करने और कैरियर लक्ष्यों को
          प्राप्त करने के लिए एक संरचित रोडमैप बनाने के लिए सशक्त बनाते हैं। ये
          कौशल परामर्श प्रक्रिया के लिए एक संगठित दृष्टिकोण की सुविधा प्रदान
          करते हैं, जिससे परामर्शदाता विद्यार्थियों को अधिक प्रभावी ढंग से
          मार्गदर्शन कर सकते हैं। योजना में महारत हासिल करके, परामर्शदाता
          विद्यार्थियों को कैरियर की बड़ी आकांक्षाओं को छोटे, प्रबंधनीय कार्यों
          में विभाजित करने में सहायता कर सकते हैं, जिससे प्रगति अधिक प्राप्य और
          कम भारी हो सकती है। प्रभावी योजना विद्यार्थियों को अपने कैरियर के
          मार्गों पर स्पष्टता प्राप्त करने, उन कदमों को समझने में मदद करती है जो
          उन्हें उठाने की आवश्यकता है, और उनकी निर्णय लेने की क्षमताओं में
          विश्वास पैदा करती है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इसके अलावा, नियोजन कौशल यह सुनिश्चित करके परामर्श अनुभव की समग्र
          प्रभावशीलता को बढ़ाता है कि प्रत्येक सत्र उद्देश्यपूर्ण है और
          वि़द्यार्थी की जरूरतों और लक्ष्यों के साथ संरेखित है। वे सलाहकारों को
          अपने दृष्टिकोण को तैयार करने, संभावित चुनौतियों का अनुमान लगाने और एक
          सक्रिय परामर्श वातावरण को बढ़ावा देते हुए आकस्मिक योजनाएँ बनाने में
          सक्षम बनाते हैं। एक स्पष्ट ढाँचा स्थापित करके, नियोजन कैरियर विकास
          यात्रा के दौरान विद्यार्थियों की भागीदारी और प्रेरणा को बनाए रखने में
          भी मदद करता है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          यह मूलभूत कौशल व्यक्तिगत सत्रों के लिए महत्वपूर्ण है और पूरी परामर्श
          प्रक्रिया के लिए महत्वपूर्ण है, जिसे हम अगले मॉड्यूल में आगे देखेंगे।
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
        </div>
      </div>
      <Footer pageNumber={17} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const Conclusion = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header title={"निष्कर्ष"} />
        <h1 className="text-base font-normal text-primary uppercase pt-8 pb-4 tracking-[1.5px]">
          5.7 निष्कर्ष
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
      <Footer pageNumber={18} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
