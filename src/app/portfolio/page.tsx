'use client';

import PdfViewer from "@/components/PdfViewer";

export default function Portfolio() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Portfolio PDF</h1>
      <PdfViewer fileUrl="/QuaidTahirResume.pdf" />
    </div>
  );
}
