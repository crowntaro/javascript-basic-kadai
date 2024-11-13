// const question = document.querySelectorAll('[data-trigger]');
// const answer = document.querySelectorAll('[data-accordion]');


// const accordion = ({currentTarget}) => {
//     question.forEach((elm) => {
//         elm.classList.toggle('--active');
//     });
// };

// answer.forEach((elm) => {
//     elm.addEventListener('click', accordion);
// });




// const question = document.querySelectorAll('[data-trigger]'); // js-ac要素を取得し変数に格納
// const answer = document.querySelectorAll('[data-accorion]');

// const qa = () => { // クリック時に発火する関数を作成
//     answer.classList.toggle('--active');// js-ac要素の「次の要素」
//     const question = this; // js-ac要素自身を変数に格納
//     question.classList.toggle('--active'); // js-ac要素にis-openつけ外し
//   }
// console.log(this);
//   this.addEventListener('click', qa);// クリックイベントを登録、acToggle関数を発火

//   for (let i = 0; i < answer.length; i++) { 
//     answer[i].addEventListener('click', qa);
//   }

const qa = document.querySelectorAll('[data-trigger]');
let i = 0
for (i > 0; i < qa.length; i++) {
    qa[i].addEventListener('click', accodionToggle);
};

    // 処理
    function accodionToggle(e) {
        // クリックした要素にクラスを付加
        e.currentTarget.classList.toggle('--active');
        // クリックした要素の兄弟要素を取得
        const child = e.currentTarget.nextElementSibling;
        //　兄弟要素にクラスを付加
        child.classList.toggle('--active');
    }
