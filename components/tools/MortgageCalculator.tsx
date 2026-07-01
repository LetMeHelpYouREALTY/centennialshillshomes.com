"use client";

import { useCallback, useEffect, useState } from "react";

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculate = useCallback(() => {
    const principal = homePrice - downPayment;
    if (principal <= 0) {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalPayment(0);
      return;
    }

    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let payment: number;
    if (monthlyRate === 0) {
      payment = principal / numPayments;
    } else {
      payment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    const total = payment * numPayments;
    setMonthlyPayment(payment);
    setTotalPayment(total);
    setTotalInterest(total - principal);
  }, [downPayment, homePrice, interestRate, loanTerm]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">Mortgage Calculator</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="home-price" className="block text-sm font-medium text-slate-700 mb-2">
            Home Price ($)
          </label>
          <input
            id="home-price"
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md"
            min={0}
            step={1000}
          />
        </div>

        <div>
          <label htmlFor="down-payment" className="block text-sm font-medium text-slate-700 mb-2">
            Down Payment ($)
          </label>
          <input
            id="down-payment"
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-md"
            min={0}
            step={1000}
          />
        </div>

        <div>
          <label htmlFor="interest-rate" className="block text-sm font-medium text-slate-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            id="interest-rate"
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
          <label htmlFor="loan-term" className="block text-sm font-medium text-slate-700 mb-2">
            Loan Term (years)
          </label>
          <select
            id="loan-term"
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
          Calculate
        </button>
      </div>

      {monthlyPayment > 0 ? (
        <div className="mt-8 p-6 bg-slate-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Payment Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-600">Monthly Payment:</span>
              <span className="font-bold text-lg">${formatCurrency(monthlyPayment)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Total Interest:</span>
              <span className="font-semibold">${formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Total Payment:</span>
              <span className="font-semibold">${formatCurrency(totalPayment)}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
