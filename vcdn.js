(function() 
  { 
   var updateplugins = false; 
   var plugins = Lampa.Storage.get('plugins', '[]') 
     plugins.forEach
      (function(plug) 
   { 
   if (plug.url.indexOf('skaztv.online') >= 0) 
   { updateplugins = true; plug.url = (plug.url + '').replace('http://skaztv.online/vcdn.js', 'https://lampaplugins.github.io/store/vcdn.js'); 
   plug.url = (plug.url + '').replace('https://skaztv.online/vcdn.js', 'https://lampaplugins.github.io/store/vcdn.js'); }
   if (plug.url.indexOf('skaz.tv') >= 0) 
   { updateplugins = true; plug.url = (plug.url + '').replace('http://skaz.tv/vcdn.js', 'https://lampaplugins.github.io/store/vcdn.js'); 
   plug.url = (plug.url + '').replace('https://skaz.tv/vcdn.js', 'https://lampaplugins.github.io/store/vcdn.js'); } }) 
   if (updateplugins) Lampa.Storage.set('plugins', plugins); $.getScript('https://lampaplugins.github.io/store/vcdn.js'); 
      Lampa.Listener.follow('full', function(e) {
      if (e.type == 'complite') {
        setTimeout(function(){
                $(".view--online_cinema", Lampa.Activity.active().activity.render()).empty().append('<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 24 24"><path fill="currentColor" d="M11.585.031c-.342.087-.603.22-.94.478c-.354.273-.644.582-1.038 1.11c-.748 1.01-1.475 2.337-2.332 4.265c-.105.236-.198.43-.205.43a10 10 0 0 1-.211-.655c-.442-1.47-.77-2.426-1.095-3.196C5.254 1.25 4.793.638 4.234.43a1.25 1.25 0 0 0-.795.007c-.565.23-.985.838-1.318 1.914c-.522 1.676-.96 4.53-1.472 9.6c-.478 4.69-.675 7.526-.646 9.257c.012.835.045 1.181.15 1.62c.187.792.622 1.206 1.225 1.163c.159-.013.216-.03.392-.134c.173-.102.247-.17.434-.391c.504-.602.976-1.62 1.952-4.22c.364-.967 1.967-5.397 1.967-5.434c0-.026-.703-2.417-.822-2.8l-.04-.123l-.034.076c-.064.143-.72 1.934-1.448 3.952c-1 2.772-1.577 4.32-1.884 5.06l-.097.239l.012-.267c.01-.146.026-.495.038-.773c.086-1.766.33-4.554.703-8.068c.375-3.536.708-5.842 1.043-7.227c.1-.414.26-.959.294-1.004c.024-.027.233.424.404.871c.356.934.636 1.816 1.515 4.774c1.083 3.651 1.627 5.265 2.325 6.901c.61 1.436 1.104 2.305 1.72 3.036c.432.512.84.835 1.294 1.029a2.03 2.03 0 0 0 1.626.017c1.385-.557 2.565-2.553 3.971-6.719c.378-1.122.691-2.122 1.35-4.32c.911-3.045 1.313-4.251 1.7-5.128a7 7 0 0 1 .211-.447l.057-.098l.038.11c.33.916.663 2.636.971 5.02c.333 2.552.81 7.354.988 9.89c.057.818.12 1.976.117 2.192v.155l-.074-.169c-.235-.534-.779-1.999-1.9-5.102c-.869-2.404-1.484-4.076-1.515-4.113c-.011-.013-.029.014-.043.057c-.574 1.9-.836 2.777-.836 2.81c0 .04.976 2.756 1.686 4.69c.606 1.647 1.152 3.041 1.416 3.618c.349.764.605 1.206.888 1.543c.164.194.242.264.413.365c.376.213.704.16.97.007c.84-.495.985-1.903.66-6.39c-.164-2.229-.523-5.94-.834-8.602c-.494-4.228-1.017-6.645-1.66-7.671c-.254-.408-.601-.7-.938-.793a1.44 1.44 0 0 0-.668.017c-.876.298-1.548 1.546-2.557 4.75c-.136.434-.262.836-.276.892c-.016.059-.038.107-.045.107c-.01 0-.073-.13-.145-.29C15.516 3.2 14.494 1.523 13.542.677c-.278-.247-.729-.52-.995-.604c-.245-.076-.739-.098-.962-.04zm.682 2.15c.726.38 1.918 2.452 3.322 5.778l.44 1.04l-.345 1.099c-.639 2.046-1.05 3.227-1.534 4.382c-.672 1.605-1.316 2.657-1.812 2.958a.73.73 0 0 1-.615.042c-.798-.335-1.798-2.198-2.881-5.375a77 77 0 0 1-.805-2.51l-.135-.442l.346-.837c1.344-3.239 2.541-5.417 3.297-6.008c.273-.213.484-.25.722-.126Z"/></svg></svg>&nbsp&nbspCinema');
        }, 5);
        if (Lampa.Storage.get('card_interfice_type') === 'new') {
                addButton({
                    render: e.object.activity.render().find('.button--play'),
                    movie: e.data.movie
                });
         }
         else {
                addButton({
                    render: e.object.activity.render().find('.view--torrent'),
                    movie: e.data.movie
                });
         }
      }
    });
  
  })();
