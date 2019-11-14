const path = require('path');



const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
// app.use(cors());

var rawBodyHandler = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
        console.log('Raw body: ' + req.rawBody);
    }
}

app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control, user_id, param, token' }));
app.options('*', cors());  // enable pre-flight

app.use(bodyParser.json({ verify: rawBodyHandler }));

const port = 8001

const WIDGET_DIR = "data/widget";
const PRAYINGTIME_DIR = "data/prayingtime";
const SERVICEQURAN_DIR = "data/servicequran";
const FORUM_DIR = "data/forum";
const VIDEOCOURSE_DIR = "data/videocourse";
const USER_DIR = "data/user";
const PURCHASE_DIR = "data/purchase";
const ACTIVITYHISTORY_DIR = "data/activityHistory"


// WIDGET ROUTE 
app.get('/nu/widgetservice/getUserTimeline', (req, res) => {
    var param = req.header("user_id");
    console.log("\nPath : "+req.path);
    if(param == "" || param == undefined || param == null){
        console.log("Get some trouble param header:"+ param);
        res.send("some trouble param header:"+ param);
    }else{
        console.log("Success param header:"+ param);
        res.sendFile(path.join(__dirname, WIDGET_DIR, 'widgetGetTwitterFeed.json'));
    }
});

app.get('/nu/widgetservice/getVideoListUrl', (req, res) => {
    var param = req.header("user_id");
    console.log("\nPath : "+req.path);
    if(param == "" || param == undefined || param == null){
        console.log("Get some trouble param header:"+ param);
        res.send("some trouble param header:"+ param);
    }else{
        console.log("Success param header:"+ param);
        res.sendFile(path.join(__dirname, WIDGET_DIR, 'widgetGetYoutubeFeed.json'));
    }
});

app.get('/nu/widgetservice/getTweetAndYoutubeFeed', (req, res) => {
    console.log("\nPath : "+req.path);
    res.sendFile(path.join(__dirname, WIDGET_DIR, 'getTweetAndYoutubeFeed.json'));
});

// PRAYING TIME ROUTE 
app.post('/nu/prayingtimeservice/prayingGetThreeDayPrayingTime', (req, res) => {
    console.log("\nPath : "+req.path);

    var param = req.header("user_id");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(latitude == "" || latitude == undefined || latitude == null || 
            longitude == "" || longitude == undefined || longitude == null){
                console.log("Err : latitude = "+latitude+" longitude = "+longitude);
                res.send("Err : latitude = "+latitude+" longitude = "+longitude);
        }else{
            console.log("Success : latitude = "+latitude+" longitude = "+longitude);
            res.sendFile(path.join(__dirname, PRAYINGTIME_DIR, 'prayingGetThreeDayPrayingTime.json'));
        }
    }
});

app.post('/nu/prayingtimeservice/prayingGetTodayPrayingTime', (req, res) => {
    console.log("\nPath : "+req.path);

    var param = req.header("user_id");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(latitude == "" || latitude == undefined || latitude == null || 
            longitude == "" || longitude == undefined || longitude == null){
                console.log("Err : latitude = "+latitude+" longitude = "+longitude);
                res.send("Err : latitude = "+latitude+" longitude = "+longitude);
        }else{
            console.log("Success : latitude = "+latitude+" longitude = "+longitude);
            res.sendFile(path.join(__dirname, PRAYINGTIME_DIR, 'prayingGetTodayPrayingTime.json'));
        }
    }
});

app.post('/nu/prayingtimeservice/prayingGetPrayingTimeByDate', (req, res) => {
//     "{
//         ""latitude"":""-6.2405176"",
//         ""longitude"":""106.8215409"",
//         ""date"":""20191018""
// }"
    console.log("\nPath : "+req.path);

    var param = req.header("user_id");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;
    var date = reqBody.date;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(latitude == "" || latitude == undefined || latitude == null || 
            longitude == "" || longitude == undefined || longitude == null ||
            date == "" || date == undefined || date == null){
                console.log("Err : latitude = "+latitude+" longitude = "+longitude+" date = "+date);
                res.send("Err : latitude = "+latitude+" longitude = "+longitude+" date = "+date);
        }else{
            console.log("Success : latitude = "+latitude+" longitude = "+longitude);
            res.sendFile(path.join(__dirname, PRAYINGTIME_DIR, 'prayingGetPrayingTimeByDate.json'));
        }
    }
});

