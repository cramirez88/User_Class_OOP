class User {
  constructor(name, emailAddress){
    this.name = name,
    this.email = emailAddress,
    this.accountBalance = 0
  }
  makeDeposit(amount){
    this.accountBalance += amount
    return this
  }

  makeWithdrawal(amount){
    this.accountBalance -= amount
    return this
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
christian.makeDeposit(1000).makeDeposit(1000).makeDeposit(1000).makeWithdrawal(500)
daniela.makeDeposit(200).makeDeposit(200).makeWithdrawal(100).makeWithdrawal(10)
ana.makeDeposit(500).makeWithdrawal(10).makeWithdrawal(10).makeWithdrawal(10)
christian.transferMoney(100, daniela)
console.log(christian.displayBalance())
console.log(daniela.displayBalance())
console.log(ana.displayBalance())