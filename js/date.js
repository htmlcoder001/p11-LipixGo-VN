! function (s, m) {
   var a = /\+/g;

   function c(e) {
      return e
   }

   function l(e) {
      return decodeURIComponent(e.replace(a, " "))
   }
   s.cookie = function (e, a, t) {
      var r, n;
      if (1 < arguments.length && (!/Object/.test(Object.prototype.toString.call(a)) || null == a)) return t = s.extend({}, s.cookie.defaults, t), null == a && (t.expires = -1), "number" == typeof t.expires && (r = t.expires, (n = t.expires = new Date).setDate(n.getDate() + r)), a = String(a), m.cookie = [encodeURIComponent(e), "=", t.raw ? a : encodeURIComponent(a), t.expires ? "; expires=" + t.expires.toUTCString() : "", t.path ? "; path=" + t.path : "", t.domain ? "; domain=" + t.domain : "", t.secure ? "; secure" : ""].join("");
      for (var i, o = (t = a || s.cookie.defaults || {}).raw ? c : l, d = m.cookie.split("; "), u = 0; i = d[u] && d[u].split("="); u++)
         if (o(i.shift()) === e) return o(i.join("="));
      return null
   }, s.cookie.defaults = {}
}(jQuery, document);
var months_localized = {
      ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
      bg: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
      nl: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
      pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      it: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      hu: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
      en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      ms: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
      hi: ['जनवर', 'फरबर', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
      es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      ro: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
      pl: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'],
      sr: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
      cs: ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'],
      sk: ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'],
      el: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
      th: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
      vi: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Bốn', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám'],
      fil: ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
      ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
      ur: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
      nb: ['Januar', 'Februar', 'Mars ','April ','May ','Juni ','Juli ','August ','September ','Oktober ','November ','Desember '],
      nn: ['Januar', 'Februar', 'Mars ','April ','May ','Juni ','Juli ','August ','September ','Oktober ','November ','Desember '],
      no: ['Januar', 'Februar', 'Mars ','April ','May ','Juni ','Juli ','August ','September ','Oktober ','November ','Desember '],
      nb_NO: ['Januar', 'Februar', 'Mars ','April ','May ','Juni ','Juli ','August ','September ','Oktober ','November ','Desember '],
      km: ['មករា', 'កុម្ភៈ', 'មិនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', '‘វិច្ឆិកា', 'ធ្នូ'],
      zh: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      vi: ['Tháng một', 'Tháng Hai', 'Diễu hành', 'Tháng Tư', 'Có thể', 'Tháng Sáu', 'Tháng Bảy', 'Uy nghi', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng mười hai']
   },
   days_localized = {
      ru: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
      fr: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      bg: ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
      nl: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
      pt: ['Domingo', 'Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado'],
      de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      tr: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      it: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
      hu: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
      en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      hi: ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार', 'रविवार'],
      ms: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
      id: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
      es: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      ro: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
      pl: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
      sr: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
      cs: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
      sk: ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
      el: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
      th: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
      vi: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
      ar: ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'],
      fil: ['Linggo', 'Lunes', 'Martes', 'Miyerkoles', 'Huebes', 'Biyernes', 'Sabado'],
      ur: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
      nb: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
      nn: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
      no: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
      nb_NO: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
      km: ['អាទិត្យ', 'ច័ន្ធ', 'អង្គារ៍', 'ពុធ', 'ព្រហស្បិ៍', 'សុក្រ', 'សៅរ៍'],
      zh: ['星期天','星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
   },
   AdcLandDate = function (e) {
      var a = e.shift,
         t = e.mode,
         r = void 0 === t ? "dtime_nums" : t,
         n = e.old,
         t = void 0 === n || n,
         n = e.euFormat,
         n = void 0 === n ? 1 : n,
         e = e.index,
         e = void 0 === e ? 0 : e;
      this._mode = r, this._shift = ~["rdate"].indexOf(r) || isNaN(+a) || !a ? 0 : +a, this._oldMethod = t, this._euFormat = !!+n, this._indexOfCollection = e, this._compileDate(this._shift)
   };

function getLocalizedEntity(e, a) {
   e = new Date(e);
   var t = locale || window.lang_locale || "en",
      a = {
         month: {
            dict: months_localized,
            method: "getMonth"
         },
         day: {
            dict: days_localized,
            method: "getDay"
         }
      } [a];
   return a ? a.dict[a.dict[t] ? t : "en"][e[a.method]()] : "Unknown entity"
}

function dtime_nums(e, a) {
   a = new AdcLandDate({
      shift: e,
      euFormat: a
   });
   document.write(a.toString())
}

function dtime(e) {
   e = new AdcLandDate({
      mode: "dtime",
      shift: e
   });
   document.write(e.toString())
}

function dtime_full(e) {
   e = new AdcLandDate({
      mode: "dtime_full",
      shift: e
   });
   document.write(e.toString())
}

function dtimes(e) {
   e = new AdcLandDate({
      mode: "dtimes",
      shift: e
   });
   document.write(e.toString())
}

function year(e) {
   e = new AdcLandDate({
      mode: "ryear",
      shift: e
   });
   document.write(e.toString())
}


AdcLandDate.prototype._compileDate = function (e) {
   var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : new Date;
   this._day = a, this._day.setDate(this._day.getDate() + (isNaN(+e) ? 0 : e) + (this._oldMethod && "dtimes" !== this._mode ? 1 : 0))
}, AdcLandDate.prototype._getLocalizedEntity = getLocalizedEntity, AdcLandDate.prototype._formatNum = function (e) {
   return ("0" + e).slice(-2)
}, AdcLandDate.prototype.getDate = function () {
   var r = this;
   return {
      dtime_nums: function () {
         return {
            day: r._formatNum(r._day.getDate()),
            month: r._formatNum(r._day.getMonth() + 1),
            year: r._day.getFullYear()
         }
      },
      dtime: function () {
         return {
            // weekDay: r._getLocalizedEntity(r._day, "day"),
            day: r._day.getDate(),
            month: r._getLocalizedEntity(r._day, "month"),
            year: r._day.getFullYear()
         }
      },
      dtime_full: function () {
         return {
            weekDay: r._getLocalizedEntity(r._day, "day"),
            day: r._day.getDate(),
            month: r._getLocalizedEntity(r._day, "month"),
            year: r._day.getFullYear()
         }
      },
      dtimes: function () {
         return {
            day: r._day.getDate(),
            month: r._getLocalizedEntity(r._day, "month")
         }
      },
      ryear: function () {
         return {
            year: r._day.getFullYear()
         }
      },
      rstart: function () {
         return r._compileDate(r._shift, new Date(parseInt($.cookie("randDate")))), {
            day: r._formatNum(r._day.getDate()),
            month: r._formatNum(r._day.getMonth() + 1),
            year: r._day.getFullYear()
         }
      },
      rdate: function (e) {
         var a = 16 <= e ? 16 : e,
            t = new Date(parseInt($.cookie("randDate"))),
            a = new Date(t.getTime() + a * (12 + a) * (60 + e) * 60 * (1e3 + e));
         return 31 <= e && (a = new Date(t.getTime() + 24946e5 + 15e4 * e)), r._compileDate(r._shift, a), {
            day: r._formatNum(r._day.getDate()),
            month: r._formatNum(r._day.getMonth() + 1),
            year: r._day.getFullYear(),
            hours: r._formatNum(r._day.getHours()),
            minutes: r._formatNum(r._day.getMinutes()),
            seconds: r._formatNum(r._day.getSeconds())
         }
      }
   } [this._mode](this._indexOfCollection)
}, AdcLandDate.prototype.toString = function () {
   var e = this,
      a = this.getDate(this._indexOfCollection),
      t = {
         dtime_nums: function () {
            return (e._euFormat ? "".concat(a.day, ".").concat(a.month, ".") : "".concat(a.month, ".").concat(a.day, ".")).concat(a.year)
         },
         dtime: function () {
            return "".concat(a.day, " ").concat(a.month, " ").concat(a.year)
         },
         dtime_full: function () {
            return "".concat(a.weekDay, " ").concat(a.day, ", ").concat(a.month, " ").concat(a.year)
         },
         dtimes: function () {
            return "".concat(a.day, " ").concat(a.month)
         },
         ryear: function () {
            return a.year
         },
         rstart: function () {
            return "".concat(a.day, "/").concat(a.month, "/").concat(a.year)
         },
         rdate: function () {
            return "".concat(a.day, ".").concat(a.month, ".").concat(a.year, " - ").concat(a.hours, ":").concat(a.minutes)
         }
      };
   return t[this._mode] ? t[this._mode]() : ""
}, AdcLandDate.init = function () {
   $.cookie("randDate") || $.cookie("randDate", (new Date).getTime() - 2592e6, {
      expires: 1
   })
}, AdcLandDate.init(), $(function () {
   $.fn.adcLandDate = function (n) {
      var i = this;
      i.each(function (e) {
         var a = i.eq(e),
            t = a.attr("data-date-shift"),
            r = a.attr("data-date-eu"),
            r = new AdcLandDate({
               mode: n,
               shift: t,
               old: !1,
               index: e,
               euFormat: r
            });
         a.text(r.toString())
      })
   }, $(".ryear, .nowyear").adcLandDate("ryear"), $(".rstart, .startdate").adcLandDate("rstart"), $(".rdate, .ypdate").adcLandDate("rdate"), $(".dtime").adcLandDate("dtime"), $(".dtime_nums").adcLandDate("dtime_nums"), $(".dtimes").adcLandDate("dtimes")
});


let monthsL2M = {
   en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
   ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
   fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
   bg: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
   nl: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
   pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
   de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
   tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
   it: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
   hu: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
   id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
   es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
   ro: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
   pl: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
   vi: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
   cz: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
}

function cmonth(md = 0) {
   let ms = monthsL2M[typeof locale !== typeof undefined ? locale : 'en'];
   let d = new Date();
   d.setMonth(d.getMonth() + md)
   let m = d.getMonth();
   document.write(ms[m]);
}