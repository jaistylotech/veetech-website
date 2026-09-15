import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ url }: { url: string }) {
  return (
    <Document 
      file={url} 
      className="flex items-center justify-center"
      loading={<div className="animate-pulse flex space-x-4"><div className="h-4 w-48 bg-slate-300 rounded"></div></div>}
    >
      <Page 
        pageNumber={1} 
        renderTextLayer={false} 
        renderAnnotationLayer={false} 
        className="max-w-full"
        {...(typeof window !== 'undefined' && window.innerWidth < 768 ? { width: window.innerWidth - 64 } : {})}
      />
    </Document>
  );
}
