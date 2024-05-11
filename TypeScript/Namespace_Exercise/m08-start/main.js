//add a reference statement that describes the relationship between the interfaces in module08_loans.ts 
//and module08_loan-programs.ts.
/// <reference path="module08_loans.ts" /> 
/*  TODO Create LoanPrograms namespace. */
var LoanPrograms;
(function (LoanPrograms) {
    /*  TODO Update the calculateInterestOnlyLoanPayment function. */
    //export + Loans.Loan (updated reference to the Loan interface so it includes the Loans namespace)
    function calculateInterestOnlyLoanPayment(loanTerms) {
        var payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    /*  TODO Update the calculateConventionalLoanPayment function. */
    function calculateConventionalLoanPayment(loanTerms) {
        var interest = calculateInterestRate(loanTerms.interestRate);
        var payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.numberOfMonths)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        var interest = interestRate / 1200;
        return interest;
    }
})(LoanPrograms || (LoanPrograms = {}));
/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */
/*  TODO Create a the Loans namespace. */
// namespace Loans {
//     //added export to be visible outside of the namespace
//     export interface Loan {
//         principle: number,
//         interestRate: number        //* Interest rate percentage (eg. 14 is 14%)
//     }
//     export interface ConventionalLoan extends Loan {
//         numberOfMonths: number      //* Total number of months
//     }
//  }
// /*  TODO Create LoanPrograms namespace. */
// namespace LoanPrograms {
// /*  TODO Update the calculateInterestOnlyLoanPayment function. */
// //export + Loans.Loan (updated reference to the Loan interface so it includes the Loans namespace)
// export function calculateInterestOnlyLoanPayment(loanTerms: Loans.Loan): string {
//     let payment: number;
//     payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
//     return 'The interest only loan payment is ' + payment.toFixed(2);
// }
// /*  TODO Update the calculateConventionalLoanPayment function. */  
// export function calculateConventionalLoanPayment(loanTerms: Loans.ConventionalLoan): string {
//     let interest: number = calculateInterestRate(loanTerms.interestRate);
//     let payment: number;
//     payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.numberOfMonths)));
//     return 'The conventional loan payment is ' + payment.toFixed(2);
// }
// function calculateInterestRate (interestRate: number): number {
//     let interest: number = interestRate / 1200;
//     return interest
// }
/*  TODO Add reference paths. */
/// <reference path="module08_loans.ts" />
/// <reference path="module08_loan-programs.ts" />
/*  TODO Update the function calls. */
var interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, numberOfMonths: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"