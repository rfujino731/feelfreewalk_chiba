// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage

//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require_tree .
$(document).ready(function () {
  $("#theTarget").skippr({
      // スライドショーの変化 ("fade" or "slide")
      transition : 'fade',
      // 変化に係る時間(ミリ秒)
      speed : 1500,
      // easingの種類
      easing : 'easeOutQuart',
      // ナビゲーションの形("block" or "bubble")
      navType : 'bubble',
      // 子要素の種類("div" or "img")
      childrenElementType : 'div',
      // ナビゲーション矢印の表示(trueで表示)
      arrows : true,
      // スライドショーの自動再生(falseで自動再生なし)
      autoPlay : true,
      // 自動再生時のスライド切替間隔(ミリ秒)
      autoPlayDuration : 3000,
      // キーボードの矢印キーによるスライド送りの設定(trueで有効)
      keyboardOnAlways : false,
      // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
      hidePrevious : false
  });
});

$(document).ready(function(){
let maxImage = "3"
$('#postarticle_postarticle_images_images').on('change', function (e) {
    if(e.target.files.length > maxImage){
      alert(`1つの記事の投稿できる写真は${maxImage}枚までです。`);
      // 選択したファイルをリセット
      document.getElementById("postarticle_postarticle_images_images").value = "";
      // 画像のプレビューが残っていた場合は、
      // リセットしないと選択できていると勘違いを誘発するため初期化。
      for( var i=0; i < maxImage; i++) {
        $(`#preview${i}`).attr('src', "");
      }
    }else{
      let reader = new Array(maxImage);
      // 画像選択を二回した時、一回目より数が少なかったりすると画面上に残るので初期化
      for( let i=0; i < maxImage; i++) {
        $(`#preview${i}`).attr('src', "");
      }
      for(let i=0; i<e.target.files.length; i++) {
        reader[i] = new FileReader();
        reader[i].onload = finisher(i,e); 
        reader[i].readAsDataURL(e.target.files[i]);
        // onloadは別関数で準備しないとfor文内では使用できないので、関数を準備。
        function finisher(i,e){
          return function(e){
          $(`#preview${i}`).attr('src', e.target.result);
          console.log(`#preview${i}`);
          }
        }
      }
  }
});

});


$(document).ready(function(){
  $('#postarticle_image_image').change(function(e){
    //ファイルオブジェクトを取得する
    let file = e.target.files[0];
    let reader = new FileReader();
    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }
    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#img1").attr("src", e.target.result);
      };
    })(file);
    reader.readAsDataURL(file);
  });
});


$('#postarticle_image_image').on('change', function () {
    alert('Hello World');
});

$('#test').mouseover(function () {
    alert('Hello World');
});

