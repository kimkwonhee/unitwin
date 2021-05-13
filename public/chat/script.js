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
            this.onScroll();
            
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
                placeholder: 'Please enter your message.',
                wait: 'Wait 3sec'
            },
            kr: {
                name: '유니트윈 운영사무국',
                placeholder: '메시지를 입력해 주세요.',
                wait: '3초만 기다려 주세요'
            }
        },
        timer: 500,
        isTyping: false,
        didScroll: true,
        isBottom: false,
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
        // On Scroll
        onScroll: function() {
            $("#message").scroll(function() {
                var scrollTop = $(this).scrollTop();
                var innerHeight = $(this).innerHeight();
                var scrollHeight = $(this).prop('scrollHeight');
        
                if (scrollTop + innerHeight >= scrollHeight) {
                    _this.isBottom = false;
                } else {
                    _this.isBottom = true;
                }
            });
        },

        // Down Button
        down: function() {
            this.fb.scrollDown('message', 100);
            this.fb.setFocus('send_input', 100);
            this.isBottom = true;
        },

        // Send
        send: function() {
            // 메시지 전송
            if (!this.isTyping) {
                this.fb.setFocus('send_input', 100);
                if (this.message !== '') {
                    this.fb.set(this.message);
                    this.message = '';
                }

                // 스크롤 마지막으로 이동
                this.fb.scrollDown('message', 100);
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