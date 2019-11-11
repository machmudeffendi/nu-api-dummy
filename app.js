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

app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control, param' }));
app.options('*', cors());  // enable pre-flight

app.use(bodyParser.json({ verify: rawBodyHandler }));

const port = 8001

const WIDGET_DIR = "data/widget";
const PRAYINGTIME_DIR = "data/prayingtime";
const SERVICEQURAN_DIR = "data/servicequran";
const FORUM_DIR = "data/forum";
const VIDEOCOURSE_DIR = "data/videocourse";
const USER_DIR = "data/user";


// WIDGET ROUTE 
app.get('/nu/widgetservice/getUserTimeline', (req, res) => {
    var param = req.header("param");
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
    var param = req.header("param");
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

    var param = req.header("param");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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

    var param = req.header("param");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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

    var param = req.header("param");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;
    var date = reqBody.date;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("Success : param = "+param);
        res.sendFile(path.join(__dirname, PRAYINGTIME_DIR, 'prayingGetCurrentMonthPrayingTime.json'));
    }
});

app.post('/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTimeOfCity', (req, res) => {
    console.log("\nPath : "+req.path);

    var param = req.header("param");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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

    var param = req.header("param");
    var reqBody = req.body;
    var latitude = reqBody.latitude;
    var longitude = reqBody.longitude;
    var yyyymm = reqBody.yyyymm;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("Success : param = "+param);
        res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'quranGetBookmark.json'));
    }
});

app.post('/nu/servicequran/quranSetBookmark', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("param");
    var reqBody = req.body;
    var surah_id = reqBody.surah_id;
    var verse = reqBody.verse;
    var juz_id = reqBody.juz_id;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("Success : param = "+param);
        res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'listSurah.json'));
    }
});

app.post('/nu/servicequran/quranSearchSurahByName', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("param");
    var reqBody = req.body;
    var keyword = reqBody.keyword;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var language = reqBody.language;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var keyword = reqBody.keyword;
    var language = reqBody.language;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var keyword = reqBody.keyword;
    var language = reqBody.language;
    var verse = reqBody.varse;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("Success : param = "+param);
        res.sendFile(path.join(__dirname, SERVICEQURAN_DIR, 'surahListByJuzAll.json'));
    }
});

app.post('/nu/servicequran/surahListByJuzNumber', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("param");
    var reqBody = req.body;
    var juz = reqBody.juz;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var user = reqBody.user;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var user = reqBody.user;
    var title = reqBody.title;
    var category = reqBody.category;
    var message = reqBody.message;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var user = reqBody.user;
    var forum_id = reqBody.forum_id;
    var message = reqBody.message;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var user = reqBody.user;
    var forum_id = reqBody.forum_id;
    var comment_id = reqBody.comment_id;
    var message = reqBody.message;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var user = reqBody.user;
    var forum_id = reqBody.forum_id;
    var status = reqBody.status;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");
    var reqBody = req.body;
    var user = reqBody.user;
    var forum_id = reqBody.forum_id;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
    var param = req.header("param");

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
        res.sendFile(path.join(__dirname, VIDEOCOURSE_DIR, 'videoCourseSepertiUdemy.json'));
    }
});

app.post('/nu/videocourse/searchVideoCourseByTitle', (req, res) => {
    console.log("\nPath : "+req.path);
    var param = req.header("param");
    var reqBody = req.body;
    var search_keyword = reqBody.search_keyword;

    if (param == "" || param == undefined || param == null){
        console.log("Err : param = "+param);
        res.send("Err : param = "+param);
    }else{
        console.log("success : param = "+param);
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
app.post('/nu/user/registerUser', (req, res) => {
    res.sendFile(path.join(__dirname, USER_DIR, 'registerUser.json'));
});

app.post('/nu/user/updateProfile', (req, res) => {
    res.sendFile(path.join(__dirname, USER_DIR, 'updateProfile.json'));
});

app.post('/nu/user/resetPassword', (req, res) => {
    res.sendFile(path.join(__dirname, USER_DIR, 'resetPassword.json'));
});

app.post('/nu/user/updatePassword', (req, res) => {
    res.sendFile(path.join(__dirname, USER_DIR, 'updatePassword.json'));
});

app.post('/nu/user/inboxList', (req, res) => {
    res.sendFile(path.join(__dirname, USER_DIR, 'inboxList.json'));
});

app.post('/nu/user/inboxDetail', (req, res) => {
    res.sendFile(path.join(__dirname, USER_DIR, 'inboxDetail.json'));
});

app.post('/nu/user/login', (req, res) => {
    res.sendFile(path.join(__dirname, USER_DIR, 'login.json'));
});




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "data", 'home.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))