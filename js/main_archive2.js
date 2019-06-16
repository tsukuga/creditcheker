// 卒業要件リスト
const Lists = {
    '国際総合学類/国際開発学/2015':[

            {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
            number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
            class1_min:6,class1_max:6,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12群",
            number:["BC12"],name:["-"],credit_min:14,credit_max:24,
            class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16,BE22群",
            number:["BC11","BC16","BE22"],name:["-"],credit_min:0,credit_max:10,
            class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
            number:["BC13"],name:["-"],credit_min:6,credit_max:6,
            class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
            number:["BC14"],name:["-"],credit_min:0,credit_max:4,
            class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門科目",class2:"-",class3:"自由科目",
            about:"BC11,BC12,BC13,BC16,BE22",
            number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
            class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},


            {class1:"専門基礎科目",class2:"-",class3:"必修科目",
            about:"国際学概論I",
            number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
            class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門基礎科目",class2:"-",class3:"必修科目",
            about:"国際学概論II",
            number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
            class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門基礎科目",class2:"-",class3:"必修科目",
            about:"国際学概論III",
            number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
            class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門基礎科目",class2:"-",class3:"必修科目",
            about:"国際学概論IV",
            number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
            class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門基礎科目",class2:"-",class3:"必修科目",
            about:"国際学概論V",
            number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
            class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門基礎科目",class2:"-",class3:"選択科目",
            about:"BC51(EDS,EDを除く)",
            number:["BC51"],name:["–"],credit_min:14,credit_max:14,
            class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:[["-"],["-"]],},

            {class1:"専門基礎科目",class2:"-",class3:"選択科目",
            about:"EDS,ED",
            number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
            class1_min:18,class1_max:18,remove:"-",restriction:[["-"],["-"]],},

            {class1:"専門基礎科目",class2:"-",class3:"自由科目",
            about:"BC51,BE21",
            number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
            class1_min:4,class1_max:10,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目I",
            number:["11"],name:["–"],credit_min:2,credit_max:2,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目IIA",
            number:["1A"],name:["–"],credit_min:2,credit_max:2,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目IIB",
            number:["1B"],name:["–"],credit_min:2,credit_max:2,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目IIA,IIB,IIC",
            number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目III",
            number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"基礎体育",
            number:["21","25"],name:["–"],credit_min:1,credit_max:1,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"応用体育",
            number:["22"],name:["–"],credit_min:1,credit_max:1,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"発展体育",
            number:["23","26"],name:["–"],credit_min:1,credit_max:1,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"第一外国語",
            number:["31A","31B","31C","31E","31F","31G"],
            name:["–"],credit_min:4.5,credit_max:4.5,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"第二外国語",
            number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
            name:["–"],credit_min:4.5,credit_max:4.5,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"情報",
            number:["61","62"],name:["–"],credit_min:2,credit_max:2,
            class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"総合科目I,II",
            number:["1"],name:["–"],credit_min:0,credit_max:6,
            class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"体育",
            number:["28"],name:["–"],credit_min:0,credit_max:1,
            class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"外国語",
            number:["3"],name:["–"],credit_min:0,credit_max:6,
            class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"情報(上級)",
            number:["63"],name:["–"],credit_min:0,credit_max:4,
            class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"国語",
            number:["5"],name:["–"],credit_min:0,credit_max:2,
            class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"芸術",
            number:["4"],name:["–"],credit_min:0,credit_max:2,
            class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
            about:"社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
            number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
            class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
            about:"教職に関する科目",
            number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
            class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},],
    '国際総合学類/国際開発学/2016':[

          {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
          number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
          class1_min:6,class1_max:6,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12群",
          number:["BC12"],name:["-"],credit_min:14,credit_max:24,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16,BE22群",
          number:["BC11","BC16","BE22"],name:["-"],credit_min:0,credit_max:10,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
          number:["BC13"],name:["-"],credit_min:6,credit_max:6,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
          number:["BC14"],name:["-"],credit_min:0,credit_max:4,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",
          about:"BC11,BC12,BC13,BC16,BE22",
          number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},


          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論I",
          number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論II",
          number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論III",
          number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論IV",
          number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論V",
          number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"BC51(EDS,EDを除く)",
          number:["BC51"],name:["–"],credit_min:14,credit_max:14,
          class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"EDS,ED",
          number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
          class1_min:18,class1_max:18,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"自由科目",
          about:"BC51,BE21",
          number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
          class1_min:4,class1_max:10,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目I",
          number:["11"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA",
          number:["1A"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIB",
          number:["1B"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA,IIB,IIC",
          number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目III",
          number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"基礎体育",
          number:["21","25"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"応用体育",
          number:["22"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"発展体育",
          number:["23","26"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第一外国語",
          number:["31A","31B","31C","31E","31F","31G"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第二外国語",
          number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"情報",
          number:["61","62"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"総合科目I,II",
          number:["1"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"体育",
          number:["28"],name:["–"],credit_min:0,credit_max:1,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"外国語",
          number:["3"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"情報(上級)",
          number:["63"],name:["–"],credit_min:0,credit_max:4,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"国語",
          number:["5"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"芸術",
          number:["4"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
          number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"教職に関する科目",
          number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},
          ],
    '国際総合学類/国際開発学/2017':[

          {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
          number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
          class1_min:6,class1_max:6,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12群",
          number:["BC12"],name:["-"],credit_min:14,credit_max:24,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16,BE22群",
          number:["BC11","BC16","BE22"],name:["-"],credit_min:0,credit_max:10,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
          number:["BC13"],name:["-"],credit_min:6,credit_max:6,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
          number:["BC14"],name:["-"],credit_min:0,credit_max:4,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",
          about:"BC11,BC12,BC13,BC16,BE22",
          number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},


          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論I",
          number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論II",
          number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論III",
          number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論IV",
          number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論V",
          number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"BC51(EDS,EDを除く)",
          number:["BC51"],name:["–"],credit_min:14,credit_max:14,
          class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"EDS,ED",
          number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
          class1_min:18,class1_max:18,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"自由科目",
          about:"BC51,BE21",
          number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
          class1_min:4,class1_max:10,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目I",
          number:["11"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA",
          number:["1A"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIB",
          number:["1B"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA,IIB,IIC",
          number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目III",
          number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"基礎体育",
          number:["21","25"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"応用体育",
          number:["22"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"発展体育",
          number:["23","26"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第一外国語",
          number:["31A","31B","31C","31E","31F","31G"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第二外国語",
          number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"情報",
          number:["61","62"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"総合科目I,II",
          number:["1"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"体育",
          number:["28"],name:["–"],credit_min:0,credit_max:1,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"外国語",
          number:["3"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"情報(上級)",
          number:["63"],name:["–"],credit_min:0,credit_max:4,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"国語",
          number:["5"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"芸術",
          number:["4"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
          number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"教職に関する科目",
          number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

        ],
    '国際総合学類/国際開発学/2018':[

          {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
          number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
          class1_min:6,class1_max:6,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12群",
          number:["BC12"],name:["-"],credit_min:14,credit_max:24,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16,BE22群",
          number:["BC11","BC16","BE22"],name:["-"],credit_min:0,credit_max:10,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
          number:["BC13"],name:["-"],credit_min:6,credit_max:6,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
          number:["BC14"],name:["-"],credit_min:0,credit_max:4,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",
          about:"BC11,BC12,BC13,BC16,BE22",
          number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},


          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論I",
          number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論II",
          number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論III",
          number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論IV",
          number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論V",
          number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"BC51(EDS,EDを除く)",
          number:["BC51"],name:["–"],credit_min:14,credit_max:14,
          class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"EDS,ED",
          number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
          class1_min:18,class1_max:18,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"自由科目",
          about:"BC51,BE21",
          number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
          class1_min:4,class1_max:10,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目I",
          number:["11"],name:["–"],credit_min:2,credit_max:2,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA",
          number:["1A"],name:["–"],credit_min:2,credit_max:2,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIB",
          number:["1B"],name:["–"],credit_min:2,credit_max:2,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA,IIB,IIC",
          number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目III",
          number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"基礎体育",
          number:["21","25"],name:["–"],credit_min:1,credit_max:1,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"応用体育",
          number:["22"],name:["–"],credit_min:1,credit_max:1,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          // {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          // about:"発展体育",
          // number:["23","26"],name:["–"],credit_min:1,credit_max:1,
          // class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第一外国語",
          number:["31A","31B","31C","31E","31F","31G"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第二外国語",
          number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"情報",
          number:["61","62"],name:["–"],credit_min:2,credit_max:2,
          class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"総合科目I,II",
          number:["1"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"体育",
          number:["28"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"外国語",
          number:["3"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"情報(上級)",
          number:["63"],name:["–"],credit_min:0,credit_max:4,
          class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"国語",
          number:["5"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"芸術",
          number:["4"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
          number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"教職に関する科目",
          number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

        ],
    '国際総合学類/国際関係学/2015':[


          {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
          number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
          class1_min:6,class1_max:6,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16群",
          number:["BC11","BC16"],name:["-"],credit_min:14,credit_max:24,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12,BE22群",
          number:["BC12","BE22"],name:["-"],credit_min:0,credit_max:10,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
          number:["BC13"],name:["-"],credit_min:6,credit_max:6,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
          number:["BC14"],name:["-"],credit_min:0,credit_max:4,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",
          about:"BC11,BC12,BC13,BC16,BE22",
          number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},


          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論I",
          number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論II",
          number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論III",
          number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論IV",
          number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論V",
          number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"BC51(EDS,EDを除く)",
          number:["BC51"],name:["–"],credit_min:14,credit_max:14,
          class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"EDS,ED",
          number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
          class1_min:18,class1_max:18,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"自由科目",
          about:"BC51,BE21",
          number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
          class1_min:4,class1_max:10,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目I",
          number:["11"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA",
          number:["1A"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIB",
          number:["1B"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA,IIB,IIC",
          number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目III",
          number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"基礎体育",
          number:["21","25"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"応用体育",
          number:["22"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"発展体育",
          number:["23","26"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第一外国語",
          number:["31A","31B","31C","31E","31F","31G"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第二外国語",
          number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"情報",
          number:["61","62"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"総合科目I,II",
          number:["1"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"体育",
          number:["28"],name:["–"],credit_min:0,credit_max:1,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"外国語",
          number:["3"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"情報(上級)",
          number:["63"],name:["–"],credit_min:0,credit_max:4,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"国語",
          number:["5"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"芸術",
          number:["4"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
          number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"教職に関する科目",
          number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

        ],
    '国際総合学類/国際関係学/2016':[

          {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
          number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
          class1_min:6,class1_max:6,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16群",
          number:["BC11","BC16"],name:["-"],credit_min:14,credit_max:24,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12,BE22群",
          number:["BC12","BE22"],name:["-"],credit_min:0,credit_max:10,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
          number:["BC13"],name:["-"],credit_min:6,credit_max:6,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
          number:["BC14"],name:["-"],credit_min:0,credit_max:4,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",
          about:"BC11,BC12,BC13,BC16,BE22",
          number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},


          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論I",
          number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論II",
          number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論III",
          number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論IV",
          number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論V",
          number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"BC51(EDS,EDを除く)",
          number:["BC51"],name:["–"],credit_min:14,credit_max:14,
          class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"EDS,ED",
          number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
          class1_min:18,class1_max:18,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"自由科目",
          about:"BC51,BE21",
          number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
          class1_min:4,class1_max:10,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目I",
          number:["11"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA",
          number:["1A"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIB",
          number:["1B"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA,IIB,IIC",
          number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目III",
          number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"基礎体育",
          number:["21","25"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"応用体育",
          number:["22"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"発展体育",
          number:["23","26"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第一外国語",
          number:["31A","31B","31C","31E","31F","31G"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第二外国語",
          number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"情報",
          number:["61","62"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"総合科目I,II",
          number:["1"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"体育",
          number:["28"],name:["–"],credit_min:0,credit_max:1,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"外国語",
          number:["3"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"情報(上級)",
          number:["63"],name:["–"],credit_min:0,credit_max:4,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"国語",
          number:["5"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"芸術",
          number:["4"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
          number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"教職に関する科目",
          number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

        ],
    '国際総合学類/国際関係学/2017':[

          {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
          number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
          class1_min:6,class1_max:6,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16群",
          number:["BC11","BC16"],name:["-"],credit_min:14,credit_max:24,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12,BE22群",
          number:["BC12","BE22"],name:["-"],credit_min:0,credit_max:10,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
          number:["BC13"],name:["-"],credit_min:6,credit_max:6,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
          number:["BC14"],name:["-"],credit_min:0,credit_max:4,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",
          about:"BC11,BC12,BC13,BC16,BE22",
          number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},


          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論I",
          number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論II",
          number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論III",
          number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論IV",
          number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論V",
          number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"BC51(EDS,EDを除く)",
          number:["BC51"],name:["–"],credit_min:14,credit_max:14,
          class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"EDS,ED",
          number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
          class1_min:18,class1_max:18,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"自由科目",
          about:"BC51,BE21",
          number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
          class1_min:4,class1_max:10,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目I",
          number:["11"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA",
          number:["1A"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIB",
          number:["1B"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目IIA,IIB,IIC",
          number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"総合科目III",
          number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"基礎体育",
          number:["21","25"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"応用体育",
          number:["22"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"発展体育",
          number:["23","26"],name:["–"],credit_min:1,credit_max:1,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第一外国語",
          number:["31A","31B","31C","31E","31F","31G"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"第二外国語",
          number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
          name:["–"],credit_min:4.5,credit_max:4.5,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
          about:"情報",
          number:["61","62"],name:["–"],credit_min:2,credit_max:2,
          class1_min:22,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"総合科目I,II",
          number:["1"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"体育",
          number:["28"],name:["–"],credit_min:0,credit_max:1,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"外国語",
          number:["3"],name:["–"],credit_min:0,credit_max:6,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"情報(上級)",
          number:["63"],name:["–"],credit_min:0,credit_max:4,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"国語",
          number:["5"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
          about:"芸術",
          number:["4"],name:["–"],credit_min:0,credit_max:2,
          class1_min:0,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
          number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

          {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
          about:"教職に関する科目",
          number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
          class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

        ],
    '国際総合学類/国際関係学/2018':[

          {class1:"専門科目",class2:"-",class3:"必修科目",about:"卒業論文",
          number:["BC14908"],name:["-"],credit_min:6,credit_max:6,
          class1_min:6,class1_max:6,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC11,BC16群",
          number:["BC11","BC16"],name:["-"],credit_min:14,credit_max:24,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC12,BE22群",
          number:["BC12","BE22"],name:["-"],credit_min:0,credit_max:10,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"選択科目",about:"BC13群",
          number:["BC13"],name:["-"],credit_min:6,credit_max:6,
          class1_min:30,class1_max:30,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",about:"インターンシップ",
          number:["BC14"],name:["-"],credit_min:0,credit_max:4,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門科目",class2:"-",class3:"自由科目",
          about:"BC11,BC12,BC13,BC16,BE22",
          number:["BC11","BC12","BC13","BC16","BE22"],name:["-"],credit_min:17,credit_max:40,
          class1_min:17,class1_max:44,remove:"-",restriction:[["-"],["-"]],},


          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論I",
          number:["BC50011"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論II",
          number:["BC50021"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論III",
          number:["BC50031"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論IV",
          number:["BC50041"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"必修科目",
          about:"国際学概論V",
          number:["BC50051"],name:["–"],credit_min:1,credit_max:1,
          class1_min:5,class1_max:5,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"BC51(EDS,EDを除く)",
          number:["BC51"],name:["–"],credit_min:14,credit_max:14,
          class1_min:18,class1_max:18,remove:["English Discussion Seminar","English Debate"],restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"選択科目",
          about:"EDS,ED",
          number:["-"],name:["English Discussion Seminar","English Debate"],credit_min:4,credit_max:4,
          class1_min:18,class1_max:18,remove:"-",restriction:[["-"],["-"]],},

          {class1:"専門基礎科目",class2:"-",class3:"自由科目",
          about:"BC51,BE21",
          number:["BC51","BE21"],name:["–"],credit_min:4,credit_max:10,
          class1_min:4,class1_max:10,remove:"-",restriction:[["-"],["-"]],},


            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目I",
            number:["11"],name:["–"],credit_min:2,credit_max:2,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目IIA",
            number:["1A"],name:["–"],credit_min:2,credit_max:2,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目IIB",
            number:["1B"],name:["–"],credit_min:2,credit_max:2,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目IIA,IIB,IIC",
            number:["1A","1B","1C"],name:["–"],credit_min:1,credit_max:1,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"総合科目III",
            number:["1D","1E","1F","1G"],name:["–"],credit_min:1,credit_max:1,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"基礎体育",
            number:["21","25"],name:["–"],credit_min:1,credit_max:1,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"応用体育",
            number:["22"],name:["–"],credit_min:1,credit_max:1,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            // {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            // about:"発展体育",
            // number:["23","26"],name:["–"],credit_min:1,credit_max:1,
            // class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"第一外国語",
            number:["31A","31B","31C","31E","31F","31G"],
            name:["–"],credit_min:4.5,credit_max:4.5,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"第二外国語",
            number:["32A","32B","32C","32E","3231","3234","33A","33B","33C","33E","3331","3334","34A","34B","34C","34E","3431","3434","35A","35B","35C","35E","3531","3534","36A","36B","36C","36E","3631","3634","37A","37B","37C","37E","3731","3734","38A","38B","38C","38E","3831","3834"],
            name:["–"],credit_min:4.5,credit_max:4.5,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"必修科目",
            about:"情報",
            number:["61","62"],name:["–"],credit_min:2,credit_max:2,
            class1_min:21,class1_max:21,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"総合科目I,II",
            number:["1"],name:["–"],credit_min:0,credit_max:6,
            class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"体育",
            number:["28"],name:["–"],credit_min:0,credit_max:2,
            class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"外国語",
            number:["3"],name:["–"],credit_min:0,credit_max:6,
            class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"情報(上級)",
            number:["63"],name:["–"],credit_min:0,credit_max:4,
            class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"国語",
            number:["5"],name:["–"],credit_min:0,credit_max:2,
            class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"共通科目",class3:"自由科目",
            about:"芸術",
            number:["4"],name:["–"],credit_min:0,credit_max:2,
            class1_min:0,class1_max:22,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
            about:"社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
            number:["BA","A","BB","C","E","F","G","H","W","Y","8","99"],name:["–"],credit_min:0,credit_max:23,
            class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},

            {class1:"基礎科目",class2:"関連科目",class3:"自由科目",
            about:"教職に関する科目",
            number:["90","91","92","93","94","95","96","97","98"],name:["–"],credit_min:0,credit_max:12,
            class1_min:0,class1_max:23,remove:"-",restriction:[["-"],["-"]],},


        ],
  };

// 所属のリストダウン作製
  let i = 0;
  for(var key in Lists){
       let op = document.createElement("option");
       op.value = i;  //value値
       op.text = key;   //テキスト値
       document.getElementById("list").appendChild(op);
       i++;
  };


const score = [

   {number:"BC13000",name:"国際学ゼミナールII",credit:" 3.0",score:"A",},
   {number:"BC14908",name:"卒業論文",credit:" 6.0",score:"A",},
   {number:"BC11",name:"国際金融論",credit:" 2.0",score:"A",},
   {number:"BC11",name:"安全保障論",credit:" 2.0",score:"A+",},
   {number:"1F00000",name:"デジタルクリエイティブ基礎",credit:" 1.0",score:"A",},
   {number:"2600000",name:"スノースポーツ",credit:" 1.0",score:"A",},
   {number:"BC11000",name:"ジャパニーズ・エコノミー",credit:" 2.0",score:"A",},
   {number:"BC12000",name:"途上国の教育と国際協力",credit:" 2.0",score:"D",},
   {number:"BC13000",name:"国際学ゼミナールI",credit:" 3.0",score:"A+",},
   {number:"BC13000",name:"独立論文",credit:" 3.0",score:"A",},
   {number:"F000000",name:"会計学概論",credit:" 2.0",score:"C",},
   {number:"BC11000",name:"人類学特講",credit:" 2.0",score:"A",},
   {number:"BC13",name:"国際学ゼミナールI",credit:" 3.0",score:"D"},
   {number:"A",name:"観光地域論",credit:" 1.0",score:"C",},
   {number:"BC11",name:"アジアの国際関係",credit:" 2.0",score:"A",},
   {number:"BC11",name:"国際貿易論",credit:" 2.0",score:"C",},
   {number:"BC11",name:"行政学I",credit:" 2.0",score:"A",},
   {number:"BC11",name:"ヨーロッパ社会経済史",credit:" 2.0",score:"A",},
   {number:"BC12",name:"北アフリカの経済と社会",credit:" 2.0",score:"A+",},
   {number:"BC12",name:"宇宙開発",credit:" 1.0",score:"A",},
   {number:"BC12",name:"都市計画の思想史",credit:" 2.0",score:"B",},
   {number:"BC16",name:"Mathematical Economics",credit:" 2.0",score:"B",},
   {number:"1C",name:"キャリアデザインIIb~学問と自分",credit:" 1.0",score:"D",},
   {number:"22",name:"応用体育サッカー(秋)",credit:" 0.5",score:"A",},
   {number:"3334",name:"ヨーロッパ文化圏の言語と文化IIBC(フランス語)",credit:" 1.0",score:"C",},
   {number:"BC11",name:"国際通商論",credit:" 1.0",score:"A",},
   {number:"BC11",name:"公共経済学",credit:" 2.0",score:"C",},
   {number:"BC11",name:"現代社会論",credit:" 2.0",score:"C",},
   {number:"BC11",name:"Comparative Economics",credit:" 2.0",score:"B",},
   {number:"BC11",name:"経済数学",credit:" 2.0",score:"B",},
   {number:"BC12",name:"統計科学",credit:" 2.0",score:"B",},
   {number:"BC12",name:"科学技術史",credit:" 2.0",score:"A",},
   {number:"BC12",name:"都市経済学",credit:" 2.0",score:"B",},
   {number:"BC51",name:"マクロ経済学概論",credit:" 2.0",score:"C",},
   {number:"C",name:"対人社会心理学",credit:" 2.0",score:"D",},
   {number:"22",name:"応用体育サッカー(春)",credit:" 0.5",score:"A+",},
   {number:"3331",name:"ヨーロッパ文化圏の言語と文化IIA(フランス語)",credit:" 0.5",score:"A",},
   {number:"8",name:"グローバルトレンズ・日本I",credit:" 1.0",score:"A",},
   {number:"BB",name:"現代経済史",credit:" 2.0",score:"C",},
   {number:"BC11",name:"国際紛争論I",credit:" 2.0",score:"C",},
   {number:"BC11",name:"スポーツ文化論",credit:" 2.0",score:"B",},
   {number:"BC11",name:"ミクロ経済学",credit:" 2.0",score:"D",},
   {number:"BC11",name:"基礎経済数学",credit:" 2.0",score:"B",},
   {number:"BC12",name:"Social Anthropology(社会人類学)",credit:" 2.0",score:"A+",},
   {number:"BC12",name:"Cプログラミング",credit:" 2.0",score:"C",},
   {number:"BC12",name:"データ解析",credit:" 2.0",score:"D",},
   {number:"BC12",name:"水環境論",credit:" 2.0",score:"B",},
   {number:"F",name:"経営組織論",credit:" 2.0",score:"C",},
   {number:"11",name:"みんなで創ろう「つくばアクションプロジェクト」",credit:" 1.0",score:"A",},
   {number:"1A",name:"新時代を拓く研究の最前線II",credit:" 1.0",score:"B",},
   {number:"1B",name:"経済学入門II",credit:" 1.0",score:"C",},
   {number:"1C",name:"ストレスとうまくつき合おう",credit:" 1.0",score:"A",},
   {number:"21",name:"基礎体育ダンス(秋)",credit:" 0.5",score:"A",},
   {number:"31A",name:"英語基礎II",credit:" 1.0",score:"B",},
   {number:"31B",name:"異文化と英語II",credit:" 1.0",score:"B",},
   {number:"31C",name:"総合英語II",credit:" 1.0",score:"A",},
   {number:"33A",name:"フランス語基礎AII",credit:" 1.0",score:"B",},
   {number:"33A",name:"フランス語基礎BII",credit:" 1.0",score:"C",},
   {number:"A",name:"グローバル人材養成講義XVIII",credit:" 1.5",score:"A",},
   {number:"BC50021",name:"国際学概論II",credit:" 1.0",score:"A",},
   {number:"BC50041",name:"国際学概論IV",credit:" 1.0",score:"B",},
   {number:"BC51",name:"国際経済論",credit:" 2.0",score:"A",},
   {number:"BC51",name:"グローバルコミュニケーション論",credit:" 2.0",score:"B",},
   {number:"BC51",name:"情報メディア概論",credit:" 2.0",score:"B",},
   {number:"BC51",name:"Media Politics",credit:" 2.0",score:"A",},
   {number:"BC51",name:"English Discussion Seminar",credit:" 2.0",score:"C",},
   {number:"11",name:"フレッシュマン・セミナー",credit:" 1.0",score:"P",},
   {number:"1A",name:"新時代を拓く研究の最前線I",credit:" 1.0",score:"B"},
   {number:"1B",name:"言語の万華鏡I",credit:" 1.0",score:"C",},
   {number:"21",name:"基礎体育ニュースポーツ(春)",credit:" 0.5",score:"A",},
   {number:"31A",name:"英語基礎I",credit:" 0.5",score:"A",},
   {number:"31B",name:"異文化と英語I",credit:" 0.5",score:"A",},
   {number:"31C",name:"総合英語I",credit:" 0.5",score:"B",},
   {number:"33A",name:"フランス語基礎AI",credit:" 0.5",score:"C",},
   {number:"33B",name:"フランス語基礎BI",credit:" 0.5",score:"B",},
   {number:"61",name:"情報(講義)",credit:" 1.0",score:"B",},
   {number:"62",name:"情報(実習)",credit:" 1.0",score:"B",},
   {number:"BC50011",name:"国際学概論I",credit:" 1.0",score:"B",},
   {number:"BC50031",name:"国際学概論III",credit:" 1.0",score:"A",},
   {number:"BC50051",name:"国際学概論V",credit:" 1.0",score:"B",},
   {number:"BC51",name:"国際関係史序説",credit:" 2.0",score:"A",},
   {number:"BC51",name:"初級ミクロ経済学",credit:" 2.0",score:"C",},
   {number:"BC51",name:"数理科学I",credit:" 2.0",score:"A+",},
   {number:"BC51",name:"数理科学II",credit:" 2.0",score:"A",},
   {number:"BC51",name:"English Debate",credit:" 2.0",score:"B",},

 ];

console.log(score);

function makeTable(data, tableId){
    // 表の作成開始
    var rows=[];
    var table = document.createElement("table");

    // 表に2次元配列の要素を格納
    for(i = 0; i < data.length; i++){
        rows.push(table.insertRow(-1));  // 行の追加
        for(j = 0; j < data[0].length; j++){
            cell=rows[i].insertCell(-1);
            cell.appendChild(document.createTextNode(data[i][j]));
            // 背景色の設定
            if(i==0){
                cell.style.backgroundColor = "#bbb"; // ヘッダ行
            }else{
                cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
            }
        }
    }
    // 指定したdiv要素に表を加える
    document.getElementById(tableId).appendChild(table);
}



// リストで選択された所属から使用する卒業要件を選択する

 document.getElementById("start").onclic = function(){

 const belong = document.getElementById("list");
 const str = belong.options[belong.selectedIndex].text;

 const page = Lists[str].concat();
 const category = Lists[str].concat();

 console.log(page);




 let result = [];       //結果を入れる配列
 let del_number = 0;    //消した数を記憶


// 縦割りのカテゴリー作成
   for(let i=0; i<category.length; i++){
     for(let j=i+1; j<category.length; j++){

       page[i+del_number].No = i;

       if (j>i+2){ //最適化ポイント
         break;
       };

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

  // 成績からDを削除
    for(let t=0; t<score.length; t++){
      if(score[t].score == "D"){
        score.splice(t,1);
        t--;
      };
    };



  // console.log(score);

// --------------------------------判定開始-------------------------------------

  let count = 0;                   //result配列のindex
  let elements = [];              //卒業要件の要素を格納する配列
  elements_number = [];
  let bool = true;
  let element = [];
  let restriction_sum = [];

    //卒業用件ループ
    for(let i=0; i<page.length;i++){

      if(page[i].credit_min > 0){    // 必修科目か判定
          let jugelement = "number";
        if(page[i].number == "-"){     // 要素(科目番号or科目名判定)
          jugelement = "name";
        };

        elements_number = page[i][jugelement];


      score_loop:

      for(let j=0; j<score.length;j++){      //成績データループ

        if(page[i].credit_min <= page[i].credit_sum){
           break;
        };

        if(page[i].remove != "-"){           //除外判定

          for(let k=0; k<page[i].remove.length; k++){


            if (page[i].remove[k] === score[j].number||page[i].remove[k] === score[j].name){
              continue score_loop;
            };
          };
        };

        if(page[i].restriction[0][0]!= "-"){           //制限ループ

          for(let k=0; k<page[i].restriction[0].length; k++){

            if(page[i].restriction[1][0] <= restriction_sum){
                continue score_loop;
            }

            if (page[i].restriction[k] === score[j].number||page[i].restriction[k] === score[j].name){
                restriction_sum = restriction_sum + parseFloat(score[j].credit);
            };
          };
        };

        for(let k=0; k<elements_number.length; k++){ //判定要素ループ

        element[k] = page[i][jugelement][k];

        elements[k] = new RegExp('(^)' + element[k]);

        bool = elements[k].test(score[j][jugelement]);


          if(bool){
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

  console.log(result);
  console.table(page);
  console.table(category);



  // -----------------------------残りの科目判定---------------------------------
  //卒業用件ループ
  for(let i=0; i<page.length;i++){

     console.log(page[i].restriction[0][0]);

      let jugelement = "number";
      if(page[i].number == "-"){     // 要素(科目番号or科目名判定)
        jugelement = "name";
      };

      elements_number = page[i][jugelement];;   //要素を分割して配列に格納

    score_loop:
    for(let j=0; j<score.length;j++){    //成績データループ

      if(category[page[i].No].class1_sum >= page[i].class1_max){ //上限判定
        break;
      };


      if(page[i].credit_sum >= page[i].credit_max){             //上限判定
        break;
      }

        if(page[i].remove != "-"){                 //除外判定

          for(let k=0; k<page[i].remove.length; k++){
              console.log(page[i].remove[k] === score[j][jugelement]);

            if (page[i].remove[k] === score[j].number||page[i].remove[k] === score[j].name){
              continue score_loop;
            };
          };
        };

        if(page[i].restriction[0][0]!= "-"){           //制限ループ

          for(let k=0; k<page[i].restriction[0].length; k++){

            if(page[i].restriction[1][0] <= restriction_sum){
                continue score_loop;
            }

            if (page[i].restriction[k] === score[j].number||page[i].restriction[k] === score[j].name){
                restriction_sum[i] = restriction_sum + parseFloat(score[j].credit);
            };
          };
        };

        for(let k=0; k<elements_number.length; k++){ //判定要素ループ

        element[k] = page[i][jugelement][k];

        elements[k] = new RegExp('(^)' + element[k]);

        bool = elements[k].test(score[j][jugelement]);


        if(bool){   //科目名or科目番号の一致を判定 正規表現

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

        }; //成績データループ終了

      };  //卒業用件ループ終了

      makeTable(result,"table");

};
      // console.table(page);
      // console.table(category);
      // console.table(score);
      // console.table(page);
      // console.table(result);


    var file = document.getElementById('file');
    var resul = document.getElementById('resul');

    var fileData;
    var reader;


    // ファイルが選択されたとき
    file.addEventListener('change', function(e){
        // 選択されたファイルの情報を取得
        fileData = e.target.files[0];

        reader = new FileReader();
        reader.readAsText(fileData);

        console.log(fileData);
        console.log(reader);

        reader.onload = function () {
		    var value = reader.result.split("\n");

        console.log(reader.result);
        console.log(value);

        var itemArr = [];
        // itemArr[1] = value[1].split("\",\"");
        // console.log(itemArr[1]);

        for (var i = 0; i < value.length; i++) {
        itemArr[i] = value[i].split("\",\"");
       };

       console.log(itemArr);

       for(let t=0; t<itemArr.length; t++){
         if(itemArr[t][7] == "D"){
           itemArr.splice(t,1);
           t--;
         };
       };

       itemArr.splice(0,1);
       itemArr.splice(itemArr.length-1,1);

       console.log(itemArr);

      };

      });



//  document.getElementById("start").onclick = function(){
// // 表の動的作成
//  makeTable(result,"table");
// };
