CardshifterApp.controller("LobbyController", function($scope, $timeout) {
    var CHAT_FEED_LIMIT = 10;
    var ENTER_KEY = 13;

    $scope.users = [];
    $scope.chatMessages = [];
    $scope.mods = [];
    $scope.currentUser = window.currentUser;
    $scope.invite = {
        id: null,
        name: null,
        type: null
    };
    $scope.gotInvite = false;

    var commandMap = {
        "userstatus": updateUserList,
        "chat": addChatMessage,
        "inviteRequest": displayInvite,
        "availableMods": displayMods
    };

    var getUsers = new CardshifterServerAPI.messageTypes.ServerQueryMessage("USERS", "");
    CardshifterServerAPI.sendMessage(getUsers);

    CardshifterServerAPI.setMessageListener(function(message) {
        commandMap[message.command](message);
        $scope.$apply(); // needs to manually updated since this is an event
    }, ["userstatus", "chat", "inviteRequest", "availableMods"]);

    $scope.sendMessage = function(e) {
        if(e && e.keyCode !== ENTER_KEY) { // user may hit "enter" key
            return;
        }

        $scope.sending = true;
        var chatMessage = new CardshifterServerAPI.messageTypes.ChatMessage($scope.user_chat_message);
        CardshifterServerAPI.sendMessage(chatMessage);

        $scope.user_chat_message = ""; // clear the input box
        $timeout(function() { // allow another message to be sent in 3 seconds
            $scope.sending = false;
        }, MESSAGE_DELAY);
    }
    $scope.startGame = function() {
        if($scope.selected_mod && $scope.selected_opponent) {
            console.log("start");
        } else {
            // user needs to choose an opponent and/or a mod
            console.log("need to choose mod and/or opponent");
        }
    }
    $scope.acceptInvite = function(accept) {
        console.log("accept");
    }


    // The command map functions:
    /**
    * Based on the content of message, will add or remove
    * a user from the user list.
    */
    function updateUserList(message) {
        if(message.status === "OFFLINE") {
            for(var i = 0, length = $scope.users.length; i < length; i++) {
                if($scope.users[i].userId === message.userId) {
                    $scope.users.splice(i, 1); // remove that user from the array
                    break;
                }
            }
        } else {
            $scope.users.push(message);
        }
    }
    /**
    * Adds a chat message to the message feed. If the message
    * feed is at the maximum limit of messages, deletes the oldest
    * message.
    */
    function addChatMessage(message) {
        if($scope.chatMessages.length === CHAT_FEED_LIMIT) {
            // remove the oldest chat message
            $scope.chatMessages.shift();
        }

        var now = new Date();
        var YMD = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
        var HMS = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        message.timestamp = YMD + " " + HMS;

        $scope.chatMessages.push(message);
    }
    /**
    * Shows buttons and a message to this client for accepting
    * or declining a game request.
    */
    function displayInvite(message) {
        $scope.invite.id = message.id;
        $scope.invite.name = message.name;
        $scope.invite.type = message.gameType;
        $scope.gotInvite = true;
    }
    /**
    * Shows to the user a list of all available mods.
    */
    function displayMods(message) {
        $scope.mods = message.mods;
    }
});