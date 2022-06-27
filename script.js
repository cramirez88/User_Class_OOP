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
}

const christian = new User('Christian', 'christian_ramirez@javascript.com')
const daniela = new User('Daniela', 'daniela_ramirez@javascript.com')
const ana = new User('Ana', 'ana_reyes@javascript.com')
christian.makeDeposit(1000)
christian.makeWithdrawal(50)
console.log(daniela.accountBalance)
console.log(christian.displayBalance())