'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  fileUrl: string;
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="flex flex-col items-center bg-gray-50 p-4 rounded shadow-lg max-w-4xl mx-auto">
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading PDF...</div>}
        className="react-pdf__Document"
      >
        <Page
          pageNumber={pageNumber}
          className="react-pdf__Page"
          width={600} // control width here
          renderAnnotationLayer={false} // disables default highlights so you can style overlay better
          renderTextLayer={true}
        />
      </Document>

      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>

        <p className="text-gray-700">
          Page {pageNumber} of {numPages}
        </p>

        <button
          onClick={() => setPageNumber((prev) => (numPages ? Math.min(prev + 1, numPages) : prev))}
          disabled={numPages !== null ? pageNumber >= numPages : true}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
