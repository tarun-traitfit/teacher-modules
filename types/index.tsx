export type TableOfContents = {
  title: string;
  page: number;
  subsections?: TableOfContents[]; // Optional subsections
};

// Component Props Interface
export interface ContentPageProps {
  pageNumber: number;
  tableOfContents: TableOfContents[];
  contents: string;
  title: string;
  pageNo: string;
  projectName: string;
}
