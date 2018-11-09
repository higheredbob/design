$(document).ready(function(){
    var shad = $('#shad1'),
    cbg = $('#cardbg'),
    txtbotg = $('#textbotgroup'),
    txtb = $('#textbot'),
    cap = $('#cardtop'),
    $fab = $('#fabcard'),
    $just = $('#justfabs'),
    fshad = $('#fabshad'),
    fcir = $('#fabcir'),
    ex = $('#exclam'),
    xcir = $('#excirc'),
    xar = $('#xarrow'),
    xarl = $('#xarrowl'),
    xarr = $('#xarrowr'),
    txttopg = $('#texttopgroup'),
    txtt = $('#texttop'),
     shada = $('#shad1a'),
    cbga = $('#cardbga'),
    txtbotga = $('#textbotgroupa'),
    txtba = $('#textbota'),
    capa = $('#cardtopa'),
    $faba = $('#fabcarda'),
    $justa = $('#justfabsa'),
    fshada = $('#fabshada'),
    fcira = $('#fabcira'),
    exa = $('#exclama'),
    xcira = $('#excirca'),
    xara = $('#xarrowa'),
    xarla = $('#xarrowla'),
    xarra = $('#xarrowra'),
    txttopga = $('#texttopgroupa'),
    txtta = $('#texttopa'),
    tl = new TimelineMax({paused:true}),
    tla = new TimelineMax({paused:true});
    tl
        .to($just, 0.4, {scale:0.01, transformOrigin:'center center', ease:Circ.easeOut}, 0.05)
        .to([ex,xcir], 0.4, {rotationZ:-360, scale:0.01, transformOrigin:'center center', ease:Linear.easeNone}, 0.05)
        .to(cbg, 0.9, {scaleY:1.5, transformOrigin:'center top', ease:Expo.easeOut}, 0.05)
        .to(shad, 0.6, {scaleY:0.83, transformOrigin:'center top', ease:Expo.easeOut, delay: 0.2}, 0.1)
        .to($just, 0.05, {y:110, transformOrigin:'center center', ease:Circ.easeOut}, 0.48)
        .to([xar,xarl,xarr], 0.05, {y:440, transformOrigin:'center center', ease:Linear.easeNone}, 0.47)
        .to(txtbotg, 0.5, {y:60, opacity:0.9, transformOrigin:'center center', ease:Power2.easeInOut}, 0.23)
        .to(txttopg, 0.5, {opacity:0.01, ease:Power2.easeInOut}, 0.2)
        .to(xar, 0.4, {rotationZ:180, opacity:1, transformOrigin:'center center', ease:Linear.easeNone}, 0.535)
        .to(xarr, 0.4, {rotationZ:-30, y:400, x:10, opacity:1, transformOrigin:'center center', ease:Linear.easeNone}, 0.535)
        .to(xarl, 0.4, {rotationZ:30, y:400, x:-10, opacity:1, transformOrigin:'center center', ease:Linear.easeNone}, 0.535)
        .to($just, 0.4, {scale:1, transformOrigin:'center center', ease:Circ.easeOut}, 0.539)

    tla
        .to($justa, 0.4, {scale:0.01, transformOrigin:'center center', ease:Circ.easeOut}, 0.05)
        .to([exa,xcira], 0.4, {rotationZ:-360, scale:0.01, transformOrigin:'center center', ease:Linear.easeNone}, 0.05)
        .to(cbga, 0.9, {scaleY:1.5, transformOrigin:'center top', ease:Expo.easeOut}, 0.05)
        .to(shada, 0.6, {scaleY:0.83, transformOrigin:'center top', ease:Expo.easeOut, delay: 0.2}, 0.1)
        .to($justa, 0.05, {y:110, transformOrigin:'center center', ease:Circ.easeOut}, 0.48)
        .to([xara,xarla,xarra], 0.05, {y:440, transformOrigin:'center center', ease:Linear.easeNone}, 0.47)
        .to(txtbotga, 0.5, {y:60, opacity:0.9, transformOrigin:'center center', ease:Power2.easeInOut}, 0.23)
        .to(txttopga, 0.5, {opacity:0.01, ease:Power2.easeInOut}, 0.2)
        .to(xara, 0.4, {rotationZ:180, opacity:1, transformOrigin:'center center', ease:Linear.easeNone}, 0.535)
        .to(xarra, 0.4, {rotationZ:-30, y:400, x:10, opacity:1, transformOrigin:'center center', ease:Linear.easeNone}, 0.535)
        .to(xarla, 0.4, {rotationZ:30, y:400, x:-10, opacity:1, transformOrigin:'center center', ease:Linear.easeNone}, 0.535)
        .to($justa, 0.4, {scale:1, transformOrigin:'center center', ease:Circ.easeOut}, 0.539)

    $fab.click(function(){
        if($fab.hasClass('opened')){
            tl.reverse();
            $fab.removeClass('opened');
        } else {
            tl.play();
            $fab.addClass('opened');
        }
    });
    $faba.click(function(){
        if($faba.hasClass('opened')){
            tla.reverse();
            $faba.removeClass('opened');
        } else {
            tla.play();
            $faba.addClass('opened');
        }
    });
    var radio = $('#radiosm');
    var radio2sm = $('#radio2sm');
    var chksm = $('#chksm');
    var chksmtoo = $('#chksm2');
    var tlbb = new TimelineMax({paused:true});
    var newtl = new TimelineMax({paused:true});
    var osmrd = $('#clearbox');
    var osmchk = $('#clearrect');
    var radripple = $('#rippl1');
    var boxripple = $('#rippl2');
    var box = $('#chkbox');

  TweenMax.set(chksm, {fill:'none',rotationZ:'-90',scale:0.25, transformOrigin:'50% 50%'})
  TweenMax.set(chksmtoo, {fill:'none',rotationZ:'90',scaleY:0.15, transformOrigin:'50% 50%'})

  newtl
    .to(chksm, 0.7, {fill:'#ffad67', rotationZ:'0',scale:1,transformOrigin:'50% 50%'})
    .to(chksmtoo, 0.7, {fill:'#fff', rotationZ:'0',scaleY:1,transformOrigin:'50% 50%'},.01)
    .to(boxripple, 0.6, {scale:145,opacity:0.005,transformOrigin:'50% 50%'},.01)
    .to(box, 0.4, {fill:'none'},0.01)

  TweenMax.set(radio, {fill:'none', scale:0.25, transformOrigin:'50% 50%'})
  TweenMax.set(radio2sm, {fill:'#424242'})
  TweenMax.set(radripple, {fill:'none'})
  tlbb
    .to(radio, 0.6, {scale:1.5, transformOrigin:'50% 50%', fill:"#ffad67",})
    .to(radio2sm, 0.6, {scale:1.5, transformOrigin:'50% 50%', fill:"#ffad67"}, .01)
    .to(radripple, 0.6, {scale:65, opacity:0.005, fill:'#ffad67', transformOrigin:'50% 50%'},0.01)
    .to(radio, 0.5, {scale:1, transformOrigin:'50% 50%', fill:"#ffad67",},.63)
    .to(radio2sm, 0.5, {scale:1, transformOrigin:'50% 50%', fill:"#ffad67"},.63)


  osmchk.click(function(){
    if(osmchk.hasClass('opened')) {
      newtl.reverse();
      osmchk.removeClass('opened');
    } else {
      newtl.play();
      osmchk.addClass('opened');
    }
  })
  osmrd.click(function(){
    if(osmrd.hasClass('opened')) {
      tlbb.reverse();
      osmrd.removeClass('opened');
    } else {
      tlbb.play();
      osmrd.addClass('opened');
    }
  })
})
