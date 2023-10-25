document.addEventListener("DOMContentLoaded", function () {
    const urlInput = document.getElementById("urlInput");
    const getDataButton = document.getElementById("getDataButton");
    const dataTable = document.getElementById("dataTable");
    const dataBody = document.getElementById("dataBody");

    getDataButton.addEventListener("click", function () {
        const url = urlInput.value;

        // Gunakan Axios untuk mengambil data dari URL
        axios.get(url)
            .then(function (response) {
                const data = response.data;

                // Bersihkan tabel sebelum menambahkan data baru
                dataBody.innerHTML = "";

                // Loop melalui data dan tambahkan ke dalam tabel
                data.forEach(function (item) {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${item['Area Code']}</td>
                        <td>${item['Cogs']}</td>
                        <td>${item['DifferenceBetweenActualandTargetProfit']}</td>
                        <td>${item['Date']}</td>
                        <td>${item['Inventory Margin']}</td>
                        <td>${item['Margin']}</td>
                        <td>${item['Market_size']}</td>
                        <td>${item['Market']}</td>
                        <td>${item['Marketing']}</td>
                        <td>${item['Product_line']}</td>
                        <td>${item['Product_type']}</td>
                        <td>${item['Product']}</td>
                        <td>${item['Profit']}</td>
                        <td>${item['Sales']}</td>
                        <td>${item['State']}</td>
                        <td>${item['Target_cogs']}</td>
                        <td>${item['Target_margin']}</td>
                        <td>${item['Target_profit']}</td>
                        <td>${item['Target_sales']}</td>
                        <td>${item['Total_expenses']}</td>
                        <td>${item['Type']}</td>
                    `;
                    dataBody.appendChild(row);
                });

                // Tampilkan tabel
                dataTable.style.display = "table";
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    });
});
