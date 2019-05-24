// Design a cash register program. You will be given two decimal numbers. The first is the purchase price (PP) of the item.
// The second is the cash (CH) given by the customer. Your register currently has the following bills/coins  within it:
// 'PENNY': .01, 'NICKEL': .05, 'DIME': .10, 'QUARTER': .25, 'HALF DOLLAR': .50, 'ONE': 1.00, 'TWO': 2.00,
// 'FIVE': 5.00, 'TEN': 10.00, 'TWENTY': 20.00, 'FIFTY': 50.00, 'ONE HUNDRED': 100.00
// The aim is to calculate the change that has to be returned to the customer.
import Response from '../models/response';
import { CashMachineChallenge } from '../challenges/CashMachineChallenge';

export default ((req, res) => {

    let purchasePrice = req.body.purchasePrice;
    let cash = req.body.cash;

    let cashRegister = CashMachineChallenge(purchasePrice, cash)

    let challenge = new Response(cashRegister);

    res.status(200).send(challenge);
})