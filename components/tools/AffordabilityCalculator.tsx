"use client";

import { useCallback, useEffect, useState } from "react";

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [monthlyDebt, setMonthlyDebt] = useState(500);
  const [downPayment, setDownPayment] = useState(50000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [maxHomePrice, setMaxHomePrice] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(0);

  const calculate = useCallback(() => {
    const monthlyIncome = annualIncome / 12;
    const maxMonthlyPayment = Math.max(0, monthlyIncome * 0.28 - monthlyDebt);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let price: number;
    if (monthlyRate === 0) {
      price = maxMonthlyPayment * numPayments + downPayment;
    } else {
      const loanAmount =
        (maxMonthlyPayment * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
        (monthlyRate * Math.pow(1 + monthlyRate, numPayments));
      price = loanAmount + downPayment;
    }

    setMaxHomePrice(Math.max(0, price));
    setMonthlyPayment(maxMonthlyPayment);
    setDownPaymentPercent(price > 0 ? (downPayment / price) * 100 : 0);
  }, [annualIncome, downPayment, interestRate, loanTerm, monthlyDebt]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">Affordability Calculator</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="annual-income" className="block text-sm font-medium text-slate-700 mb-2">
            Annual Gross Income ($)
          </label>
          <input
            id="annual-income"
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md"
            min={0}
            step={1000}
          />
        </div>

        <div>
          <label htmlFor="monthly-debt" className="block text-sm font-medium text-slate-700 mb-2">
            Monthly Debt Payments ($)
          </label>
          <input
            id="monthly-debt"
            type="number"
            value={monthlyDebt}
            onChange={(e) => setMonthlyDebt(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md"
            min={0}
            step={50}
          />
        </div>

        <div>
          <label htmlFor="aff-down-payment" className="block text-sm font-medium text-slate-700 mb-2">
            Down Payment ($)
          </label>
          <input
            id="aff-down-payment"
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md"
            min={0}
            step={1000}
          />
        </div>

        <div>
          <label htmlFor="aff-interest-rate" className="block text-sm font-medium text-slate-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            id="aff-interest-rate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md"
            min={0}
            max={20}
            step={0.1}
          />
        </div>

        <div>
          <label htmlFor="aff-loan-term" className="block text-sm font-medium text-slate-700 mb-2">
            Loan Term (years)
          </label>
          <select
            id="aff-loan-term"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md"
          >
            <option value={15}>15 years</option>
            <option value={20}>20 years</option>
            <option value={30}>30 years</option>
          </select>
        </div>

        <button
          type="button"
          onClick={calculate}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          Calculate Affordability
        </button>
      </div>

      {maxHomePrice > 0 ? (
        <div className="mt-8 p-6 bg-slate-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Affordability Summary</h3>
          <p className="text-sm text-slate-500 mb-4">Based on the 28% housing cost guideline</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-600">Maximum Home Price:</span>
              <span className="font-bold text-lg">${formatCurrency(maxHomePrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Estimated Monthly Payment:</span>
              <span className="font-semibold">${formatCurrency(monthlyPayment)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Down Payment:</span>
              <span className="font-semibold">
                ${formatCurrency(downPayment)} ({downPaymentPercent.toFixed(1)}%)
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
