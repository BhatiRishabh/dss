export default function Acc() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-[90vh] shadow-lg border border-gray-300 rounded-lg overflow-hidden">
          <iframe
            src="/acc.pdf"
            className="w-full h-full"
            title="PDF Viewer"
          />
        </div>
      </div>
    );
  }
  