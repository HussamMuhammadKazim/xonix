"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

export default function XlsToJsonClient() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<Array<Record<string, string | number>>>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    setLoading(true);
    setError(null);

    try {
      if (!uploadedFile.name.toLowerCase().endsWith(".xls") && !uploadedFile.name.toLowerCase().endsWith(".xlsx")) {
        throw new Error("Please upload a valid Excel file (.xls or .xlsx)");
      }

      setFile(uploadedFile);

      const fileData = await uploadedFile.arrayBuffer();
      const workbook = XLSX.read(fileData, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (jsonData.length === 0) {
        throw new Error("The Excel file appears to be empty");
      }

      const fileHeaders = jsonData[0] as string[];
      setHeaders(fileHeaders);

      const rows = jsonData.slice(1).map((row: unknown) => {
        const rowArray = row as (string | number | null)[];
        const rowObject: Record<string, string | number> = {};
        fileHeaders.forEach((header, colIndex) => {
          rowObject[header] = rowArray[colIndex] || "";
        });
        return rowObject;
      });

      setData(rows);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while processing the file");
    } finally {
      setLoading(false);
    }
  };

  const downloadJSON = () => {
    if (data.length === 0) return;
    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${file?.name.split(".")[0] || "converted"}.json`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearFile = () => {
    setFile(null);
    setData([]);
    setHeaders([]);
    setError(null);
  };

  return (
    <div className="card text-center">
      {!file ? (
        <div className="space-y-6">
          <div className="w-20 h-20 mx-auto bg-primary rounded-lg flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Upload Excel File</h3>
            <p className="text-muted-foreground mb-6">Select your .xls or .xlsx file to convert to JSON format</p>
          </div>

          <label className="cursor-pointer inline-block">
            <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} className="hidden" disabled={loading} />
            <div className="btn">{loading ? "Converting..." : "Choose Excel File"}</div>
          </label>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="w-20 h-20 mx-auto bg-green-500 rounded-lg flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">File Ready for Conversion!</h3>
            <p className="text-muted-foreground mb-2">{file.name}</p>
            <p className="text-sm text-muted-foreground mb-6">Size: {(file.size / 1024).toFixed(1)} KB • {data.length} rows • {headers.length} columns</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={downloadJSON} className="btn">Download JSON File</button>
            <button onClick={clearFile} className="btn-secondary">Convert Another File</button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
}


