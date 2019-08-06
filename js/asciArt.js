const printAsciArt = () => {
  console.log("BUILD AT LE WAGON BERLIN!");
  console.log("We loved the bootcamp, if you want to start coding, check their website:");
  console.log("https://www.lewagon.com/berlin");
  console.log((getAsciArtArr()).join("\n"));
};

const getAsciArtArr = () => {
  return [
    "MMMMMMMMMMMMMMMMMMMWNX0OkxxdddddddxkkO0XNWMMMMMMMMMMMMMMMMMM",
    "MMMMMMMMMMMMMMWWX0kdlc:::;:::;;;:::::::cldk0XWMMMMMMMMMMMMMM",
    "MMMMMMMMMMMMWKkdl:;::::::::;;;;;;:::::::::::ldOXWMMMMMMMMMMM",
    "MMMMMMMMMWXOdc:::;::::::;::::;;;::::::;::::::;:cd0NWMMMMMMMM",
    "MMMMMMMMNOo:;:::::::::::::::::::::::::::::::::::::oONMMMMMMM",
    "MMMMMMN0o::;:::::::::::::::::::::::::::::::::::::;::dKWMMMMM",
    "MMMMWXxc:::::;;::::::::::::::::::::::::::::::::::::;:ckNMMMM",
    "MMMWXd:;:::::;;::::::::::;:::::::::::;::::;::::::::;::cxXMMM",
    "MMWXd:::::::::;;;;::::::::cccccccccccc::::;;::::;::;::::dXMM",
    "MMXx:;::;::;:codxxkOOO000KKKKXKXXKKKKKK00Okdl::::::::::::xNM",
    "MWOc:::;:::;:kNNKOOOO0XX0OOOOKNNKOOOO0X0OOOO0kl:::;::::::l0W",
    "MXo::::::;:;cOWNx:::;cO0l;;::dKKd:::;lko;:::lO0o::::::::::dN",
    "W0c:::;;:::;cOWNx:;;;cO0l;;;:dKKd:;;;lko;;;;;ck0l::;::::::l0",
    "Wk::::;::;:;cOWW0kxxxkKXOxxxx0XX0xxxxOKOxxxxkk0Nx::;::::::cO",
    "Wk::::::::;;cx00000000000000000KKKK00KKKKK00KNWWKl;::;::::ck",
    "Wk::::;;:::;cONWWWWWWNWWWWWWWWWWWWWWWWWWWWNX0O0N0l;::;::::cO",
    "W0c;::;;::;;cOWMMWNXXXXNWMMMMMMMMMMMMWXXXXXNWN00kc::;:;;::l0",
    "MXo:::;;;:::l0WMWK00kk00KWMMMMWMMMMMNK00kk00KWNXKd:;::::::dX",
    "MWkc::::;;::cdxxdkKkcckKkdxxxxxxxxxxdkKkccOKxdxxdl::::;::c0W",
    "MMXd::::;::::;;;;cxOOOOxc;;;;;;;:;;;;cxOOOOd:;:;;::;;::::xNM",
    "MMWKo::::::;:::::::cllc:::::::::::::;;:clc:::::::;:::;::dXMM",
    "MMMWKo::::;::;:::::;;::::::::::::::::::;;;;::::::::;:::dXWMM",
    "MMMMWXxc:::;;:::::::;::::::::::::::::::;;;:::::;;::::ckNMMMM",
    "MMMMMMNOo:::;::;::::;;::::::::::;:::;;;;;:::::::;:::d0WMMMMM",
    "MMMMMMMWXkl:::;:::::::::::::::::::::::::::::::;:::oONMMMMMMM",
    "MMMMMMMMMWXOoc:;:::::::;:::::::::::::::::::::;:cd0NWMMMMMMMM",
    "MMMMMMMMMMMWNKkoc:;:::::::::::::::::::::::::ldkKWMMMMMMMMMMM",
    "MMMMMMMMMMMMMMWNKOxolc:::;;:::;::::::::cldk0XWMMMMMMMMMMMMMM",
    "MMMMMMMMMMMMMMMMMMWWNK0OkxxdddddddxxkO0XNWMMMMMMMMMMMMMMMMMM",
    "MMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMM"
  ]
};

printAsciArt();
