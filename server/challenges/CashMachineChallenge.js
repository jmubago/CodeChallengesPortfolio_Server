export function CashMachineChallenge(PP, CH) {
    let billAndCoins = {
        'ONE HUNDRED': 100.00,
        'FIFTY': 50.00,
        'TWENTY': 20.00,
        'TEN': 10.00,
        'FIVE': 5.00,
        'TWO': 2.00,
        'ONE': 1.00,
        'HALF DOLLAR': 0.50,
        'QUARTER': 0.25,
        'DIME': 0.10,
        'NICKEL': 0.05,
        'PENNY': 0.01
    }

    let change = [];
    let i;

    if (PP > CH) {
        return 'Purchase price is higher than cash';
    }
    if (PP == CH) {
        return 'No change needed';
    }
    if (PP < CH) {
        let takeAway = CH - PP;
        for (i in billAndCoins) {
            while (takeAway >= billAndCoins[i]) {
                change.push(i);
                takeAway = takeAway - billAndCoins[i];
            }
        }
    }
    return change;
}