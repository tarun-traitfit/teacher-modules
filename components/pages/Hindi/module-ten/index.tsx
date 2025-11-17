import Header from "@/components/header";
import ContentPage from "../../contents-page";
import Cover from "../../cover";
import Footer from "@/components/footer";
import React from "react";
import Link from "next/link";
import { chapterTen, chapterTenData } from "@/utils/cover-Hindi";

const ModuleTen = () => {
  return (
    <>
      <Cover
        title={"मॉड्यूल 10"}
        characterTitle={"करियर काउंसलिंग में नैतिक दिशा-निर्देश"}
        className="max-w-[426px]"
      />
      <ContentPage
        pageNumber={1}
        contents={"कंटेन्ट"}
        title={"सूची "}
        pageNo={"पृष्ठ क्र."}
        projectName={"मिशन मार्गदर्शन"}
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
        <Header title={"परिचय"} className="min-w-fit" />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.1 परिचय
        </h1>

        <div>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            प्रशिक्षण कार्यक्रम के अंतिम मॉड्यूल में आपका स्वागत है: &nbsp;
            <span className="font-bold">
              करियर परामर्श में नैतिक दिशा-निर्देश
            </span>
            &nbsp; पाठ्यक्रम के इस चरण तक पहुँचने के लिए आपको बधाई हो।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            पिछले मॉड्यूल में, हमने मूल्यांकन साधन, संघर्ष समाधान और विद्याथियों
            को व्यक्तिगत मार्गदर्शन प्रदान करने के साथ करियर परामर्श के अलग-अलग
            पहलुओं को समाहित किया है । अब, हम अपना ध्यान एक महत्वपूर्ण तत्व पर
            केंद्रित करते हैं , जो परामर्श प्रक्रिया को आकार देता है, वह है,
            &nbsp;
            <span className="font-bold">‘नैतिकता ।’</span>
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            इस मॉड्यूल में, हम नैतिक सिद्धांतों पर गहराई से विचार करेंगे, जो
            प्रभावी और जिम्मेदार करियर परामर्श की नींव बनाते हैं । ध्यान इस बात
            पे देना होगा कि , परामर्श प्रक्रिया में नैतिकता कैसे महत्वपूर्ण
            भूमिका निभाती है।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            हम नैतिकता की मूल बातें और करियर परामर्श में उनके महत्व पर चर्चा
            करके शुरू करेंगे । इसके बाद, हम गोपनीयता, गैर-भेदभाव, हितों के टकराव
            और सांस्कृतिक संवेदनशीलता सहित आवश्यक नैतिक विचारों का पता लगाएंगे ।
            हम परामर्श सत्रों के दौरान स्थानांतरण (Transference) और
            प्रतिहस्तांतरण (Countertransference) के व्यावहारिक पहलुओं को भी
            समाहित करेंगे ।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            इसके अतिरिक्त, हम यौन अपराधों से बच्चों के संरक्षण अधिनियम की जांच
            करेंगे, करियर परामर्श के लिए इसकी प्रासंगिकता पर प्रकाश डालेंगे।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अंत में, मॉड्यूल विद्याथियों के साथ काम करते समय नैतिक मानकों का
            पालन करने में आपका मार्गदर्शन करने के लिए क्या करें और क्या न करें
            का एक समूह समझायेंगे ।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अंत में, मॉड्यूल विद्याथियों के साथ काम करते समय नैतिक मानकों का
            पालन करने में आपका मार्गदर्शन करने के लिए क्या करें और क्या न करें
            का एक समूह समझायेंगे ।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अंत में, मॉड्यूल विद्याथियों के साथ काम करते समय नैतिक मानकों का
            पालन करने में आपका मार्गदर्शन करने के लिए क्या करें और क्या न करें
            का एक समूह समझायेंगे ।
          </p>
        </div>
      </div>
      <Footer pageNumber={2} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const EthicsCareer = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"करियर परामर्श में नैतिकता (Ethics)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.2 करियर परामर्श में नैतिकता (Ethics)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          हाल के दशक में, भारत में करियर परामर्श की माँग में बहुत बढोतरी हुई है।
          हर साल अधिक से अधिक लोग अपनी आदर्श करियर (Ideal career) की तलाश में
          करियर परामर्श सत्रों का सहारा लेते हैं। करियर परामर्श प्रक्रिया को
          कुशल और प्रभावी बनाने के लिए विद्यार्थियों को सही दिशा में मार्गदर्शन
          करना जरूरी है, जो उनके लिए उपयोगी है ना कि किसी अन्य वजह से। यह समझना
          महत्वपूर्ण है कि करियर परामर्श सत्रों में योग्य और निष्पक्ष सलाह दी
          जानी चाहिए।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इसलिए, यह जरूरी हो जाता है कि परामर्शदाता व्यवसायिक ईमानदारी और
          नैतिकता को बनाए रखें।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          भारत में, विभिन्न व्यावसायिक संस्थाएँ है, जैसे राष्ट्रीय करियर सेवा
          (NCS), राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद (NCERT),
          अंतर्राष्ट्रीय करियर सलाहकार संघ (IACA), और करियर विकास संघ (CDAI) ये
          करियर परामर्श के नैतिक सिद्धांतों का मार्गदर्शन करते हैं। ये संस्थाएँ
          करियर परामर्शदाताओं के लिए दिशा-निर्देश और आचार संहिता (Code of
          conduct) प्रदान करते हैं, जो उनके अभ्यास में जरूरी नैतिक आदर्शों को
          निर्धारित करते हैं।
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
            ऊपर किए गए नैतिक विचार करियर परामर्शदाताओं को विद्यार्थियों को
            निष्पक्ष, प्रभावी और उच्च गुणवत्ता वाली सलाह देने में मदद करते हैं।
            परामर्शदाताओं को इन मानकों को अपने अभ्यास में बनाए रखना चाहिए ताकि
            विद्यार्थियों का विश्वास और विश्वसनियता हमेशा रह सके।
          </p>
        </div>
      </div>
      <Footer pageNumber={3} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const EthicalGuidelines = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर परामर्श में नैतिक दिशानिर्देशों (Ethical Guidelines) का पालन क्यों महत्वपूर्ण है?"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.3 करियर परामर्श में नैतिक दिशानिर्देशों (Ethical Guidelines) का
          पालन क्यों महत्वपूर्ण है?
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श में नैतिकता का महत्वपूर्ण स्थान है क्योंकि यह सुनिश्चित
          करती है कि परामर्शदाता विद्यार्थियों को विश्वसनीय और निष्पक्ष सलाह
          दें, व्यवसायिक ईमानदारी बनाए रखें और विद्यार्थियों को किसी भी प्रकार
          के नुकसान से बचाएँ।
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
            जैसा कि ऊपर चर्चा की गई नैतिकता का पालन करने से करियर परामर्शदाता
            व्यावसायिक मानकों को बनाए रखते हैं, विद्यार्थियों के साथ विश्वास और
            विश्वसनीयता का निर्माण करते हैं, और इस क्षेत्र के सकारात्मक विकास
            में योगदान करते हैं।
          </p>
        </div>
      </div>
      <Footer pageNumber={4} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const Confidentiality = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"गोपनीयता (Confidentiality) और निजता (Privacy)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.4 गोपनीयता (Confidentiality) और निजता (Privacy)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          करियर परामर्श में, गोपनीयता एक ऐसा वातावरण स्थापित करती है जहाँ
          वि़द्यार्थी आत्मविश्वास से कठिन विषयों पर चर्चा कर सकते हैं, यह जानते
          हुए कि परामर्शदाता को बताई गई जानकारी का दुरुपयोग नहीं किया जाएगा या
          परामर्श कक्ष के बाहर कहीं और नहीं दोहराया जाएगा। गोपनीयता करियर
          परामर्श को अन्य संबंधों से अलग बनाती है क्योंकि परामर्शदाता नैतिक और
          व्यावसायिक रूप से बंधे हुए होते हैं कि वे कोई भी बताई हुई जानकारी को
          निजी रखें। परामर्श सत्र शुरू करने से पहले परामर्शदाता को स्पष्ट रूप से
          विद्यार्थियों को समझाना चाहिए कि उनके और परामर्शदाता के बीच की बातचीत
          गोपनीय रहेगी, जब तक कि इसे कुछ विशेष परिस्थितियों में प्रकट करना
          बिल्कुल आवश्यक न हो।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          गोपनीयता और निजता बनाए रखने से कैरियर परामर्श सत्र अधिक प्रभावी होते
          हैं। आइए परामर्श प्रक्रिया में इसके विभिन्न उद्देश्यों को समझें।
        </p>
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.4.1 कैरियर परामर्श में गोपनीयता और निजता का उद्देश्य
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
            गोपनीयता और निजता करियर परामर्श के महत्वपूर्ण घटक हैं, जो
            परामर्शदाता और विद्यार्थियों के बीच एक सुरक्षित और सहायक वातावरण
            बनाते हैं। इससे विश्वास और संबंध मजबूत होते हैं, जिससे विद्यार्थियों
            को सर्वोत्तम करियर सलाह मिलती है। अब हम उन परिस्थितियों को समझेंगे
            जिनमें गोपनीयता को अन्य चिंताओं के साथ संतुलित करना पड़ता है।
          </p>
        </div>
      </div>
      <Footer pageNumber={5} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const ConfidentialityItsLimits = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"गोपनीयता (Confidentiality) और निजता (Privacy)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.4.2 गोपनीयता की सीमाएँ: निजता और सुरक्षा का संतुलन
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          हालांकि गोपनीयता और निजता करियर परामर्श के महत्वपूर्ण पहलू हैं, लेकिन
          कुछ सीमाएँ होती हैं जिन पर ध्यान देना आवश्यक है। कुछ परिस्थितियों में
          परामर्शदाता को विद्यार्थियों या अन्य लोगों की सुरक्षा के लिए गोपनीयता
          तोड़नी पड़ सकती है।
        </p>

        <p className="text-xs font-normal text-black-gray-100 pt-4">
          उदाहरण के लिए:
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
          {/* <p className="text-xs font-normal italic text-black-gray-100">
            <span className="font-bold"> Note:</span>&nbsp; Students may not
            fully understand the limitations of confidentiality and privacy in
            career counseling. The counselor must communicate these boundaries
            and limitations to the student and obtain the student&apos;s
            informed consent to participate in counseling.
          </p> */}
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            यह महत्वपूर्ण है कि परामर्शदाता विद्यार्थियों को गोपनीयता और निजता
            की सीमाओं के बारे में स्पष्ट रूप से जानकारी दें और उनकी सहमति
            प्राप्त करें। परामर्शदाता को यह सुनिश्चित करना चाहिए कि गोपनीयता
            केवल विद्यार्थियों की सुरक्षा और भलाई को प्राथमिकता देते हुए तोड़ी
            जाए।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अब हम दूसरे नैतिक विचार पर विस्तार से चर्चा करेंगे।
          </p>
        </div>
      </div>
      <Footer pageNumber={6} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const NonDiscrimination = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"भेदभाव न करना (Non-Discrimination)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.5 भेदभाव न करना (Non-Discrimination)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          कैरियर परामर्श में भेदभाव न करना एक महत्वपूर्ण भूमिका निभाता है। यह
          सुनिश्चित करता है कि सभी विद्यार्थियों को जातीय, सांस्कृतिक, और
          सामाजिक-आर्थिक पृष्ठभूमि या व्यक्तिगत विशेषताओं के बावजूद कैरियर
          परामर्श सेवाओं और अवसरों तक समान पहुँच प्राप्त हो।
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
            भेदभाव न करके, कैरियर परामर्शदाता यह सुनिश्चित कर सकते हैं कि सभी
            विद्यार्थियों को सही करियर मार्गदर्शन प्राप्त हो सके।
          </p>
        </div>

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          भेदभाव से बचने के लिए व्यावहारिक सुझाव:
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
            अब, अगले अनुभाग में हम तीसरे नैतिक विचार यानी हितों के टकराव को
            विस्तार से समझेंगे।
          </p>
        </div>
      </div>
      <Footer pageNumber={7} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const ConflictOfInterest = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"मतभेदों का टकराव (Conflict of Interest)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.6 मतभेदों का टकराव (Conflict of Interest)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          मतभेदों का टकराव परामर्शदाता की क्षमता को प्रभावित कर सकता है, जिससे
          वह अपने विद्यार्थियों को निष्पक्ष और वस्तुनिष्ठ परामर्श प्रदान करने
          में असमर्थ हो सकता है। यह तब उत्पन्न हो सकता है जब परामर्शदाता का किसी
          विशेष करियर या उद्योग में वित्तीय हित हो, या जब परामर्शदाता का किसी
          वि़द्यार्थी के साथ व्यक्तिगत संबंध हो।
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

        <div>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
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
            हितों का टकराव कैरियर परामर्श की प्रभावशीलता और नैतिकता को गंभीर रूप
            से प्रभावित कर सकता है। संभावित हितों के टकराव को पहचानकर और उन्हें
            संबोधित करके, परामर्शदाता विद्यार्थियों को निष्पक्ष और वस्तुनिष्ठ
            सलाह दे सकते हैं।
          </p>

          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अब, अगले अनुभाग में हम चौथे नैतिक विचार यानी सांस्कृतिक संवेदनशीलता
            को विस्तार से समझेंगे।
          </p>
        </div>
      </div>
      <Footer pageNumber={8} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const CulturalSensitivity = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"सांस्कृतिक संवेदनशीलता (Cultural Sensitivity)"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.7 सांस्कृतिक संवेदनशीलता (Cultural Sensitivity)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          सांस्कृतिक संवेदनशीलता कैरियर परामर्श में एक महत्वपूर्ण भूमिका निभाती
          है। इसमें विद्यार्थियों की विविध सांस्कृतिक पृष्ठभूमियों, विश्वासों और
          मूल्यों के प्रति जागरूक और सम्मानजनक होना शामिल है। इससे परामर्शदाता
          विद्यार्थियों के लिए उनके सांस्कृतिक संदर्भ में उपयुक्त करियर के अवसर
          और मार्ग खोजने में मदद कर सकते हैं।
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
            सांस्कृतिक संवेदनशीलता को बढ़ावा देकर, परामर्शदाता विद्यार्थियों को
            उनके मूल्यों और सांस्कृतिक पहचान के अनुरूप करियर के मार्ग खोजने में
            मदद कर सकते हैं।
          </p>
          <p className="text-xs font-normal text-black-gray-100 pt-4">
            अब, हम कैरियर परामर्श के दौरान विचार करने वाले व्यावहारिक पहलुओं की
            चर्चा करेंगे।
          </p>
        </div>
      </div>
      <Footer pageNumber={9} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const PracticalAspects = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर परामर्श के दौरान आनेवाले व्यावहारिक पहलू (Practical aspects)"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.8 करियर परामर्श के दौरान आनेवाले व्यावहारिक पहलू (Practical
          aspects)
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          कैरियर परामर्श के दौरान ध्यान देने वाले दो महत्वपूर्ण व्यावहारिक पहलू
          हैं ट्रांसफरेंस (Transference) और काउंटरट्रांसफरेंस (Counter
          transference)। ये अवधारणाएँ परामर्शदाता-वि़द्यार्थी संबंध और परामर्श
          प्रक्रिया की प्रभावशीलता को काफी हद तक प्रभावित कर सकती हैं।
        </p>

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          ट्रांसफरेंस की संकल्पना:{" "}
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          ट्रांसफरेंस तब होती है जब वि़द्यार्थी अनजाने में अपने पिछले संबंधों से
          उत्पन्न भावनाओं और दृष्टिकोणों को परामर्शदाता पर प्रक्षेपित करते हैं।
          उदाहरण के लिए, एक वि़द्यार्थी परामर्शदाता को माता-पिता की तरह देख सकता
          है, जिससे उनके बातचीत करने के तरीके पर प्रभाव पड़ता है।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          कैरियर परामर्श में ट्रांसफरेंस महत्वपूर्ण होती है क्योंकि यह परामर्श
          संबंध और वि़द्यार्थी की आत्म-अन्वेषण प्रक्रिया को प्रभावित करती है। जो
          परामर्शदाता ट्रांसफरेंस को पहचानते और संबोधित करते हैं, वे
          विद्यार्थियों की अव्यक्त भावनाओं को समझने में मदद कर सकते हैं और उनके
          कैरियर के निर्णयों में सकारात्मक बदलाव ला सकते हैं।
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
          केस स्टडी :
        </p>
        <p className="text-xs font-bold text-black-gray-100 pt-2">
          वरदा, जो 10वीं कक्षा की छात्रा है, अपने परामर्शदाता को माता-पिता के
          रूप में देख रही थी, क्योंकि उसके माता-पिता उससे अत्यधिक अपेक्षाएँ रखते
          थे। परामर्शदाता इस ट्रांसफरेंस को पहचानने में सक्षम था, जिससे उसने
          वरदा को उसके वास्तविक करियर रुचियों का पता लगाने में मदद की, बजाय इसके
          कि वह बाहरी अपेक्षाओं के अनुरूप काम करे।
        </p>
        <p className="text-xs font-bold italic text-black-gray-100 pt-2">
          काउंटर ट्रांसफरेंस की अवधारणा
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          काउंटर ट्रांसफरेंस तब होती है जब परामर्शदाता अपने व्यक्तिगत अनुभवों और
          भावनाओं को वि़द्यार्थी पर प्रक्षेपित करता है। ये प्रतिक्रियाएँ
          परामर्शदाता के पिछले अनुभवों, पूर्वाग्रहों, और अव्यक्त मुद्दों के कारण
          उत्पन्न हो सकती हैं, जो सत्र के दौरान उनकी धारणा और बातचीत को प्रभावित
          कर सकती हैं।
        </p>
      </div>
      <Footer pageNumber={10} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const Countertransference = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            " करियर परामर्श के दौरान आनेवाले व्यावहारिक पहलू (Practical aspects)"
          }
          className="min-w-fit"
        />

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          काउंटरट्रांसफरेंस का प्रभाव
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          यह परामर्शदाताओं को वि़द्यार्थी की आवश्यकताओं को व्यक्तिगत भावनाओं के
          माध्यम से देखने के लिए प्रेरित कर सकता है, जिससे परामर्श में
          निष्पक्षता और तटस्थता में कमी आ सकती है। इससे विद्यार्थियों को गलतफहमी
          हो सकती है और वे अपने परामर्शदाता पर भरोसा खो सकते हैं।
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
        <p className="text-xs font-bold text-black-gray-100 pt-4">केस स्टडी</p>

        <p className="text-xs font-normal text-black-gray-100 pt-2">
          आर्यन, जो 8वीं कक्षा का वि़द्यार्थी है, अपने संगीत के करियर के प्रति
          उत्साही था, लेकिन उसके माता-पिता एक स्थिर करियर की वकालत कर रहे थे।
          परामर्शदाता ने अपने बचपन के अनुभवों को आर्यन के परिदृश्य में देखना
          शुरू कर दिया, जिससे वह भावनात्मक रूप से प्रभावित हो गया और आर्यन का
          पक्ष लेने लगा। यह काउंटरट्रांसफरेंस का एक उदाहरण है, जहाँ परामर्शदाता
          ने अपने पिछले अनुभव के कारण निष्पक्षता खो दी।
        </p>
      </div>
      <Footer pageNumber={11} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const SexualOffenses = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"यौन अपराधों से बच्चों के संरक्षण का अधिनियम।"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.9 यौन अपराधों से बच्चों के संरक्षण का अधिनियम।
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          कैरियर परामर्श के दौरान, विशेष रूप से नाबालिगों के साथ काम करते समय,
          उनकी सुरक्षा और भलाई को प्राथमिकता देना महत्वपूर्ण है। परामर्शदाताओं
          के लिए नाबालिगों के साथ बातचीत करने से जुड़े कानूनी ढांचे को समझना
          अनिवार्य है। ऐसा ही एक महत्वपूर्ण कानूनी ढांचा है बच्चों को यौन
          अपराधों से संरक्षण अधिनियम (POCSO Act), जो बच्चों के खिलाफ यौन शोषण से
          सुरक्षा के लिए बनाया गया है।
        </p>

        <p className="text-xs font-bold text-black-gray-100 pt-4">
          POCSO अधिनियम क्या है?
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          POCSO अधिनियम, 2012 में लागू किया गया एक कानून है, जिसका उद्देश्य
          बच्चों को यौन शोषण और उत्पीड़न से बचाना है। इस अधिनियम के तहत 18 वर्ष
          से कम आयु के किसी भी व्यक्ति को बच्चा माना जाता है, और यह कानून बच्चों
          को सुरक्षित और संरक्षित वातावरण प्रदान करने के लिए बनाया गया है।
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
        </div>
      </div>
      <Footer pageNumber={12} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
