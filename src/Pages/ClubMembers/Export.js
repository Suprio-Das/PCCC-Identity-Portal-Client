import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (result, search) => {
    if (result.length === 0) return;

    // Format data
    const formattedData = result.map((member, index) => ({
        No: index + 1,
        Name: member?.Name || "",
        StudentID: member?.StudentId || "",
        ContactNo: member?.ContactNo !== "null" ? member?.ContactNo : "Not Found",
        Email: member?.Email !== "null" ? member?.Email : "Not Found"
    }));

    // Create worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Club Members");

    // Convert to binary buffer
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    // Save the file
    const fileData = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(fileData, `ClubMembers_${search}.xlsx`);
};