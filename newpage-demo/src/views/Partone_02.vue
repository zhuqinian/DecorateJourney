<!--html-->
<template>
  <div class="flying_effect">
<!--    <h1 style="color: black">这里是flying effect</h1>-->
    <section class="page">
      <section>
        <ul class="tabs-controls">
          <li class="tabs-controlsitem">
            <a href="#" class="tabs-controls-link tabs-controls-link-active" data-id="1">
              新能源车市场现状
            </a>
          </li>
          <li class="tabs-controls-item">
            <a href="#" class="tabs-controls-link" data-id="2">
              市场规模
            </a>
          </li>
          <li class="tabs-controls-item">
            <a href="#" class="tabs-controls-link" data-id="3">
              市场格局
            </a>
          </li>
          <li class="tabs-controls-item">
            <a href="#" class="tabs-controls-link" data-id="4">
              用户画像
            </a>
          </li>
<!--          <li class="tabs-controls-item">-->
<!--            <a href="#" class="tabs-controls-link" data-id="5">-->
<!--              FAQ-->
<!--            </a>-->
<!--          </li>-->
<!--          <li class="tabs-controls-item">-->
<!--            <a href="#" class="tabs-controls-link" data-id="6">-->
<!--              LOCATION-->
<!--            </a>-->
<!--          </li>-->
        </ul>
      </section>
      <section class="cards-container">
        <div class="card card-current" id="1">
          <h1>新能源车市场现状</h1>
          <br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div class="social">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-youtube"></i>
          </div>
        </div>
        <div class="card" id="2">
          <h1>市场规模</h1>
          <br>
          <p>
            Elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div class="social">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-youtube"></i>
          </div>
        </div>
        <div class="card" id="3">
          <h1>市场格局</h1>
          <br>
          <p>
            Consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div class="social">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-youtube"></i>
          </div>
        </div>
        <div class="card" id="4">
          <h1>用户画像</h1>
          <br>
          <p>
            Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrcaecat cupidatat nonv proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="social">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-youtube"></i>
          </div>
        </div>
<!--        <div class="card" id="5">-->
<!--          <h1>FAQ</h1>-->
<!--          <br>-->
<!--          <p>-->
<!--            Ut enim ad minim veniam,-->
<!--            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo-->
<!--            consequat. Duis aute irure dolor in reprehenderit in vo cupidatat non-->
<!--            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--          </p>-->
<!--          <div class="social">-->
<!--            <i class="fa fa-facebook"></i>-->
<!--            <i class="fa fa-twitter"></i>-->
<!--            <i class="fa fa-linkedin"></i>-->
<!--            <i class="fa fa-youtube"></i>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="card" id="6">-->
<!--          <h1>LOCATION</h1>-->
<!--          <br>-->
<!--          <p>-->
<!--            Labore et dolore magna aliqua. Ut enim ad minim veniam,-->
<!--            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo-->
<!--            consequat. Duis aute irure dolor in reprehenderit in volupest laborum.-->
<!--          </p>-->
<!--          <div class="social">-->
<!--            <i class="fa fa-facebook"></i>-->
<!--            <i class="fa fa-twitter"></i>-->
<!--            <i class="fa fa-linkedin"></i>-->
<!--            <i class="fa fa-youtube"></i>-->
<!--          </div>-->
<!--        </div>-->
      </section>
    </section>
  </div>
</template>

<!--JavaScript-->
<script>
  $(document).ready(function() {
    var oldId = null;

    $('.tabs-controls-link').click(function(e) {
      e.preventDefault();

      if ($(this).hasClass('tabs-controls-link-active')) {
        return false;
      }

      var currentId = parseInt($(this).data('id'), 10);
      $('.tabs-controls-link-active').removeClass('tabs-controls-link-active');
      $(this).addClass('tabs-controls-link-active');

      if (currentId < oldId) { // item is hidden
        var timing = $('.card.hidden').length * 100;
        $('.card').each(function(index) {
          if (index > (currentId - 1 ) || index == (currentId - 1)) {
            window.setTimeout(function() {
              $('.card').eq(index).removeClass('hidden');
            }, timing - (index * 100));
          }
        });
      } else {
        $('.card').each(function(index) {
          if (index < (currentId - 1)) {
            window.setTimeout(function() {
              $('.card').eq(index).addClass('hidden');
            }, index * 100);
          }
        });
      }

      oldId = currentId;
    });
  });

