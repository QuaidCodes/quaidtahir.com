export default function Portfolio() {
  <div className="min-h-screen">
    <iframe
      src="/QuaidTahirResume.pdf"
      className="w-full h-[90vh] border shadow-lg rounded-xl"
    />
    <div className="flex">
      <button className="bg-blue-400"><a href="/QuaidTahirResume.pdf">Download PDF</a></button>
      <button className="bg-blue-400"><a href="/QuaidTahirResume.docx">Download docx</a></button>
    </div>
  </div>;
}