app.post('/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTime', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("Success : Param Header user_id = "+param);
        res.sendFile(path.join(__dirname, PRAYINGTIME_DIR, 'prayingGetCurrentMonthPrayingTime.json'));
    }
});

app.post('/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTimeOfCity', (req, res) => {
    console.log("\nPath : "+req.path);

    var param = req.header("user_id");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(latitude == "" || latitude == undefined || latitude == null || 
            longitude == "" || longitude == undefined || longitude == null){
                console.log("Err : latitude = "+latitude+" longitude = "+longitude);
                res.send("Err : latitude = "+latitude+" longitude = "+longitude);
        }else{
            console.log("Success : latitude = "+latitude+" longitude = "+longitude);
            res.sendFile(path.join(__dirname, PRAYINGTIME_DIR, 'prayingGetCurrentMonthPrayingTime2.json'));
        }
    }
});

app.post('/nu/prayingtimeservice/prayingGetPrayingTimeByYYYYMM', (req, res) => {
    console.log("\nPath : "+req.path);

    var param = req.header("user_id");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;
    var yyyymm = reqBody.yyyymm;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(latitude == "" || latitude == undefined || latitude == null || 
            longitude == "" || longitude == undefined || longitude == null ||
            yyyymm == "" || yyyymm == undefined || yyyymm == null){
                console.log("Err : latitude = "+latitude+" longitude = "+longitude+" yyyymm = "+yyyymm);
                res.send("Err : latitude = "+latitude+" longitude = "+longitude+" yyyymm = "+yyyymm);
        }else{
            console.log("Success : latitude = "+latitude+" longitude = "+longitude+" yyyymm = "+yyyymm);
            res.sendFile(path.join(__dirname, PRAYINGTIME_DIR, 'prayingGetPrayingTimeByYYYYMM.json'));
        }
    }
});

// SERVICE QURAN ROUTE
app.post('/nu/servicequran/quranGetBookmark', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("Success : Param Header user_id = "+param);
        res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'quranGetBookmark.json'));
    }
});

app.post('/nu/servicequran/quranSetBookmark', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var surah_id = reqBody.surah_id;
    var verse = reqBody.verse;
    var juz_id = reqBody.juz_id;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(surah_id == "" || surah_id == undefined || surah_id == null || 
            verse == "" || verse == undefined || verse == null ||
            juz_id == "" || juz_id == undefined || juz_id == null){
                console.log("Err : surah_id = "+surah_id+" verse = "+verse+" juz_id = "+juz_id);
                res.send("Err : surah_id = "+surah_id+" verse = "+verse+" juz_id = "+juz_id);
        }else{
            console.log("Success : surah_id = "+surah_id+" verse = "+verse+" juz_id = "+juz_id);
            res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'quranSetBookmark.json'));
        }
    }
});

app.post('/nu/servicequran/listSurah', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("Success : Param Header user_id = "+param);
        res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'listSurah.json'));
    }
});

app.post('/nu/servicequran/quranSearchSurahByName', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var keyword = reqBody.keyword;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(keyword == "" || keyword == undefined || keyword == null){
                console.log("Err : keyword = "+keyword);
                res.send("Err : keyword = "+keyword);
        }else{
            console.log("Success : keyword = "+keyword);
            res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'quranSearchSurahByName.json'));
        }
    }
});

app.post('/nu/servicequran/quranViewSurahAll', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var language = reqBody.language;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(language == "" || language == undefined || language == null){
                console.log("Err : language = "+language);
                res.send("Err : language = "+language);
        }else{
            console.log("Success : language = "+language);
            res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'quranViewSurahAll.json'));
        }
    }
});

app.post('/nu/servicequran/quranViewSurahByName', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var keyword = reqBody.keyword;
    var language = reqBody.language;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(keyword == "" || keyword == undefined || keyword == null || 
            language == "" || language == undefined || language == null){
                console.log("Err : keyword = "+keyword+" language = "+language);
                res.send("Err : keyword = "+keyword+" language = "+language);
        }else{
            console.log("Success : keyword = "+keyword+" language = "+language);
            res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'quranViewSurahByName.json'));
        }
    }
});

app.post('/nu/servicequran/quranViewSurahByNumber', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var keyword = reqBody.keyword;
    var language = reqBody.language;
    var verse = reqBody.verse;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(keyword == "" || keyword == undefined || keyword == null || 
            language == "" || language == undefined || language == null || 
            verse == "" || verse == undefined || verse == null){
                console.log("Err : keyword = "+keyword+" language = "+language+" verse = "+verse);
                res.send("Err : keyword = "+keyword+" language = "+language+" verse = "+verse);
        }else{
            console.log("Success : keyword = "+keyword+" language = "+language+" verse = "+verse);
            res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'quranViewSurahByNumber.json'));
        }
    }
});