</script>

<!--css-->

<style>

.flying_effect {
  background-image: url("../assets/images/background/sunny.png");
  background-size: cover;
  font-family: 'Roboto Condensed', sans-serif;
  overflow: hidden;
}
h1 {
  margin: 0;
  font-size: 22px;
  line-height: 1;
  color: #423e37;
}
.tabs-controls a{
  color: black;
}
.page {
  width: 100vw;
  height: 100vh;
  right: 200px;
  bottom: 60px;
  min-height: 700px;
  overflow: hidden;
  margin-left: -25px;
  margin-top: 45px;
}
.tabs-controls {
  position: relative;
  z-index: 10;
  left: 200px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 50px 0 50px;
  list-style-type: none;
}
.tabs-controls-link {
  position: relative;
  display: block;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
}
.tabs-controls-link:after {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 0;
  height: 4px;
  background-color: #00c380;
  border-radius: 2px;
  margin: auto;
  content: '';
  transition: width 0.4s;
}
.tabs-controls-link-active:after {
  width: 100%;
}
.cards-container {
  position: relative;
  z-index: 1;
  width: 500px;
  height: calc(100vh - 205px);
  margin: 0 auto;
}
.card {
  position: absolute;
  width: 1000px;
  height: 600px;
  background:linear-gradient( to top,lightgreen,lightseagreen,#00c380);
  /*background-color: #00c380;*/
  border: 1px solid #423e37;
  box-shadow: 9px 11px 3px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 40px;
  transition: transform 0.3s, opacity 0.2s;
}
.card.hidden {
  z-index: 100;
  background-color: #fff;
  color: #fff;
  opacity: 0;
  transition: color 0.5s, background-color 0.5s, transform 1s, opacity 0.2s 0.4s;
}
.card.hidden h1 {
  color: #fff;
  transition: color 0.5s;
}
.card.hidden:nth-of-type(1) {
  transform: rotate(-61deg) translateX(101%) translateY(-42%) scale(0.7) skewX(3deg) skewY(5deg);
}
.card.hidden:nth-of-type(2) {
  transform: rotate(-20deg) translateX(101%) translateY(-30%) scale(0.6) skewX(6deg) skewY(12deg);
}
.card.hidden:nth-of-type(3) {
  transform: rotate(-89deg) translateX(101%) translateY(-41%) scale(1) skewX(4deg) skewY(1deg);
}
.card.hidden:nth-of-type(4) {
  transform: rotate(-88deg) translateX(101%) translateY(-26%) scale(0.5) skewX(9deg) skewY(11deg);
}
.card.hidden:nth-of-type(5) {
  transform: rotate(-80deg) translateX(101%) translateY(-40%) scale(0.6) skewX(12deg) skewY(5deg);
}
.card.hidden:nth-of-type(6) {
  transform: rotate(-85deg) translateX(101%) translateY(-21%) scale(0.3) skewX(12deg) skewY(7deg);
}
.card:nth-of-type(1) {
  z-index: 5;
  transform: translateX(0px) translateY(0px);
}
.card:nth-of-type(2) {
  z-index: 4;
  transform: translateX(10px) translateY(10px);
}
.card:nth-of-type(3) {
  z-index: 3;
  transform: translateX(20px) translateY(20px);
}
.card:nth-of-type(4) {
  z-index: 2;
  transform: translateX(30px) translateY(30px);
}
.card:nth-of-type(5) {
  z-index: 1;
  transform: translateX(40px) translateY(40px);
}
.card:nth-of-type(6) {
  z-index: 0;
  transform: translateX(50px) translateY(50px);
}

.social .fa{
  background-image: url("../assets/images/background/sunny.png");
  background-size: cover;
  width: 35px;
  height: 35px;
  color: white;
  text-align: center;
  line-height: 35px;
  margin-top: 20px;
}
</style>
