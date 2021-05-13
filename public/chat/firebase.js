//-------------------------
// Firebase
//-------------------------
function Firebase(config, def) {
    this.config = config;                   // Firebase Config

    // Default
    if (this.isEmpty(def)) {
        this.def = {
            collection: 'unitwin',          // Project
            doc: 'chat',                    // Function
            roomId: 'r',                    // Room Parameter ID: index.html?r=0524_1
            langId: 'l',                    // Language Parameter ID: l= [en, kr]
            limit: 10,                      // Chat Limit
            lang: 'en',                     // Language (en, kr)
            isDebug: true                   // Debug (true, false)
        };
    } else this.def = def;

    // Firestore
    this.db = null;
    this.isStart = false;
    this.list = 0;
    this.isScroll = false;

    // Init (Firebase)
    firebase.initializeApp(this.config);
    this.db = firebase.firestore();         // Firestore
}

//-------------------------
// Init
//-------------------------
Firebase.prototype.init = function() {
    var self = this;

    // Log
    // console.log('Init Chat:', firebase.default['SDK_VERSION']);

    // Get Parameter
    this.def['room'] = this.getParameter(this.def.roomId);          // Room (Parameter ID)
    this.def['lang'] = this.getParameter(this.def.langId);          // Lang (Parameter ID)

    // Default
    if (this.def['room'] !== '') this.isStart = true;               // Room (Parameter 값이 있을 경우 실행)
    if (this.def['lang'] !== 'kr') {
        this.def['lang'] = 'en'                                     // Lang (Default)
        setTimeout(function () {
            try {
                app.lang = 'en';
            } catch(err){};
        }, 1000);
    }

    // Room이 있을 경우 실행
    if (this.isStart) {
        try {
            // Listener
            this.db.collection(this.def.collection).doc(this.def.doc).collection(this.def.room)
            .where('isDeleted', '==', false)
            .orderBy('created', 'desc')
            // .limit(this.def.limit)
            .onSnapshot(function(doc) {
                if (!doc.empty) {
                    app.list = [];            
                    doc.forEach(function(snap) {
                        var temp = {
                            type: snap.data().type,
                            content: snap.data().content,
                            time: snap.data().created
                        }

                        app.list.push(temp);
                        // console.log('Current data: ', temp);
                    });
                    app.list.reverse();

                } else {
                    app.list = [];
                }

                // 스크롤 관련
                if (!self.isScroll) {
                    // 스크롤 마지막으로 이동 (처음만)
                    self.scrollDown('message', 100);
                    self.isScroll = true;

                } else {
                    // 하단 버튼 생성
                    app.isBottom = true;
                }

            }, function(error) {
                self.errorCode(self.def.isDebug, 'E1002', 'firebase init', error);
            });
            
        } catch (error) {
            self.errorCode(self.def.isDebug, 'E1001', 'firebase init', error);
        }
    }
}

//-------------------------
// Firebase Time
//-------------------------
Firebase.prototype.fireBaseTime = function(t) {
    var fireBaseTime = new Date(
        t.seconds * 1000 + t.nanoseconds / 1000000
    );
    var date = fireBaseTime.toISOString().slice(2, 10);
    var time = fireBaseTime.toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    var result = date + ' '  + time;
    return result;
}

//-------------------------
// Firestore Set
//-------------------------
Firebase.prototype.set = function(content, type) {
    var timestamp = new Date();
    var docRef = this.db.collection(this.def.collection).doc(this.def.doc).collection(this.def.room).doc(timestamp.getTime().toString());

    // Type
    if (type) type = 1;
    else type = 0;
    
    // Set
    docRef.set({
        type: type,
        isDeleted: false,
        content: content,
        created: timestamp,
        updated: timestamp
    })
    .then(function(doc) {
        // console.log('Document written:', docRef);
    })
    .catch(function(error) {
        // console.error('Error adding document: ', error);
    });
}

//-------------------------
// Firestore Update
//-------------------------
Firebase.prototype.update = function(idx) {
    var docRef = this.db.collection(this.def.collection).doc(this.def.doc).collection(this.def.room).doc(idx);

    // Update
    docRef.update({
        isDeleted: true
    })
    .then(function() {
        // console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // console.error("Error updating document: ", error);
    });
}

//-------------------------
// Firestore Get
//-------------------------
Firebase.prototype.get = function() {
    var docRef = this.db.collection(this.def.collection).doc(this.def.doc).collection(this.def.room);
    docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // console.log(`${doc.idx} => ${ JSON.stringify(doc.data())}`);
            console.log(JSON.stringify(doc.data()));
        });
    });

    console.log(docRef);
}

//-------------------------
// Util
//-------------------------
// Is Empty
Firebase.prototype.isEmpty = function(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

// Get Parameter
Firebase.prototype.getParameter = function(name) {
    var result = '';
    if (name !== '') {
        var nowAddress = unescape(window.location.href);
        var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1,
            nowAddress.length)).split('&');
        for (var i = 0; i < parameters.length; i++) {
            var varName = parameters[i].split('=')[0];
            if (varName.toUpperCase() == name.toUpperCase()) {
                result = parameters[i].split('=')[1];
                break;
            }
        }
    }
    return result;
}

// Set Focus
Firebase.prototype.setFocus = function(id, time) {
    setTimeout(function () {
        try {
            document.getElementById(id).focus();
        } catch(err){};
    }, time);
}

// Scroll Down
Firebase.prototype.scrollDown = function(id, time) {
    // 스크롤 마지막으로 이동
    setTimeout(function() {
        try {
            var textarea = document.getElementById(id);
            textarea.scrollTop = textarea.scrollHeight;
        } catch(err){};
    }, time);
}

// Replace Link
Firebase.prototype.replaceLink = function(value) {
    // var expUrl = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    var expUrl = /(http|https):\/\/[\w가-힣#!:.?+=&%@!\-\/]+/;
    var atag = '<a href="$&" target="_blank">$&</a>';
    return value.replace(expUrl, atag);
}

//-------------------------
// Error
//-------------------------
Firebase.prototype.errorCode = function(debug, code, location, errorMessage) {
    var result = '';
    if (debug) debug = true;                // 디버깅 모드
    else debug = false;

    // Error Code
    var error = {
        E1000: 'Not Room',                  // 존재 하지 않는 Room
        E1002: 'Firebase Permission',       // Firebase 권한 에러
        E1001: 'Syntax Error',              // 구문 에러
    }

    // Result
    if (debug) {
        result = '[' + code + ': ' + location + '] ' + error[code];
        if (errorMessage) result = result + ' | ' + errorMessage;
        console.log(result);
    } else result = code;
    return result;
}