app.post('/nu/servicequran/surahListByJuzAll', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("Success : Param Header user_id = "+param);
        res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'surahListByJuzAll.json'));
    }
});

app.post('/nu/servicequran/surahListByJuzNumber', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var juz = reqBody.juz;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(juz == "" || juz == undefined || juz == null){
                console.log("Err : juz = "+juz);
                res.send("Err : juz = "+juz);
        }else{
            console.log("Success : juz = "+juz);
            res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'surahListByJuzNumber.json'));
        }
    }
});

// FORUM ROUTE
app.post('/nu/forum/displayAllForumByUser', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var user = reqBody.user;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(user == "" || user == undefined || user == null){
                console.log("Err : user = "+user);
                res.send("Err : user = "+user);
        }else{
            console.log("Success : user = "+user);
            res.sendFile(path.join(__dirname, FORUM_DIR, 'displayAllForumByUser.json'));
        }
    }
});

app.post('/nu/forum/createForum', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var user = reqBody.user;
    var title = reqBody.title;
    var category = reqBody.category;
    var message = reqBody.message;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(user == "" || user == undefined || user == null || 
            title == "" || title == undefined || title == null || 
            category == "" || category == undefined || category == null || 
            message == "" || message == undefined || message == null){
                console.log("Err : user = "+user+" title = "+title+" category = "+category+" message = "+message);
                res.send("Err : user = "+user+" title = "+title+" category = "+category+" message = "+message);
        }else{
            console.log("Success : user = "+user+" title = "+title+" category = "+category+" message = "+message);
            res.sendFile(path.join(__dirname, FORUM_DIR, 'createForum.json'));
        }
    }
});

app.post('/nu/forum/postComment', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var user = reqBody.user;
    var forum_id = reqBody.forum_id;
    var message = reqBody.message;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(user == "" || user == undefined || user == null || 
            forum_id == "" || forum_id == undefined || forum_id == null ||
            message == "" || message == undefined || message == null){
                console.log("Err : user = "+user+" forum_id = "+forum_id+" message = "+message);
                res.send("Err : user = "+user+" forum_id = "+forum_id+" message = "+message);
        }else{
            console.log("Success : user = "+user+" forum_id = "+forum_id+" message = "+message);
            res.sendFile(path.join(__dirname, FORUM_DIR, 'postComment.json'));
        }
    }
});

app.post('/nu/forum/editComment', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var user = reqBody.user;
    var forum_id = reqBody.forum_id;
    var comment_id = reqBody.comment_id;
    var message = reqBody.message;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(user == "" || user == undefined || user == null || 
            forum_id == "" || forum_id == undefined || forum_id == null || 
            comment_id == "" || comment_id == undefined || comment_id == null || 
            message == "" || message == undefined || message == null){
                console.log("Err : user = "+user+" forum_id = "+forum_id+" comment_id = "+comment_id+" message = "+message);
                res.send("Err : user = "+user+" forum_id = "+forum_id+" comment_id = "+comment_id+" message = "+message);
        }else{
            console.log("Success : user = "+user+" forum_id = "+forum_id+" comment_id = "+comment_id+" message = "+message);
            res.sendFile(path.join(__dirname, FORUM_DIR, 'editComment.json'));
        }
    }
});

app.post('/nu/forum/closeForum', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var user = reqBody.user;
    var forum_id = reqBody.forum_id;
    var status = reqBody.status;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(user == "" || user == undefined || user == null || 
            forum_id == "" || forum_id == undefined || forum_id == null ||
            status == "" || status == undefined || status == null){
                console.log("Err : user = "+user+" forum_id = "+forum_id+" status = "+status);
                res.send("Err : user = "+user+" forum_id = "+forum_id+" status = "+status);
        }else{
            console.log("Success : user = "+user+" forum_id = "+forum_id+" status = "+status);
            res.sendFile(path.join(__dirname, FORUM_DIR, 'closeForum.json'));
        }
    }
});

