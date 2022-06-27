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
    console.log(this.name +' has ' + this.accountBalance + ' dollars in the bank')
  }
  transferMoney(amount, account){
    this.accountBalance -= amount
    account.accountBalance += amount
  }
}

const christian = new User('Christian', 'christian_ramirez@javascript.com')
const daniela = new User('Daniela', 'daniela_ramirez@javascript.com')
const ana = new User('Ana', 'ana_reyes@javascript.com')
christian.makeDeposit(1000)
christian.makeDeposit(1000)
christian.makeDeposit(1000)
christian.makeWithdrawal(50)
daniela.makeDeposit(200)
daniela.makeDeposit(200)
daniela.makeWithdrawal(100)
daniela.makeWithdrawal(10)
ana.makeDeposit(500)
ana.makeWithdrawal(100)
ana.makeWithdrawal(100)
ana.makeWithdrawal(100)
christian.transferMoney(100, daniela)
console.log(christian.displayBalance())
console.log(daniela.displayBalance())
console.log(ana.displayBalance())