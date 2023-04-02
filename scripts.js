/*picture information*/
let data0 = {
    photo: 'gal/img01.jpg',
    title: 'View of the Alps',
    description: 'Amazing Beautiful alps'
  };
  let data1 = {
    photo: 'gal/img02.jpg',
    title: 'Sea and sunset',
    description: 'Playful ocean with splashes colored in red free photo by antongorlin'
  };
  let data2 = {
    photo: 'gal/img03.jpg',
    title: 'Paris from top',
    description: 'view towards the Louvre free photo by eschu1952'
  };
  let data3 = {
    photo: 'gal/img04.jpg',
    title: 'New York',
    description: 'Manhattan Buildings free photo by manisi'
  };
  let data4 = {
    photo: 'gal/img05.jpg',
    title: 'Another amazing nature',
    description: 'Moraine Lake in Banff National Park - Canada'
  };
  let data5 = {
    photo: 'gal/img06.jpg',
    title: 'Flying ship',
    description: 'above burning city, created by AI'
  };
  let data6 = {
    photo: 'gal/img07.jpg',
    title: 'Train in city',
    description: 'created by AI'
  };
  let data7 = {
    photo: 'gal/img08.jpg',
    title: 'Other creation',
    description: 'not made by human'
  };
  let data8 = {
    photo: 'gal/img09.jpg',
    title: 'Moon and sun',
    description: 'from a cave, created by AI'
  };
  let currPhoto = 0;
  let imagesData = [data0,data1,data2,data3,data4,data5,data6,data7,data8];
  /*load main photo*/
  let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#p-title').text(imagesData[photoNumber].title);
    $('#p-desc').text(imagesData[photoNumber].description);
  }
  loadPhoto(currPhoto);

  let select = "#i0";
  /*outline selected minature*/
  let outlineMini = (miniNumber) => {
    select = "#i" + miniNumber;
    $('.smallImg img').not('[id*=select]').attr('class', ' ');
    $(select).attr("class", "outlined");
    $(".sipka").css({"display": "none"});
    $(select).prev().css({"display": "inline"});
  }
  let pocetDivu = imagesData.length;
  let margin = 0;

  /*align miniatures*/
 let align = () => {
    $(".smallImg").css("margin-left", margin * (-95));
    $(".uka").text(margin);
  }
/*click next to big photo to change it */
  $('#right').click(() => {
    if(currPhoto<imagesData.length-1){
    currPhoto++;
    loadPhoto(currPhoto);
    outlineMini(currPhoto);
    if(margin<imagesData.length-4){
      margin++;
      align();
    }
    }
    else{
      currPhoto = 0;
      loadPhoto(currPhoto);
      outlineMini(currPhoto);
      margin = 0;
      align();
    }
  })
  $('#left').click(() => {
    if(currPhoto>0){
    currPhoto--;
    loadPhoto(currPhoto);
    outlineMini(currPhoto);
    if(currPhoto<imagesData.length-4){
    margin--;
    align();
    }
    }
    else{
      currPhoto =imagesData.length-1;
      loadPhoto(currPhoto);
    outlineMini(currPhoto);
    margin =imagesData.length-4;
    align();
    }
  })
  /*load all miniatures*/
 imagesData.forEach(myFunction);
 function myFunction(item, index) {
  $('.smallImg').append("<div  class='hovertext' ><div class='hide'>" + item.title + "</div><span class='sipkaD'></span><span class='sipka'></span><img src='gal/m" + index + ".jpg' id='i" + index +"' class=' '></div>");
}
outlineMini(currPhoto);


$('.smallImg img').click(() => {
  currPhoto = $(event.target).attr('id').substring(1, 3);
  loadPhoto(currPhoto);
  outlineMini(currPhoto);
  })

  /*show arrow for miniature title */
  $(document).ready(function(){
$('.smallImg img').mouseenter(() => {
    $(event.target).siblings(".sipkaD").css({"visibility":"visible"});
    }) 
    $('.smallImg img').mouseleave(() => {
      $(event.target).siblings(".sipkaD").css({"visibility":"hidden"});
      }) 
    });
   
    $(".smallImg").css("width", 20 + pocetDivu*95);
    /*click next to miniatures */
    $(".left").click(() =>{
      if(margin>0){
          margin--;
          align();
      }
  });
  $(".right").click(() =>{
      if(margin<(pocetDivu-4)){
          margin++;
          align();
          
      }
  });
  /*show info popup */
  let popVisible=0;
  $(".info").click(() =>{
    if(popVisible==0){
   $(".popup").css("visibility", "visible");
   popVisible=1;
    }
    else{
      $(".popup").css("visibility", "hidden");
      popVisible=0;
    }
});
$(".close").click(() => {
  $(".popup").css("visibility", "hidden");
  popVisible=0;
});

             
 
  
  