export const POCSOAct = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={"यौन अपराधों से बच्चों के संरक्षण का अधिनियम।"}
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.9.1 केस स्टडी: POCSO अधिनियम को समझने के लिए एक केस स्टडी
        </h1>
        <p className="text-xs font-normal italic text-black-gray-100 pt-4">
          इस परिदृश्य में, A एक करियर परामर्शदाता है, और B एक छात्रा है। B करियर
          परामर्शदाता A के पास मेडिकल करियर के बारे में मार्गदर्शन लेने आई है।
          वे करियर के रास्ते पर चर्चा कर रहे थे, लेकिन इस दौरान परामर्शदाता ने
          देखा कि B असहज महसूस कर रही है, ध्यान केंद्रित नहीं कर पा रही है और
          बेचैन लग रही है। इसलिए, A ने उससे इसका कारण पूछा। A ने यह भी देखा कि B
          झिझक रही है और असहज महसूस कर रही है।
        </p>

        <p className="text-xs font-normal italic text-black-gray-100 pt-4">
          A को संदेह होने लगता है कि B किसी गंभीर समस्या से गुजर रही हो सकती है।
          A को याद आता है कि एक करियर परामर्शदाता के रूप में, उसे बच्चों की
          सुरक्षा और भलाई सुनिश्चित करने के लिए सख्त दिशानिर्देशों का पालन करना
          चाहिए। इसलिए, वह यह जानने के लिए उससे कुछ सवाल पूछने का फैसला करता है
          कि क्या उसे किसी मदद की ज़रूरत है।
        </p>

        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          A ने छात्रा से पूछा कि क्या कुछ ऐसा है जो उसे परेशान कर रहा है या
          जिससे वह असहज महसूस कर रही है। पहले तो B झिझकती है, लेकिन परामर्शदाता
          द्वारा उसे भरोसा दिलाने के बाद, वह अंततः खुलकर कहती है कि स्कूल के एक
          स्टाफ सदस्य ने उसके साथ यौन उत्पीड़न किया है।
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          अब परामर्शदाता समझ जाता है कि यह एक गंभीर मामला है और वह, एक करियर
          परामर्शदाता के रूप में, इस स्थिति को संभालने के लिए सही व्यक्ति नहीं
          है। इस बिंदु पर, उसे यह एहसास होता है कि यह समस्या उसकी विशेषज्ञता के
          बाहर है। हालांकि, वह यह भी जानता है कि POCSO अधिनियम के तहत उसकी यह
          जिम्मेदारी और कर्तव्य है कि वह इस मामले की सूचना सही अधिकारियों को दे।
        </p>
        <p className="text-xs font-normal italic text-black-gray-100 pt-2">
          छात्रा की बात सुनने के बाद, वह उसे आश्वासन देता है कि उसने यह बात
          बताकर सही कदम उठाया है। फिर वह उसे समझाता है कि यह एक गंभीर मामला है
          और कानून के तहत वह बाध्य है कि वह उसके हितों की रक्षा करे। इसके लिए,
          उसे इस मामले की सूचना सही अधिकारियों को देनी होगी ताकि उसे एक
          प्रशिक्षित परामर्शदाता से सही ध्यान मिल सके जो ऐसी परिस्थितियों को
          संभालने में माहिर हो और यह सुनिश्चित करे कि अपराधी के खिलाफ सख्त
          कानूनी कार्रवाई की जाए।
        </p>
        <p className="text-xs font-normal text-black-gray-100 pt-2">
          जैसा कि हमने इस परिदृश्य में देखा, करियर परामर्शदाता के रूप में जब ऐसी
          स्थिति का सामना हो, तो यह जानना आवश्यक है कि कानूनी दायित्व क्या हैं
          और साथ ही अपनी सीमाओं को भी पहचानना महत्वपूर्ण है। परामर्शदाता को यह
          समझना चाहिए कि उसे अपने आप इस समस्या का समाधान करने की कोशिश नहीं करनी
          चाहिए, बल्कि POCSO अधिनियम के तहत संबंधित अधिकारियों को सूचित करना
          अनिवार्य है, ताकि छात्रा का सर्वोत्तम हित सुनिश्चित हो सके।
        </p>
        <div>
          <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
            10.9.2 POCSO अधिनियम के अंतर्गत मामले की रिपोर्ट कहाँ करें? ?
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
        </div>
      </div>
      <Footer pageNumber={13} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};

