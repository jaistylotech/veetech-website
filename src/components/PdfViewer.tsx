import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ url }: { url: string }) {
  const [calcHeight, setCalcHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateSize = () => {
      // Scale height to fit within modal content height (viewport minus modal header & padding)
      const maxH = Math.min(window.innerHeight - 180, 720);
      setCalcHeight(maxH > 300 ? maxH : 300);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Document 
      file={url} 
      className="flex items-center justify-center max-w-full max-h-full"
      loading={<div className="animate-pulse flex space-x-4"><div className="h-4 w-48 bg-slate-300 rounded"></div></div>}
    >
      <Page 
        pageNumber={1} 
        renderTextLayer={false} 
        renderAnnotationLayer={false} 
        devicePixelRatio={2.5}
        {...(calcHeight ? { height: calcHeight } : {})}
        className="max-w-full shadow-lg rounded-lg overflow-hidden object-contain"
      />
    </Document>
  );
}
