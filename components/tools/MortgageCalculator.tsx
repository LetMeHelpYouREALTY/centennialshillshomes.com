"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { agentInfo } from "@/lib/site-config";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
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
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let payment = 0;
    if (monthlyRate === 0) {
      payment = principal / numPayments;
    } else {
      payment =
        (principal * (monthlyRate * (1 + monthlyRate) ** numPayments)) /
        ((1 + monthlyRate) ** numPayments - 1);
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
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Mortgage Calculator</h2>
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Home Price ($)</span>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-2"
            min={0}
            step={1000}
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
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <p className="text-sm text-slate-600">Monthly Payment</p>
          <p className="text-2xl font-bold text-blue-700">{formatCurrency(monthlyPayment)}</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-center">
          <p className="text-sm text-slate-600">Total Interest</p>
          <p className="text-2xl font-bold text-slate-800">{formatCurrency(totalInterest)}</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-center">
          <p className="text-sm text-slate-600">Total Payment</p>
          <p className="text-2xl font-bold text-slate-800">{formatCurrency(totalPayment)}</p>
        </div>
      </div>
      <p className="mt-6 text-sm text-slate-500">
        Estimates only — excludes taxes, insurance, and HOA.{" "}
        <Link href={agentInfo.phoneTel} className="text-blue-600 hover:underline">
          Call Dr. Jan Duffy
        </Link>{" "}
        for lender referrals.
      </p>
    </div>
  );
}
