
//
// // CVSファイルを二次元配列に格納開始
// // https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
//
// function getCSV(){
//     var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
//     req.open("get", "score.csv", true); // アクセスするファイルを指定
//     req.send(null); // HTTPリクエストの発行
//
//     // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
//     req.onload = function(){
// 	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
//     }
// }
//
// // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
// function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
//     var result = []; // 最終的な二次元配列を入れるための配列
//     var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
//
//     // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
//     for(var i=0;i<tmp.length;++i){
//         result[i] = tmp[i].split(',');
//     }
//
//     alert(result[1][2]); // 300yen
// }
//
// getCSV(); //最初に実行される

// 成績配列作成
// CSVから配列作成時にプロパティーと整理が必要
 const score = [

   {a:"201510388",b:"堤 浩太郎",number:"BC13",name:"国際学ゼミナールII",credit:" 3.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC14908",name:"卒業論文",credit:" 6.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"1F",name:"デジタルクリエイティブ基礎",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"26",name:"スノースポーツ",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"ジャパニーズ・エコノミー",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"途上国の教育と国際協力",credit:" 2.0",score:"D",},
   {a:"201510388",b:"堤 浩太郎",number:"BC13",name:"国際学ゼミナールI",credit:" 3.0",score:"A+",},
   {a:"201510388",b:"堤 浩太郎",number:"BC13",name:"独立論文",credit:" 3.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"F",name:"会計学概論",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"人類学特講",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC13",name:"国際学ゼミナールI",credit:" 3.0",score:"D"},
   {a:"201510388",b:"堤 浩太郎",number:"A",name:"観光地域論",credit:" 1.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"アジアの国際関係",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"国際貿易論",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"行政学I",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"ヨーロッパ社会経済史",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"北アフリカの経済と社会",credit:" 2.0",score:"A+",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"宇宙開発",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"都市計画の思想史",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC16",name:"Mathematical Economics",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"1C",name:"キャリアデザインIIb~学問と自分",credit:" 1.0",score:"D",},
   {a:"201510388",b:"堤 浩太郎",number:"22",name:"応用体育サッカー(秋)",credit:" 0.5",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"3334",name:"ヨーロッパ文化圏の言語と文化IIBC(フランス語)",credit:" 1.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"国際通商論",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"公共経済学",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"現代社会論",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"Comparative Economics",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"経済数学",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"統計科学",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"科学技術史",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"都市経済学",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"マクロ経済学概論",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"C",name:"対人社会心理学",credit:" 2.0",score:"D",},
   {a:"201510388",b:"堤 浩太郎",number:"22",name:"応用体育サッカー(春)",credit:" 0.5",score:"A+",},
   {a:"201510388",b:"堤 浩太郎",number:"3331",name:"ヨーロッパ文化圏の言語と文化IIA(フランス語)",credit:" 0.5",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"8",name:"グローバルトレンズ・日本I",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BB",name:"現代経済史",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"国際紛争論I",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"スポーツ文化論",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"ミクロ経済学",credit:" 2.0",score:"D",},
   {a:"201510388",b:"堤 浩太郎",number:"BC11",name:"基礎経済数学",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"Social Anthropology(社会人類学)",credit:" 2.0",score:"A+",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"Cプログラミング",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"データ解析",credit:" 2.0",score:"D",},
   {a:"201510388",b:"堤 浩太郎",number:"BC12",name:"水環境論",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"F",name:"経営組織論",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"11",name:"みんなで創ろう「つくばアクションプロジェクト」",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"1A",name:"新時代を拓く研究の最前線II",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"1B",name:"経済学入門II",credit:" 1.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"1C",name:"ストレスとうまくつき合おう",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"21",name:"基礎体育ダンス(秋)",credit:" 0.5",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"31A",name:"英語基礎II",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"31B",name:"異文化と英語II",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"31C",name:"総合英語II",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"33A",name:"フランス語基礎AII",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"33A",name:"フランス語基礎BII",credit:" 1.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"A",name:"グローバル人材養成講義XVIII",credit:" 1.5",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC50021",name:"国際学概論II",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC50041",name:"国際学概論IV",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"国際経済論",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"グローバルコミュニケーション論",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"情報メディア概論",credit:" 2.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"Media Politics",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"English Discussion Seminar",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"11",name:"フレッシュマン・セミナー",credit:" 1.0",score:"P",},
   {a:"201510388",b:"堤 浩太郎",number:"1A",name:"新時代を拓く研究の最前線I",credit:" 1.0",score:"B"},
   {a:"201510388",b:"堤 浩太郎",number:"1B",name:"言語の万華鏡I",credit:" 1.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"21",name:"基礎体育ニュースポーツ(春)",credit:" 0.5",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"31A",name:"英語基礎I",credit:" 0.5",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"31B",name:"異文化と英語I",credit:" 0.5",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"31C",name:"総合英語I",credit:" 0.5",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"33A",name:"フランス語基礎AI",credit:" 0.5",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"33B",name:"フランス語基礎BI",credit:" 0.5",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"61",name:"情報(講義)",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"62",name:"情報(実習)",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC50011",name:"国際学概論I",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC50031",name:"国際学概論III",credit:" 1.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC50051",name:"国際学概論V",credit:" 1.0",score:"B",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"国際関係史序説",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"初級ミクロ経済学",credit:" 2.0",score:"C",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"数理科学I",credit:" 2.0",score:"A+",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"数理科学II",credit:" 2.0",score:"A",},
   {a:"201510388",b:"堤 浩太郎",number:"BC51",name:"English Debate",credit:" 2.0",score:"B",},

 ];

 // const score = [
 //   ["201510388","堤 浩太郎","BC13124","国際学ゼミナールII"," 3.0","履修中","-","履修中","A","2019","通常"],
 //   ["201510388","堤 浩太郎","BC14908","卒業論文"," 6.0","履修中","-","履修中","A","2019","通常"],
 //   ["201510388","堤 浩太郎","1F20034","デジタルクリエイティブ基礎"," 1.0","-","-","A","C","2018","通常"],
 //   ["201510388","堤 浩太郎","2619293","スノースポーツ"," 1.0","-","-","A","C","2018","集中"],
 //   ["201510388","堤 浩太郎","BC11881","ジャパニーズ・エコノミー"," 2.0","-","-","A","A","2018","通常"],
 //   ["201510388","堤 浩太郎","BC12341","途上国の教育と国際協力"," 2.0","-","-","D","A","2018","通常"],
 //   ["201510388","堤 浩太郎","BC13114","国際学ゼミナールI"," 3.0","-","-","A+","A","2018","通常"],
 //   ["201510388","堤 浩太郎","BC13311","独立論文"," 3.0","-","-","A","A","2018","通常"],
 //   ["201510388","堤 浩太郎","FH63051","会計学概論"," 2.0","-","-","C","C","2018","通常"],
 //   ["201510388","堤 浩太郎","BC11551","人類学特講"," 2.0","-","-","A","A","2018","集中"],
 //   ["201510388","堤 浩太郎","BC13114","国際学ゼミナールI"," 3.0","-","-","D","5Y","2017","通常"],
 //   ["201510388","堤 浩太郎","AB76351","観光地域論"," 1.0","-","-","C","C","2017","通常"],
 //   ["201510388","堤 浩太郎","BC11221","アジアの国際関係"," 2.0","-","-","A","A","2017","通常"],
 //   ["201510388","堤 浩太郎","BC11411","国際貿易論"," 2.0","-","-","C","A","2017","通常"],
 //   ["201510388","堤 浩太郎","BC11731","行政学I"," 2.0","-","-","A","A","2017","集中"],
 //   ["201510388","堤 浩太郎","BC11791","ヨーロッパ社会経済史"," 2.0","-","-","A","A","2017","通常"],
 //   ["201510388","堤 浩太郎","BC12131","北アフリカの経済と社会"," 2.0","-","-","A+","A","2017","通常"],
 //   ["201510388","堤 浩太郎","BC12561","宇宙開発"," 1.0","-","-","A","A","2017","通常"],
 //   ["201510388","堤 浩太郎","BC12751","都市計画の思想史"," 2.0","-","-","B","A","2017","通常"],
 //   ["201510388","堤 浩太郎","BC16011","Mathematical Economics"," 2.0","-","-","B","A","2017","通常"],
 //   ["201510388","堤 浩太郎","1C26121","キャリアデザインIIb~学問と自分"," 1.0","-","-","D","C","2016","通常"],
 //   ["201510388","堤 浩太郎","2213233","応用体育サッカー(秋)"," 0.5","-","-","A","C","2016","通常"],
 //   ["201510388","堤 浩太郎","3334082","ヨーロッパ文化圏の言語と文化IIBC(フランス語)"," 1.0","-","-","C","C","2016","通常"],
 //   ["201510388","堤 浩太郎","BC11201","国際通商論"," 1.0","-","-","A","A","2016","集中"],
 //   ["201510388","堤 浩太郎","BC11751","公共経済学"," 2.0","-","-","C","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC11801","現代社会論"," 2.0","-","-","C","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC11891","Comparative Economics"," 2.0","-","-","B","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC11981","経済数学"," 2.0","-","-","B","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC12031","統計科学"," 2.0","-","-","B","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC12431","科学技術史"," 2.0","-","-","A","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC12701","都市経済学"," 2.0","-","-","B","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC51081","マクロ経済学概論"," 2.0","-","-","C","B","2016","通常"],
 //   ["201510388","堤 浩太郎","CC25021","対人社会心理学"," 2.0","-","-","D","C","2016","通常"],
 //   ["201510388","堤 浩太郎","2213223","応用体育サッカー(春)"," 0.5","-","-","A+","C","2016","通常"],
 //   ["201510388","堤 浩太郎","3331012","ヨーロッパ文化圏の言語と文化IIA(フランス語)"," 0.5","-","-","A","C","2016","通常"],
 //   ["201510388","堤 浩太郎","8070101","グローバルトレンズ・日本I"," 1.0","-","-","A","C","2016","通常"],
 //   ["201510388","堤 浩太郎","BB41061","現代経済史"," 2.0","-","-","C","C","2016","通常"],
 //   ["201510388","堤 浩太郎","BC11691","国際紛争論I"," 2.0","-","-","C","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC11821","スポーツ文化論"," 2.0","-","-","B","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC11861","ミクロ経済学"," 2.0","-","-","D","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC11971","基礎経済数学"," 2.0","-","-","B","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC12291","Social Anthropology(社会人類学)"," 2.0","-","-","A+","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC12444","Cプログラミング"," 2.0","-","-","C","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC12454","データ解析"," 2.0","-","-","D","A","2016","通常"],
 //   ["201510388","堤 浩太郎","BC12521","水環境論"," 2.0","-","-","B","A","2016","通常"],
 //   ["201510388","堤 浩太郎","FH32021","経営組織論"," 2.0","-","-","C","C","2016","通常"],
 //   ["201510388","堤 浩太郎","1226091","みんなで創ろう「つくばアクションプロジェクト」"," 1.0","-","-","A","C","2015","通常"],
 //   ["201510388","堤 浩太郎","1A10121","新時代を拓く研究の最前線II"," 1.0","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","1B17041","経済学入門II"," 1.0","-","-","C","C","2015","通常"],
 //   ["201510388","堤 浩太郎","1C24191","ストレスとうまくつき合おう"," 1.0","-","-","A","C","2015","通常"],
 //   ["201510388","堤 浩太郎","2123153","基礎体育ダンス(秋)"," 0.5","-","-","A","C","2015","通常"],
 //   ["201510388","堤 浩太郎","31EB012","英語基礎II"," 1.0","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","31FB012","異文化と英語II"," 1.0","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","31GB012","総合英語II"," 1.0","-","-","A","C","2015","通常"],
 //   ["201510388","堤 浩太郎","33CB212","フランス語基礎AII"," 1.0","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","33EB222","フランス語基礎BII"," 1.0","-","-","C","C","2015","通常"],
 //   ["201510388","堤 浩太郎","AA21721","グローバル人材養成講義XVIII"," 1.5","-","-","A","C","2015","集中"],
 //   ["201510388","堤 浩太郎","BC50021","国際学概論II"," 1.0","-","-","A","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC50041","国際学概論IV"," 1.0","-","-","B","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51071","国際経済論"," 2.0","-","-","A","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51091","グローバルコミュニケーション論"," 2.0","-","-","B","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51141","情報メディア概論"," 2.0","-","-","B","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51161","Media Politics"," 2.0","-","-","A","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51541","English Discussion Seminar II"," 2.0","-","-","C","B","2015","通常"],
 //   ["201510388","堤 浩太郎","1105202","フレッシュマン・セミナー"," 1.0","-","-","P","C","2015","通常"],
 //   ["201510388","堤 浩太郎","1A10111","新時代を拓く研究の最前線I"," 1.0","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","1B01031","言語の万華鏡I"," 1.0","-","-","C","C","2015","通常"],
 //   ["201510388","堤 浩太郎","2133143","基礎体育ニュースポーツ(春)"," 0.5","-","-","A","C","2015","通常"],
 //   ["201510388","堤 浩太郎","31AB012","英語基礎I"," 0.5","-","-","A","C","2015","通常"],
 //   ["201510388","堤 浩太郎","31BB012","異文化と英語I"," 0.5","-","-","A","C","2015","通常"],
 //   ["201510388","堤 浩太郎","31CB012","総合英語I"," 0.5","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","33AB212","フランス語基礎AI"," 0.5","-","-","C","C","2015","通常"],
 //   ["201510388","堤 浩太郎","33BB222","フランス語基礎BI"," 0.5","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","6105101","情報(講義)"," 1.0","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","6205203","情報(実習)"," 1.0","-","-","B","C","2015","通常"],
 //   ["201510388","堤 浩太郎","BC50011","国際学概論I"," 1.0","-","-","B","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC50031","国際学概論III"," 1.0","-","-","A","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC50051","国際学概論V"," 1.0","-","-","B","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51031","国際関係史序説"," 2.0","-","-","A","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51061","初級ミクロ経済学"," 2.0","-","-","C","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51111","数理科学I"," 2.0","-","-","A+","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51124","数理科学II"," 2.0","-","-","A","B","2015","通常"],
 //   ["201510388","堤 浩太郎","BC51581","English Debate"," 2.0","-","-","B","B","2015","通常"],
 // ];

// 成績要件
 const page = [

   {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
   number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
   class1_min:6,class1_max:6,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12群",
   number:["BC12"],name:["-"],credit_min:14,credit_max:24,
   class1_min:30,class1_max:30,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16,BE22群",
   number:["BC11","BC16","BE22"],name:["-"],credit_min:0,credit_max:10,
   class1_min:30,class1_max:30,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
   number:["BC13"],name:["-"],credit_min:6,credit_max:6,
   class1_min:30,class1_max:30,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
   number:["BC14"],name:["-"],credit_min:0,credit_max:4,
   class1_min:17,class1_max:44,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"自由科目",
   about:"BC11,BC12,BC13,BC16,BE22",
   number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
   class1_min:17,class1_max:44,remove:"-",restriction:"-",},


   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"選択科目",
   number:["BC51"],name:["–"],credit_min:14,credit_max:14,
   class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"選択科目",
   number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
   class1_min:18,class1_max:18,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"自由科目",
   number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
   class1_min:4,class1_max:10,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["11"],name:["–"],credit_min:2,credit_max:2,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["1A"],name:["–"],credit_min:2,credit_max:2,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["1B"],name:["–"],credit_min:2,credit_max:2,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["21","25"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["22"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["23","26"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["31A","31B","31C","31E","31F","31G"],
   name:["–"],credit_min:4.5,credit_max:4.5,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
   name:["–"],credit_min:4.5,credit_max:4.5,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["61","62"],name:["–"],credit_min:2,credit_max:2,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["1"],name:["–"],credit_min:0,credit_max:6,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["28"],name:["–"],credit_min:0,credit_max:1,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["3"],name:["–"],credit_min:0,credit_max:6,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["63"],name:["–"],credit_min:0,credit_max:4,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["5"],name:["–"],credit_min:0,credit_max:2,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["4"],name:["–"],credit_min:0,credit_max:2,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
   number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
   class1_min:0,class1_max:23,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
   number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
   class1_min:0,class1_max:23,remove:"-",restriction:"-",},

 ];

 const category = [

   {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
   number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
   class1_min:6,class1_max:6,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12群",
   number:["BC12"],name:["-"],credit_min:14,credit_max:24,
   class1_min:30,class1_max:30,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16,BE22群",
   number:["BC11","BC16","BE22"],name:["-"],credit_min:0,credit_max:10,
   class1_min:30,class1_max:30,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
   number:["BC13"],name:["-"],credit_min:6,credit_max:6,
   class1_min:30,class1_max:30,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
   number:["BC14"],name:["-"],credit_min:0,credit_max:4,
   class1_min:17,class1_max:44,remove:"-",restriction:"-",},

   {class1:"専門科目",class2:"-",class3:"自由科目",
   about:"BC11,BC12,BC13,BC16,BE22",
   number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
   class1_min:17,class1_max:44,remove:"-",restriction:"-",},


   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"必修科目",
   number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
   class1_min:5,class1_max:5,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"選択科目",
   number:["BC51"],name:["–"],credit_min:14,credit_max:14,
   class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"選択科目",
   number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
   class1_min:18,class1_max:18,remove:"-",restriction:"-",},

   {class1:"専門基礎科目",class2:"-",class3:"自由科目",
   number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
   class1_min:4,class1_max:10,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["11"],name:["–"],credit_min:2,credit_max:2,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["1A"],name:["–"],credit_min:2,credit_max:2,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["1B"],name:["–"],credit_min:2,credit_max:2,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["21","25"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["22"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["23","26"],name:["–"],credit_min:1,credit_max:1,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["31A","31B","31C","31E","31F","31G"],
   name:["–"],credit_min:4.5,credit_max:4.5,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
   name:["–"],credit_min:4.5,credit_max:4.5,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
   number:["61","62"],name:["–"],credit_min:2,credit_max:2,
   class1_min:22,class1_max:22,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["1"],name:["–"],credit_min:0,credit_max:6,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["28"],name:["–"],credit_min:0,credit_max:1,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["3"],name:["–"],credit_min:0,credit_max:6,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["63"],name:["–"],credit_min:0,credit_max:4,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["5"],name:["–"],credit_min:0,credit_max:2,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
   number:["4"],name:["–"],credit_min:0,credit_max:2,
   class1_min:0,class1_max:21,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
   number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
   class1_min:0,class1_max:23,remove:"-",restriction:"-",},

   {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
   number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
   class1_min:0,class1_max:23,remove:"-",restriction:"-",},

 ];

 // console.log(score);


 let result = []; //結果を入れる配列

 // console.table(page);
 // console.table(category);

 let del_number = 0;//消した数を記憶

// 縦割りのカテゴリー作成
   for(let i=0; i<category.length; i++){

     for(let j=i+1; j<category.length; j++){

       page[i+del_number].No = i;

       // if (j>i+2){ //最適化ポイント
       //   break;
       // };

       const check1 = category[i].class1 === category[j].class1;
       const check2 = category[i].class2 === category[j].class2;
       const check3 = category[i].class3 === category[j].class3;


       if(check1&&check2&&check3){
           page[j+del_number].No = i;
           del_number++
           category.splice(j,1);
           j--;
        };
      };
    };



  // categoryにkeyを追加
   for(let i=0; i<category.length; i++){
     category[i].class1_sum = 0.0;
   };

   for(let i=0; i<page.length; i++){
     page[i].credit_sum = 0.0;
   };

     // console.table(category);
     // console.table(page);

// 配列内の不要な要素の削除
//  function arydel(ary,exe){
//     for(let i=0; i<ary.length; i++){
//      for(let j=0; j<exe.length; j++){
//     ary[i].splice(exe[j]-j, 1);
//   };
//  };
// };
//
//
//   let exe = [] ;
//   // 消したい場所
//   exe = [0 ,1];
//   arydel(score,exe);


  // console.table(score);
  // console.log(score.length);

  // 任意の値(D)を含む配列の削除
    // index:一次配列の番号,value:削除した値
    for(let t=0; t<score.length; t++){
      if(score[t].score == "D"){
        score.splice(t,1);
        t--;
      };
    };

  // function serchdel(ary,index,){  // index:一次配列の番号,value:削除した値
  //   for(let t=0; t<ary.length; t++){
  //      console.log(score[t].score);
  //     if(ary[t].index == "D"){
  //       ary.splice(t,1);
  //       t--;
  //     };
  //   };
  // };


  // serchdel(score,score);

  console.log(score);

  // 数値変換が必要
  // console.log(parseFloat(score[2][2]) + parseFloat(score[0][2]));


  //必修判定
  // for(i=0; i<page.length; i++){
  //   if(page[i].credit_min > 0){    // 必修科目か判定
  //       let jugelement = "number";
  //     if(page[i].name = "-"){     // 要素(科目番号or科目名判定)
  //       jugelement = "name";
  //     };
  //     let elements = page[i][jugelement]
  //     elements.split(','); //要素を分割して配列に格納
  //   };
  // };

  // for(i=0; i<page.length; i++){
  //   if(page[i].> 0){    // 選択科目か判定
  //       let jugelement = "number";
  //     if(page[i].name = "-"){     // 要素(科目番号or科目名判定)
  //       jugelement = "name";
  //     };
  //     let elements = page[i][jugelement].split(','); //要素を分割して配列に格納
  //   };
  // };

  // let jugelement = "number";

 // console.log(page[1][jugelement]);

  //科目番号or科目名

  // let result = {};

  let count = 0 //result配列のindex
  let elements = [];

  // function judgement1(){

    for(let i=0; i<page.length;i++){     //卒業用件ループ

      if(page[i].credit_min > 0){    // 必修科目か判定
          let jugelement = "number";
        if(page[i].number == "-"){     // 要素(科目番号or科目名判定)
          jugelement = "name";
        };

        elements = page[i][jugelement];
        // let reg = /^elements/;
        console.log(elements);//要素を分割して配列に格納


      score_loop:
      for(let j=0; j<score.length;j++){      //成績データループ

        if(page[i].remove != "-"){

          for(let k=0; k<page[i].remove.length; k++){
              console.log(page[i].remove[k] === score[j][jugelement]);

            if (page[i].remove[k] === score[j].number||page[i].remove[k] === score[j].name){
              continue score_loop;
            };
          };
        };

        if(page[i].credit_min <= page[i].credit_sum){
           break;
        };

        for(let k=0; k<elements.length; k++){ //判定要素ループ

              // console.log(score[j][0]);

          if(elements[k] === score[j][jugelement]){   //科目名or科目番号の一致を判定 正規表現

              page[i].credit_sum = page[i].credit_sum + parseFloat(score[j].credit);
              category[page[i].No].class1_sum = category[page[i].No].class1_sum + parseFloat(score[j].credit);

              result[count] = [page[i].class1,page[i].class2,page[i].class3,
                page[i].about,score[j].number,score[j].name,score[j].credit];   // TODO:備考追加
              count++;

              let exe = [j];
              score.splice(j,1); //判定した成績を削除
              j--;
              //判定要素ループまで抜ける
              break;
              };
            };
          };

        };//要素判定ループ終了
      };
    //  };
    // };
  // };

  // judgement1();

  console.log(result);
  console.table(page);
  console.table(category);


     elements = [];

  // -----------------------------残りの科目判定---------------------------------

  for(let i=0; i<page.length;i++){   //卒業用件ループ

      let jugelement = "number";
      if(page[i].number == "-"){     // 要素(科目番号or科目名判定)
        jugelement = "name";
      };

      elements = page[i][jugelement];
      // let reg = /^elements/;
      console.log(elements);//要素を分割して配列に格納

    score_loop:
    for(let j=0; j<score.length;j++){
            //成績データループ

      if(category[page[i].No].class1_sum >= page[i].class1_max){
        break;
      };


      if(page[i].credit_sum >= page[i].credit_max){
        break;
      }

      for(let k=0; k<elements.length; k++){ //判定要素ループ

        if(page[i].remove != "-"){

          for(let k=0; k<page[i].remove.length; k++){
              console.log(page[i].remove[k] === score[j][jugelement]);

            if (page[i].remove[k] === score[j].number||page[i].remove[k] === score[j].name){
              continue score_loop;
            };
          };
        };

        if(elements[k] === score[j][jugelement]){   //科目名or科目番号の一致を判定 正規表現

            page[i].credit_sum = page[i].credit_sum + parseFloat(score[j].credit);
            category[page[i].No].class1_sum = category[page[i].No].class1_sum + parseFloat(score[j].credit);

            result[count] = [page[i].class1,page[i].class2,page[i].class3,
              page[i].about,score[j].number,score[j].name,score[j].credit];   // TODO:備考追加
            count++;

            // let exe = [j];
            score.splice(j,1); //判定した成績を削除
            j--;
            //判定要素ループまで抜ける
            break;
            };
          }; //判定要素ループ終了

        };
      };  //卒業用件ループ終了

      console.log(result);
      console.table(page);
      console.table(category);
      console.log(score);

      // 除外判定
