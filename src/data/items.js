const isTestEnv = typeof window !== 'undefined' && window.location?.href?.includes('wtr-session-id=');

// fallback path served by middleware during tests
const testPath = (filename) => `/imgs/${filename}`;

// fallback mock image if needed (optional)
const fallback = '/imgs/mock.jpg';

export default [
  {
    id: 1,
    name: 'Education',
    price: 10.99,
    LoanType: 'Education Loan',
    imgUrl: isTestEnv ? testPath('Education-Loan.jpg') : new URL('../imgs/Education-Loan.jpg', import.meta.url).href,
  },
  {
    id: 2,
    name: 'Student Products',
    price: 1199,
    LoanType: 'Student Loan',
    imgUrl: isTestEnv ? testPath('computer.jpg') : new URL('../imgs/computer.jpg', import.meta.url).href,
  },
  {
    id: 3,
    name: 'Pay Bills',
    price: 1.05,
    LoanType: 'Utility',
    imgUrl: isTestEnv ? testPath('bills.jpg') : new URL('../imgs/bills.jpg', import.meta.url).href,
  },
  {
    id: 4,
    name: 'Car Loan',
    price: 14000,
    LoanType: 'Vehicle',
    imgUrl: isTestEnv ? testPath('car.jpg') : new URL('../imgs/car.jpg', import.meta.url).href,
  },
  {
    id: 5,
    name: 'Home Loan',
    price: 10.99,
    LoanType: 'Mortgage',
    imgUrl: isTestEnv ? testPath('home.jpg') : new URL('../imgs/home.jpg', import.meta.url).href,
  },
  {
    id: 6,
    name: 'OverDraft Account',
    price: 1199,
    imgUrl: isTestEnv ? testPath('Overdraft-account.jpg') : new URL('../imgs/Overdraft-account.jpg', import.meta.url).href,
  },
  {
    id: 7,
    name: 'Savings Account',
    price: 1.05,
    imgUrl: isTestEnv ? testPath('savings.jpg') : new URL('../imgs/savings.jpg', import.meta.url).href,
  },
  {
    id: 8,
    name: 'Current Account',
    price: 14000,
    imgUrl: isTestEnv ? testPath('currentAccount.jpg') : new URL('../imgs/currentAccount.jpg', import.meta.url).href,
  },
];