app.post('/nu/forum/displayForumDetail', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var user = reqBody.user;
    var forum_id = reqBody.forum_id;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(user == "" || user == undefined || user == null || 
            forum_id == "" || forum_id == undefined || forum_id == null){
                console.log("Err : user = "+user+" forum_id = "+forum_id);
                res.send("Err : user = "+user+" forum_id = "+forum_id);
        }else{
            console.log("Success : user = "+user+" forum_id = "+forum_id);
            res.sendFile(path.join(__dirname, FORUM_DIR, 'displayForumDetail.json'));
        }
    }
});

// VIDEO COURSE ROUTE
app.post('/nu/videocourse/videoCourseSepertiUdemy', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        res.sendFile(path.join(__dirname, VIDEOCOURSE_DIR, 'videoCourseSepertiUdemy.json'));
    }
});

app.post('/nu/videocourse/searchVideoCourseByTitle', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var search_keyword = reqBody.search_keyword;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(search_keyword == "" || search_keyword == undefined || search_keyword == null){
                console.log("Err : search_keyword = "+search_keyword);
                res.send("Err : search_keyword = "+search_keyword);
        }else{
            console.log("Success : search_keyword = "+search_keyword);
            res.sendFile(path.join(__dirname, VIDEOCOURSE_DIR, 'searchVideoCourseByTitle.json'));
        }
    }
});

// USER
app.post('/nu/member/register', (req, res) => {
    console.log("\nPath : "+req.path);
    var reqBody = req.body;
    var username = reqBody.username;
    var password = reqBody.password;
    var phone_num = reqBody.phone_num;
    var email = reqBody.email;
    var device_id = reqBody.device_id;
    var google_ads_id = reqBody.google_ads_id;

    if(username == "" || username == undefined || username == null ||
    password == "" || password == undefined || password == null ||
    phone_num == "" || phone_num == undefined || phone_num == null ||
    email == "" || email == undefined || email == null ||
    device_id == "" || device_id == undefined || device_id == null ||
    google_ads_id == "" || google_ads_id == undefined || google_ads_id == null){
            console.log("Err : username = "+username
            +", password = "+password
            +", phone_num = "+phone_num
            +", email = "+email
            +", device_id = "+device_id
            +", google_ads_id = "+google_ads_id);
            res.send("Err : username = "+username
            +", password = "+password
            +", phone_num = "+phone_num
            +", email = "+email
            +", device_id = "+device_id
            +", google_ads_id = "+google_ads_id);
    }else{
        console.log("Success : username = "+username
            +", password = "+password
            +", phone_num = "+phone_num
            +", email = "+email
            +", device_id = "+device_id
            +", google_ads_id = "+google_ads_id);
        res.sendFile(path.join(__dirname, USER_DIR, 'registerUser.json'));
    }
});

app.post('/nu/member/update-profile', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");
    var reqBody = req.body;
    var username = reqBody.username;
    var phone_num = reqBody.phone_num;
    var email = reqBody.email;

    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
    haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.send("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        if(username == "" || username == undefined || username == null ||
        phone_num == "" || phone_num == undefined || phone_num == null ||
        email == "" || email == undefined || email == null){
                console.log("Err : username = "+username
                    +", phone_num = "+phone_num
                    +", email = "+email);
                res.send("Err : username = "+username
                    +", phone_num = "+phone_num
                    +", email = "+email);
        }else{
            console.log("Success : username = "+username
                +", phone_num = "+phone_num
                +", email = "+email);
            res.sendFile(path.join(__dirname, USER_DIR, 'updateProfile.json'));
        }
    }
});

app.post('/nu/member/reset-password', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");

    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
    haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.send("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.sendFile(path.join(__dirname, USER_DIR, 'resetPassword.json'));
    }
});

app.post('/nu/member/update-password', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");
    var reqBody = req.body;
    var new_password = reqBody.new_password;
    var old_password = reqBody.old_password;

    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
    haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.send("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        if(new_password == "" || new_password == undefined || new_password == null ||
        old_password == "" || old_password == undefined || old_password == null){
                console.log("Err : new_password = "+new_password
                    +", old_password = "+old_password);
                res.send("Err : new_password = "+new_password
                    +", old_password = "+old_password);
        }else{
            console.log("Success : new_password = "+new_password
                +", old_password = "+old_password);
            res.sendFile(path.join(__dirname, USER_DIR, 'updatePassword.json'));
        }
    }
});

app.post('/nu/member/inbox-list', (req, res) => {
    console.log("\nPath : "+req.path);
    var haederToken = req.header("token");

    if (haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : token = "+haederToken);
        res.send("Err : token = "+haederToken);
    }else{
        console.log("success : token = "+haederToken);
        res.sendFile(path.join(__dirname, USER_DIR, 'inboxList.json'));
    }
});

