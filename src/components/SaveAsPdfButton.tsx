import { FileDown } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface SaveAsPdfButtonProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

const SaveAsPdfButton: React.FC<SaveAsPdfButtonProps> = ({ targetRef }) => {
  const handleSaveAsPdf = () => {
    if (!targetRef.current) return;

    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(targetRef.current).save();
  };

  return (
    <button
      onClick={handleSaveAsPdf}
      className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors mr-2"
    >
      <FileDown className="h-4 w-4" />
      Save as PDF
    </button>
  );
};

export default SaveAsPdfButton; 