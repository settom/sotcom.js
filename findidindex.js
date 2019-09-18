console.clear()
console.log(`Finding ids, please wait.`)
const { Launcher } = require('epicgames-client');
const config = require("././config.json");

let launcher = new Launcher({
    email: config.email, // Remember to add your bot account email in here or it won't work!
    password: config.password,  // Remember to add your bot account password in here or it won't work!
    defaultPartyconfig: {
      joinConfirmation: config.joinConfirmation,
      joinability: config.joinability, // Opens the party and allows it to be joined
      maxSize: config.maxsize,
      subType: config.SubType,
      type: config.type,
      inviteTTL: config.ttl,
      chatEnabled: config.chatEnabled,
  }
});

(async () => {

  
  if(!await launcher.init() || !await launcher.login()) {
    throw new Error('Error while initialize or login process.');
  }

  const playerName = config.findid;
  const account = await launcher.getProfile(playerName);
  if(!account) throw new Error(`Player ${playerName} not found!`);
  console.clear()
  console.log(``)
  console.log(``)
  console.log(``)
  console.log(``)
  console.log(``)
  console.log(``)
  console.log(`                                          [Getting ID! of ${account.name} !]                                         `);
  console.log(`                                                                                                         `);
  console.log(`                                                                                                         `);
  console.log(`                                     [${account.name}'s id: ${account.id}]                            `);
  // "Kysune's id: 9a1d43b1d826420e9fa393a79b74b2ff"

})();

(async () => {

  if(!await launcher.init() || !await launcher.login()) {
    throw new Error('Error while initialize or login process.');
  }
	
  const friends = await launcher.getFriends();

  launcher.communicator.on('friend:message', async (friendMessage) => {
    const friend = friends.find(friend => friend.id === friendMessage.friend.id);
    console.log(friend.name + ': ' + friendMessage.message);
  });

})();
