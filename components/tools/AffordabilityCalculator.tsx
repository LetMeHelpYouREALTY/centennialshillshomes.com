"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { agentInfo } from "@/lib/site-config";

function formatCurrency(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [monthlyDebt, setMonthlyDebt] = useState(500);
  const [downPayment, setDownPayment] = useState(50000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [maxHomePrice, setMaxHomePrice] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculate = useCallback(() => {
    const monthlyIncome = annualIncome / 12;
    const maxMonthlyPayment = Math.max(0, monthlyIncome * 0.28 - monthlyDebt);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let price = 0;
    if (monthlyRate === 0) {
      price = maxMonthlyPayment * numPayments + downPayment;
    } else {
      const loanAmount =
        (maxMonthlyPayment * ((1 + monthlyRate) ** numPayments - 1)) /
        (monthlyRate * (1 + monthlyRate) ** numPayments);
      price = loanAmount + downPayment;
    }

    setMaxHomePrice(price);
    setMonthlyPayment(maxMonthlyPayment);
  }, [annualIncome, downPayment, interestRate, loanTerm, monthlyDebt]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Affordability Calculator</h2>
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Annual Income ($)</span>
          <input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2"
            min={0}
            step={1000}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Monthly Debt Payments ($)</span>
          <input
            type="number"
            value={monthlyDebt}
            onChange={(e) => setMonthlyDebt(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2"
            min={0}
            step={100}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Down Payment ($)</span>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2"
            min={0}
            step={1000}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Interest Rate (%)</span>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2"
            min={0}
            step={0.1}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Loan Term (years)</span>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2"
            min={1}
            max={40}
          />
        </label>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <p className="text-sm text-slate-600">Estimated Max Home Price</p>
          <p className="text-2xl font-bold text-blue-700">{formatCurrency(maxHomePrice)}</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-center">
          <p className="text-sm text-slate-600">Max Monthly Payment (28% rule)</p>
          <p className="text-2xl font-bold text-slate-800">{formatCurrency(monthlyPayment)}</p>
        </div>
      </div>
      <p className="mt-6 text-sm text-slate-500">
        Uses the 28% housing-to-income guideline.{" "}
        <Link href="/mls-search" className="text-blue-600 hover:underline">
          Search MLS listings
        </Link>{" "}
        or{" "}
        <Link href={agentInfo.phoneTel} className="text-blue-600 hover:underline">
          call Dr. Jan Duffy
        </Link>
        .
      </p>
    </div>
  );
}