app.post('/nu/member/inbox-detail', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");
    var reqBody = req.body;
    var user_id = reqBody.user_id;
    var inbox_id = reqBody.inbox_id;
    
    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
    haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.send("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        if(user_id == "" || user_id == undefined || user_id == null ||
        inbox_id == "" || inbox_id == undefined || inbox_id == null){
                console.log("Err : user_id = "+user_id
                    +", inbox_id = "+inbox_id);
                res.send("Err : user_id = "+user_id
                    +", inbox_id = "+inbox_id);
        }else{
            console.log("Success : user_id = "+user_id
                +", inbox_id = "+inbox_id);
            res.sendFile(path.join(__dirname, USER_DIR, 'inboxDetail.json'));
        }
    }
});

app.post('/nu/member/login', (req, res) => {
    console.log("\nPath : "+req.path);
    var reqBody = req.body;
    var username = reqBody.username;
    var password = reqBody.password;
 
    if(username == "" || username == undefined || username == null ||
    password == "" || password == undefined || password == null){
            console.log("Err : username = "+username
                +", password = "+password);
            res.send("Err : username = "+username
                +", password = "+password);
    }else{
        console.log("Success : username = "+username
            +", password = "+password);
        res.sendFile(path.join(__dirname, USER_DIR, 'login.json'));
    }
});

app.post('/nu/member/update-last-seen', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");
    var reqBody = req.body;
    var user_id = reqBody.user_id;
    var token = reqBody.token;
    
    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
    haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.send("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        if(user_id == "" || user_id == undefined || user_id == null ||
        token == "" || token == undefined || token == null){
                console.log("Err : user_id = "+user_id
                    +", token = "+token);
                res.send("Err : user_id = "+user_id
                    +", token = "+token);
        }else{
            console.log("Success : user_id = "+user_id
                +", token = "+token);
            res.sendFile(path.join(__dirname, USER_DIR, 'updateLastSeen.json'));
        }
    }
});

app.post('/nu/member/view-last-seen', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");
    var reqBody = req.body;
    var user_id = reqBody.user_id;
    var token = reqBody.token;
    
    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
    haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.send("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        if(user_id == "" || user_id == undefined || user_id == null ||
        token == "" || token == undefined || token == null){
                console.log("Err : user_id = "+user_id
                    +", token = "+token);
                res.send("Err : user_id = "+user_id
                    +", token = "+token);
        }else{
            console.log("Success : user_id = "+user_id
                +", token = "+token);
            res.sendFile(path.join(__dirname, USER_DIR, 'viewLastSeen.json'));
        }
    }
});

app.post('/nu/member/kyai-list', (req, res) => {
    console.log("\nPath : "+req.path);
    var haederToken = req.header("token");
    
    if (haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : token = "+haederToken);
        res.send("Err : token = "+haederToken);
    }else{
        console.log("success : token = "+haederToken);
        res.sendFile(path.join(__dirname, USER_DIR, 'kyaiList.json'));
    }
});

app.post('/nu/member/kyai-detail', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");
    
    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
        haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
        +", token = "+haederToken);
        res.send("Err : token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
        +", token = "+haederToken);
        res.sendFile(path.join(__dirname, USER_DIR, 'kyaiDetail.json'));
    }
});

app.post('/nu/member/update-kyai-availability', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");
    var reqBody = req.body;
    var online_flag = reqBody.online_flag;

    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
    haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.send("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        if(online_flag == "" || online_flag == undefined || online_flag == null){
                console.log("Err : online_flag = "+online_flag);
                res.send("Err : online_flag = "+online_flag);
        }else{
            console.log("Success : online_flag = "+online_flag);
            res.sendFile(path.join(__dirname, USER_DIR, 'updateKyaiAvailability.json'));
        }
    }
});

app.post('/nu/member/is-kyai-on', (req, res) => {
    console.log("\nPath : "+req.path);
    var headerUser_id = req.header("user_id");
    var haederToken = req.header("token");

    if (headerUser_id == "" || headerUser_id == undefined || headerUser_id == null ||
    haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.send("Err : Header user_id = "+headerUser_id
            +", token = "+haederToken);
    }else{
        console.log("success : Header user_id = "+headerUser_id
            +", token = "+haederToken);
        res.sendFile(path.join(__dirname, USER_DIR, 'isKyaiOnline.json'));
    }
});

