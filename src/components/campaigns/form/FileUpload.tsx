import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

let uploadedFileName = "";

const FileUpload = ({ onFileSelect }: FileUploadProps) => (
  <div>
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Upload Contact List
      </span>
      <div className="mt-1 border-2 border-dashed border-slate-200 dark:border-dark-700 rounded-xl p-8 text-center hover:border-primary-400 transition-colors">
        <input 
          type="file" 
          className="hidden" 
          id="file-upload" 
          accept=".csv,.xlsx,.xls"
          onChange={(e) => {onFileSelect(e.target.files?.[0] || null); uploadedFileName = e.target.files?.[0].name || ""; console.log("FILE UPLOADED")}}
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="space-y-2">
            <div className="mx-auto w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center">
              <Upload className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="text-sm">
              <span className="text-primary-600 dark:text-primary-400 font-medium">Click to upload</span>
              <span className="text-slate-600 dark:text-slate-400"> or drag and drop</span>
            </div>
            <p className="text-xs text-slate-500">{uploadedFileName != "" ? "Uploaded File: " + uploadedFileName : "Optional: CSV or Excel file with contact information"}</p>
          </div>
        </label>
      </div>
    </label>
  </div>
);

export default FileUpload;