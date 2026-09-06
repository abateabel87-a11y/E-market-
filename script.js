// የ Telegram Bot Token እና Chat ID እዚህ ጋር ያስገቡ
const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';

function buyCoins(packName, price) {
    let userId = prompt(packName + " ለመግዛት እባክዎን የ eFootball User ID ወይም Konami ID ያስገቡ:");
    if (!userId) return;

    let phoneNumber = prompt("ክፍያውን የፈጸሙበትን ወይም የሚያረጋግጡበትን የ Telebirr ስልክ ቁጥር ያስገቡ:");
    if (!phoneNumber) return;

    // ወደ Telegram የሚላክ መረጃ
    let message = `🛒 **አዲስ የ Coins ትዕዛዝ!**\n\n` +
                  `📦 **የጥቅል አይነት:** ${packName}\n` +
                  `💵 **ዋጋ:** ${price}\n` +
                  `🎮 **eFootball ID:** ${userId}\n` +
                  `📱 **Telebirr ስልክ:** ${phoneNumber}`;

    // መረጃውን ወደ Telegram API መላክ
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("ትዕዛዝዎ በተሳካ ሁኔታ ተልኳል! እባክዎን በ Telebirr ክፍያውን ይፈጽሙ። በጥቂት ደቂቃዎች ውስጥ ገቢ ይደረግልዎታል::");
        } else {
            alert("ችግር አጋጥሟል። እባክዎን ድጋሚ ይሞክሩ ወይም በቴሌግራም ያግኙን።");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("ትዕዛዙን መላክ አልተቻለም። የበይነመረብ ግንኙነትዎን ያረጋግጡ።");
    });
}
