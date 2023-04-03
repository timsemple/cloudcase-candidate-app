import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [formattedTax, setFormattedTax] = useState("");
  const [tax, setTax] = useState("");
  const [superCon, setSuper] = useState("");
  const [pay, setPay] = useState("");

  const superContribution = 10.5;

  const taxBrackets = [
    {low:0,high:18200,per:0,over:0,plus:0},
    {low:18201,high:37000,per:.19,over:18200,plus:0},
    {low:37001,high:90000,per:.325,over:37000,plus:3572},
    {low:90001,high:180000,per:.37,over:90000,plus:20797},
    {low:180001,high:9999999999999999999999999999999999999,per:.45,over:180000,plus:54097}
  ]

  // check which tax bracket the salary sits within
  const calculateTax = (salary, tax) => {

    taxBrackets.forEach(function (value, i) {
      if (salary >= taxBrackets[i].low && salary <= taxBrackets[i].high) {
        // calculate tax
        tax = ((salary - taxBrackets[i].over) * taxBrackets[i].per) + taxBrackets[i].plus;
      }
    });

    setTax(tax);
    setFormattedTax(formatter.format(tax));

    calculatePay(salary, tax);

  }

  const calculateSuper = (salary) => {

    setSuper(formatter.format(((salary * superContribution) / 100)));

  }

  // calculate fortnightly take home pay
  const calculatePay = (salary, tax) => {

    setPay(formatter.format(((salary - tax) / 26)));

  }

  const handleSalary = (salary) => {

    setTax(tax);
    setSalary(salary);
    calculateTax(salary);
    calculateSuper(salary);

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // send to API
    alert("The data will be sent to the HR software's API");

  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  return (
    <div className="App">
      <div className={"container"}>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="nameInput">Full Name</label>
            <input type="text" className="form-control" id="nameInput" aria-describedby="emailHelp"
                   placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
              else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="salaryInput">Annual Base Salary</label>
            <input type="number" className="form-control" id="salaryInput" aria-describedby="salaryHelp"
                   placeholder="Your salary" value={salary} onChange={(e) => handleSalary(e.target.value)}/>
            <small id="salaryHelp" className="form-text text-muted">Numerals only - Gross salary (including tax)</small>
          </div>

          <div className="form-group">
            <label htmlFor="taxInput">Tax</label>
            <input disabled type="text" className="form-control" id="taxInput" aria-describedby="taxHelp"
                   placeholder="Your tax" value={formattedTax} onChange={(e) => setTax(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="superInput">Superannuation</label>
            <input disabled type="text" className="form-control" id="superInput" aria-describedby="superHelp"
                   placeholder="Your super" value={superCon} onChange={(e) => setSuper(e.target.value)}/>
            <small id="salaryHelp" className="form-text text-muted">The employers Superannuation contribution is based on the current compulsory amount of {superContribution}%</small>
          </div>

          <div className="form-group">
            <label htmlFor="payInput">Fortnightly Pay</label>
            <input disabled type="text" className="form-control" id="payInput" aria-describedby="payHelp"
                   placeholder="Your pay" value={pay} onChange={(e) => setSuper(e.target.value)}/>
            <small id="payHelp" className="form-text text-muted">This is the payment that will appear in your account after tax and other deductions</small>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default App;