app.get('/nu/member/confirmation', (req, res) => {
    console.log("\nPath : "+req.path);
    var haederToken = req.header("token");

    if (haederToken == "" || haederToken == undefined || haederToken == null){
        console.log("Err : token = "+haederToken);
        res.send("Err : token = "+haederToken);
    }else{
        console.log("success : token = "+haederToken);
        res.sendFile(path.join(__dirname, USER_DIR, 'callbackConfirmation.json'));
    }
});


// Purchase
app.post('/nu/purchase/video', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var month = reqBody.month;

    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(month == "" || month == undefined || month == null){
                console.log("Err : month = "+month);
                res.send("Err : month = "+month);
        }else{
            console.log("Success : month = "+month);
            res.sendFile(path.join(__dirname, PURCHASE_DIR, 'video.json'));
        }
    }
});

app.post('/nu/purchase/purchaseHistory', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var from_date = reqBody.from_date;
    var to_date = reqBody.to_date;
    
    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(from_date == "" || from_date == undefined || from_date == null ||
        to_date == "" || to_date == undefined || to_date == null){
                console.log("Err : from_date = "+from_date+", to_date = "+to_date);
                res.send("Err : from_date = "+from_date+", to_date = "+to_date);
        }else{
            console.log("Success : from_date = "+from_date+", to_date = "+to_date);
            res.sendFile(path.join(__dirname, PURCHASE_DIR, 'purchaseHistory.json'));
        }
    }
});

app.post('/nu/purchase/purchase', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var type_purchase = reqBody.type_purchase;
   
    
    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(type_purchase == "" || type_purchase == undefined || type_purchase == null){
                console.log("Err : type_purchase = "+type_purchase);
                res.send("Err : type_purchase = "+type_purchase);
        }else{
            console.log("Success : type_purchase = "+type_purchase);
            res.sendFile(path.join(__dirname, PURCHASE_DIR, 'purchase.json'));
        }
    }
});

app.post('/nu/purchase/pay', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var purchasee_id = reqBody.purchasee_id;
    var amount = reqBody.amount;
    
    
    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(purchasee_id == "" || purchasee_id == undefined || purchasee_id == null ||
        amount == "" || amount == undefined || amount == null){
                console.log("Err : purchasee_id = "+purchasee_id+", amount = "+amount);
                res.send("Err : purchasee_id = "+purchasee_id+", amount = "+amount);
        }else{
            console.log("Success : purchasee_id = "+purchasee_id+", amount = "+amount);
            res.sendFile(path.join(__dirname, PURCHASE_DIR, 'pay.json'));
        }
    }
});

//Activity History
app.post('/nu/activityhistory/insertActivityHistory', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var service_code = reqBody.service_code;
    var user_id = reqBody.user_id;
    var calling_type = reqBody.calling_type;
    var information = reqBody.information;
    
    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(service_code == "" || service_code == undefined || service_code == null ||
        user_id == "" || user_id == undefined || user_id == null ||
        calling_type == "" || calling_type == undefined || calling_type == null ||
        information == "" || information == undefined || information == null){
                console.log("Err : service_code = "+service_code
                    +", user_id = "+user_id
                    +", calling_type = "+calling_type
                    +", information = "+information);
                res.send("Err : service_code = "+service_code
                    +", user_id = "+user_id
                    +", calling_type = "+calling_type
                    +", information = "+information);
        }else{
            console.log("Success : service_code = "+service_code
                +", user_id = "+user_id
                +", calling_type = "+calling_type
                +", information = "+information);
            res.sendFile(path.join(__dirname, ACTIVITYHISTORY_DIR, 'insertActivityHistory.json'));
        }
    }
});

app.post('/nu/activityhistory/selectActivityHistory', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("user_id");
    var reqBody = req.body;
    var user_id = reqBody.user_id;
    
    if (param == "" || param == undefined || param == null){
        console.log("Err : Param Header user_id = "+param);
        res.send("Err : Param Header user_id = "+param);
    }else{
        console.log("success : Param Header user_id = "+param);
        if(user_id == "" || user_id == undefined || user_id == null){
                console.log("Err : user_id = "+user_id);
                res.send("Err : user_id = "+user_id);
        }else{
            console.log("Success : user_id = "+user_id);
            res.sendFile(path.join(__dirname, ACTIVITYHISTORY_DIR, 'selectActivityHistory.json'));
        }
    }
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "data", 'home.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))