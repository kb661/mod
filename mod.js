(function () {
    'use strict';

    function startsWith(str, searchString) {
      return str.lastIndexOf(searchString, 0) === 0;
    }

    function endsWith(str, searchString) {
      var start = str.length - searchString.length;
      if (start < 0) return false;
      return str.indexOf(searchString, start) === start;
    }

    var myIp = '';

    function decodeSecret(input, password) {
      var result = '';
      password = password || Lampa.Storage.get('online_mod_secret_password', '') + '';

      if (input && password) {
        var hash = Lampa.Utils.hash(password);

        while (hash.length < input.length) {
          hash += hash;
        }

        var i = 0;

        while (i < input.length) {
          result += String.fromCharCode(input[i] ^ hash.charCodeAt(i));
          i++;
        }
      }

      return result;
    }

    function isDebug() {
      var secret = decodeSecret([92, 85, 91, 65, 84]);
      return secret === 'debug';
    }

    function isDebug2() {
      var secret = decodeSecret([86, 81, 81, 71, 83]);
      return secret === 'debug';
    }

    function fanserialsHost() {
      return 'https://s1.fanserial.tv';
    }

    function filmixToken(dev_id, token) {
      return '?user_dev_id=' + dev_id + '&user_dev_name=Xiaomi&user_dev_token=' + token + '&user_dev_vendor=Xiaomi&user_dev_os=14&user_dev_apk=2.2.0&app_lang=ru-rRU';
    }

    function filmixUserAgent() {
      return 'okhttp/3.10.0';
    }

    function baseUserAgent() {
      return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36';
    }


    function setMyIp(ip) {
      myIp = ip;
    }

    function getMyIp() {
      return myIp;
    }

    function proxy(name) {
      var ip = getMyIp() || '';
      var param_ip = Lampa.Storage.field('online_mod_proxy_find_ip') === true ? 'ip' + ip + '/' : '';
      var proxy1 = new Date().getHours() % 2 ? 'https://cors.nb557.workers.dev:8443/' : 'https://cors.fx666.workers.dev:8443/';
      var proxy2 = (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'iqslgbok.deploy.cx/';
      var proxy3 = 'https://cors557.deno.dev/';
      var proxy_apn = '';
      var proxy_secret = '';
      var proxy_secret_ip = '';

      if (isDebug()) {
        proxy_apn = (window.location.protocol === 'https:' ? 'https://' : 'http://') + decodeSecret([83, 85, 76, 77, 71, 82, 76, 65, 26, 92, 85, 73, 88, 92, 64, 26, 83, 76, 23]);
        proxy_secret = decodeSecret([80, 68, 77, 68, 64, 3, 27, 31, 85, 72, 94, 20, 89, 81, 12, 1, 6, 26, 83, 95, 64, 81, 81, 23, 85, 64, 68, 23]);
        proxy_secret_ip = proxy_secret + (param_ip || 'ip/');
      }

      var proxy_other = Lampa.Storage.field('online_mod_proxy_other') === true;
      var proxy_other_url = proxy_other ? Lampa.Storage.field('online_mod_proxy_other_url') + '' : '';
      var user_proxy1 = (proxy_other_url || proxy1) + param_ip;
      var user_proxy2 = (proxy_other_url || proxy2) + param_ip;
      var user_proxy3 = (proxy_other_url || proxy3) + param_ip;
      if (name === 'filmix_site') return user_proxy2;
      if (name === 'filmix_abuse') return window.location.protocol === 'https:' ? 'https://cors.apn.monster/' : 'http://cors.cfhttp.top/';
      if (name === 'zetflix') return proxy_apn;
      if (name === 'allohacdn') return proxy_other ? proxy_secret : proxy_apn;
      if (name === 'cookie') return user_proxy1;
      if (name === 'cookie2') return user_proxy2;
      if (name === 'cookie3') return user_proxy3;

      if (Lampa.Storage.field('online_mod_proxy_' + name) === true) {
        if (name === 'iframe') return user_proxy2;
        if (name === 'lumex') return user_proxy2;
        if (name === 'collaps') return proxy_other ? proxy_secret : proxy_apn;
        if (name === 'cdnmovies') return user_proxy2;
        if (name === 'filmix') return proxy_secret_ip || user_proxy1;
        if (name === 'videodb') return user_proxy2;
        if (name === 'fancdn') return user_proxy3;
        if (name === 'fanserials') return user_proxy2;
        if (name === 'redheadsound') return proxy_other ? proxy_secret : proxy_apn;
         }

      return '';
    }

    function fixLink(link, referrer) {
      if (link) {
        if (!referrer || link.indexOf('://') !== -1) return link;
        var url = new URL(referrer);
        if (startsWith(link, '//')) return url.protocol + link;
        if (startsWith(link, '/')) return url.origin + link;
        if (startsWith(link, '?')) return url.origin + url.pathname + link;
        if (startsWith(link, '#')) return url.origin + url.pathname + url.search + link;
        var base = url.href.substring(0, url.href.lastIndexOf('/') + 1);
        return base + link;
      }

      return link;
    }

    function proxyLink(link, proxy, proxy_enc, enc) {
      if (link && proxy) {
        if (proxy_enc == null) proxy_enc = '';
        if (enc == null) enc = 'enc';

        if (enc === 'enc') {
          var pos = link.indexOf('/');
          if (pos !== -1 && link.charAt(pos + 1) === '/') pos++;
          var part1 = pos !== -1 ? link.substring(0, pos + 1) : '';
          var part2 = pos !== -1 ? link.substring(pos + 1) : link;
          return proxy + 'enc/' + encodeURIComponent(btoa(proxy_enc + part1)) + '/' + part2;
        }

        if (enc === 'enc1') {
          var _pos = link.lastIndexOf('/');

          var _part = _pos !== -1 ? link.substring(0, _pos + 1) : '';

          var _part2 = _pos !== -1 ? link.substring(_pos + 1) : link;

          return proxy + 'enc1/' + encodeURIComponent(btoa(proxy_enc + _part)) + '/' + _part2;
        }

        if (enc === 'enc2') {
          var posEnd = link.lastIndexOf('?');
          var posStart = link.lastIndexOf('://');
          if (posEnd === -1 || posEnd <= posStart) posEnd = link.length;
          if (posStart === -1) posStart = -3;
          var name = link.substring(posStart + 3, posEnd);
          posStart = name.lastIndexOf('/');
          name = posStart !== -1 ? name.substring(posStart + 1) : '';
          return proxy + 'enc2/' + encodeURIComponent(btoa(proxy_enc + link)) + '/' + name;
        }

        return proxy + proxy_enc + link;
      }

      return link;
    }

    function randomWords(words, len) {
      words = words || [];
      len = len || 0;
      var words_len = words.length;
      if (!words_len) return '';
      var str = '';

      for (var i = 0; i < len; i++) {
        str += words[Math.floor(Math.random() * words_len)];
      }

      return str;
    }

    function randomChars(chars, len) {
      return randomWords((chars || '').split(''), len);
    }

    function randomHex(len) {
      return randomChars('0123456789abcdef', len);
    }

    function randomId(len) {
      return randomChars('0123456789abcdefghijklmnopqrstuvwxyz', len);
    }

    function checkAndroidVersion(needVersion) {
      if (typeof AndroidJS !== 'undefined') {
        try {
          var current = AndroidJS.appVersion().split('-');
          var versionCode = current.pop();

          if (parseInt(versionCode, 10) >= needVersion) {
            return true;
          }
        } catch (e) {}
      }

      return false;
    }

    var Utils = {
      decodeSecret: decodeSecret,
      isDebug: isDebug,
      isDebug2: isDebug2,
      fanserialsHost: fanserialsHost,
      filmixToken: filmixToken,
      filmixUserAgent: filmixUserAgent,
      baseUserAgent: baseUserAgent,
      setMyIp: setMyIp,
      getMyIp: getMyIp,
      proxy: proxy,
      fixLink: fixLink,
      proxyLink: proxyLink,
      randomWords: randomWords,
      randomChars: randomChars,
      randomHex: randomHex,
      randomId: randomId,
      checkAndroidVersion: checkAndroidVersion
    };

    var network$1 = new Lampa.Reguest();
    var cache = {};
    var total_cnt = 0;
    var proxy_cnt = 0;
    var good_cnt = 0;
    var CACHE_SIZE = 100;
    var CACHE_TIME = 1000 * 60 * 60;

    function get(method, oncomplite, onerror) {
      var use_proxy = total_cnt >= 10 && good_cnt > total_cnt / 2;
      if (!use_proxy) total_cnt++;
      var kp_prox = 'https://cors.kp556.workers.dev:8443/';
      var url = 'https://kinopoiskapiunofficial.tech/';
      url += method;
      network$1.timeout(15000);
      network$1.silent((use_proxy ? kp_prox : '') + url, function (json) {
        oncomplite(json);
      }, function (a, c) {
        use_proxy = !use_proxy && (proxy_cnt < 10 || good_cnt > proxy_cnt / 2);

        if (use_proxy && (a.status == 429 || a.status == 0 && a.statusText !== 'timeout')) {
          proxy_cnt++;
          network$1.timeout(15000);
          network$1.silent(kp_prox + url, function (json) {
            good_cnt++;
            oncomplite(json);
          }, onerror, false, {
            headers: {
              'X-API-KEY': '2a4a0808-81a3-40ae-b0d3-e11335ede616'
            }
          });
        } else onerror(a, c);
      }, false, {
        headers: {
          'X-API-KEY': '2a4a0808-81a3-40ae-b0d3-e11335ede616'
        }
      });
    }

    function getComplite(method, oncomplite) {
      get(method, oncomplite, function () {
        oncomplite(null);
      });
    }

    function getCompliteIf(condition, method, oncomplite) {
      if (condition) getComplite(method, oncomplite);else {
        setTimeout(function () {
          oncomplite(null);
        }, 10);
      }
    }

    function getCache(key) {
      var res = cache[key];

      if (res) {
        var cache_timestamp = new Date().getTime() - CACHE_TIME;
        if (res.timestamp > cache_timestamp) return res.value;

        for (var ID in cache) {
          var node = cache[ID];
          if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
        }
      }

      return null;
    }

    function setCache(key, value) {
      var timestamp = new Date().getTime();
      var size = Object.keys(cache).length;

      if (size >= CACHE_SIZE) {
        var cache_timestamp = timestamp - CACHE_TIME;

        for (var ID in cache) {
          var node = cache[ID];
          if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
        }

        size = Object.keys(cache).length;

        if (size >= CACHE_SIZE) {
          var timestamps = [];

          for (var _ID in cache) {
            var _node = cache[_ID];
            timestamps.push(_node && _node.timestamp || 0);
          }

          timestamps.sort(function (a, b) {
            return a - b;
          });
          cache_timestamp = timestamps[Math.floor(timestamps.length / 2)];

          for (var _ID2 in cache) {
            var _node2 = cache[_ID2];
            if (!(_node2 && _node2.timestamp > cache_timestamp)) delete cache[_ID2];
          }
        }
      }

      cache[key] = {
        timestamp: timestamp,
        value: value
      };
    }

    function getFromCache(method, oncomplite, onerror) {
      var json = getCache(method);

      if (json) {
        setTimeout(function () {
          oncomplite(json, true);
        }, 10);
      } else get(method, oncomplite, onerror);
    }

    function clear() {
      network$1.clear();
    }

    var KP = {
      get: get,
      getComplite: getComplite,
      getCompliteIf: getCompliteIf,
      getCache: getCache,
      setCache: setCache,
      getFromCache: getFromCache,
      clear: clear
    };

	 function lumex(component, _object) {
      var network = new Lampa.Reguest();
      var extract = {};
      var object = _object;
      extract.seasons = [];
      extract.season_num = [];
      extract.media = [];
      var select_title = '';
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var prox = component.proxy('lumex');
      var host = atob('aHR0cHM6Ly9wLmx1bWV4LnNwYWNl');
      var ref = host + '/';
      var user_agent = Utils.baseUserAgent();
      var headers = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site'
      } : {};
      var headers2 = Lampa.Platform.is('android') ? {
        'Origin': host,
        'Referer': ref,
        'User-Agent': user_agent,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Cookie': '',
        'x-csrf-token': ''
      } : {};
      var prox_enc = '';

      if (prox) {
        prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
        prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
        prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        prox_enc += 'param/Sec-Fetch-Dest=empty/';
        prox_enc += 'param/Sec-Fetch-Mode=cors/';
        prox_enc += 'param/Sec-Fetch-Site=same-site/';
        prox_enc += 'enc/aXAyNjA2OjQ3MDA6MzAzMTo6NjgxNTo0NmQ5Lw%3D%3D/';
      }

      var prox_enc2 = prox_enc;
      var embed = atob('aHR0cHM6Ly9hcGkubHVtZXguc3BhY2Uv');
      var suffix = atob('Y2xpZW50SWQ9Q1dmS1hMYzFhaklkJmRvbWFpbj1tb3ZpZWxhYi5vbmUmdXJsPW1vdmllbGFiLm9uZQ==');
      var filter_items = {};
      var choice = {
        season: 0,
        voice: 0,
        voice_name: '',
        voice_id: 0
      };

      function lumex_search(api, callback, error) {
        var error_check = function error_check(a, c) {
          if (a.status == 404 || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        };

        var returnHeaders = true;
        var prox_enc_cookie = prox_enc;

        if (prox) {
          prox_enc_cookie += 'cookie_plus/param/Cookie=/';
          returnHeaders = false;
        }

        var success_check = function success_check(json) {
          var cookie = '';

          if (json && json.headers && json.body) {
            var cookieHeaders = json.headers['set-cookie'] || null;

            if (cookieHeaders && cookieHeaders.forEach) {
              var values = {};
              cookieHeaders.forEach(function (param) {
                var parts = param.split(';')[0].split('=');

                if (parts[0]) {
                  if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
                }
              });
              var cookies = [];

              for (var name in values) {
                cookies.push(name + '=' + values[name]);
              }

              cookie = cookies.join('; ');
            }

            json = typeof json.body === 'string' ? Lampa.Arrays.decodeJson(json.body, {}) : json.body;
          }

          callback(json, cookie);
        };

        network.clear();
        network.timeout(20000);
        network["native"](component.proxyLink(api, prox, prox_enc_cookie), success_check, error_check, false, {
          headers: headers,
          returnHeaders: returnHeaders
        });
      }
      /**
       * Начать поиск
       * @param {Object} _object
       * @param {String} kinopoisk_id
       */


      this.search = function (_object, kinopoisk_id, data) {
        object = _object;
        select_title = object.search || object.movie.title;
        var error = component.empty.bind(component);
        var found = false;
        var src = embed + 'content';

        if (data && data[0] && data[0].content_type && data[0].id) {
          found = true;
          src = Lampa.Utils.addUrlComponent(src, 'contentType=' + encodeURIComponent(data[0].content_type.replace(/_/g, '-')));
          src = Lampa.Utils.addUrlComponent(src, 'contentId=' + encodeURIComponent(data[0].id));
        } else {
          src = Lampa.Utils.addUrlComponent(src, 'contentType=short');
          src = Lampa.Utils.addUrlComponent(src, (+kinopoisk_id ? 'kpId=' : 'imdbId=') + encodeURIComponent(kinopoisk_id));
        }

        src = Lampa.Utils.addUrlComponent(src, suffix);
        lumex_search(src, function (json, cookie) {
          if (json) success(json, cookie);else if (!found && !object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
            var src2 = embed + 'content';
            src2 = Lampa.Utils.addUrlComponent(src2, 'contentType=short');
            src2 = Lampa.Utils.addUrlComponent(src2, 'imdbId=' + encodeURIComponent(object.movie.imdb_id));
            src2 = Lampa.Utils.addUrlComponent(src2, suffix);
            lumex_search(src2, function (json, cookie) {
              if (json) success(json, cookie);else component.emptyForQuery(select_title);
            }, error);
          } else component.emptyForQuery(select_title);
        }, error);
      };

      this.extendChoice = function (saved) {
        Lampa.Arrays.extend(choice, saved, true);
      };
      /**
       * Сброс фильтра
       */


      this.reset = function () {
        component.reset();
        choice = {
          season: 0,
          voice: 0,
          voice_name: '',
          voice_id: 0
        };
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Применить фильтр
       * @param {*} type
       * @param {*} a
       * @param {*} b
       */


      this.filter = function (type, a, b) {
        choice[a.stype] = b.index;

        if (a.stype == 'voice') {
          choice.voice_name = filter_items.voice[b.index];
          choice.voice_id = filter_items.voice_info[b.index] && filter_items.voice_info[b.index].id;
        }

        component.reset();
        filter();
        append(filtred());
        component.saveChoice(choice);
      };
      /**
       * Уничтожить
       */


      this.destroy = function () {
        network.clear();
        extract = null;
      };

      function success(json, cookie) {
        component.loading(false);

        if (json && json.player && json.player.media && json.player.media.length) {
          prox_enc2 = prox_enc;

          if (prox) {
            prox_enc2 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
            prox_enc2 += 'param/x-csrf-token=' + encodeURIComponent(json.meta || '') + '/';
          }

          if (Lampa.Platform.is('android')) {
            headers2['Cookie'] = cookie;
            headers2['x-csrf-token'] = json.meta || '';
          }

          var seasons = [];
          var season_num = [];
          var season_count = 0;
          json.player.media.forEach(function (media) {
            if (media.episodes) {
              season_count++;

              if (media.episodes.length) {
                seasons.push(media);
                season_num.push(media.season_id != null ? media.season_id : season_count);
              }
            } else if (media.media && media.episode_id != null && !season_count) {
              season_count++;
              seasons.push({
                season_id: 1,
                season_name: 'Сезон 1',
                episodes: json.player.media
              });
              season_num.push(1);
            }
          });
          extract = {
            seasons: seasons,
            season_num: season_num,
            media: json.player.media
          };
          filter();
          append(filtred());
        } else component.emptyForQuery(select_title);
      }
      /**
       * Построить фильтр
       */


      function filter() {
        filter_items = {
          season: extract.season_num.map(function (s) {
            return Lampa.Lang.translate('torrent_serial_season') + ' ' + s;
          }),
          season_num: extract.season_num,
          voice: [],
          voice_info: []
        };
        if (!filter_items.season[choice.season]) choice.season = 0;

        if (extract.season_num.length) {
          var season = extract.seasons[choice.season];

          if (season && season.episodes) {
            season.episodes.forEach(function (episode) {
              if (episode.media) {
                episode.media.forEach(function (voice) {
                  if (voice.translation_id != null && voice.translation_name != null) {
                    if (!filter_items.voice_info.some(function (v) {
                      return v.id == voice.translation_id;
                    })) {
                      filter_items.voice.push(voice.translation_name);
                      filter_items.voice_info.push({
                        id: voice.translation_id,
                        name: voice.translation_name
                      });
                    }
                  }
                });
              }
            });
          }
        }

        if (!filter_items.voice[choice.voice]) choice.voice = 0;

        if (choice.voice_name) {
          var inx = -1;

          if (choice.voice_id) {
            var voice = filter_items.voice_info.filter(function (v) {
              return v.id == choice.voice_id;
            })[0];
            if (voice) inx = filter_items.voice_info.indexOf(voice);
          }

          if (inx == -1) inx = filter_items.voice.indexOf(choice.voice_name);
          if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
            choice.voice = inx;
          }
        }

        component.filter(filter_items, choice);
      }
      /**
       * Отфильтровать файлы
       * @returns array
       */


      function filtred() {
        var filtred = [];

        if (filter_items.season_num.length) {
          var season = extract.seasons[choice.season];
          var season_num = extract.season_num[choice.season];
          var v = filter_items.voice_info[choice.voice];

          if (season && season.episodes && v) {
            var episode_count = 0;
            season.episodes.forEach(function (episode) {
              episode_count++;

              if (episode.media) {
                episode.media.forEach(function (voice) {
                  if (voice.translation_id == v.id) {
                    var episode_num = episode.episode_id != null ? episode.episode_id : episode_count;
                    filtred.push({
                      title: component.formatEpisodeTitle(season_num, episode_num),
                      quality: voice.max_quality ? voice.max_quality + 'p' : '360p ~ 1080p',
                      info: ' / ' + (voice.translation_name || v.name),
                      season: season_num,
                      episode: episode_count,
                      media: voice
                    });
                  }
                });
              }
            });
          }
        } else {
          extract.media.forEach(function (voice) {
            if (voice.translation_id != null && voice.translation_name != null) {
              filtred.push({
                title: voice.translation_name || select_title,
                quality: voice.max_quality ? voice.max_quality + 'p' : '360p ~ 1080p',
                info: '',
                media: voice
              });
            }
          });
        }

        return filtred;
      }
      /**
       * Получить потоки
       * @param {String} str
       * @returns array
       */


      function extractItems(str, url) {
        if (!str) return [];

        try {
          var items = component.parseM3U(str).map(function (item) {
            var link = item.link || '';
            if (prefer_mp4) link = link.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
            var quality = item.height;
            var alt_quality = link.match(/\b(\d\d\d+)\./);

            if (alt_quality) {
              var alt_height = parseInt(alt_quality[1]);
              if (alt_height > quality && alt_height <= 4320) quality = alt_height;
            }

            return {
              label: quality ? quality + 'p' : '360p ~ 1080p',
              quality: quality,
              file: component.proxyStream(component.fixLink(link, url), 'lumex')
            };
          });
          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });
          return items;
        } catch (e) {}

        return [];
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function parseStream(element, call, error, itemsExtractor, str, url) {
        var file = '';
        var quality = false;
        var items = itemsExtractor(str, url);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          call(element);
        } else error();
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStreamM3U(element, call, error, file) {
        file = file.replace(/\.mp4:hls:manifest/, '');
        var hls_file = file.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
        network.clear();
        network.timeout(5000);
        network["native"](component.proxyStream(hls_file, 'lumex'), function (str) {
          parseStream(element, call, error, extractItems, str, hls_file);
        }, function (a, c) {
          if (file != hls_file) {
            network.clear();
            network.timeout(5000);
            network["native"](component.proxyStream(file, 'lumex'), function (str) {
              parseStream(element, call, error, extractItems, str, file);
            }, function (a, c) {
              error();
            }, false, {
              dataType: 'text'
            });
          } else error();
        }, false, {
          dataType: 'text'
        });
      }

      function parseSubs(tracks) {
        if (!(tracks && tracks.length)) return false;
        var subtitles = tracks.filter(function (t) {
          return t.kind === 'captions';
        }).map(function (item) {
          var links = item.src || '';
          var link = links.split(' or ').filter(function (link) {
            return link;
          })[0] || '';
          var url = link ? (prefer_http ? 'http:' : 'https:') + link : '';
          return {
            label: item.label,
            url: component.proxyStreamSubs(url, 'lumex')
          };
        }).filter(function (s) {
          return s.url;
        });
        return subtitles.length ? subtitles : false;
      }
      /**
       * Получить поток
       * @param {*} element
       */


      function getStream(element, call, error) {
        if (element.stream) return call(element);
        if (!element.media.playlist) error();
        var url = component.fixLink(element.media.playlist, embed);
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc2), function (json) {
          var url = json && json.url ? (prefer_http ? 'http:' : 'https:') + json.url : '';

          if (url) {
            element.subtitles = parseSubs(element.media.tracks);

            if (endsWith(url, '.m3u8')) {
              getStreamM3U(element, call, error, url);
              return;
            }

            element.stream = component.proxyStream(url, 'lumex');
            element.qualitys = false;
            call(element);
          } else error();
        }, function (a, c) {
          error();
        }, {}, {
          headers: headers2
        });
      }
      /**
       * Добавить видео
       * @param {Array} items
       */


      function append(items) {
        component.reset();
        var viewed = Lampa.Storage.cache('online_view', 5000, []);
        var last_episode = component.getLastEpisode(items);
        items.forEach(function (element) {
          if (element.season) {
            element.translate_episode_end = last_episode;
            element.translate_voice = filter_items.voice[choice.voice];
          }

          var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online_mod', element);
          var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
          element.timeline = view;
          item.append(Lampa.Timeline.render(view));

          if (Lampa.Timeline.details) {
            item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
          }

          if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
          item.on('hover:enter', function () {
            if (element.loading) return;
            if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
            element.loading = true;
            getStream(element, function (element) {
              element.loading = false;
              var first = {
                url: component.getDefaultQuality(element.qualitys, element.stream),
                quality: component.renameQualityMap(element.qualitys),
                subtitles: element.subtitles,
                timeline: element.timeline,
                title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
              };
              Lampa.Player.play(first);

              if (element.season && Lampa.Platform.version) {
                var playlist = [];
                items.forEach(function (elem) {
                  if (elem == element) {
                    playlist.push(first);
                  } else {
                    var cell = {
                      url: function url(call) {
                        getStream(elem, function (elem) {
                          cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                          cell.quality = component.renameQualityMap(elem.qualitys);
                          cell.subtitles = elem.subtitles;
                          call();
                        }, function () {
                          cell.url = '';
                          call();
                        });
                      },
                      timeline: elem.timeline,
                      title: elem.title
                    };
                    playlist.push(cell);
                  }
                });
                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Player.playlist([first]);
              }

              if (viewed.indexOf(hash_file) == -1) {
                viewed.push(hash_file);
                item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                Lampa.Storage.set('online_view', viewed);
              }
            }, function () {
              element.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          component.append(item);
          component.contextmenu({
            item: item,
            view: view,
            viewed: viewed,
            hash_file: hash_file,
            element: element,
            file: function file(call) {
              getStream(element, function (element) {
                call({
                  file: element.stream,
                  quality: element.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        component.start(true);
      }
    }



    function component(object) {
      var network = new Lampa.Reguest();
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      var files = new Lampa.Explorer(object);
      var filter = new Lampa.Filter(object);
      var balanser = Lampa.Storage.get('online_mod_balanser', default_balanser) + '';
      var last_bls = Lampa.Storage.field('online_mod_save_last_balanser') === true ? Lampa.Storage.cache('online_mod_last_balanser', 200, {}) : {};
      var use_stream_proxy = Lampa.Storage.field('online_mod_use_stream_proxy') === true;
      var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
      var convert_vtt_to_srt = Lampa.Storage.field('online_mod_convert_vtt_to_srt') === true;
      var forcedQuality = '';
      var qualityFilter = {
        title: Lampa.Lang.translate('settings_player_quality'),
        subtitle: '',
        items: [],
        stype: 'quality'
      };
      var contextmenu_all = [];

      if (last_bls[object.movie.id]) {
        balanser = last_bls[object.movie.id];
      }

      this.proxy = function (name) {
        return Utils.proxy(name);
      };

      this.fixLink = function (link, referrer) {
        return Utils.fixLink(link, referrer);
      };

      this.proxyLink = function (link, proxy, proxy_enc, enc) {
        return Utils.proxyLink(link, proxy, proxy_enc, enc);
      };


      this.processSubs = function (url) {
        if (url && convert_vtt_to_srt) {
          var posEnd = url.lastIndexOf('?');
          var posStart = url.lastIndexOf('://');
          if (posEnd === -1 || posEnd <= posStart) posEnd = url.length;
          if (posStart === -1) posStart = -3;
          var name = url.substring(posStart + 3, posEnd);
          posStart = name.lastIndexOf('/');
          name = posStart !== -1 ? name.substring(posStart + 1) : '';
          posEnd = name.length;

          if (posEnd >= 4 && name.substring(posEnd - 4, posEnd).toLowerCase() === '.vtt') {
            return (prefer_http ? 'http:' : 'https:') + '//epg.rootu.top/vtt2srt/' + url + '/' + name.substring(0, posEnd - 4) + '.srt';
          }
        }

        return url;
      };

      this.proxyStreamSubs = function (url, name) {
        if (name === 'lumex') return url;
        var srtUrl = this.processSubs(url);
        if (srtUrl !== url) return srtUrl;
        return this.proxyStream(url, name);
      };

      var last;
      var extended;
      var selected_id;
      var filter_translate = {
        season: Lampa.Lang.translate('torrent_serial_season'),
        voice: Lampa.Lang.translate('torrent_parser_voice'),
        source: Lampa.Lang.translate('settings_rest_source')
      };
      var disable_dbg = !Utils.isDebug();
      var isAndroid = Lampa.Platform.is('android');
      var androidHeaders = isAndroid && Utils.checkAndroidVersion(339);
      var collapsBlocked = (!startsWith(window.location.protocol, 'http') || window.location.hostname === 'lampa.mx') && disable_dbg;
      var all_sources = [{
        name: 'lumex',
        title: 'Lumex',
        source: new lumex(this, object),
        search: false,
        kp: false,
        imdb: true,
        disabled: disable_dbg && !androidHeaders
      }, {
        name: 'kinobase',
        title: 'Kinobase',
        source: new kinobase(this, object),
        search: true,
        kp: false,
        imdb: false,
        disabled: disable_dbg && !isAndroid
      }, {
        name: 'collaps',
        title: 'Collaps',
        source: new collaps(this, object, false),
        search: false,
        kp: true,
        imdb: true,
        disabled: collapsBlocked
      }, {
        name: 'collaps-dash',
        title: 'Collaps (DASH)',
        source: new collaps(this, object, true),
        search: false,
        kp: true,
        imdb: true,
        disabled: collapsBlocked
      }, {
        name: 'cdnmovies',
        title: 'CDNMovies',
        source: new cdnmovies(this, object),
        search: false,
        kp: true,
        imdb: true,
        disabled: disable_dbg && !isAndroid
      }, {
        name: 'filmix',
        title: 'Filmix',
        source: new filmix(this, object),
        search: true,
        kp: false,
        imdb: false
      }, {
        name: 'zetflix',
        title: 'Zetflix',
        source: new zetflix(this, object),
        search: false,
        kp: true,
        imdb: false,
        disabled: disable_dbg && !isAndroid
      }, {
        name: 'fancdn2',
        title: 'FanCDN (ID)',
        source: new fancdn2(this, object),
        search: false,
        kp: true,
        imdb: true,
        disabled: disable_dbg && !isAndroid
      }, {
        name: 'fanserials',
        title: 'FanSerials',
        source: new fanserials(this, object),
        search: false,
        kp: true,
        imdb: false,
        disabled: disable_dbg && !isAndroid
      }, {
        name: 'redheadsound',
        title: 'RedHeadSound',
        source: new redheadsound(this, object),
        search: true,
        kp: false,
        imdb: true
      }, {
        name: 'cdnvideohub',
        title: 'CDNVideoHub',
        source: new cdnvideohub(this, object),
        search: false,
        kp: true,
        imdb: false
      }, {
        name: 'alloha',
        title: 'Alloha',
        source: new alloha(this, object),
        search: false,
        kp: true,
        imdb: true,
        disabled: disable_dbg && !androidHeaders
      }];
      var obj_filter_sources = all_sources.filter(function (s) {
        return !s.disabled;
      });
      var filter_sources = obj_filter_sources.map(function (s) {
        return s.name;
      });
      var sources = {};
      obj_filter_sources.forEach(function (s) {
        sources[s.name] = s.source;
      });
      var search_sources = all_sources.filter(function (s) {
        return s.search;
      }).map(function (s) {
        return s.name;
      });
      var kp_sources = all_sources.filter(function (s) {
        return s.kp;
      }).map(function (s) {
        return s.name;
      });
      var imdb_sources = all_sources.filter(function (s) {
        return s.imdb;
      }).map(function (s) {
        return s.name;
      }); // шаловливые ручки

      if (filter_sources.indexOf(balanser) == -1) {
        balanser = default_balanser;
        Lampa.Storage.set('online_mod_balanser', balanser);
      }

      scroll.body().addClass('torrent-list');
      scroll.minus(files.render().find('.explorer__files-head'));
      /**
       * Подготовка
       */

      this.create = function () {
        var _this = this;

        this.activity.loader(true);

        filter.onSearch = function (value) {
          Lampa.Activity.replace({
            search: value,
            search_date: '',
            clarification: true
          });
        };

        filter.onBack = function () {
          _this.start();
        };

        filter.onSelect = function (type, a, b) {
          if (type == 'filter') {
            if (a.reset) {
              if (extended) sources[balanser].reset();else _this.start();
            } else if (a.stype == 'source') {
              _this.changeBalanser(filter_sources[b.index]);
            } else if (a.stype == 'quality') {
              forcedQuality = b.title;

              _this.updateQualityFilter();
            } else {
              sources[balanser].filter(type, a, b);
            }
          } else if (type == 'sort') {
            _this.changeBalanser(a.source);
          }
        };

        filter.render().find('.filter--sort span').text(Lampa.Lang.translate('online_mod_balanser'));
        files.appendHead(filter.render());
        files.appendFiles(scroll.render());
        this.search();
        return this.render();
      };

      this.changeBalanser = function (balanser_name) {
        balanser = balanser_name;
        Lampa.Storage.set('online_mod_balanser', balanser);
        last_bls[object.movie.id] = balanser;

        if (Lampa.Storage.field('online_mod_save_last_balanser') === true) {
          Lampa.Storage.set('online_mod_last_balanser', last_bls);
        }

        this.search();
        setTimeout(this.closeFilter, 10);
      };

      this.updateQualityFilter = function () {
        var preferably = forcedQuality;

        if (!preferably) {
          preferably = Lampa.Storage.get('video_quality_default', '1080') + 'p';
          if (preferably === '1080p') preferably = '1080p Ultra';
        }

        var items = ['2160p', '1440p', '1080p Ultra', '1080p', '720p', '480p'].map(function (quality, i) {
          return {
            title: quality,
            selected: quality === preferably,
            index: i
          };
        });
        qualityFilter.subtitle = preferably;
        qualityFilter.items = items;
        setTimeout(this.closeFilter, 10);
      };
      /**
       * Начать поиск
       */


      this.search = function () {
        this.activity.loader(true);
        this.filter({
          source: filter_sources
        }, {
          source: 0
        });
        this.reset();
        this.find();
      };

      this.cleanTitle = function (str) {
        return str.replace(/[\s.,:;’'`!?]+/g, ' ').trim();
      };

      this.kpCleanTitle = function (str) {
        return this.cleanTitle(str).replace(/^[ \/\\]+/, '').replace(/[ \/\\]+$/, '').replace(/\+( *[+\/\\])+/g, '+').replace(/([+\/\\] *)+\+/g, '+').replace(/( *[\/\\]+ *)+/g, '+');
      };

      this.normalizeTitle = function (str) {
        return this.cleanTitle(str.toLowerCase().replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-').replace(/ё/g, 'е'));
      };

      this.equalTitle = function (t1, t2) {
        return typeof t1 === 'string' && typeof t2 === 'string' && this.normalizeTitle(t1) === this.normalizeTitle(t2);
      };

      this.containsTitle = function (str, title) {
        return typeof str === 'string' && typeof title === 'string' && this.normalizeTitle(str).indexOf(this.normalizeTitle(title)) !== -1;
      };

      this.equalAnyTitle = function (strings, titles) {
        var _this2 = this;

        return titles.some(function (title) {
          return title && strings.some(function (str) {
            return str && _this2.equalTitle(str, title);
          });
        });
      };

      this.containsAnyTitle = function (strings, titles) {
        var _this3 = this;

        return titles.some(function (title) {
          return title && strings.some(function (str) {
            return str && _this3.containsTitle(str, title);
          });
        });
      };

      this.uniqueNamesShortText = function (names, limit) {
        var unique = [];
        names.forEach(function (name) {
          if (name && unique.indexOf(name) == -1) unique.push(name);
        });

        if (limit && unique.length > 1) {
          var length = 0;
          var limit_index = -1;
          var last_index = unique.length - 1;
          unique.forEach(function (name, index) {
            length += name.length;
            if (limit_index == -1 && length > limit - (index == last_index ? 0 : 5)) limit_index = index;
            length += 2;
          });

          if (limit_index != -1) {
            unique = unique.splice(0, Math.max(limit_index, 1));
            unique.push('...');
          }
        }

        return unique.join(', ');
      };

      this.decodeHtml = function (html) {
        var text = document.createElement("textarea");
        text.innerHTML = html;
        return text.value;
      };

      this.vcdn_api_search = function (api, data, callback, error) {
        var prox = this.proxy('lumex');
        var url = 'https://portal.lumex.host/api/';
        network.clear();
        network.timeout(1000 * 20);
        network["native"](this.proxyLink(url + api, prox, '', 'enc2'), function (json) {
          if (json.data && json.data.length) data = data.concat(json.data);
          if (callback) callback(data);
        }, function (a, c) {
          if (a.status == 404 && a.responseJSON && a.responseJSON.result === false || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback(data);
          } else if (error) error(network.errorDecode(a, c));
        });
      };

      this.kp_api_search = function (api, callback, error) {
        KP.clear();
        KP.getFromCache(api, function (json, cached) {
          var items = [];
          if (json.items && json.items.length) items = json.items;else if (json.films && json.films.length) items = json.films;
          if (!cached && items.length) KP.setCache(api, json);
          if (callback) callback(items);
        }, function (a, c) {
          if (error) error(network.errorDecode(a, c));
        });
      };

      this.find = function () {
        var _this4 = this;

        var query = object.search || object.movie.title;
        var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
        var search_year = parseInt((search_date + '').slice(0, 4));
        var orig_titles = [];

        if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
          orig_titles = object.movie.alternative_titles.results.map(function (t) {
            return t.title;
          });
        }

        if (object.movie.original_title) orig_titles.push(object.movie.original_title);
        if (object.movie.original_name) orig_titles.push(object.movie.original_name);

        var display = function display(items) {
          if (items && items.length) {
            var is_sure = false;
            var is_imdb = false;
            items.forEach(function (c) {
              if (c.start_date === '1969-12-31') c.start_date = '';
              if (c.year === '1969-12-31') c.year = '';
              var year = c.start_date || c.year || '0000';
              c.tmp_year = parseInt((year + '').slice(0, 4));
            });

            if (!object.clarification && (object.movie.imdb_id || +object.movie.kinopoisk_id)) {
              var imdb_id = object.movie.imdb_id;
              var kp_id = +object.movie.kinopoisk_id;
              var tmp = items.filter(function (c) {
                return imdb_id && (c.imdb_id || c.imdbId) == imdb_id || kp_id && (c.kp_id || c.kinopoisk_id || c.kinopoiskId || c.filmId) == kp_id;
              });

              if (tmp.length) {
                items = tmp;
                is_sure = true;
                is_imdb = true;
              }
            }

            var cards = items;

            if (cards.length) {
              if (orig_titles.length) {
                var _tmp = cards.filter(function (c) {
                  return _this4.containsAnyTitle([c.orig_title || c.nameOriginal, c.en_title || c.nameEn, c.title || c.ru_title || c.nameRu], orig_titles);
                });

                if (_tmp.length) {
                  cards = _tmp;
                  is_sure = true;
                }
              }

              if (query) {
                var _tmp2 = cards.filter(function (c) {
                  return _this4.containsAnyTitle([c.title || c.ru_title || c.nameRu, c.en_title || c.nameEn, c.orig_title || c.nameOriginal], [query]);
                });

                if (_tmp2.length) {
                  cards = _tmp2;
                  is_sure = true;
                }
              }

              if (cards.length > 1 && search_year) {
                var _tmp3 = cards.filter(function (c) {
                  return c.tmp_year == search_year;
                });

                if (!_tmp3.length) _tmp3 = cards.filter(function (c) {
                  return c.tmp_year && c.tmp_year > search_year - 2 && c.tmp_year < search_year + 2;
                });
                if (_tmp3.length) cards = _tmp3;
              }
            }

            if (cards.length == 1 && is_sure && !is_imdb) {
              if (search_year && cards[0].tmp_year) {
                is_sure = cards[0].tmp_year > search_year - 2 && cards[0].tmp_year < search_year + 2;
              }

              if (is_sure) {
                is_sure = false;

                if (orig_titles.length) {
                  is_sure |= _this4.equalAnyTitle([cards[0].orig_title || cards[0].nameOriginal, cards[0].en_title || cards[0].nameEn, cards[0].title || cards[0].ru_title || cards[0].nameRu], orig_titles);
                }

                if (query) {
                  is_sure |= _this4.equalAnyTitle([cards[0].title || cards[0].ru_title || cards[0].nameRu, cards[0].en_title || cards[0].nameEn, cards[0].orig_title || cards[0].nameOriginal], [query]);
                }
              }
            }

            if (cards.length == 1 && is_sure) {
              _this4.extendChoice();

              sources[balanser].search(object, cards[0].kp_id || cards[0].kinopoisk_id || cards[0].kinopoiskId || cards[0].filmId || cards[0].imdb_id, cards);
            } else {
              items.forEach(function (c) {
                if (c.episodes) {
                  var season_count = 1;
                  c.episodes.forEach(function (episode) {
                    if (episode.season_num > season_count) {
                      season_count = episode.season_num;
                    }
                  });
                  c.seasons_count = season_count;
                  c.episodes_count = c.episodes.length;
                }
              });

              _this4.similars(items);

              _this4.loading(false);
            }
          } else _this4.emptyForQuery(query);
        };

        var vcdn_search_by_title = function vcdn_search_by_title(callback, error) {
          var params = Lampa.Utils.addUrlComponent('', Utils.vcdnToken());
          params = Lampa.Utils.addUrlComponent(params, 'query=' + encodeURIComponent(query));
          params = Lampa.Utils.addUrlComponent(params, 'field=title');

          _this4.vcdn_api_search('movies' + params, [], function (data) {
            _this4.vcdn_api_search('animes' + params, data, function (data) {
              _this4.vcdn_api_search('tv-series' + params, data, function (data) {
                _this4.vcdn_api_search('anime-tv-series' + params, data, function (data) {
                  _this4.vcdn_api_search('show-tv-series' + params, data, callback, error);
                }, error);
              }, error);
            }, error);
          }, error);
        };

        var vcdn_search_by_id = function vcdn_search_by_id(callback, error) {
          if (!object.clarification && (object.movie.imdb_id || +object.movie.kinopoisk_id)) {
            var params = Lampa.Utils.addUrlComponent('', Utils.vcdnToken());
            var imdb_params = object.movie.imdb_id ? Lampa.Utils.addUrlComponent(params, 'imdb_id=' + encodeURIComponent(object.movie.imdb_id)) : '';
            var kp_params = +object.movie.kinopoisk_id ? Lampa.Utils.addUrlComponent(params, 'kinopoisk_id=' + encodeURIComponent(+object.movie.kinopoisk_id)) : '';

            _this4.vcdn_api_search('short' + (imdb_params || kp_params), [], function (data) {
              if (data && data.length) callback(data);else if (imdb_params && kp_params) {
                _this4.vcdn_api_search('short' + kp_params, [], callback, error);
              } else callback([]);
            }, error);
          } else callback([]);
        };

        var vcdn_search = function vcdn_search(fallback) {
          var error = function error() {
            if (fallback) fallback();else display([]);
          };

          vcdn_search_by_id(function (data) {
            if (data && data.length) display(data);else vcdn_search_by_title(function (data) {
              if (data && data.length) display(data);else error();
            }, error);
          }, error);
        };

        var kp_search_by_title = function kp_search_by_title(callback, error) {
          var url = 'api/v2.1/films/search-by-keyword?keyword=' + encodeURIComponent(_this4.kpCleanTitle(query));

          _this4.kp_api_search(url, callback, error);
        };

        var kp_search_by_id = function kp_search_by_id(callback, error) {
          if (!object.clarification && object.movie.imdb_id) {
            var url = 'api/v2.2/films?imdbId=' + encodeURIComponent(object.movie.imdb_id);

            _this4.kp_api_search(url, callback, error);
          } else callback([]);
        };

        var kp_search = function kp_search(fallback) {
          var error = function error() {
            if (fallback) fallback();else display([]);
          };

          kp_search_by_id(function (data) {
            if (data && data.length) display(data);else kp_search_by_title(function (data) {
              if (data && data.length) display(data);else error();
            }, error);
          }, error);
        };

        var vcdn_search_imdb = function vcdn_search_imdb() {
          var error = function error() {
            if (imdb_sources.indexOf(balanser) >= 0) {
              _this4.extendChoice();

              sources[balanser].search(object, object.movie.imdb_id);
            } else if (search_sources.indexOf(balanser) >= 0) {
              _this4.extendChoice();

              sources[balanser].search(object);
            } else {
              var error2 = function error2() {
                display([]);
              };

              kp_search_by_title(function (data) {
                if (data && data.length) display(data);else error2();
              }, error2);
            }
          };

          vcdn_search_by_id(function (data) {
            if (data && data.length) display(data);else error();
          }, error);
        };

        var kp_search_imdb = function kp_search_imdb() {
          kp_search_by_id(function (data) {
            if (data && data.length) display(data);else vcdn_search_imdb();
          }, vcdn_search_imdb);
        };

        var letgo = function letgo() {
          if (!object.clarification && +object.movie.kinopoisk_id && kp_sources.indexOf(balanser) >= 0) {
            _this4.extendChoice();

            sources[balanser].search(object, +object.movie.kinopoisk_id);
          } else if (!object.clarification && object.movie.imdb_id && kp_sources.indexOf(balanser) >= 0) {
            kp_search_imdb();
          } else if (search_sources.indexOf(balanser) >= 0) {
            _this4.extendChoice();

            sources[balanser].search(object);
          } else {
            if (balanser == 'lumex' || balanser == 'lumex2') {
              var fallback = function fallback() {
                if (!object.clarification && (+object.movie.kinopoisk_id || object.movie.imdb_id)) {
                  _this4.extendChoice();

                  sources[balanser].search(object, +object.movie.kinopoisk_id || object.movie.imdb_id);
                } else if (Lampa.Storage.field('online_mod_skip_kp_search') !== true) kp_search();else display([]);
              };

              vcdn_search(fallback);
            } else kp_search(vcdn_search);
          }
        };

        if (!object.movie.imdb_id && (object.movie.source == 'tmdb' || object.movie.source == 'cub') && (imdb_sources.indexOf(balanser) >= 0 || kp_sources.indexOf(balanser) >= 0)) {
          var tmdburl = (object.movie.name ? 'tv' : 'movie') + '/' + object.movie.id + '/external_ids?api_key=4ef0d7355d9ffb5151e987764708ce96&language=ru';
          var baseurl = typeof Lampa.TMDB !== 'undefined' ? Lampa.TMDB.api(tmdburl) : 'http://api.themoviedb.org/3/' + tmdburl;
          network.clear();
          network.timeout(1000 * 15);
          network.silent(baseurl, function (ttid) {
            object.movie.imdb_id = ttid.imdb_id;
            letgo();
          }, function (a, c) {
            letgo();
          });
        } else {
          letgo();
        }
      };

      this.parsePlaylist = function (str) {
        var pl = [];

        try {
          if (startsWith(str, '[')) {
            str.substring(1).split(',[').forEach(function (item) {
              if (endsWith(item, ',')) item = item.substring(0, item.length - 1);
              var label_end = item.indexOf(']');

              if (label_end >= 0) {
                var label = item.substring(0, label_end);

                if (item.charAt(label_end + 1) === '{') {
                  item.substring(label_end + 2).split(';{').forEach(function (voice_item) {
                    if (endsWith(voice_item, ';')) voice_item = voice_item.substring(0, voice_item.length - 1);
                    var voice_end = voice_item.indexOf('}');

                    if (voice_end >= 0) {
                      var voice = voice_item.substring(0, voice_end);
                      pl.push({
                        label: label,
                        voice: voice,
                        links: voice_item.substring(voice_end + 1).split(' or ').filter(function (link) {
                          return link;
                        })
                      });
                    }
                  });
                } else {
                  pl.push({
                    label: label,
                    links: item.substring(label_end + 1).split(' or ').filter(function (link) {
                      return link;
                    })
                  });
                }
              }
            });
            pl = pl.filter(function (item) {
              return item.links.length;
            });
          }
        } catch (e) {}

        return pl;
      };

      this.parseM3U = function (str) {
        var pl = [];

        try {
          var xstream = false;
          var bandwidth = 0;
          var width = 0;
          var height = 0;
          var codecs = '';
          str.split('\n').forEach(function (line) {
            line = line.trim();

            if (startsWith(line, '#')) {
              if (startsWith(line, '#EXT-X-STREAM-INF')) {
                xstream = true;
                var BANDWIDTH = line.match(/\bBANDWIDTH=(\d+)\b/);

                if (BANDWIDTH) {
                  bandwidth = BANDWIDTH[1];
                }

                var RESOLUTION = line.match(/\bRESOLUTION=(\d+)x(\d+)\b/);

                if (RESOLUTION) {
                  width = parseInt(RESOLUTION[1]);
                  height = parseInt(RESOLUTION[2]);
                }

                var CODECS = line.match(/\bCODECS="([^"]+)"/);

                if (CODECS) {
                  codecs = CODECS[1];
                }
              }
            } else if (line.length) {
              pl.push({
                xstream: xstream,
                bandwidth: bandwidth,
                width: width,
                height: height,
                codecs: codecs,
                link: line
              });
              xstream = false;
              bandwidth = 0;
              width = 0;
              height = 0;
              codecs = '';
            }
          });
        } catch (e) {}

        return pl;
      };

      this.formatEpisodeTitle = function (s_num, e_num, name) {
        var title = '';
        var full = Lampa.Storage.field('online_mod_full_episode_title') === true;

        if (s_num != null && s_num !== '') {
          title = (full ? Lampa.Lang.translate('torrent_serial_season') + ' ' : 'S') + s_num + ' / ';
        }

        if (name == null || name === '') name = Lampa.Lang.translate('torrent_serial_episode') + ' ' + e_num;else if (e_num != null && e_num !== '') name = Lampa.Lang.translate('torrent_serial_episode') + ' ' + e_num + ' - ' + name;
        title += name;
        return title;
      };

      this.proxyUrlCall = function (proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials) {
        proxy_url = this.proxy('iframe') + proxy_url;

        var process = function process() {
          if (proxyWindow[proxy_url]) {
            timeout = timeout || 60 * 1000;
            var message_id;

            try {
              message_id = crypto.getRandomValues(new Uint8Array(16)).toString();
            } catch (e) {}

            if (!message_id) message_id = Math.random().toString();
            proxyCalls[message_id] = {
              success: call_success,
              fail: call_fail
            };
            proxyWindow[proxy_url].postMessage({
              message: 'proxyMessage',
              message_id: message_id,
              method: method,
              url: url,
              timeout: timeout,
              post_data: post_data,
              withCredentials: withCredentials
            }, '*');
            setTimeout(function () {
              var call = proxyCalls[message_id];

              if (call) {
                delete proxyCalls[message_id];
                if (call.fail) call.fail({
                  status: 0,
                  statusText: 'timeout',
                  responseText: ''
                }, 'timeout');
              }
            }, timeout + 1000);
          } else {
            if (call_fail) call_fail({
              status: 0,
              statusText: 'abort',
              responseText: ''
            }, 'abort');
          }
        };

        if (!proxyInitialized[proxy_url]) {
          proxyInitialized[proxy_url] = true;
          var proxyOrigin = proxy_url.replace(/(https?:\/\/[^\/]+)\/.*/, '$1');
          var proxyIframe = document.createElement('iframe');
          proxyIframe.setAttribute('src', proxy_url);
          proxyIframe.setAttribute('width', '0');
          proxyIframe.setAttribute('height', '0');
          proxyIframe.setAttribute('tabindex', '-1');
          proxyIframe.setAttribute('title', 'empty');
          proxyIframe.setAttribute('style', 'display:none');
          proxyIframe.addEventListener('load', function () {
            proxyWindow[proxy_url] = proxyIframe.contentWindow;
            window.addEventListener('message', function (event) {
              var data = event.data;

              if (event.origin === proxyOrigin && data && data.message === 'proxyResponse' && data.message_id) {
                var call = proxyCalls[data.message_id];

                if (call) {
                  delete proxyCalls[data.message_id];

                  if (data.status === 200) {
                    if (call.success) call.success(data.responseText);
                  } else {
                    if (call.fail) call.fail({
                      status: data.status,
                      statusText: data.statusText,
                      responseText: data.responseText
                    });
                  }
                }
              }
            });
            if (process) process();
            process = null;
          });
          document.body.appendChild(proxyIframe);
          setTimeout(function () {
            if (process) process();
            process = null;
          }, 10000);
        } else {
          process();
        }
      };

      this.proxyCall = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
        var proxy_url = (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'nb557.surge.sh/proxy.html';
        this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
      };

      this.proxyCall2 = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
        var proxy_url = (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'lampa.stream/proxy.html';
        this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
      };

      this.proxyCall3 = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
        var proxy_url = 'https://nb557.github.io/plugins/proxy.html';
        this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
      };

      this.extendChoice = function () {
        var data = Lampa.Storage.cache('online_mod_choice_' + balanser, 500, {});
        var save = data[selected_id || object.movie.id] || {};
        extended = true;
        sources[balanser].extendChoice(save);
      };

      this.saveChoice = function (choice) {
        var data = Lampa.Storage.cache('online_mod_choice_' + balanser, 500, {});
        data[selected_id || object.movie.id] = choice;
        Lampa.Storage.set('online_mod_choice_' + balanser, data);
      };
      /**
       * Есть похожие карточки
       * @param {Object} json
       */


      this.similars = function (json, search_more, more_params) {
        var _this5 = this;

        json.forEach(function (elem) {
          var title = elem.title || elem.ru_title || elem.nameRu || elem.en_title || elem.nameEn || elem.orig_title || elem.nameOriginal;
          var orig_title = elem.orig_title || elem.nameOriginal || elem.en_title || elem.nameEn;
          var year = elem.start_date || elem.year || '';
          var info = [];
          if (orig_title && orig_title != elem.title) info.push(orig_title);
          if (elem.seasons_count) info.push(Lampa.Lang.translate('online_mod_seasons_count') + ': ' + elem.seasons_count);
          if (elem.episodes_count) info.push(Lampa.Lang.translate('online_mod_episodes_count') + ': ' + elem.episodes_count);
          elem.title = title;
          elem.quality = year ? (year + '').slice(0, 4) : '----';
          elem.info = info.length ? ' / ' + info.join(' / ') : '';
          var item = Lampa.Template.get('online_mod_folder', elem);
          item.on('hover:enter', function () {
            _this5.activity.loader(true);

            _this5.reset();

            object.search = elem.title;
            object.search_date = year;
            selected_id = elem.id;

            _this5.extendChoice();

            sources[balanser].search(object, elem.kp_id || elem.kinopoisk_id || elem.kinopoiskId || elem.filmId || elem.imdb_id, [elem]);
          });

          _this5.append(item);
        });

        if (search_more) {
          var elem = {
            title: Lampa.Lang.translate('online_mod_show_more'),
            quality: '...',
            info: ''
          };
          var item = Lampa.Template.get('online_mod_folder', elem);
          item.on('hover:enter', function () {
            _this5.activity.loader(true);

            _this5.reset();

            search_more(more_params);
          });
          this.append(item);
        }
      };
      /**
       * Очистить список файлов
       */


      this.reset = function () {
        contextmenu_all = [];
        last = filter.render().find('.selector').eq(0)[0];
        scroll.render().find('.empty').remove();
        scroll.clear();
        scroll.reset();
      };

      this.inActivity = function () {
        var body = $('body');
        return !(body.hasClass('settings--open') || body.hasClass('menu--open') || body.hasClass('keyboard-input--visible') || body.hasClass('selectbox--open') || body.hasClass('search--open') || body.hasClass('ambience--enable') || $('div.modal').length);
      };
      /**
       * Загрузка
       */


      this.loading = function (status) {
        if (status) this.activity.loader(true);else {
          this.activity.loader(false);
          if (Lampa.Activity.active().activity === this.activity && this.inActivity()) this.activity.toggle();
        }
      };

      this.getDefaultQuality = function (qualityMap, defValue) {
        if (qualityMap) {
          var preferably = forcedQuality;

          if (!preferably) {
            preferably = Lampa.Storage.get('video_quality_default', '1080') + 'p';
            if (preferably === '1080p') preferably = '1080p Ultra';
          }

          var items = ['2160p', '4K', '1440p', '2K', '1080p Ultra', '1080p', '720p', '480p', '360p', '240p'];
          var idx = items.indexOf(preferably);

          if (idx !== -1) {
            for (var i = idx; i < items.length; i++) {
              var item = items[i];
              if (qualityMap[item]) return qualityMap[item];
            }

            for (var _i = idx - 1; _i >= 0; _i--) {
              var _item = items[_i];
              if (qualityMap[_item]) return qualityMap[_item];
            }
          }
        }

        return defValue;
      };

      this.renameQualityMap = function (qualityMap) {
        if (!qualityMap) return qualityMap;
        var renamed = {};

        for (var label in qualityMap) {
          renamed["\u200B" + label] = qualityMap[label];
        }

        return renamed;
      };
      /**
       * Построить фильтр
       */


      this.filter = function (filter_items, choice) {
        var select = [];

        var add = function add(type, title) {
          var need = Lampa.Storage.get('online_mod_filter', '{}');
          var items = filter_items[type];
          var subitems = [];
          var value = need[type];
          items.forEach(function (name, i) {
            subitems.push({
              title: name,
              selected: value == i,
              index: i
            });
          });
          select.push({
            title: title,
            subtitle: items[value],
            items: subitems,
            stype: type
          });
        };

        choice.source = filter_sources.indexOf(balanser);
        Lampa.Storage.set('online_mod_filter', choice);
        select.push({
          title: Lampa.Lang.translate('torrent_parser_reset'),
          reset: true
        });
        filter_items.source = obj_filter_sources.map(function (s) {
          return s.title;
        });
        add('source', Lampa.Lang.translate('online_mod_balanser'));
        if (filter_items.voice && filter_items.voice.length) add('voice', Lampa.Lang.translate('torrent_parser_voice'));
        if (filter_items.season && filter_items.season.length) add('season', Lampa.Lang.translate('torrent_serial_season'));
        if (filter_items.server && filter_items.server.length) add('server', Lampa.Lang.translate('online_mod_server'));
        this.updateQualityFilter();
        select.push(qualityFilter);
        filter.set('filter', select);
        filter.set('sort', obj_filter_sources.map(function (e) {
          return {
            source: e.name,
            title: e.title,
            selected: e.name === balanser
          };
        }));
        this.selected(filter_items);
      };
      /**
       * Закрыть фильтр
       */


      this.closeFilter = function () {
        if ($('body').hasClass('selectbox--open')) Lampa.Select.close();
      };
      /**
       * Показать что выбрано в фильтре
       */


      this.selected = function (filter_items) {
        var need = Lampa.Storage.get('online_mod_filter', '{}'),
            select = [];

        for (var i in need) {
          if (i !== 'source' && filter_translate[i] && filter_items[i] && filter_items[i].length > 1) {
            select.push(filter_translate[i] + ': ' + filter_items[i][need[i]]);
          }
        }

        var source_obj = obj_filter_sources.filter(function (e) {
          return e.name === balanser;
        })[0];
        filter.chosen('filter', select);
        filter.chosen('sort', [source_obj ? source_obj.title : balanser]);
      };
      /**
       * Добавить файл
       */


      this.append = function (item) {
        item.on('hover:focus', function (e) {
          last = e.target;
          scroll.update($(e.target), true);
        });
        scroll.append(item);
      };
      /**
       * Меню
       */


      this.contextmenu = function (params) {
        contextmenu_all.push(params);
        params.item.on('hover:long', function () {
          function selectQuality(title, callback) {
            return function (extra) {
              if (extra.quality) {
                var qual = [];

                for (var i in extra.quality) {
                  qual.push({
                    title: i,
                    file: extra.quality[i]
                  });
                }

                Lampa.Select.show({
                  title: title,
                  items: qual,
                  onBack: function onBack() {
                    Lampa.Controller.toggle(enabled);
                  },
                  onSelect: callback
                });
              } else callback(null, extra);
            };
          }

          var enabled = Lampa.Controller.enabled().name;
          var menu = [{
            title: Lampa.Lang.translate('torrent_parser_label_title'),
            mark: true
          }, {
            title: Lampa.Lang.translate('torrent_parser_label_cancel_title'),
            clearmark: true
          }, {
            title: Lampa.Lang.translate('online_mod_clearmark_all'),
            clearmark_all: true
          }, {
            title: Lampa.Lang.translate('time_reset'),
            timeclear: true
          }, {
            title: Lampa.Lang.translate('online_mod_timeclear_all'),
            timeclear_all: true
          }];

          if (Lampa.Platform.is('webos')) {
            menu.push({
              title: Lampa.Lang.translate('player_lauch') + ' - Webos',
              player: 'webos'
            });
          }

          if (Lampa.Platform.is('android')) {
            menu.push({
              title: Lampa.Lang.translate('player_lauch') + ' - Android',
              player: 'android'
            });
          }

          menu.push({
            title: Lampa.Lang.translate('player_lauch') + ' - Lampa',
            player: 'lampa'
          });

          if (params.file) {
            menu.push({
              title: Lampa.Lang.translate('copy_link'),
              copylink: true
            });
          }

          if (Lampa.Account.working() && params.element && typeof params.element.season !== 'undefined' && Lampa.Account.subscribeToTranslation) {
            menu.push({
              title: Lampa.Lang.translate('online_mod_voice_subscribe'),
              subscribe: true
            });
          }

          Lampa.Select.show({
            title: Lampa.Lang.translate('title_action'),
            items: menu,
            onBack: function onBack() {
              Lampa.Controller.toggle(enabled);
            },
            onSelect: function onSelect(a) {
              if (a.clearmark) {
                Lampa.Arrays.remove(params.viewed, params.hash_file);
                Lampa.Storage.set('online_view', params.viewed);
                params.item.find('.torrent-item__viewed').remove();
              }

              if (a.clearmark_all) {
                contextmenu_all.forEach(function (params) {
                  Lampa.Arrays.remove(params.viewed, params.hash_file);
                  Lampa.Storage.set('online_view', params.viewed);
                  params.item.find('.torrent-item__viewed').remove();
                });
              }

              if (a.mark) {
                if (params.viewed.indexOf(params.hash_file) == -1) {
                  params.viewed.push(params.hash_file);
                  params.item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
                  Lampa.Storage.set('online_view', params.viewed);
                }
              }

              if (a.timeclear) {
                params.view.percent = 0;
                params.view.time = 0;
                params.view.duration = 0;
                Lampa.Timeline.update(params.view);
              }

              if (a.timeclear_all) {
                contextmenu_all.forEach(function (params) {
                  params.view.percent = 0;
                  params.view.time = 0;
                  params.view.duration = 0;
                  Lampa.Timeline.update(params.view);
                });
              }

              Lampa.Controller.toggle(enabled);

              if (a.player) {
                Lampa.Player.runas(a.player);
                params.item.trigger('hover:enter', {
                  runas: a.player
                });
              }

              if (a.copylink) {
                params.file(selectQuality('Ссылки', function (b, extra) {
                  Lampa.Utils.copyTextToClipboard(b && b.file || extra && extra.file, function () {
                    Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
                  }, function () {
                    Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
                  });
                }));
              }

              if (a.subscribe) {
                Lampa.Account.subscribeToTranslation({
                  card: object.movie,
                  season: params.element.season,
                  episode: params.element.translate_episode_end,
                  voice: params.element.translate_voice
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate('online_mod_voice_success'));
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate('online_mod_voice_error'));
                });
              }
            }
          });
        }).on('hover:focus', function () {
          if (Lampa.Helper) Lampa.Helper.show('online_file', Lampa.Lang.translate('online_mod_file_helper'), params.item);
        });
      };
      /**
       * Показать пустой результат
       */


      this.empty = function (msg) {
        var empty = Lampa.Template.get('list_empty');
        if (msg) empty.find('.empty__descr').text(msg);
        scroll.append(empty);
        this.loading(false);
      };
      /**
       * Показать пустой результат по ключевому слову
       */


      this.emptyForQuery = function (query) {
        this.empty(Lampa.Lang.translate('online_mod_query_start') + ' (' + query + ') ' + Lampa.Lang.translate('online_mod_query_end'));
      };

      this.getLastEpisode = function (items) {
        var last_episode = 0;
        items.forEach(function (e) {
          if (typeof e.episode !== 'undefined') last_episode = Math.max(last_episode, parseInt(e.episode));
        });
        return last_episode;
      };
      /**
       * Начать навигацию по файлам
       */


      this.start = function (first_select) {
        if (Lampa.Activity.active().activity !== this.activity) return; //обязательно, иначе наблюдается баг, активность создается но не стартует, в то время как компонент загружается и стартует самого себя.

        if (first_select) {
          var last_views = scroll.render().find('.selector.online').find('.torrent-item__viewed').parent().last();
          if (object.movie.number_of_seasons && last_views.length) last = last_views.eq(0)[0];else last = scroll.render().find('.selector').eq(0)[0];
        }

        Lampa.Background.immediately(Lampa.Utils.cardImgBackground(object.movie));
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render(), files.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          up: function up() {
            if (Navigator.canmove('up')) {
              Navigator.move('up');
            } else Lampa.Controller.toggle('head');
          },
          down: function down() {
            Navigator.move('down');
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');else filter.show(Lampa.Lang.translate('title_filter'), 'filter');
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          back: this.back
        });
        if (this.inActivity()) Lampa.Controller.toggle('content');
      };

      this.render = function () {
        return files.render();
      };

      this.back = function () {
        Lampa.Activity.backward();
      };

      this.pause = function () {};

      this.stop = function () {};

      this.destroy = function () {
        network.clear();
        files.destroy();
        scroll.destroy();
        network = null;
        all_sources.forEach(function (s) {
          s.source.destroy();
        });
      };
    }

    var mod_version = '22.01.2025';
    console.log('App', 'start address:', window.location.href);
    var isMSX = !!(window.TVXHost || window.TVXManager);
    var isTizen = navigator.userAgent.toLowerCase().indexOf('tizen') !== -1;
    var isIFrame = window.parent !== window;
    var isLocal = !startsWith(window.location.protocol, 'http');
    var androidHeaders = Lampa.Platform.is('android') && Utils.checkAndroidVersion(339);
    console.log('App', 'is MSX:', isMSX);
    console.log('App', 'is Tizen:', isTizen);
    console.log('App', 'is iframe:', isIFrame);
    console.log('App', 'is local:', isLocal);
    console.log('App', 'supports headers:', androidHeaders);

    if (!Utils.isDebug()) {
      Lampa.Storage.set('online_mod_proxy_rezka2', 'false');
      Lampa.Storage.set('online_mod_proxy_kinobase', 'false');
      Lampa.Storage.set('online_mod_proxy_collaps', 'false');
      Lampa.Storage.set('online_mod_proxy_cdnmovies', 'false');
      Lampa.Storage.set('online_mod_proxy_fancdn', 'false');
      Lampa.Storage.set('online_mod_proxy_fanserials', 'false');
      Lampa.Storage.set('online_mod_proxy_redheadsound', 'false');
      Lampa.Storage.set('online_mod_proxy_animelib', 'false');
    }

    Lampa.Storage.set('online_mod_proxy_filmix', Lampa.Platform.is('android') ? 'false' : 'true');
    Lampa.Storage.set('online_mod_proxy_videodb', 'false');
    Lampa.Storage.set('online_mod_proxy_zetflix', 'false');
    Lampa.Storage.set('online_mod_proxy_alloha', 'false');
    Lampa.Storage.set('online_mod_proxy_hdvb', 'false');
    Lampa.Storage.set('online_mod_proxy_kp', 'false');
    Lampa.Params.trigger('online_mod_iframe_proxy', !isTizen || isLocal);
    Lampa.Params.trigger('online_mod_proxy_iframe', false);
    Lampa.Params.trigger('online_mod_use_stream_proxy', false);
    Lampa.Params.trigger('online_mod_proxy_find_ip', false);
    Lampa.Params.trigger('online_mod_proxy_other', false);
    Lampa.Params.trigger('online_mod_proxy_lumex', false);
    Lampa.Params.trigger('online_mod_proxy_kinobase', true);
    Lampa.Params.trigger('online_mod_proxy_collaps', false);
    Lampa.Params.trigger('online_mod_proxy_cdnmovies', true);
    Lampa.Params.trigger('online_mod_proxy_filmix', false);
    Lampa.Params.trigger('online_mod_proxy_videodb', false);
    Lampa.Params.trigger('online_mod_proxy_zetflix', true);
    Lampa.Params.trigger('online_mod_proxy_fancdn', false);
    Lampa.Params.trigger('online_mod_proxy_fanserials', false);
    Lampa.Params.trigger('online_mod_proxy_redheadsound', false);
    Lampa.Params.trigger('online_mod_proxy_cdnvideohub', false);
    Lampa.Params.trigger('online_mod_proxy_alloha', true);
    Lampa.Params.trigger('online_mod_proxy_hdvb', false);
    Lampa.Params.trigger('online_mod_proxy_kp', false);
    Lampa.Params.trigger('online_mod_skip_kp_search', false);
    Lampa.Params.trigger('online_mod_prefer_http', window.location.protocol !== 'https:');
    Lampa.Params.trigger('online_mod_prefer_mp4', true);
    Lampa.Params.trigger('online_mod_prefer_dash', false);
    Lampa.Params.trigger('online_mod_collaps_lampa_player', false);
    Lampa.Params.trigger('online_mod_full_episode_title', false);
    Lampa.Params.trigger('online_mod_convert_vtt_to_srt', false);
    Lampa.Params.trigger('online_mod_av1_support', true);
    Lampa.Params.trigger('online_mod_save_last_balanser', false);
    Lampa.Params.trigger('online_mod_rezka2_fix_stream', false);
    Lampa.Params.select('online_mod_kinobase_mirror', '', '');
    Lampa.Params.select('online_mod_kinobase_cookie', '', '');
    Lampa.Params.select('online_mod_fancdn_name', '', '');
    Lampa.Params.select('online_mod_fancdn_password', '', '');
    Lampa.Params.select('online_mod_fancdn_cookie', '', '');
    Lampa.Params.select('online_mod_proxy_other_url', '', '');
    Lampa.Params.select('online_mod_secret_password', '', '');

    if (window.location.protocol === 'https:') {
      Lampa.Storage.set('online_mod_prefer_http', 'false');
    }

    if (Lampa.Storage.get('online_mod_proxy_reset', '') != 6) {
      if (['collaps', 'collaps-dash'].indexOf(Lampa.Storage.get('online_mod_balanser', '') + '') !== -1) {
        Lampa.Storage.set('online_mod_balanser', '');
      }

      Lampa.Storage.set('online_mod_proxy_lumex', Lampa.Platform.is('android') ? 'false' : 'true');
      Lampa.Storage.set('online_mod_proxy_reset', '6');
    }

    if (!Lampa.Lang) {
      var lang_data = {};
      Lampa.Lang = {
        add: function add(data) {
          lang_data = data;
        },
        translate: function translate(key) {
          return lang_data[key] ? lang_data[key].ru : key;
        }
      };
    }

    Lampa.Lang.add({
      online_mod_watch: {
        ru: 'Смотреть онлайн',
        uk: 'Дивитися онлайн',
        be: 'Глядзець анлайн',
        en: 'Watch online',
        zh: '在线观看'
      },
      online_mod_nolink: {
        ru: 'Не удалось извлечь ссылку',
        uk: 'Неможливо отримати посилання',
        be: 'Не ўдалося атрымаць спасылку',
        en: 'Failed to fetch link',
        zh: '获取链接失败'
      },
      online_mod_blockedlink: {
        ru: 'К сожалению, это видео не доступно в вашем регионе',
        uk: 'На жаль, це відео не доступне у вашому регіоні',
        be: 'Нажаль, гэта відэа не даступна ў вашым рэгіёне',
        en: 'Sorry, this video is not available in your region',
        zh: '抱歉，您所在的地区无法观看该视频'
      },
      online_mod_blockedlink_copyright: {
        ru: 'К сожалению, это видео не доступно по запросу правообладателей',
        uk: 'На жаль, це відео не доступне за запитом правовласників',
        be: 'Нажаль, гэта відэа не даступна па запыце праваўладальнікаў',
        en: 'Sorry, this video is not available due to copyright holder request',
        zh: '抱歉，由于版权所有者的要求，该视频无法播放。'
      },
      online_mod_waitlink: {
        ru: 'Работаем над извлечением ссылки, подождите...',
        uk: 'Працюємо над отриманням посилання, зачекайте...',
        be: 'Працуем над выманнем спасылкі, пачакайце...',
        en: 'Working on extracting the link, please wait...',
        zh: '正在提取链接，请稍候...'
      },
      online_mod_captcha_address: {
        ru: 'Требуется пройти капчу по адресу: ',
        uk: 'Потрібно пройти капчу за адресою: ',
        be: 'Патрабуецца прайсці капчу па адрасе: ',
        en: 'It is required to pass the captcha at: ',
        zh: '您需要完成验证码： '
      },
      online_mod_captcha_proxy: {
        ru: 'Требуется пройти капчу. Попробуйте использовать зеркало вместо прокси',
        uk: 'Потрібно пройти капчу. Спробуйте використовувати дзеркало замість проксі',
        be: 'Патрабуецца прайсці капчу. Паспрабуйце выкарыстоўваць люстэрка замест проксі',
        en: 'It is required to pass the captcha. Try to use a mirror instead of a proxy',
        zh: '您需要通过验证码。 尝试使用镜子而不是代理'
      },
      online_mod_balanser: {
        ru: 'Балансер',
        uk: 'Балансер',
        be: 'Балансер',
        en: 'Balancer',
        zh: '平衡器'
      },
      online_mod_file_helper: {
        ru: 'Удерживайте клавишу "ОК" для вызова контекстного меню',
        uk: 'Утримуйте клавішу "ОК" для виклику контекстного меню',
        be: 'Утрымлівайце клавішу "ОК" для выкліку кантэкстнага меню',
        en: 'Hold the "OK" key to bring up the context menu',
        zh: '按住“确定”键调出上下文菜单'
      },
      online_mod_clearmark_all: {
        ru: 'Снять отметку у всех',
        uk: 'Зняти позначку у всіх',
        be: 'Зняць адзнаку ва ўсіх',
        en: 'Uncheck all',
        zh: '取消所有'
      },
      online_mod_timeclear_all: {
        ru: 'Сбросить тайм-код у всех',
        uk: 'Скинути тайм-код у всіх',
        be: 'Скінуць тайм-код ва ўсіх',
        en: 'Reset timecode for all',
        zh: '为所有人重置时间码'
      },
      online_mod_query_start: {
        ru: 'По запросу',
        uk: 'На запит',
        be: 'Па запыце',
        en: 'On request',
        zh: '根据要求'
      },
      online_mod_query_end: {
        ru: 'нет результатов',
        uk: 'немає результатів',
        be: 'няма вынікаў',
        en: 'no results',
        zh: '没有结果'
      },
      online_mod_title: {
        ru: 'Онлайн',
        uk: 'Онлайн',
        be: 'Анлайн',
        en: 'Online',
        zh: '在线的'
      },
      online_mod_title_full: {
        ru: 'Онлайн Мод',
        uk: 'Онлайн Мод',
        be: 'Анлайн Мод',
        en: 'Online Mod',
        zh: '在线的 Mod'
      },
      online_mod_use_stream_proxy: {
        ru: 'Проксировать видеопоток (Укр)',
        uk: 'Проксирувати відеопотік (Укр)',
        be: 'Праксіраваць відэаструмень (Укр)',
        en: 'Proxy video stream (Ukr)',
        zh: '代理视频流 （乌克兰）'
      },
      online_mod_proxy_find_ip: {
        ru: 'Передавать свой IP прокси',
        uk: 'Передавати свій IP проксі',
        be: 'Перадаваць свой IP проксі',
        en: 'Send your IP to proxy',
        zh: '将您的 IP 发送给代理'
      },
      online_mod_proxy_other: {
        ru: 'Использовать альтернативный прокси',
        uk: 'Використовувати альтернативний проксі',
        be: 'Выкарыстоўваць альтэрнатыўны проксі',
        en: 'Use an alternative proxy',
        zh: '使用备用代理'
      },
      online_mod_proxy_other_url: {
        ru: 'Альтернативный прокси',
        uk: 'Альтернативний проксі',
        be: 'Альтэрнатыўны проксі',
        en: 'Alternative proxy',
        zh: '备用代理'
      },
      online_mod_proxy_balanser: {
        ru: 'Проксировать',
        uk: 'Проксирувати',
        be: 'Праксіраваць',
        en: 'Proxy',
        zh: '代理'
      },
      online_mod_proxy_kp: {
        ru: 'Проксировать КиноПоиск',
        uk: 'Проксирувати КиноПоиск',
        be: 'Праксіраваць КиноПоиск',
        en: 'Proxy KinoPoisk',
        zh: '代理 KinoPoisk'
      },
      online_mod_skip_kp_search: {
        ru: 'Не искать в КиноПоиск',
        uk: 'Не шукати у КиноПоиск',
        be: 'Не шукаць у КиноПоиск',
        en: 'Skip search in KinoPoisk',
        zh: '在 KinoPoisk 中跳过搜索'
      },
      online_mod_iframe_proxy: {
        ru: 'Использовать iframe-прокси',
        uk: 'Використовувати iframe-проксі',
        be: 'Выкарыстоўваць iframe-проксі',
        en: 'Use iframe proxy',
        zh: '使用 iframe 代理'
      },
      online_mod_prefer_http: {
        ru: 'Предпочитать поток по HTTP',
        uk: 'Віддавати перевагу потіку по HTTP',
        be: 'Аддаваць перавагу патоку па HTTP',
        en: 'Prefer stream over HTTP',
        zh: '优先于 HTTP 流式传输'
      },
      online_mod_prefer_mp4: {
        ru: 'Предпочитать поток MP4',
        uk: 'Віддавати перевагу потіку MP4',
        be: 'Аддаваць перавагу патоку MP4',
        en: 'Prefer MP4 stream',
        zh: '更喜欢 MP4 流'
      },
      online_mod_prefer_dash: {
        ru: 'Предпочитать DASH вместо HLS',
        uk: 'Віддавати перевагу DASH замість HLS',
        be: 'Аддаваць перавагу DASH замест HLS',
        en: 'Prefer DASH over HLS',
        zh: '更喜欢 DASH 而不是 HLS'
      },
      online_mod_collaps_lampa_player: {
        ru: 'Collaps: Встроенный плеер',
        uk: 'Collaps: Вбудований плеєр',
        be: 'Collaps: Убудаваны плэер',
        en: 'Collaps: Lampa player',
        zh: 'Collaps： Lampa播放器'
      },
      online_mod_full_episode_title: {
        ru: 'Полный формат названия серии',
        uk: 'Повний формат назви серії',
        be: 'Поўны фармат назвы серыі',
        en: 'Full episode title format',
        zh: '完整剧集标题格式'
      },
      online_mod_convert_vtt_to_srt: {
        ru: 'Конвертировать VTT в SRT',
        uk: 'Конвертувати VTT в SRT',
        be: 'Канвертаваць VTT у SRT',
        en: 'Convert VTT to SRT',
        zh: '将 VTT 转换为 SRT'
      },
      online_mod_av1_support: {
        ru: 'AV1 поддерживается',
        uk: 'AV1 підтримується',
        be: 'AV1 падтрымліваецца',
        en: 'AV1 supported',
        zh: 'AV1 支持'
      },
      online_mod_save_last_balanser: {
        ru: 'Сохранять историю балансеров',
        uk: 'Зберігати історію балансерів',
        be: 'Захоўваць гісторыю балансараў',
        en: 'Save history of balancers',
        zh: '保存平衡器的历史记录'
      },
      online_mod_clear_last_balanser: {
        ru: 'Очистить историю балансеров',
        uk: 'Очистити історію балансерів',
        be: 'Ачысціць гісторыю балансараў',
        en: 'Clear history of balancers',
        zh: '清除平衡器的历史记录'
      },
      online_mod_kinobase_mirror: {
        ru: 'Зеркало для Kinobase',
        uk: 'Дзеркало для Kinobase',
        be: 'Люстэрка для Kinobase',
        en: 'Mirror for Kinobase',
        zh: 'Kinobase的镜子'
      },
      online_mod_kinobase_cookie: {
        ru: 'Куки для Kinobase',
        uk: 'Кукі для Kinobase',
        be: 'Кукі для Kinobase',
        en: 'Cookie for Kinobase',
        zh: 'Kinobase 的 Cookie'
      },
       online_mod_fancdn_name: {
        ru: 'Логин для FanSerials',
        uk: 'Логін для FanSerials',
        be: 'Лагін для FanSerials',
        en: 'Login for FanSerials',
        zh: 'FanSerials的登录名'
      },
      online_mod_fancdn_password: {
        ru: 'Пароль для FanSerials',
        uk: 'Пароль для FanSerials',
        be: 'Пароль для FanSerials',
        en: 'Password for FanSerials',
        zh: 'FanSerials的密码'
      },
      online_mod_fancdn_cookie: {
        ru: 'Куки для FanSerials',
        uk: 'Кукі для FanSerials',
        be: 'Кукі для FanSerials',
        en: 'Cookie for FanSerials',
        zh: 'FanSerials 的 Cookie'
      },
      online_mod_fancdn_fill_cookie: {
        ru: 'Заполнить куки для FanSerials',
        uk: 'Заповнити кукі для FanSerials',
        be: 'Запоўніць кукі для FanSerials',
        en: 'Fill cookie for FanSerials',
        zh: '为FanSerials填充Cookie'
      },
      online_mod_authorization_required: {
        ru: 'Требуется авторизация',
        uk: 'Потрібна авторизація',
        be: 'Патрабуецца аўтарызацыя',
        en: 'Authorization required',
        zh: '需要授权'
      },
      online_mod_secret_password: {
        ru: 'Секретный пароль',
        uk: 'Секретний пароль',
        be: 'Сакрэтны пароль',
        en: 'Secret password',
        zh: '秘密密码'
      },
      online_mod_seasons_count: {
        ru: 'Сезонов',
        uk: 'Сезонів',
        be: 'Сезонаў',
        en: 'Seasons',
        zh: '季'
      },
      online_mod_episodes_count: {
        ru: 'Эпизодов',
        uk: 'Епізодів',
        be: 'Эпізодаў',
        en: 'Episodes',
        zh: '集'
      },
      online_mod_show_more: {
        ru: 'Показать ещё',
        uk: 'Показати ще',
        be: 'Паказаць яшчэ',
        en: 'Show more',
        zh: '展示更多'
      },
      online_mod_server: {
        ru: 'Сервер',
        uk: 'Сервер',
        be: 'Сервер',
        en: 'Server',
        zh: '服务器'
      },
      online_mod_filmix_param_add_title: {
        ru: 'Добавить ТОКЕН от Filmix',
        uk: 'Додати ТОКЕН від Filmix',
        be: 'Дадаць ТОКЕН ад Filmix',
        en: 'Add TOKEN from Filmix',
        zh: '从 Filmix 添加 TOKEN'
      },
      online_mod_filmix_param_add_descr: {
        ru: 'Добавьте ТОКЕН для подключения подписки',
        uk: 'Додайте ТОКЕН для підключення передплати',
        be: 'Дадайце ТОКЕН для падлучэння падпіскі',
        en: 'Add a TOKEN to connect a subscription',
        zh: '添加 TOKEN 以连接订阅'
      },
      online_mod_filmix_param_placeholder: {
        ru: 'Например: nxjekeb57385b..',
        uk: 'Наприклад: nxjekeb57385b..',
        be: 'Напрыклад: nxjekeb57385b..',
        en: 'For example: nxjekeb57385b..',
        zh: '例如： nxjekeb57385b..'
      },
      online_mod_filmix_param_add_device: {
        ru: 'Добавить устройство на Filmix',
        uk: 'Додати пристрій на Filmix',
        be: 'Дадаць прыладу на Filmix',
        en: 'Add Device to Filmix',
        zh: '将设备添加到 Filmix'
      },
      online_mod_filmix_modal_text: {
        ru: 'Введите его на странице https://filmix.quest/consoles в вашем авторизованном аккаунте!',
        uk: 'Введіть його на сторінці https://filmix.quest/consoles у вашому авторизованому обліковому записі!',
        be: 'Увядзіце яго на старонцы https://filmix.quest/consoles у вашым аўтарызаваным акаўнце!',
        en: 'Enter it at https://filmix.quest/consoles in your authorized account!',
        zh: '在您的授权帐户中的 https://filmix.quest/consoles 中输入！'
      },
      online_mod_filmix_modal_wait: {
        ru: 'Ожидаем код',
        uk: 'Очікуємо код',
        be: 'Чакаем код',
        en: 'Waiting for the code',
        zh: '等待代码'
      },
      online_mod_filmix_copy_secuses: {
        ru: 'Код скопирован в буфер обмена',
        uk: 'Код скопійовано в буфер обміну',
        be: 'Код скапіяваны ў буфер абмену',
        en: 'Code copied to clipboard',
        zh: '代码复制到剪贴板'
      },
      online_mod_filmix_copy_fail: {
        ru: 'Ошибка при копировании',
        uk: 'Помилка при копіюванні',
        be: 'Памылка пры капіяванні',
        en: 'Copy error',
        zh: '复制错误'
      },
      online_mod_filmix_nodevice: {
        ru: 'Устройство не авторизовано',
        uk: 'Пристрій не авторизований',
        be: 'Прылада не аўтарызавана',
        en: 'Device not authorized',
        zh: '设备未授权'
      },
      online_mod_filmix_status: {
        ru: 'Статус',
        uk: 'Статус',
        be: 'Статус',
        en: 'Status',
        zh: '状态'
      },
      online_mod_voice_subscribe: {
        ru: 'Подписаться на перевод',
        uk: 'Підписатися на переклад',
        be: 'Падпісацца на пераклад',
        en: 'Subscribe to translation',
        zh: '订阅翻译'
      },
      online_mod_voice_success: {
        ru: 'Вы успешно подписались',
        uk: 'Ви успішно підписалися',
        be: 'Вы паспяхова падпісаліся',
        en: 'You have successfully subscribed',
        zh: '您已成功订阅'
      },
      online_mod_voice_error: {
        ru: 'Возникла ошибка',
        uk: 'Виникла помилка',
        be: 'Узнікла памылка',
        en: 'An error has occurred',
        zh: '发生了错误'
      }
    });
    var network = new Lampa.Reguest();
    var online_loading = false;
Lampa.Template.add('lampac_css', "\n        <style>\n        @charset 'UTF-8';.online-mod{position:relative;-webkit-border-radius:.3em;border-radius:.3em;background-color:rgba(0,0,0,0.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online-prestige__body{padding:1.2em;line-height:1.3;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}@media screen and (max-width:480px){.online-prestige__body{padding:.8em 1.2em}}.online-prestige__img{position:relative;width:13em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;min-height:8.2em}.online-prestige__img>img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.3em;border-radius:.3em;opacity:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s}.online-prestige__img--loaded>img{opacity:1}@media screen and (max-width:480px){.online-prestige__img{width:7em;min-height:6em}}.online-prestige__folder{padding:1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige__folder>svg{width:4.4em !important;height:4.4em !important}.online-prestige__viewed{position:absolute;top:1em;left:1em;background:rgba(0,0,0,0.45);-webkit-border-radius:100%;border-radius:100%;padding:.25em;font-size:.76em}.online-prestige__viewed>svg{width:1.5em !important;height:1.5em !important}.online-prestige__episode-number{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:2em}.online-prestige__loader{position:absolute;top:50%;left:50%;width:2em;height:2em;margin-left:-1em;margin-top:-1em;background:url(./img/loader.svg) no-repeat center center;-webkit-background-size:contain;-o-background-size:contain;background-size:contain}.online-prestige__head,.online-prestige__footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__timeline{margin:.8em 0}.online-prestige__timeline>.time-line{display:block !important}.online-prestige__title{font-size:1.7em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}@media screen and (max-width:480px){.online-prestige__title{font-size:1.4em}}.online-prestige__time{padding-left:2em}.online-prestige__info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige__info>*{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.online-prestige__quality{padding-left:1em;white-space:nowrap}.online-prestige__scan-file{position:absolute;bottom:0;left:0;right:0}.online-prestige__scan-file .broadcast__scan{margin:0}.online-prestige .online-prestige-split{font-size:.8em;margin:0 1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online-prestige.focus::after{content:'';position:absolute;top:-0.6em;left:-0.6em;right:-0.6em;bottom:-0.6em;-webkit-border-radius:.7em;border-radius:.7em;border:solid .3em #fff;z-index:-1;pointer-events:none}.online-prestige+.online-prestige{margin-top:1.5em}.online-prestige--folder .online-prestige__footer{margin-top:.8em}.online-prestige-watched{padding:1em}.online-prestige-watched__icon>svg{width:1.5em;height:1.5em}.online-prestige-watched__body{padding-left:1em;padding-top:.1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.online-prestige-watched__body>span+span::before{content:' ● ';vertical-align:top;display:inline-block;margin:0 .5em}.online-prestige-rate{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online-prestige-rate>svg{width:1.3em !important;height:1.3em !important}.online-prestige-rate>span{font-weight:600;font-size:1.1em;padding-left:.7em}.online-empty{line-height:1.4}.online-empty__title{font-size:1.8em;margin-bottom:.3em}.online-empty__time{font-size:1.2em;font-weight:300;margin-bottom:1.6em}.online-empty__buttons{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online-empty__buttons>*+*{margin-left:1em}.online-empty__button{background:rgba(0,0,0,0.3);font-size:1.2em;padding:.5em 1.2em;-webkit-border-radius:.2em;border-radius:.2em;margin-bottom:2.4em}.online-empty__button.focus{background:#fff;color:black}.online-empty__templates .online-empty-template:nth-child(2){opacity:.5}.online-empty__templates .online-empty-template:nth-child(3){opacity:.2}.online-empty-template{background-color:rgba(255,255,255,0.3);padding:1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;border-radius:.3em}.online-empty-template>*{background:rgba(0,0,0,0.3);-webkit-border-radius:.3em;border-radius:.3em}.online-empty-template__ico{width:4em;height:4em;margin-right:2.4em}.online-empty-template__body{height:1.7em;width:70%}.online-empty-template+.online-empty-template{margin-top:1em}\n        </style>\n    ");
    $('body').append(Lampa.Template.get('lampac_css', {}, true));
    function resetTemplates() {
	      Lampa.Template.add('online_mod', "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"64\" cy=\"64\" r=\"56\" stroke=\"white\" stroke-width=\"16\"/>\n                    <path d=\"M90.5 64.3827L50 87.7654L50 41L90.5 64.3827Z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
      Lampa.Template.add('online_mod_folder', "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"/>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"/>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
        
      Lampa.Template.add('online_mod_loading', "<div class=\"online-empty\">\n            <div class=\"broadcast__scan\"><div></div></div>\n\t\t\t\n            <div class=\"online-empty__templates\">\n                <div class=\"online-empty-template selector\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n                <div class=\"online-empty-template\">\n                    <div class=\"online-empty-template__ico\"></div>\n                    <div class=\"online-empty-template__body\"></div>\n                </div>\n            </div>\n        </div>");
      Lampa.Template.add('online_mod_rate', "<div class=\"online-prestige-rate\">\n            <svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8.39409 0.192139L10.99 5.30994L16.7882 6.20387L12.5475 10.4277L13.5819 15.9311L8.39409 13.2425L3.20626 15.9311L4.24065 10.4277L0 6.20387L5.79819 5.30994L8.39409 0.192139Z\" fill=\"#fff\"></path>\n            </svg>\n            <span>{rate}</span>\n        </div>");
     Lampa.Template.add('online_mod_watched', "<div class=\"online-prestige online-prestige-watched selector\">\n            <div class=\"online-prestige-watched__icon\">\n                <svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"10.5\" cy=\"10.5\" r=\"9\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                    <path d=\"M14.8477 10.5628L8.20312 14.399L8.20313 6.72656L14.8477 10.5628Z\" fill=\"currentColor\"/>\n                </svg>\n            </div>\n            <div class=\"online-prestige-watched__body\">\n                \n            </div>\n        </div>");
    }

    function loadOnline(object) {
      var onComplite = function onComplite() {
        online_loading = false;
        resetTemplates();
        Lampa.Component.add('online_mod', component);
        Lampa.Activity.push({
          url: '',
          title: Lampa.Lang.translate('online_mod_title_full'),
          component: 'online_mod',
          search: object.title,
          search_one: object.title,
          search_two: object.original_title,
          movie: object,
          page: 1
        });
      };

      Utils.setMyIp('');

      if (Lampa.Storage.field('online_mod_proxy_find_ip') === true) {
        if (online_loading) return;
        online_loading = true;
        network.clear();
        network.timeout(10000);
        network.silent('https://api.ipify.org/?format=json', function (json) {
          if (json.ip) Utils.setMyIp(json.ip);
          onComplite();
        }, function (a, c) {
          onComplite();
        });
      } else onComplite();
    } // нужна заглушка, а то при страте лампы говорит пусто


    Lampa.Component.add('online_mod', component); //то же самое

    resetTemplates();
    var manifest = {
      type: 'video',
      version: mod_version,
      name: Lampa.Lang.translate('online_mod_title_full') + ' - ' + mod_version,
      description: Lampa.Lang.translate('online_mod_watch'),
      component: 'online_mod',
      onContextMenu: function onContextMenu(object) {
        return {
          name: Lampa.Lang.translate('online_mod_watch'),
          description: ''
        };
      },
      onContextLauch: function onContextLauch(object) {
        online_loading = false;
        loadOnline(object);
      }
    };
    Lampa.Manifest.plugins = manifest;
    var button = "<div class=\"full-start__button selector view--online_mod\" data-subtitle=\"online_mod " + mod_version + "\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" version=\"1.1\" width=\"512\" height=\"512\" x=\"0\" y=\"0\" viewBox=\"0 0 244 260\" style=\"enable-background:new 0 0 512 512\" xml:space=\"preserve\" class=\"\">\n    <g xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M242,88v170H10V88h41l-38,38h37.1l38-38h38.4l-38,38h38.4l38-38h38.3l-38,38H204L242,88L242,88z M228.9,2l8,37.7l0,0 L191.2,10L228.9,2z M160.6,56l-45.8-29.7l38-8.1l45.8,29.7L160.6,56z M84.5,72.1L38.8,42.4l38-8.1l45.8,29.7L84.5,72.1z M10,88 L2,50.2L47.8,80L10,88z\" fill=\"currentColor\"/>\n    </g></svg>\n\n    <span>#{online_mod_title}</span>\n    </div>";
    Lampa.Listener.follow('full', function (e) {
      if (e.type == 'complite') {
        var btn = $(Lampa.Lang.translate(button));
        online_loading = false;
        btn.on('hover:enter', function () {
          loadOnline(e.data.movie);
        });
        e.object.activity.render().find('.view--torrent').after(btn);
      }
    });
	


    if (Lampa.Storage.get('online_mod_use_stream_proxy', '') === '') {
      $.ajax({
        url: (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'ipwho.is/?fields=ip,country_code',
        jsonp: 'callback',
        dataType: 'jsonp'
      }).done(function (json) {
        if (json && json.country_code) {
          Lampa.Storage.set('online_mod_use_stream_proxy', '' + (json.country_code === 'UA'));
        }
      });
    }

    if (Lampa.VPN && Lampa.VPN.region && (Utils.isDebug() || Utils.isDebug2())) {
      Lampa.VPN.region = function (call) {
        if (call) call('de');
      };
    }///////Онлайн Мод/////////
})();
