class User {
  constructor(name, emailAddress){
    this.name = name,
    this.email = emailAddress,
    this.accountBalance = 0
  }
  makeDeposit(amount){
    this.accountBalance += amount
  }

  makeWithdrawal(amount){
    this.accountBalance -= amount
  }

  displayBalance(){
    console.log(this.name + this.accountBalance)
  }
}

const christian = new User('Christian', 'christian_ramirez@javascript.com')
christian.makeDeposit(1000)
christian.makeWithdrawal(50)
console.log(christian.accountBalance)