const deluxRate = 2000;
const suiteRate = 3000;
const acRate = 500;
const lockerRate = 200;
const extraPersonCharge = 1000;

function calculateCost() {
    const name = document.getElementById('name').value;
    const checkin = document.getElementById('checkin').value;
    const totalDays = parseInt(document.getElementById('totalDays').value);
    const totalPersons = parseInt(document.getElementById('totalPersons').value);
    const advanceAmount = parseFloat(document.getElementById('advanceAmount').value);

    if (!name || !checkin || !totalDays || !totalPersons || isNaN(advanceAmount)) {
        alert('Please fill in all required fields.');
        return;
    }

    const roomType = document.getElementById('roomType').value;
    const ac = document.getElementById('ac').checked;
    const locker = document.getElementById('locker').checked;

    let roomRate = roomType === 'suite' ? suiteRate : deluxRate;
    let amenitiesCost = 0;

    if (ac) {
        amenitiesCost += acRate;
    }

    if (locker) {
        amenitiesCost += lockerRate;
    }

    let totalRoomCost = roomRate * totalDays;
    let totalAmenitiesCost = amenitiesCost * totalDays;
    let totalCost = totalRoomCost + totalAmenitiesCost;

    if (totalPersons > 2) {
        totalCost += (totalPersons - 2) * extraPersonCharge * totalDays;
    }

    let balance = totalCost - advanceAmount;

    document.getElementById('totalCost').innerText = totalCost;
    document.getElementById('balance').innerText = balance;
}
