function buyCoins(packName) {
    let userId = prompt(packName + " ለመግዛት እባክዎን የ eFootball User ID ያስገቡ:");
    if (userId) {
        alert("እናመሰግናለን! ለ ID: " + userId + " የሚሆን ትዕዛዝዎ ተመዝግቧል። እባክዎን ክፍያውን በ Telebirr ያጠናቅቁ።");
    }
}

function buyAccount(accountName) {
    alert(accountName + " ለመግዛት የቴሌግራም አድራሻችንን ወይም ስልክ ቁጥራችንን በመጠቀም ያግኙን።");
}
