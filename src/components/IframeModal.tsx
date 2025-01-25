import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface IframeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IframeModal({ isOpen, onClose }: IframeModalProps) {
  const [showChat, setShowChat] = useState(false);

  const handleFileSelect = () => {
    setShowChat(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 rounded-xl w-full max-w-3xl overflow-hidden relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {showChat ? (
            <div className="w-full h-[600px]">
              <iframe
                src="https://app.vectorshift.ai/chatbots/deployed/6794baa98edc24f3383fce8a"
                className="w-full h-full"
                frameBorder="0"
                title="AI Chat"
              />
            </div>
          ) : (
            <div className="w-full text-center p-6">
              <div className="max-w-xl mx-auto">
                <label
                  htmlFor="pdf-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-700 border-dashed rounded-xl cursor-pointer bg-gray-800/50 hover:bg-gray-800 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="mb-2 text-xl text-gray-300">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">PDF (MAX. 10MB)</p>
                  </div>
                  <input
                    id="pdf-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileSelect}
                  />
                </label>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}