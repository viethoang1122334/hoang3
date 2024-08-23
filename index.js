const express = require('express');
const XLSX = require('xlsx');
const path = require('path');
const cors = require('cors'); // Import cors
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Sử dụng cors middleware
app.use(express.json());

app.post('/api/save', (req, res) => {
  const { name, number1, number2 } = req.body;

  // Đọc file Excel có sẵn
  const filePath = path.join(__dirname, 'data.xlsx');
  let workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  // Ghi dữ liệu mới vào worksheet
  const newData = [[name, number1, number2]];
  XLSX.utils.sheet_add_aoa(worksheet, newData, { origin: -1 });

  // Lưu lại file Excel
  XLSX.writeFile(workbook, filePath);

  res.json({ message: 'Data saved successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
