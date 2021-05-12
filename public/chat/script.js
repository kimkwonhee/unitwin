//-------------------------
// Vue.js
//-------------------------
Vue.config.devtools = false;

var app = new Vue({
    el: '#app',
    created: function () {
        _this = this;
        this.fb = new Firebase(config);
        this.fb.init();
    },
    mounted: function () {
        this.data = this.fb.list;
        if (this.isStart) {
            this.fb.setFocus('send_input', 100);
            this.fb.scrollDown('message', 100);
            
        } else {
            var result = this.fb.errorCode(true, 'E1000', 'Main');
            this.$refs.error.innerHTML = result;
        }
    },
    data: {
        message: '',
        list: [],
        label: {
            en: {
                name: 'UNITWIN Symposium Facilitation Team',
                placeholder: 'Please enter your message.'
            },
            kr: {
                name: '유니트윈 운영사무국',
                placeholder: '메시지를 입력해 주세요.'
            }
        },
        timer: 3000,
        isTyping: false,
        lang: 'kr'
    },
    computed: {
        content: function() {
            return '';
        },

        isStart: function() {
            return this.fb.isStart;
        },

        placeholder: function() {
            var result = this.label.en.placeholder;
            if (this.lang == 'kr') result = this.label.kr.placeholder;
            return result;
        }
    },
    methods: {
        send: function() {
            // 메시지 전송
            if (!this.isTyping) {
                this.fb.setFocus('send_input', 100);
                if (this.message !== '') {
                    this.fb.set(this.message);
                    this.message = '';
                }
                this.isTyping = true;
                
                // 3초 딜레이 해제
                setTimeout(function() {
                    try {
                        _this.isTyping = false;
                    } catch(err){};
                }, this.timer);
            }
        },

        keyPress: function(e) {
            if (e.keyCode == '13') this.send();
        },

        getName: function(idx, type) {
            var result = '';
            if (type) {
                // 관리자 표시
                result = this.label.en.name;
                if (this.lang == 'kr') result = this.label.kr.name;

                // Time (Margin)
                setTimeout(function() {
                    try {
                        _this.$refs.name[idx].style.marginRight = '7px';
                    } catch(err){};
                }, 100);
            }
            return result;
        },

        getTime: function(idx, time) {
            var result = this.fb.fireBaseTime(time);
            return result;
        },

        getContent: function(data) {
            var result = data.content;
            if (data.type) {
                result = this.fb.replaceLink(result);
            }
            return result;
        }
    }
})