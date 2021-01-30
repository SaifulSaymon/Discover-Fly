// --Ticket--//
function ticketClassChange(ticket, isIncreseQuantity) {
    const ticketInput = document.getElementById(ticket + "-quantity");
    const ticketQuantity = parseInt(ticketInput.value);

    let ticketNewQunatity = ticketQuantity;
    if (isIncreseQuantity == true && ticketQuantity < 6) {
        ticketNewQunatity = ticketQuantity + 1;    // One passenger can booked maximum 6 tickets at a time [IRCTC]
    }
    if (isIncreseQuantity == false && ticketQuantity >= 1) {
        ticketNewQunatity = ticketQuantity - 1;
    }
    ticketInput.value = ticketNewQunatity;

    let ticketTotalPrice = ticketNewQunatity;
    if (ticket == "first") {
        ticketTotalPrice = ticketNewQunatity * 150; //-- per ticket price $150 --//
    }
    if (ticket == "economy") {
        ticketTotalPrice = ticketNewQunatity * 100; //-- per ticket price $100 --//
    }
    calculateTotal();
}

// ---Calculation---//

function calculateTotal() {
    const firstTicketQuantity = getInput("first");
    const economyTicketQuantity = getInput("economy");

    const subtotalPrice = firstTicketQuantity * 150 + economyTicketQuantity * 100;
    document.getElementById("subtotal-price").innerText = "$ " + subtotalPrice;

    const tax = subtotalPrice * 0.1;
    const taxAmount = Math.abs(tax);
    document.getElementById("tax-amount").innerText = "$ " + taxAmount;

    const grandTotal = subtotalPrice + taxAmount;
    document.getElementById("total-price").innerText = "$ " + grandTotal;
}

function getInput(ticketClass) {
    const ticketInput = document.getElementById(ticketClass + "-quantity");
    const ticketQuantity = parseInt(ticketInput.value);
    return ticketQuantity;
}