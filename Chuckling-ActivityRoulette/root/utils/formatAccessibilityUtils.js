function formatAccessibility(accessibility) {
    //Formata o número decimal para porcentagem
    const percentValue = (accessibility * 100).toFixed(2);

    const formattedString = `${percentValue}%`;

    return formattedString;
}




module.exports = {formatAccessibility};