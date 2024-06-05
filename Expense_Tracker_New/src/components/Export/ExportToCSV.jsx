import styles from "./ExportToCSV.module.css";

export default function ExTrExportToCSV({ expenseList }) {
  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      expenseList
        .map((e) => `${e.title},${e.price},${e.category},${e.date}`)
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "expenses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={styles.exportToCSV} onClick={handleExport}>
      Export to CSV
    </button>
  );
}
