import '@react-pdf-viewer/core/lib/styles/index.css';
import { Viewer } from '@react-pdf-viewer/core';

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Resume</h1>
      <div className="max-w-4xl w-full shadow-lg rounded-lg overflow-hidden">
        <Viewer fileUrl="Olivia Tseng_250123.pdf" />
      </div>
    </div>
  );
}

export default Resume;