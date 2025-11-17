import Footer from "@/components/footer";
import Header from "@/components/header";
import { ContentPageProps } from "@/types";

const ContentPage: React.FC<ContentPageProps> = ({
  pageNumber,
  tableOfContents,
  contents,
  title,
  pageNo,
  projectName,
}) => {
  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen max-w-[794px]">
      <div className="px-10 pt-6">
        <Header title={contents} />
        <div className="pt-8">
          <div className="flex items-center gap-5 justify-between">
            <p className="text-gray text-xs font-normal uppercase tracking-[1.5px]">
              {title}
            </p>
            <p className="text-gray text-xs font-normal uppercase tracking-[1.5px]">
              {pageNo}
            </p>
          </div>
          <div className="pt-4 space-y-3">
            {tableOfContents.map((section, index) => (
              <div key={index}>
                <div className="flex items-center gap-5 justify-between">
                  <p className="font-normal text-primary text-sm tracking-[0.5px]">
                    {section.title}
                  </p>
                  <p className="font-normal text-purple-300 text-sm tracking-[1.5px]">
                    {section.page}
                  </p>
                </div>
                {section.subsections && (
                  <ul className="pt-3 ml-12 space-y-3">
                    {section.subsections.map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex items-center justify-between"
                      >
                        <p className="font-normal text-primary text-sm tracking-[0.5px]">
                          {sub.title}
                        </p>
                        <p className="font-normal text-purple-300 text-sm tracking-[1.5px]">
                          {sub.page}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer pageNumber={pageNumber} title={projectName} />
    </div>
  );
};

export default ContentPage;