export const DosAndDonts = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6 pb-6">
        <Header
          title={
            "करियर परामर्श के दौरान नैतिक दिशानिर्देशों का पालन करते समय क्या करें और क्या न करें।"
          }
          className="min-w-fit"
        />
        <h1 className="text-base font-normal text-primary uppercase pt-8 tracking-[1.5px]">
          10.10 करियर परामर्श के दौरान नैतिक दिशानिर्देशों का पालन करते समय क्या
          करें और क्या न करें।
        </h1>
        <p className="text-xs font-normal text-black-gray-100 pt-4">
          इस अनुभाग में करियर परामर्शदाता को करियर परामर्श के दौरान याद रखने
          योग्य क्या करें और क्या न करें के बारे में जानकारी दी जाएगी।
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
            उपरोक्त क्या करें और क्या न करें का पालन करना विद्यार्थियों के
            कल्याण के लिए करियर परामर्श में आवश्यक है। स्पष्ट दिशानिर्देशों का
            पालन करके, परामर्शदाता एक सुरक्षित, सहायक और निष्पक्ष वातावरण बना
            सकते हैं जो सूचित निर्णय लेने को बढ़ावा देता है और विद्यार्थियों के
            हितों की रक्षा करता है। इन नैतिक मानकों को बनाए रखने से विश्वसनीयता
            और विश्वास उत्पन्न होता है, और यह सुनिश्चित होता है कि परामर्शदाता
            विद्यार्थियों को जिम्मेदारीपूर्वक उनके भविष्य के करियर की ओर
            मार्गदर्शन करें।
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
          10.11 निष्कर्ष
        </h1>

        <div>
          {chapterTenData.conclusion.map((item, i) => (
            <p key={i} className="text-xs font-normal text-black-gray-100 pt-4">
              {item}
            </p>
          ))}
        </div>
      </div>
      <Footer pageNumber={15} title={"मिशन मार्गदर्शन"} />
    </div>
  );
};
