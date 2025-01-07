export function calculateMonthlySalaries(grossSalary) {
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  // Yıllık kümülatif matrah takibi için
  let yearlyIncomeBase = 0;

  return months.map((month, index) => {
    // SGK Kesintileri
    const socialSecurityEmployee = grossSalary * 0.14;
    const unemploymentInsurance = grossSalary * 0.01;
    
    // Gelir Vergisi Matrahı
    const monthlyIncomeBase = grossSalary - socialSecurityEmployee - unemploymentInsurance;
    yearlyIncomeBase += monthlyIncomeBase;
    
    // 2025 Gelir Vergisi Dilimleri (Örnek)
    let incomeTax = 0;
    if (yearlyIncomeBase <= 70000) {
      incomeTax = monthlyIncomeBase * 0.15;
    } else if (yearlyIncomeBase <= 150000) {
      incomeTax = monthlyIncomeBase * 0.20;
    } else if (yearlyIncomeBase <= 370000) {
      incomeTax = monthlyIncomeBase * 0.27;
    } else {
      incomeTax = monthlyIncomeBase * 0.35;
    }

    const stampTax = grossSalary * 0.00759;
    
    const netSalary = grossSalary - socialSecurityEmployee - unemploymentInsurance - incomeTax - stampTax;

    return {
      month,
      grossSalary,
      socialSecurityEmployee,
      unemploymentInsurance,
      incomeTax,
      stampTax,
      netSalary,
      taxRate: ((incomeTax / monthlyIncomeBase) * 100).toFixed(1)
    };
  });
}

export const formatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}); 